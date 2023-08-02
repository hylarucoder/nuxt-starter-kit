const VH1 = defineComponent({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup(props, { slots }) {
    return () => (
      <h1 class="whitespace-pre-wrap text-left text-3xl font-bold text-zinc-700 dark:text-gray-200 sm:text-5xl">
        {slots?.default()}
      </h1>
    )
  },
})

export default VH1
