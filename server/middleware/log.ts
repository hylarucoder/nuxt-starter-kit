export default defineEventHandler((event) => {
  console.debug("New request: " + getRequestURL(event))
})
