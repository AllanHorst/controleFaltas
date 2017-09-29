export function getRandomId(prefix) {
  return prefix ? prefix + Math.random().toString() : Math.random().toString()
}

export const daysOfWeek = [
  { id: 1, name: 'Segunda-Feira'},
  { id: 2, name: 'Terça-Feira'},
  { id: 3, name: 'Quarta-Feira'},
  { id: 4, name: 'Quinta-Feira'},
  { id: 5, name: 'Sexta-Feira'},
  { id: 6, name: 'Sábado'}
]