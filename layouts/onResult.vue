<template>
  <slot />
</template>

<script lang="ts" setup>

let joinAt = Date.now()

const occurrence = useCookie("id")

const address = window.location.hostname ?? "unknown"

const isMobile = navigator.userAgent.indexOf("mobi") !== -1

onUnmounted(() => {
  
  const uptime = Date.now() - joinAt

  console.log(uptime);

  console.log(isMobile);
  
  console.log(address, occurrence.value);
})

</script>