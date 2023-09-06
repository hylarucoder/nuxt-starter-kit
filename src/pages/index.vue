<template>
  <NuxtLayout>
    <div class="w-full px-5 pb-5 sm:px-40 sm:pt-10">
      <div class="flex w-full flex-col sm:flex-row">
        <div class="mt-4 pr-5">
          {{ t("Home.Title") }}
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
const { t } = useTrans()
</script>
