const task1 = () => 'Преобразуйте строку js в верхний регистр JS'.toUpperCase();

const task2 = (arr, str) => arr.filter(s => s.toLowerCase().startsWith(str.toLowerCase()));

function task3(){
    const f = 32.58884;
    const fCeil = Math.ceil(f);
    const fFloor = Math.floor(f);   
    const fRound = Math.round(f);
}

function task4(){
    const numbers = [52, 53, 49, 77, 21, 32];
    console.log(`Числа: ${numbers}`);
    console.log(`Наименьшее: ${Math.min(...numbers)}`);
    console.log(`Наибольшее: ${Math.max(...numbers)}`);
}

function task5(){
    console.log(1 + Math.floor(Math.random() * 10));
}



function getRandomArrNumbers(n){
    const result = [];
    const length = Math.floor(n / 2);
    
    for (let i = 0; i < length; i++) {
        result[i] = Math.floor(Math.random() * n);        
    }

    return result;
}

function task6(){
    console.log(getRandomArrNumbers(7));
    console.log(getRandomArrNumbers(12));
}



function getRandomBetween(min, max){
    return min + Math.floor(Math.random() * (max - min));
}

function task7(){
    getRandomBetween(9, 17);
}



function task8(){
    const date = new Date();
    const locale = 'ru-RU';
    const formatOptions = {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };    
    console.log(date.toLocaleDateString(locale, formatOptions));
}


function task9(){
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 73);
}




function dateFormatter(date){
    const locale = 'ru-RU';
    const dayAndMonth = date.toLocaleDateString(locale, {day: 'numeric', month: 'long'})    
    const weekDay = date.toLocaleString(locale, {weekday: 'long'});
    
    return `Дата: ${dayAndMonth} ${date.getYear()} - это ${weekDay}.\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function task10(){
    console.log(dateFormatter(new Date()));
}