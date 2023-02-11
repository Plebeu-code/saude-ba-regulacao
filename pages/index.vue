<template>
  <div class="w-screen h-screen justify-between bg-[#C9E1E3] items-center flex flex-col">
    <Header />
    <MyForm />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { NAvatar } from 'naive-ui';

const loading = useLoadingBar()
const notification = useNotification()

const searchNotification = notification.create({
  title: 'Informe o Número da Regulação',
  description: 'Pesquisando...',
  content: 'Informações!',
  duration: 10000,
  closable: true,
  avatar: () => h(
    NAvatar,
    {
      size: 'large',
      src: 'https://todabahia.com.br/wp-content/uploads/2023/01/whatsapp_image_2023-01-03_at_15.16.00.jpeg',
    },
  )
})

onMounted(() => {
  loading.start()
  setTimeout(() => {
    loading.finish()
  }, 2500)
})
</script>