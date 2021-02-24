// check if the number is a armstrong

var a=153
var b=[]
var temp=a.toString()
var sum=0

for(var i=0;i<temp.length;i++)
b.push(temp[i])
console.log(b);
for (var num in b) {
    sum=sum+(b[num]*b[num]*b[num])
}

sum==a?console.log(a,"is armstrong"):console.log(a,"not a armstrong");