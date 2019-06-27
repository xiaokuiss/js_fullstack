<template>
    <div></div>
</template>

<script>
export default {
name: 'Star',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: [],
      detailShow: false
    }
  },
  created () {
    console.log(this.ratings)
    this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  }
}
</script>

<style>

</style>
