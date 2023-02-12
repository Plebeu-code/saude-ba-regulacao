<template>
  <div class="w-screen h-screen max-[400px]:h-auto  bg-[#C9E1E3] items-center flex flex-col">
    <ResultFormRequest />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const loading = useLoadingBar()

onMounted(() => {
  loading.start()
  setTimeout(() => {
    loading.finish()
  }, 2500)
})
</script>