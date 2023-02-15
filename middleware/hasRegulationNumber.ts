export default defineNuxtRouteMiddleware(async (to, from) => {

  const { hasOccurence } = useOccurrence()

  if (!hasOccurence.value && to.path !== "/") {
    return navigateTo("/")
  }

})