<template>
  <div class="w-screen h-screen bg-zinc-700">
    <n-button type="primary" @click="dialog.info({ content: 'Test', closable: true })">test</n-button>
  </div>
</template>

<script lang="ts" setup>

const messagem = useMessage()

const dialog = useDialog()

messagem.info('Yves')

</script>