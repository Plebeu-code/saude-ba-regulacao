<template>
  <div class="w-screen h-screen bg-[#C9E1E3] items-center flex flex-col">
    <MyForm :isPending="isPending" :data="formData" @success="execute"/>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { NAvatar } from 'naive-ui';

const loading = useLoadingBar()

const notification = useNotification()

let isPending = $ref<boolean>(false)

let formData = reactive({
  regulationNumber: null,
  captcha: true,
})

const { execute, data, error } = useLazyAsyncData<any, any>(
  () => $fetch(
    "/api/regulation", 
    { 
      immediate: false,
      onRequest() {
        loading.start()
        isPending = true
      },
      onResponse() {
        loading.finish()
        isPending = false
      },
      onRequestError() {
        loading.error()
      },
      query: {
        id: formData.regulationNumber
      }
    },
  ),
  {
    immediate: false,
    default: () => null,
  }
)

let hasData = $computed(() => !!data.value)

let hasError = $computed(() => !!error.value)

watch(data, async () => {
  if (hasData) {
    const id = useCookie("id", { maxAge: 15 })

    id.value = formData.regulationNumber

    return navigateTo("/result")
  }
})

watch(error, () => {
  if (hasError) {
    console.log(error.value);
  
    notification.error({
      content: decodeURI(error.value?.statusMessage!),
      closable: false,
      duration: 5000
    })
  }
})

onMounted(() => {

  const welcome = useLocalStorage("welcome-notification", false)

  if (!welcome.value) {
    notification.create({
      title: 'Olá! Seja bem-vindo!',
      description: 'App de monitoramento de sua regulação.',
      content: 'A regulação de pacientes na saúde é o processo de gerenciamento de fluxo de pacientes SUREM ( Sistema de Urgência e Emergência) garantindo que cada paciente receba o atendimento adequado, pelo profissional de saúde. Isso inclui a triagem de pacientes, a alocação de leitos,bem como o gerenciamento de pacientes em listas de espera. O objetivo da regulação é garantir que o sistema de saúde seja eficiente e eficaz, e que os pacientes recebam o cuidado de que precisam.',
      duration: 45000,
      closable: true,
      avatar: () => h(
        NAvatar,
        {
          size: 'large',
          src: 'https://todabahia.com.br/wp-content/uploads/2023/01/whatsapp_image_2023-01-03_at_15.16.00.jpeg',
        },
      )
    })
    welcome.value = true
  }

})
</script>