/*
.pop() 函数用来移出数组中最后一个元素。如果想要移出第一个元素要怎么办呢？

.shift() 就是专门用来处理这类型需求的。它的工作原理类似 .pop()，但它移除的是第一个元素，而不是最后一个。

任务
使用 .shift() 函数移出 myArray 中的第一项，并把“移出”的值赋给 removedFromMyArray。
返回值 
从数组中删除的元素; undefined 如果数组为空。

语法:arr.shift()
　

描述
shift 方法移除索引为 0 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减 1。如果 length 属性的值为 0 (长度为 0)，则返回 undefined。

shift 方法并不局限于数组：这个方法能够通过 call 或 apply 方法作用于类似数组的对象上。但是对于没有 length 属性（从0开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。


示例
移除数组中的一个元素

let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
 
console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"
 
var shifted = myFish.shift();
 
console.log('调用 shift 之后: ' + myFish);
// "调用 shift 之后: clown,mandarin,surgeon"
 
console.log('被删除的元素: ' + shifted);
// "被删除的元素: angel"
　　以上代码显示了删除其第一个元素之前和之后的myFish数组。它还显示已删除的元素。*/
  
  // 举例
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray;
removedFromMyArray=myArray.shift();

