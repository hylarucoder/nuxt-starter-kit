const VH1 = defineComponent({
  setup(_, { slots }) {
    return () => <h1>{slots?.default()}</h1>
  },
})

export default VH1
