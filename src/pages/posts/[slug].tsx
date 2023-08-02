export default defineComponent({
  setup() {
    const route = useRoute()
    const slug = route.params.slug

    return () => (
      <div class="w-full px-5 pb-5 sm:px-40 sm:pt-10">
        <div class="flex w-full flex-col sm:flex-row">
          <div class="mt-4 pr-5">Posts : {slug}</div>
        </div>
      </div>
    )
  },
})
