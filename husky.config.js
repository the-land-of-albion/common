module.exports = {
  hooks: {
    "pre-push": "tsc && git add . && git commit -m 'build' && git push origin main"
  }
}
