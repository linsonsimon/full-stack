//print reverse of the given number

var a=345

var temp=0
var len=a.toString().length
for(var i=0;i<len;i++){
    temp=temp*10+a%10
    a=a-a%10
    a=a/10
}
console.log(temp);
