## context
跨组件之间数据传递
this.props
一般 父组件 -> 子 -> 孙
context 父 -> 孙
被 react-router react-redux 广泛使用
16.0
## 问题
shouldComponentUpdate
尽可能的少渲染页面
return true 
return false 不更新
如果中间某个组件 shouldComponentUpdate false 后代组件不会更新

## context 16
解决了shouldComponentUpdate的问题
