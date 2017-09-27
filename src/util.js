export function getRandomId(prefix) {
  return prefix ? prefix + Math.random().toString() : Math.random().toString()
}