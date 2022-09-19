function solve(piesArr, pie1, pie2){
    let startIndex = piesArr.indexOf(pie1);
    let endIndex = piesArr.indexOf(pie2) + 1;

    let newArr = piesArr.slice(startIndex, endIndex);

    return newArr;
}

console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));