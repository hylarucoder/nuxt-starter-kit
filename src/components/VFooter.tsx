import { NuxtLink } from "#components"

const Footer = defineComponent({
  setup() {
    return () => (
      <div class="m-5 border-t border-solid border-zinc-100 p-5  dark:border-zinc-900 sm:mt-12">
        <div class="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div class="flex space-x-2 text-sm font-medium text-zinc-800 dark:text-zinc-300">
            <NuxtLink to="/" class="cursor-pointer">
              Home
            </NuxtLink>
            <NuxtLink to="/about" class="cursor-pointer">
              About
            </NuxtLink>
            <NuxtLink to="/projects" class="cursor-pointer">
              Projects
            </NuxtLink>
            <NuxtLink to="/speaking" class="cursor-pointer">
              Youtube
            </NuxtLink>
            <NuxtLink to="/uses" class="cursor-pointer">
              Uses
            </NuxtLink>
          </div>
          <p class="text-sm text-zinc-400">© 2023 HylaruCoder. All rights reserved.</p>
        </div>
      </div>
    )
  },
})

export default Footer
