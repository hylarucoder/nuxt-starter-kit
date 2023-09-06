<template>
  <div class="page_background__USCSr flex min-h-screen w-full justify-center gap-x-20 sm:p-4 lg:justify-start lg:p-8">
    <div class="space-between flex w-full shrink-0 flex-col rounded-2xl bg-white shadow">
      <div class="flex w-full items-center justify-between p-6">
        <div class="page_logo__zluNS" />
        <div class="w-56 text-right">
          <div class="relative inline-block text-left" data-headlessui-state="">
            <div>
              <button
                id="headlessui-menu-button-:r0:"
                class="h-[44px]justify-center inline-flex w-full items-center rounded-lg border border-gray-200 px-[10px] py-[6px] text-[13px] font-medium text-gray-900 hover:bg-gray-100"
                type="button"
                aria-haspopup="menu"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="mr-1 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                简体中文
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex w-full grow flex-col items-center items-center justify-center px-6 md:px-[108px]">
        <div class="flex flex-col md:w-[400px]">
          <div class="mx-auto w-full">
            <h2 class="text-[32px] font-bold text-gray-900">
              嗨，近来可好 👋
            </h2>
            <p class="mt-1 text-sm text-gray-600">
              欢迎来到 Dify, 登录以继续
            </p>
          </div>
          <div class="mx-auto mt-8 w-full">
            <div class="bg-white">
              <div class="mt-6 flex flex-col gap-3">
                <div class="w-full">
                  <a href="https://cloud.dify.ai/console/api/oauth/login/github">
                    <div
                      class="inline-flex h-9 w-full cursor-pointer content-center items-center justify-center rounded-lg border border-solid border-gray-200 px-4 py-2 !text-sm text-base !font-medium leading-5 text-gray-500 hover:border-gray-300 hover:!bg-gray-50 hover:bg-white hover:shadow-sm"
                    >
                      <span class="page_githubIcon__y8UfU mr-2 h-5 w-5" /><span class="truncate text-gray-800">使用 GitHub 登录</span>
                      <div
                        class="!ml-1 inline-block hidden !h-3 h-4 !w-3 w-4 animate-spin rounded-full !border-2 border-4 border-solid border-current border-r-transparent align-[-0.125em] !text-white text-gray-200"
                        role="status"
                      >
                        <span
                          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="w-full">
                  <a href="https://cloud.dify.ai/console/api/oauth/login/google">
                    <div
                      class="inline-flex h-9 w-full cursor-pointer content-center items-center justify-center rounded-lg border border-solid border-gray-200 px-4 py-2 !text-sm text-base !font-medium leading-5 text-gray-500 hover:border-gray-300 hover:!bg-gray-50 hover:bg-white hover:shadow-sm"
                    >
                      <span class="page_googleIcon__35gFL mr-2 h-5 w-5" /><span class="truncate text-gray-800">使用 Google 登录</span>
                      <div
                        class="!ml-1 inline-block hidden !h-3 h-4 !w-3 w-4 animate-spin rounded-full !border-2 border-4 border-solid border-current border-r-transparent align-[-0.125em] !text-white text-gray-200"
                        role="status"
                      >
                        <span
                          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="w-hull mt-2 block text-center text-xs text-gray-600">
                使用即代表你并同意我们的&nbsp;<a
                  class="text-primary-600"
                  target="_blank"
                  href="https://docs.dify.ai/v/zh-hans/yong-hu-xie-yi/fu-wu-xie-yi"
                >使用协议</a>&nbsp;&amp;&nbsp;<a
                  class="text-primary-600"
                  target="_blank"
                  href="https://docs.dify.ai/v/zh-hans/yong-hu-xie-yi/yin-si-xie-yi"
                >隐私政策</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-8 py-6 text-sm font-normal text-gray-500">
        © 2023 Dify, Inc. All rights reserved.
      </div>
    </div>
  </div>
</template>
