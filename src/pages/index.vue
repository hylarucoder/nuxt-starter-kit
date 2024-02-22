<script lang="ts" setup>
definePageMeta({ auth: false })

</script>
<template>
  <NuxtLayout>
    <div class="w-full px-5 pb-5 sm:px-40 sm:pt-10">
      <div class="flex w-full flex-col sm:flex-row">
        <div class="mt-4 pr-5">
          home
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
pre {
  @apply my-3 overflow-x-auto rounded bg-gray-800 p-3 text-white shadow;
}

pre span {
  @apply text-green-400;
}
</style>
