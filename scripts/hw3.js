function task1(){    
    let password = 'пароль';
    let userInput = prompt('Введите пароль');
    if(userInput === password){
        alert('Пароль введен верно');
    }else{
        alert('Пароль введен неправильно');
    }
}

function task2(){    
    [0, 10, -3, 2].forEach(value => console.log(`${value}: ${value > 0 && value < 10 ? 'Верно' : 'Неверно'}`));
}

function task3(){
    let d = Math.ceil(Math.random() * 200);
    let e = Math.ceil(Math.random() * 200);
    console.log(`d = ${d}, e = ${e} ${d > 100 || e > 100 ? 'Верно' : 'Неверно'}`)
}

function task4(){
    let a = '2';
    let b = '3';    
    alert(+a + +b);
}

function task5(){
    const monthNumber = Number(prompt('Введите номер месяца'));
    let message = '';
    switch (monthNumber) {
        case 12:         
        case 1: 
        case 2: message = 'Зима'; break;
        case 3: 
        case 4: 
        case 5: message = 'Весна'; break;
        case 6: 
        case 7: 
        case 8: message = 'Лето'; break;
        case 9: 
        case 10: 
        case 11: message = 'Осень'; break;
        default: message = 'Введите номер месяца от 1 до 12'; break;
    };
    alert(message);
}

function task7(){
    const number = Number(prompt('Пожалуйста, введите любое число'));
    if(isNaN(number)){
        alert('Нужно ввести именно число');        
    }

    alert(`Число ${number} ${number % 2 === 0 ? 'четное' : 'нечетное'}`);
}

function task8(){
    const clientOS = +prompt('Выберите ОС (0 — iOS, 1 — Android)');
    if(isNaN(clientOS)){
        alert('Для выбора ОС введите 0 или 1 (0 — iOS, 1 — Android)');
        return;
    }

    let message = '';
    switch (clientOS){
        case 0: message = 'Установите версию приложения для iOS по ссылке'; break;
        case 1: message = 'Установите версию приложения для Android по ссылке'; break;        
    }
    if(message){
        console.log(message);
    }
}

function task9(){
    const clientOS = numericUserInput(
        'Выберите ОС (0 — iOS, 1 — Android)', 
        'Для выбора ОС введите 0 или 1 (0 — iOS, 1 — Android)', 
        i => i === 0 || i === 1
    );
    
    const clientDeviceYear = numericUserInput(
        'Укажите год выпуска телефона', 
        'Укажите год выпуска телефона от 1950 до текущего', 
        i => i >= 1950 && i <= new Date().getFullYear()
    );

    let message = '';
    if(clientOS == 0){
        if(clientDeviceYear >= 2015){
            message = 'Установите версию приложения для iOS по ссылке';
        }
        else{
            message = 'Установите облегченную версию приложения для iOS по ссылке';
        }
    }else{
        if(clientDeviceYear >= 2015){
            message = 'Установите версию приложения для Android по ссылке';
        }
        else{
            message = 'Установите облегченную версию приложения для Android по ссылке';
        }
    }

    console.log(message);
    
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

