//print fibonacci number series up to a given number

var a=0
var b=1
var c
var end=21
console.log(a);
console.log(b);
while(end>=a+b){
    c=a+b
    console.log(c);
    a=b
    b=c
}