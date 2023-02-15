<template>
  <div class="h-[150px] w-full  flex fixed max-[415px]:static bottom-0 justify-center items-center linear-background">
    <nuxt-img src="/imgs/logo.png" alt="Logo bahia" class="h-[100px]" loading="lazy" />
  </div>
</template>

<style >
.linear-background {
  background: linear-gradient(-45deg, #B29547, #759249, #A6326B, #469497);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}


@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}
</style>