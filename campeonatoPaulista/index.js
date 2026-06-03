// modulos externos
import express from 'express'
import cors from 'cors'

// modulos internos
import { times } from './bd.js'
import { calcularPontos, calcularSaldo, calcularDesempenho } from './opc.js'
const app = express();
app.use(cors())
times.forEach(time => {
  time.pts = calcularPontos(time)
  time.sg = calcularSaldo(time)
})

function ordenarTimes() {
  let ordenados = [...times]

  for (let i = 0; i < ordenados.length; i++) {
    for (let j = i + 1; j < ordenados.length; j++) {

      if (ordenados[j].pts > ordenados[i].pts) {
        let temp = ordenados[i]
        ordenados[i] = ordenados[j]
        ordenados[j] = temp
      }

    }
  }

  // definir posição
  for (let i = 0; i < ordenados.length; i++) {
    ordenados[i].posicao = i + 1
  }

  return ordenados
}


app.get('/', (req, res) => {
  res.send('API Campeonato Paulista 2026')
})

app.get('/times', (req, res) => {
  res.json(ordenarTimes())
})

app.get('/times/:nome', (req, res) => {
  let nome = req.params.nome.toLowerCase()

  for (let i = 0; i < times.length; i++) {
    if (times[i].time.toLowerCase() === nome) {
      return res.json(times[i])
    }
  }
})

app.get('/classificacao', (req, res) => {
  const lista = ordenarTimes()
  res.json(lista.slice(0, 8))
})

app.get('/classificados', (req, res) => {
  const lista = ordenarTimes()
  res.json(lista.slice(0, 8))
})

app.get('/saldo', (req, res) => {
  let lista = [...times]
  for (let i = 0; i < lista.length; i++) {
    for (let j = i + 1; j < lista.length; j++) {

      if (lista[j].sg > lista[i].sg) {
        let temp = lista[i]
        lista[i] = lista[j]
        lista[j] = temp
      }

    }
  }

  res.json(lista.slice(0, 4))
})

app.get('/top/:qtd', (req, res) => {
  const qtd = parseInt(req.params.qtd)
  const lista = ordenarTimes()

  res.json(lista.slice(0, qtd))
})

app.get('/desempenho', (req, res) => {
  const resultado = times.map(time => ({
    time: time.time,
    desempenho: `${calcularDesempenho(time)}%`
  }))

  res.json(resultado)
})

app.get('/ordenados', (req, res) => {
  res.json(ordenarTimes())
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})