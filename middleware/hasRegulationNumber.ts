export default defineNuxtRouteMiddleware((to, from) => {

  const hasRegulation = !!useCookie("id").value
  
  if (!hasRegulation && to.path !== "/") {
    return navigateTo("/")
  }

})