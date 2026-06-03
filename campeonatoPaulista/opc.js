export function calcularPontos(time) {
  return (time.v * 3) + time.e
}

export function calcularSaldo(time) {
  return time.gp - time.gc
}

export function calcularDesempenho(time) {
  const max = time.j * 3
  return ((calcularPontos(time) / max) * 100).toFixed(2)
}
