[26] 链表 LinkedList 指针

- 算法
- 数据结构  链表
- webpack 跑起来
给定一个链表（实现一个）， 和一个特定值x, 对链表进行分隔， 是所有小于x的节点都在大于或等于x的节点之前,
保证原来的顺序
LinkedList (n)LinkedListNode
存储数据可以不连续 
head -> next -> node1 -> ..node -> tail -> next=null

head = 1->4->3->2->5->2 x=3
1->2->2
4->3->5
1. 一分为二 节点 val next
 两个链表 next 小的链表 next -> 大链表头节点
 怎么在组成链表的过程中
 lowerHeader
 lowerTail
 highHeader
 highTail 
 lowerHeader  =  head
4? 条狗 1->next 放开 1->4 1 节点， next null
1->towerHeader-> next 2 ->2
4->hiHeader-> 5
while 一下就可以
