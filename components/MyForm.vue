<template>
  <div class="h-full w-full flex items-center justify-center">
    <div class="h-[380px] bg-[#FEFCFE] w-[500px]  max-[470px]:w-[80%] mb-[150px] max-[400px]:mb-[0px] rounded relative flex items-end shadow-2xl">
      <img src="/imgs/central.png" alt="Logo do estado da bahia"
        class="h-[130px] top-[-80px] left-[18%]  absolute mb-8 max-[470px]:hidden">
      <n-form ref="formRef" :model="formData" :rules="formRules"
        class="w-full flex flex-col justify-center items-center h-[60%] mb-[40px]" size="large">
        <n-form-item label="Informe o Número da Regulação" path="regulationNumber" class="w-[80%]">
          <n-input-number placeholder="" :show-button="false" class="w-full"
            v-model:value="formData.regulationNumber" />
        </n-form-item>
        <n-divider  class="w-[80%] m-[0px] p-[0]" />
        <ClientOnly>
          <template #fallback>
            <n-alert title="Captcha" type="info">
              Será carregado em instantes ...
            </n-alert>
          </template>
          <VueRecaptcha  @verify="captchaVerify" @error="captchaError" ref="formCaptchaRef" :sitekey="captchaId" />
        </ClientOnly>
        <n-form-item>
          <n-button :disabled="!toggleButton" @click="handleSubmit" strong color="#39A05E"
            class="w-[200px] bg-[#39A05E] ">
            Pesquisar
          </n-button>
        </n-form-item>
      </n-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormInst, FormRules } from 'naive-ui';

import { VueRecaptcha } from "vue-recaptcha"

const { captchaId } = useRuntimeConfig()

// ANCHOR - Variaveis do Componente

const message = useMessage()

// ANCHOR - Variaveis do formulário

const formCaptchaRef = $ref<any>(null)

const formRef = $ref<FormInst | null>(null)

let formData = reactive({
  regulationNumber: null,
  captcha: false,
})

let formRules: FormRules = $ref<FormRules>({
  regulationNumber: [
    {
      required: true,
      message: 'Número da Regulação Inválido',
      trigger: ['input'],
      validator: (_, value) => value > 0
    },
    {
      required: true,
      message: 'Informe o Número da Regulação',
      trigger: ['blur', 'input'],
      validator: (_, value) => !!Number(value)
    },
  ]
})

// ANCHOR - Calculos

let toggleButton = $computed(() =>
  (
    !!formData.regulationNumber &&
    formData.regulationNumber! > 0
  )
  && formData.captcha
)

// ANCHOR - Métodos 

function captchaVerify(token: string) {
  formData.captcha = true
}

function captchaError(error: string) {
  console.log(error);
}

function handleSubmit() {
  formRef?.validate((err) => {
    console.log(err);

    if (err) {
      message.error("Há Campos Inválidos!")
    }
    else return true
  })
}
</script>

<style>
.n-divider:not(.n-divider--vertical) {
  margin: 0 0 25px 0 !important;
}

</style>