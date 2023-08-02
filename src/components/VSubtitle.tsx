const VSubtitle = defineComponent({
  setup(_, { slots }) {
    return () => (
      <p class="mt-6 whitespace-pre-wrap break-words text-zinc-500 dark:text-zinc-400 sm:text-xl">{slots?.default()}</p>
    )
  },
})

export default VSubtitle
