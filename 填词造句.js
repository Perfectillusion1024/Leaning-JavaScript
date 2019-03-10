/*Javascript 字符串操作综合训练
填词造句

现在我们将结合之前学习的字符串相关知识，来玩一个填字风格的文字游戏。

通过使用提供的变量：名词myNoun、形容词myAdjective、动词myVerb、副词myAdverb，来创建一个新的字符串并赋值到 result。

此外，除了所提供的词之外，你还需要添加额外的连接字符串。

例如：result = myNum+' aa '+myNun;使用+连接字符串，并且中间用额外字符" aa "来隔开，注意间隔字母两边要用空格，你也可以使用，来分割

我们提供了多种审核，该审核用多个不同单词的输入来运行你的函数，以确保所有提供的单词和你额外添加的连接字符串能够准确输出。*/

<script>
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
var result = myNoun+" "+myAdjective+" "+myVerb+" "+myAdverb;
// Your code below this line

// Your code above this line
return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
</script>
