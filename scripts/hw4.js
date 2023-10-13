function task1(){
    for (let i = 0; i < 2; i++) {
        console.log('Привет');
    }
}

function task2(){
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function task3(){
    for (let i = 7; i <= 22; i++) {
        console.log(i);
    }
}


function task4(){
    const obj = {
        'Коля': 200,
        'Вася': 300,
        'Петя': 400
    };

    for (const key in obj) {
        console.log(`${key} — зарплата ${obj[key]} долларов`);        
    }
}

function task5(){
    let n = 1000;
    let num = 0;
    
    while(n >= 50){
        n /= 2;
        num++;
    }

    console.log(`Получилось число ${n} за ${num} итераций`);    
}

function task6(){
    const firstReportDay = numericUserInput(
        'Введите дату первой пятницы (число от 1 до 7)',
        'Нужно ввести число от 1 до 7',
        n => n >= 1 && n <= 7
    );
    
    const reportDays = [];
    let currentDay = firstReportDay;
    
    while(currentDay <= 31){
        reportDays.push(currentDay);
        currentDay += 7;
    }

    for (let i = 0; i < reportDays.length; i++) {
        console.log(`Сегодня пятница, ${reportDays[i]}-е число. Необходимо подготовить отчет.`);        
    }
}




function numericUserInput(promptMessage, suggest, checkResult){
    let result;   
    
    while(true){
        result = +prompt(promptMessage);
        if(isNaN(result) || !checkResult(result)){
            alert(suggest);
        }else{
            return result;
        };
    }
}