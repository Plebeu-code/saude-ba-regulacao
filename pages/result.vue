<template>
  <NuxtLayout name="on-result">
    <div class="w-screen h-screen max-[400px]:h-auto  bg-[#C9E1E3] items-center justify-center flex flex-col">
      <ClientOnly>
        <div class="h-full w-full flex items-center justify-center max-[415px]:my-[100px] mb-[150px] ">
          <div v-motion="{
            initial: {
              x: 100,
              opacity: 0
            },
            enter: {
              x: 0,
              opacity: 1
            }
          }"
            class="h-[550px] bg-[#FEFCFE] flex-col w-[600px] min-w-[400px]  max-[415px]:min-w-[350px] max-w-[35%] rounded justify-around flex shadow-2xl px-3">
            <span class="flex-col items-center flex justify-center">
              <h1 class="text-lg font-bold text-[#39A05E]">Dados do Paciente</h1>
              <span class="h-[3px] w-[200px] bg-[#39A05E]"></span>
            </span> 
            <n-space vertical>
              <n-form-item label="Número da Ocorrência" class="flex flex-col">
                <n-input readonly :value="data!.CodOcorrencia" placeholder="Não cadastrado!">
                  <template #suffix>
                    <n-icon size="20">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24">
                        <path
                          d="M22 10V6a2 2 0 0 0-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"
                          fill="currentColor"></path>
                      </svg>
                    </n-icon>
                  </template>
                </n-input>
              </n-form-item>
              <n-form-item label="Data da Abertura" class="flex flex-col">
                <n-input readonly :value="data!.DataAbre" type="text" placeholder="Não cadastrado!">
                  <template #suffix>
                    <n-icon size="20">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round">
                          <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                          <path d="M16 3v4"></path>
                          <path d="M8 3v4"></path>
                          <path d="M4 11h16"></path>
                          <path d="M11 15h1"></path>
                          <path d="M12 15v3"></path>
                        </g>
                      </svg>
                    </n-icon>
                  </template>
                </n-input>
              </n-form-item>
              <n-form-item label="Paciente" class="flex flex-col">
                <n-input readonly :value="data!.Paciente" type="text" placeholder="Não cadastrado!">
                  <template #suffix>
                    <n-icon size="20">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 28 28">
                        <g fill="none">
                          <path
                            d="M21 16a3 3 0 0 1 3 3v.715C24 23.292 19.79 26 14 26S4 23.433 4 19.715V19a3 3 0 0 1 3-3h14zM14 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12z"
                            fill="currentColor"></path>
                        </g>
                      </svg>
                    </n-icon>
                  </template>
                </n-input>
              </n-form-item>
              <n-form-item label="Data de Nascimento" class="flex flex-col">
                <n-input readonly :value="data!.DataNasc" type="text" placeholder="Não cadastrado!">
                  <template #suffix>
                    <n-icon size="20">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24">
                        <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round">
                          <rect x="4" y="5" width="16" height="16" rx="2"></rect>
                          <path d="M16 3v4"></path>
                          <path d="M8 3v4"></path>
                          <path d="M4 11h16"></path>
                          <path d="M11 15h1"></path>
                          <path d="M12 15v3"></path>
                        </g>
                      </svg>
                    </n-icon>
                  </template>
                </n-input>
              </n-form-item>
              <n-form-item label="Motivo da Solicitação" class="flex flex-col">
                <n-input readonly :value="data!.DescMotivoSol" type="text" placeholder="Não cadastrado!">
                  <template #suffix>
                    <n-icon size="20">
                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                        <path d="M257,120.471c7.083,0,23.911,4.479,23.911,4.479c45.589,10.447,77.678,52.439,77.678,99.85v114.4v13.212l9.321,9.364
        l7.788,7.823H136.302l7.788-7.823l9.321-9.364V339.2V224.8c0-47.41,32.089-89.403,77.678-99.85c0,0,18.043-4.479,23.911-4.479
          M256,48c-17.602,0-31.059,13.518-31.059,31.2v14.559c-59.015,13.523-103.53,67.601-103.53,131.041v114.4L80,380.8v20.8h352v-20.8
        l-41.411-41.6V224.8c0-63.44-44.516-117.518-103.53-131.041V79.2C287.059,61.518,273.602,48,256,48L256,48z M297.411,422.4h-82.823
        c0,22.881,18.633,41.6,41.412,41.6S297.411,445.281,297.411,422.4L297.411,422.4z"></path>
                      </svg>
                    </n-icon>
                  </template>
                </n-input>
              </n-form-item>
              <n-form-item label="Status" class="flex flex-col">
                <n-input readonly :value="data!.NmStatusOcorr" type="text" placeholder="Não cadastrado!">
                  <template #suffix>
                    <n-icon size="20">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24">
                        <path
                          d="M4 18c.22-.72 3.31-2 6-2c0-.7.13-1.37.35-1.99C7.62 13.91 2 15.27 2 18v2h9.54c-.52-.58-.93-1.25-1.19-2H4zm6-5c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0-6a2 2 0 1 1 .001 3.999A2 2 0 0 1 10 7z"
                          fill="currentColor"></path>
                        <path opacity=".3" d="M10.35 18s-.35-.79-.35-2c-2.69 0-5.77 1.28-6 2h6.35z" fill="currentColor">
                        </path>
                        <path
                          d="M19.43 18.02c.36-.59.57-1.28.57-2.02c0-2.21-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22L22 20.59c-1.5-1.5-.79-.8-2.57-2.57zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2z"
                          fill="currentColor"></path>
                        <circle cx="10" cy="9" r="2" opacity=".3" fill="currentColor"></circle>
                      </svg>
                    </n-icon>
                  </template>
                </n-input>
              </n-form-item>
            </n-space>
            <div class="flex w-full justify-center">
              <n-button @click="navigateTo('/')" strong color="#39A05E" class="w-[200px] bg-[#39A05E] ">
                Nova Consulta
              </n-button>
            </div>
          </div>
        </div>
      </ClientOnly>
    </div>
  
    <Footer />
  </NuxtLayout>
</template>

<script setup lang="ts">

definePageMeta({ middleware: "has-regulation-number" })

/** ANCHOR - Váriaveis */

const { occurrence: occurrence, hasOccurence, delOccurrence, reFetchOcorrence } = useOccurrence()

const loading = useLoadingBar() 

const { data, error, execute } = useAsyncData<any, any>(
  () => $fetch(
    `/api/regulation/${occurrence.value}`,
    {
      responseType: "json",
      onRequest() {
        loading.start()
      },
      onResponse() {
        loading.finish()
      },
      onResponseError() {
        loading.error()
      }
    }
  ),
  {
    transform: ({ DataAbre, DataNasc, DataRealiza, CodOcorrencia, ...rest }: ResponseData) => ({
      CodOcorrencia: String(CodOcorrencia),
      DataAbre: DataAbre ? new Date(DataAbre).toLocaleDateString("pt-br") : null,
      DataNasc: DataNasc ? new Date(DataNasc).toLocaleDateString("pt-br") : null,
      DataRealiza: DataRealiza ? new Date(DataRealiza).toLocaleDateString("pt-br") : null,
      ...rest
    }),
    default: (): Partial<ResponseData> => ({
      CodOcorrencia: undefined,
      DataAbre: undefined,
      DataNasc: undefined,
      DataRealiza: undefined,
      DescMotivoSol: undefined,
      'Município': undefined,
      NmStatusOcorr: undefined,
      Paciente: undefined
    }),
    immediate: false
  }
)

const hasError = $computed(() => !!error.value)

/** ANCHOR - Eventos (Life Cycle) */

onMounted(() => {
  reFetchOcorrence()
  if (hasOccurence) execute()
})

// Caso haja uma ocorrência, ele deletará.
watch(data, () => {
  delOccurrence()
})

watch(error, () => {
  if (hasError) {
    console.log(error.value)
    navigateTo("/")
  }
})

/** ANCHOR - Tipagens */

interface ResponseData {
  CodOcorrencia: number,
  Paciente: string,
  DescMotivoSol: string,
  DataAbre: string,
  DataNasc: string,
  DataRealiza: string,
  'Município': string
  NmStatusOcorr: string
}

</script>

<style>
.n-form-item .n-form-item-feedback-wrapper {
  min-height: 0 !important;
}
</style>