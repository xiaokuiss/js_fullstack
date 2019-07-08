<template>
  <button :class="'i-botton-size' + size" :disabled="disabled" @click="handleClick"> 
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true 
    }
  }
  return false    //在这false即结束
}
import bus from '@/bus/bus'
export default {
  props: {
    size: {
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
    data () {
      return {
        msg: '我是button组件的数据'
      }
    },
    methods: {
      handleClick(event) {
        // console.log(event)
        // console.log(123)
        // this.$emit('on-click', this.msg)
        bus.$emit('todo', this.msg)
      }
    },
}
</script>

<style scoped>
button{
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.i-botton-sizelarge{
  padding: 12px;
}
.i-botton-sizedefault{
  padding: 8px;
}
.i-botton-sizesmall{
  padding: 4px;
}
</style>
