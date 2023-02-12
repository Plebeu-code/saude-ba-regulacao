<template>
  <div class="w-screen h-screen  bg-[#C9E1E3] items-center flex flex-col">
    <ResultFormRequest />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const loading = useLoadingBar()

const route = useRoute()

console.log(route.params.id);

onMounted(() => {
  loading.start()
  setTimeout(() => {
    loading.finish()
  }, 2500)
})
</script>