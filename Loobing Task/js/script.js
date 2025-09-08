function looping(startNum, breakNum, continNum, endNum) {
console.log(breakNum)
console.log(continNum)
if (startNum == undefined || breakNum == undefined || continNum == undefined || endNum == undefined) {
    console.log("Enter 4 values");
}
else {
    for (var i = startNum; i <= endNum; i++)
        if (i == continNum)
            continue
        else if (i == breakNum)
            break
    console.log(i)
}
}
looping(1, 5, 10, 15)
looping(0, 8, 7, 20)