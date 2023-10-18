const task1 = (a, b) => a < b ? a  : b;

const task2 = n => n % 2 ? 'Четное число' : 'Нечетное число';

const task3 = n => console.log(n * n);

function task4 () {
    const age = +prompt('Сколько вам лет?');

    if(isNaN(age) || age < 0) {
        alert('Вы ввели неправильное значение');
    } else if (age <= 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать');
    }
};

function task5 (a, b) {
    a = +a;
    b = +b;

    if(isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    }
    
    return a * b;
};

function task6 () {
    const n = +prompt('Введите число');

    if(isNaN(n)) {
        return 'Переданный параметр не является числом';
    } 
    
    return `${n} в кубе равняется ${n ** 3}`;
};

function task7 () {
    const getArea = function() {
        return Math.PI * (this.radius ** 2);
    };

    const getPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };

    const circle1 = {
        radius: 2,
        getArea: getArea,
        getPerimeter: getPerimeter,
    };

    const circle2 = {
        radius: 7.5,
        getArea: getArea,
        getPerimeter: getPerimeter,
    };
};

