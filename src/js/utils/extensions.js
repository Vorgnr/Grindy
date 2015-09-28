export default (() => {
  Number.prototype.fixed = function (n = 2) {
    return parseFloat(this.toFixed(n))
  }
})()
