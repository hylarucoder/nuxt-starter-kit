<template>
  <div class="mx-auto mt-5 max-w-5xl px-5">
    <div class="relative overflow-x-auto rounded">
      <table class="w-full text-left text-sm text-gray-400">
        <thead class="bg-gray-700 text-xs uppercase text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Route
            </th>
            <th scope="col" class="px-6 py-3">
              Method
            </th>
            <th scope="col" class="px-6 py-3">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <APITableRow route="/session" method="get" link="/api/auth/session" />
          <APITableRow route="/csrf" method="get" link="/api/auth/csrf" />
          <APITableRow route="/providers" method="get" link="/api/auth/providers" />
          <APITableRow route="/signin" method="get" link="/api/auth/signin" />
          <APITableRow route="/signin/:provider" method="post" link="/api/auth/signin/github" />
          <APITableRow route="/callback/:provider" method="get & post" link="/api/auth/callback/github" />
          <APITableRow route="/signout" method="get & post" link="/api/auth/signout" />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({ auth: false })
</script>
