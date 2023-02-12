<template>
  <div class="w-screen h-screen justify-between bg-[#C9E1E3] items-center flex flex-col">
    <Header />
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