module.exports = {
  pwa: {
    name: "pwa-music",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    }
  }
}
