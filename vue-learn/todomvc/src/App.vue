<template>
  <div >
    <counter :count="count" v-on:increment="incrementCount"/>
    <counter-brother :count="count"/>
  </div>
</template>

<script>
// 两个兄弟组件，共享count 数据
// count 不应该属于Counter组件私有， data(){} , props
import Counter from './components/Counter';
// import CounterBrother from './components/CounterBrother';
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount () {
      this.count++;
    }
  },
  components: {
    'counter': Counter,
    // 'counter-brother': CounterBrother
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
