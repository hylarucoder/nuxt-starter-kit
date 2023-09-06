<template>
  <NuxtLayout>
    <div class="w-full px-5 pb-5 sm:px-40 sm:pt-10">
      <div class="flex w-full flex-col sm:flex-row">
        <div class="mt-4 pr-5">
          {{ t("Home.Title") }}
        </div>
      </div>
    </div>
    <div class="mx-auto mt-5 max-w-5xl px-5">
      <h3 class="text-xl font-bold">
        Authentication Overview
      </h3>
      <p class="text-sm">
        See all available authentication & session information below.
      </p>
      <pre v-if="status"><span>Status:</span> {{ status }}</pre>
      <pre v-if="data"><span>Data:</span> {{ data }}</pre>
      <pre v-if="csrfToken"><span>CSRF Token:</span> {{ csrfToken }}</pre>
      <pre v-if="providers"><span>Providers:</span> {{ providers }}</pre>
    </div>
    <AuthenticationStatus />
  </NuxtLayout>
</template>
<script lang="ts" setup>
const { t } = useTrans()
const { data, status, getCsrfToken, getProviders } = useAuth()
definePageMeta({ auth: false })

const providers = await getProviders()
const csrfToken = await getCsrfToken()
</script>

<style scoped>
pre {
  @apply my-3 overflow-x-auto rounded bg-gray-800 p-3 text-white shadow;
}

pre span {
  @apply text-green-400;
}
</style>
