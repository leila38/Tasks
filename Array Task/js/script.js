var array=["HTML", "CSS","JAVA SCRIPT", "BOOTSTRAP"]
var x=prompt("enter your course: ")
if(array.includes (x)) {
console.log("found")
}
else
array.push(x)
console.log(array)