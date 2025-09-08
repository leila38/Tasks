var degree = prompt("enter your degree:")

if (degree == null || degree == "") {
    console.log("enter your degree:")

}

else if (degree > 100) {
    console.log("greater than limit")

}

else if (degree < 0) {
    console.log('less than limit')

}

else if (degree >= 90 && degree <= 100) {
    console.log('A')

}

else if (degree < 90 && degree >= 80) {
    console.log('B')

}
else if (degree < 80 && degree >= 70) {
    console.log('C')

}

else if (degree < 70 && degree >= 60) {
    console.log('D')

}

else if (degree < 60 && degree >= 50) {
    console.log("pass")

}

else if (degree < 50 && degree >= 0) {
    console.log("fail")

}