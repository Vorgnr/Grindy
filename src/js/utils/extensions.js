export default (() => {
  Number.prototype.fixed = function (n = 2) {
    return parseFloat(this.toFixed(n))
  }

  Array.prototype.getRandomValue = function() {
    return this[Math.floor(Math.random() * this.length)]
  }
})()
