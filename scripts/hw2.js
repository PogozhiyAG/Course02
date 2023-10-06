function task1(){
    let a = 10;
    alert(a);
    a = 20;
    alert(a);
}

function task2(){
    let year = 2007;
    alert(year);
}

function task3(){
    let creator = 'Brendan Eich';
    alert(creator);
}

function task4(){
    let x = 10;
    let y = 2;
    let message = `Сумма: ${x + y}\nРазность: ${x - y}\nПроизведение: ${x * y}\nЧастное: ${x / y}`;
    alert(message);
}

function task5(){
    let result = Math.pow(2, 5);    
    alert(result);
}

function task6(){
    let a = 9;    
    let b = 2;
    let result = a % b
    alert(result);
}

function task7(){
    let num = 1;
    num += 5;
    num -=3;
    num *= 7;
    num /= 3;
    num++;
    num--;
    alert(num);
}

function task8(){
    let age;

    while(true){
        age = Number(prompt('Сколько вам лет?')); 
        if(isNaN(age)){
            alert('Введите число');
        } 
        else{
            break;
        }
    } 

    alert(age);
}

function task9(){
    //9.0
    let user = {
        name: 'John',
        age: 25,
        isAdmin: false
    };

    //9.1
    user['city of residence'] = 'Tver';

    //9.2
    user.age = 30;

    //9.3
    delete user['city of residence'];

    //9.4
    let propName = prompt('Какую информацию хотите узнать о пользователе?');
    let propValue = user[propName];
    if(propValue !== undefined){
        alert(propValue);
    }
    else{
        alert('Информация не найдена');
    }
}

function task10(){
    let name = prompt('Как вас зовут?');
    alert(`Привет, ${name}!`);
}