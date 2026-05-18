var tracks = [
  { title: "Paint It Black",          artist: "The Rolling Stones", color: "#FF70B8", embedUrl: "https://embed.music.apple.com/us/album/paint-it-black/1440764786?i=1440765582" },
  { title: "Purple Haze",             artist: "Jimi Hendrix",       color: "#FF4820", embedUrl: "https://embed.music.apple.com/us/album/purple-haze/344799413?i=344799464" },
  { title: "Me and Bobby McGee",      artist: "Janis Joplin",       color: "#50E890", embedUrl: "https://embed.music.apple.com/us/album/me-and-bobby-mcgee/917030890?i=917030915" },
  { title: "Light My Fire",           artist: "The Doors",          color: "#18D8F8", embedUrl: "https://embed.music.apple.com/us/album/light-my-fire/1192962129?i=1192962303" },
  { title: "Riders on the Storm",     artist: "The Doors",          color: "#18D8F8", embedUrl: "https://embed.music.apple.com/us/album/riders-on-the-storm/1622471682?i=1622472327" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana",            color: "#A8C0E0", embedUrl: "https://embed.music.apple.com/us/album/smells-like-teen-spirit/1440783617?i=1440783625" },
  { title: "Heart-Shaped Box",        artist: "Nirvana",            color: "#A8C0E0", embedUrl: "https://embed.music.apple.com/us/album/heart-shaped-box/1440858699?i=1440859107" },
  { title: "Back to Black",           artist: "Amy Winehouse",      color: "#CC80FF", embedUrl: "https://embed.music.apple.com/us/album/back-to-black/1440856219?i=1440856228" },
  { title: "Rehab",                   artist: "Amy Winehouse",      color: "#CC80FF", embedUrl: "https://embed.music.apple.com/us/album/rehab/1422677780?i=1422677781" },
];

var currentIndex = 0;

var prevBtn    = document.getElementById("prev-btn");
var nextBtn    = document.getElementById("next-btn");
var appleEmbed = document.getElementById("apple-embed");
var playlistEl = document.getElementById("playlist");

function loadTrack(index) {
  currentIndex = index;
  if (appleEmbed) appleEmbed.src = tracks[index].embedUrl;
  updatePlaylistActive();
}

function renderPlaylist() {
  if (!playlistEl) return;
  playlistEl.innerHTML = "";
  tracks.forEach(function (track, i) {
    var item = document.createElement("div");
    item.className = "playlist-item" + (i === currentIndex ? " active" : "");
    item.style.setProperty("--track-color", track.color);
    item.innerHTML =
      '<span class="pl-num">' + String(i + 1).padStart(2, "0") + "</span>" +
      '<div class="pl-details">' +
        '<span class="pl-title">' + track.title + "</span>" +
        '<span class="pl-artist">' + track.artist + "</span>" +
      "</div>" +
      '<span class="pl-dot"></span>';
    item.addEventListener("click", function () { loadTrack(i); });
    playlistEl.appendChild(item);
  });
}

function updatePlaylistActive() {
  if (!playlistEl) return;
  var items = playlistEl.querySelectorAll(".playlist-item");
  items.forEach(function (item, i) {
    item.classList.toggle("active", i === currentIndex);
    if (tracks[i]) item.style.setProperty("--track-color", tracks[i].color);
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", function () {
    loadTrack((currentIndex - 1 + tracks.length) % tracks.length);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", function () {
    loadTrack((currentIndex + 1) % tracks.length);
  });
}

if (playlistEl) {
  renderPlaylist();
}

document.addEventListener("mousemove", function (e) {
  document.body.style.setProperty("--mx", e.clientX + "px");
  document.body.style.setProperty("--my", e.clientY + "px");
});

(function initReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  [
    ".about-block", ".player-block", ".site-footer",
    ".content-block", ".disc-list", ".member-footer-nav", ".featured-track"
  ].forEach(function (sel) {
    document.querySelectorAll(sel).forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  });
})();
