<template>
  <slot />
</template>

<script lang="ts" setup>

const { occurrence } = useOccurrence()

const userData = $ref<{
  joinAt: number,
  occurrence: number | null,
  address: string | null,
  isMobile: boolean
}>({
  joinAt: Date.now(),
  occurrence: null,
  address: null,
  isMobile: false
})

onMounted(() => {

  userData.joinAt = Date.now()
  userData.occurrence = occurrence.value
  userData.address = window.location?.hostname ?? "unknown"
  userData.isMobile = navigator.userAgent.indexOf("mobi") !== -1
  
})


onUnmounted(() => {
  
  const uptime = Date.now() - userData.joinAt

  useFetch('/api/audit/**', {
    method: "POST",
    body: {
      ...userData,
      uptime
    }
  })

}) 

</script>