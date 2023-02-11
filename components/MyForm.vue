<template>
  <div class="h-[480px] bg-[#FEFCFE] w-full max-w-[600px] rounded relative flex items-center shadow-2xl">
    <img src="/imgs/central.png" alt="Logo do estado da bahia" class="h-[200px] top-[-100px] left-[70px] absolute">
    <n-form ref="formRef" :model="formData" :rules="rules"
      class=" w-full flex flex-col justify-center items-center h-[60%]" size="large">
      <n-form-item label="Informe o Número da Regulação" path="name">
        <n-input-number class="w-[300px]" :show-button="false" :maxlength="8" v-model:value="formData.name"
          placeholder="Com o Dígito Verificador (DV)" />
      </n-form-item>
      <VueRecaptcha type="I'm not a robot" theme="dark" @verify="verifyMethod" @error="verifyError" ref="formCaptchaRef" sitekey="6Lf0uHAkAAAAAE0iGoFwkyG19gbO6UhnVJ6DpPNw">
      </VueRecaptcha>
      <n-form-item>
        <n-button strong color="#39A05E" class="w-[200px] bg-[#39A05E] ">
          Pesquisar
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script setup lang="ts">
import { VueRecaptcha } from 'vue-recaptcha';
import type { FormInst } from 'naive-ui';

const formCaptchaRef = $ref<any>(null)

const formRef = $ref<FormInst | null>(null)
let formData = $ref({
  name: null,
})
let rules = $ref({
  name: [
    {
      required: true,
      message: 'Informe o Número da Regulação',
      trigger: ['blur', 'input'],
    },
  ],
})

function handlerClick() {
  console.log(formCaptchaRef.execute());
  formCaptchaRef.execute()

}

function verifyMethod(token: string) {
  console.log(token);
}

function verifyError(error: string) {
  console.log(error);
}

onMounted(() => {
  formCaptchaRef.execute()
  console.log('a');
})

const size = ref('lg')
// const handleValidateClick = () => {
//   formRef.value?.validate((valid) => {
//     if (valid) {
//       formData.value = {
//         name: formRef.value?.getFieldValue('name'),
//       }
//     }
//   })
// }
</script>