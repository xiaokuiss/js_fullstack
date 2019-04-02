#BFC的概念
Block Formatting Context(块级格式上下文)

#BFC 的渲染规则
1. BFC在页面上是一个独立的容器，最显著的效果就是建立一个隔绝
的空间，外面的元素不会影响BFC里面的元素，反之，里面的元素也不会
影响外面的元素
2. BFC的区域不会浮动元素的box重叠
3. 垂直方向的外边距会发生边距折叠（包括父子元素，和兄弟元素）水平方向的外边距不存在边距折叠
4. 计算BFC的高度时会把浮动的盒子高度也计算上去

#BFC 的创建条件
1. overflow的值不为visible
2. float 的值不为none
3. 行内块级inline-block
4. 表格单元display:table-cell;
5. 绝对定位（absolute,fixed）
