<template>
  <div class="h-[480px] bg-[#FEFCFE] w-full max-w-[600px] rounded relative flex items-center shadow-2xl">
    <img src="/imgs/central.png" alt="Logo do estado da bahia" class="h-[200px] top-[-100px] left-[70px] absolute">
    <n-form ref="formRef" :model="formData" :rules="rules"
      class=" w-full flex flex-col justify-center items-center h-[60%]" size="large">

      <n-form-item label="Informe o Número da Regulação" path="name" class="mb-[20px] w-[300px]">
        <n-input placeholder="a" class="w-full" v-model:value="formData.name" />
      </n-form-item>

      <VueRecaptcha @verify="verifyMethod" @error="verifyError" ref="formCaptchaRef"
        sitekey="6LexP3EkAAAAAN0ByhaeFbnDchRJWkhQU5K58PpT" />
      <n-form-item>
        <n-button :disabled="disabledSearch" @click="handlerSubmit" strong color="#39A05E" class="w-[200px] bg-[#39A05E] ">
          Pesquisar
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { VueRecaptcha } from 'vue-recaptcha';
import type { FormInst, FormRules } from 'naive-ui';


const formCaptchaRef = $ref<any>(null)
const formRef = $ref<FormInst | null>(null)
let disabledSearch = $ref<boolean>(true)
let verifyCaptch = $ref<any>(null)

let formData = $ref({
  name: '',
  captcha: false,
})

watch(formData, () => {
  formData.name.length > 0 && verifyCaptch.length > 0 ? disabledSearch = false : disabledSearch = true
})

let rules: FormRules = $ref({
  name: [
    {
      required: true,
      message: 'Informe o Número da Regulação',
      trigger: ['blur', 'input'],
    },
  ],
  captcha: [
    {
      required: true,
      message: 'test',
    }
  ]
})

function verifyMethod(token: string) {
  verifyCaptch = token
}

function verifyError(error: string) {
  console.log(error);
}

function handlerSubmit() {
  // formRef.validate().then(() => {
  //   console.log('validate', formRef.validate())
  // })
}
</script>