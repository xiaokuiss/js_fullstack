将JS走向后端

没有DOM
有命令行，有服务器，
文件系统 

代码的书写顺序和执行完成顺序不一样
如何确保顺序呢？
回调解决带来了回调地狱  可读性变得很差
Promise 

拆分Promise 来理解
- 解决耗时这一类问题  new Promise()
- 问题解决了后， 控制权的转移得以控制， JS 单线程 resolve => then
- resolve(data)传的数据在then那可以得到
    代码的编写顺序和执行顺序时一致的。 异步问题就变成了同步。     
    callback 读很难， 
- reject I/O等操作有可能发生问题
- 多个文件确保执行顺序  then 链
 在每个promise then 里返回一个promise
- 如果我们要多个文件并发执行 当所有文件都读取完，在执行