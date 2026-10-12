let pipWindow = null;
let pipVideoElement = null;
let autoNextEnabled = false;

function injectTriggerButton() {
  if (document.getElementById("btn-open-pip")) return;

  const btn = document.createElement("button");
  btn.id = "btn-open-pip";
  btn.innerText = "📺 Buka PiP Shorts";
  btn.style.cssText = `
    position: fixed;
    bottom: 80px;
    right: 20px;
    z-index: 99999;
    padding: 10px 14px;
    background: #ff0000;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 4px 6px rgba(0,0,0,0.3);
  `;

  btn.addEventListener("click", openCustomPip);
  document.body.appendChild(btn);
}

function getActiveVideo() {
  return (
    document.querySelector("ytd-reel-video-renderer[is-active] video") ||
    document.querySelector("video")
  );
}

function syncStreamToPip() {
  const sourceVideo = getActiveVideo();
  if (!sourceVideo || !pipVideoElement) return;

  try {
    const stream = sourceVideo.captureStream
      ? sourceVideo.captureStream()
      : sourceVideo.mozCaptureStream();
    pipVideoElement.srcObject = stream;
    pipVideoElement.muted = true;
    pipVideoElement.play().catch(() => {});
  } catch (err) {
    console.error("Gagal sinkronisasi stream video:", err);
  }
}

function formatTime(seconds) {
  if (isNaN(seconds) || !isFinite(seconds)) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

async function openCustomPip() {
  if (!window.documentPictureInPicture) {
    alert("Browser tidak mendukung Document Picture-in-Picture API.");
    return;
  }

  const activeVideo = getActiveVideo();
  if (!activeVideo) {
    alert("Video Shorts tidak ditemukan.");
    return;
  }

  pipWindow = await window.documentPictureInPicture.requestWindow({
    width: 360,
    height: 640,
  });

  const style = pipWindow.document.createElement("style");
  style.textContent = `
    body {
      margin: 0;
      background: #000;
      display: flex;
      flex-direction: column;
      height: 100vh;
      font-family: sans-serif;
      overflow: hidden;
      user-select: none;
    }
    #video-wrapper {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000;
      overflow: hidden;
      cursor: pointer;
    }
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
      pointer-events: none; /* Mencegah bentrok cursor dengan video */
    }
    /* Overlay kontrol timeline yang dijamin muncul saat hover wrapper */
    #timeline-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 30px 15px 15px 15px;
      background: linear-gradient(transparent, rgba(0, 0, 0, 0.85) 70%);
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
      display: flex;
      flex-direction: column;
      gap: 8px;
      box-sizing: border-box;
      z-index: 10;
      pointer-events: auto;
    }
    /* Aktif saat wrapper video disentuh kursor */
    #video-wrapper:hover #timeline-overlay,
    #video-wrapper:focus-within #timeline-overlay {
      opacity: 1 !important;
    }
    #progress-container {
      padding: 4px 0;
      cursor: pointer;
    }
    #progress-track {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
      position: relative;
    }
    #progress-fill {
      width: 0%;
      height: 100%;
      background: #ff0000;
      border-radius: 3px;
      position: relative;
    }
    /* Bulatan penunjuk waktu (scrubber) */
    #progress-fill::after {
      content: "";
      position: absolute;
      right: -6px;
      top: -3px;
      width: 12px;
      height: 12px;
      background: #ff0000;
      border-radius: 50%;
      box-shadow: 0 0 4px rgba(0,0,0,0.5);
    }
    #time-display {
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    }
    #controls {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 6px;
      padding: 10px;
      background: #181818;
      z-index: 20;
    }
    button {
      padding: 8px 4px;
      background: #333;
      color: #fff;
      border: 1px solid #444;
      border-radius: 6px;
      cursor: pointer;
      font-size: 11px;
    }
    button:hover { background: #555; }
    button.active { background: #00aa00; border-color: #00ff00; }
  `;
  pipWindow.document.head.appendChild(style);

  const videoWrapper = pipWindow.document.createElement("div");
  videoWrapper.id = "video-wrapper";

  pipVideoElement = pipWindow.document.createElement("video");
  pipVideoElement.autoplay = true;
  pipVideoElement.playsInline = true;
  videoWrapper.appendChild(pipVideoElement);

  const timelineOverlay = pipWindow.document.createElement("div");
  timelineOverlay.id = "timeline-overlay";
  timelineOverlay.innerHTML = `
    <div id="progress-container">
      <div id="progress-track">
        <div id="progress-fill"></div>
      </div>
    </div>
    <div id="time-display">00:00 / 00:00</div>
  `;
  videoWrapper.appendChild(timelineOverlay);

  const controls = pipWindow.document.createElement("div");
  controls.id = "controls";
  controls.innerHTML = `
    <button id="pip-prev">⬆ Prev</button>
    <button id="pip-play">⏯ Play/Pause</button>
    <button id="pip-next">⬇ Next</button>
    <button id="pip-rw">⏪ -10s</button>
    <button id="pip-ff">⏩ +10s</button>
    <button id="pip-auto">🔁 Auto: OFF</button>
  `;

  pipWindow.document.body.append(videoWrapper, controls);

  syncStreamToPip();

  // Logika interaksi klik (seek) pada progress bar
  const progressContainer = timelineOverlay.querySelector(
    "#progress-container",
  );
  progressContainer.addEventListener("click", (e) => {
    const v = getActiveVideo();
    if (!v || !v.duration) return;

    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));

    // Set waktu pada video asli YouTube
    v.currentTime = ratio * v.duration;
  });

  // Hubungkan event click untuk play/pause saat area video wrapper diklik (opsional)
  videoWrapper.addEventListener("click", (e) => {
    if (e.target.closest("#timeline-overlay")) return; // Jangan pause jika klik timeline
    const v = getActiveVideo();
    if (v.paused) v.play();
    else v.pause();
  });

  controls.querySelector("#pip-play").onclick = () => {
    const v = getActiveVideo();
    if (v.paused) v.play();
    else v.pause();
  };

  controls.querySelector("#pip-rw").onclick = () => {
    const v = getActiveVideo();
    v.currentTime = Math.max(0, v.currentTime - 10);
  };

  controls.querySelector("#pip-ff").onclick = () => {
    const v = getActiveVideo();
    v.currentTime = Math.min(v.duration, v.currentTime + 10);
  };

  controls.querySelector("#pip-next").onclick = () => triggerNavigation("next");
  controls.querySelector("#pip-prev").onclick = () => triggerNavigation("prev");

  const autoBtn = controls.querySelector("#pip-auto");
  autoBtn.onclick = () => {
    autoNextEnabled = !autoNextEnabled;
    autoBtn.innerText = autoNextEnabled ? "🔁 Auto: ON" : "🔁 Auto: OFF";
    autoBtn.classList.toggle("active", autoNextEnabled);
  };

  pipWindow.addEventListener("pagehide", () => {
    pipWindow = null;
    pipVideoElement = null;
  });
}

function triggerNavigation(direction) {
  const btnId =
    direction === "next"
      ? "#navigation-button-down button"
      : "#navigation-button-up button";
  const navBtn = document.querySelector(btnId);

  if (navBtn) {
    navBtn.click();
  } else {
    const key = direction === "next" ? "ArrowDown" : "ArrowUp";
    const keyCode = direction === "next" ? 40 : 38;
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        bubbles: true,
        key: key,
        code: key,
        keyCode: keyCode,
      }),
    );
  }

  setTimeout(() => {
    syncStreamToPip();
  }, 500);
}

// Loop interval yang menjamin overlay terus terbarui
let currentShortsUrl = location.href;
setInterval(() => {
  if (location.pathname.startsWith("/shorts/")) {
    injectTriggerButton();

    if (pipWindow && location.href !== currentShortsUrl) {
      currentShortsUrl = location.href;
      syncStreamToPip();
    }

    const v = getActiveVideo();
    if (v) {
      // Perbarui progress bar dan waktu durasi di window PiP secara realtime dari video asli
      if (pipWindow) {
        const fill = pipWindow.document.querySelector("#progress-fill");
        const timeDisplay = pipWindow.document.querySelector("#time-display");

        const duration = v.duration || 0;
        const currentTime = v.currentTime || 0;

        if (fill && timeDisplay && duration > 0) {
          const percent = (currentTime / duration) * 100;
          fill.style.width = `${percent}%`;
          timeDisplay.innerText = `${formatTime(currentTime)} / ${formatTime(duration)}`;
        }
      }

      // Deteksi otomatis video selesai
      if (!v.dataset.hasAutoNextListener) {
        v.dataset.hasAutoNextListener = "true";
        v.addEventListener("timeupdate", () => {
          if (
            autoNextEnabled &&
            v.duration &&
            v.duration - v.currentTime <= 0.4
          ) {
            triggerNavigation("next");
          }
        });
      }
    }
  }
}, 100); // Dipercepat ke 100ms agar pergerakan slider lancar (smooth)
