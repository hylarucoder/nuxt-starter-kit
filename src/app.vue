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
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.dark {
  --bg-color-900: #131313;
  --bg-color-800: #1e1e20;
}

html,
body,
#__nuxt {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: black;
  display: flex;
  background: #f5f5f5;
}

html.dark,
.dark #__nuxt {
  @apply bg-zinc-950;
  color: #ebf4f1;
}

html.dark-theme {
  color: white;
  transition: background-color 0.5s ease, color 0.5s ease;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
