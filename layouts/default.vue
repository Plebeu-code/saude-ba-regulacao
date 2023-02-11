<template>
  <n-loading-bar-provider>
    <n-notification-provider>
      <n-message-provider>
        <n-dialog-provider>
          <slot />
        </n-dialog-provider>
      </n-message-provider>
    </n-notification-provider>
  </n-loading-bar-provider>
</template>
