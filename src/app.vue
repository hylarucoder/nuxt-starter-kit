<script setup lang="ts">
import { appName } from "./constants"

useHead({
  title: appName,
})

const { isMobile } = useDevice()

onMounted(() => {
  if (isMobile) {
    useHead({
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    })
  }
})
</script>

<template>
  <NuxtPage />
</template>
