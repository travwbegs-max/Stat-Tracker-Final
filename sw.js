self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("stat-cache").then(cache =>
      cache.addAll(["./", "./index.html", "./manifest.json"])
    )
  );
});
