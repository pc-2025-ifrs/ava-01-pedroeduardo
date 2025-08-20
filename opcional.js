Array.prototype.mmc = function () {
  let maior = this[0];
  for (let i = 0; i < this.length; i++) {
    if (this[i] > maior) {
      maior = this[i];
    }
  }
  let resultado = maior;
  while (this.filter((x) => resultado % x !== 0).length > 0) {
    resultado++;
  }
  return resultado;
};
console.log([10, 15, 20].mmc());
