function date(year, month, day){
    let date = new Date(year, month - 1, day - 1);
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();
    let currDay = date.getDate();

    console.log(`${currYear}-${currMonth + 1}-${currDay}`)
}

date(2016, 9, 30);
date(2016, 10, 1);