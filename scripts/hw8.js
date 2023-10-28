function task1(){
    const people = [
        { name: 'Глеб', age: 29 },
        { name: 'Анна', age: 17 },
        { name: 'Олег', age: 7 },
        { name: 'Оксана', age: 47 }
    ];

    const sortedPeople = people.sort((a, b) => a.age - b.age);
    console.log(sortedPeople);
}

function task2(){
    const isPositive = i => i > 0;

    const isMale = p => p.gender === 'male';

    function filter(arr, predicate) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if(predicate(arr[i])){
                result.push(arr[i]);
            }
        }
        return result;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
        {name: 'Глеб', gender: 'male'},
        {name: 'Анна', gender: 'female'},
        {name: 'Олег', gender: 'male'},
        {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));
}

function task3(){        
    const timerId = setInterval(() => console.log(new Date()), 3000);
    
    setTimeout(() => {
        clearInterval(timerId);
        console.log('30 секунд прошло');
    }, 30000);
}

function task4(){
   function delayForSecond(callback) {
      setTimeout(callback, 1000);
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   })
}

function task5(){
    // Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
    // а затем вызывает переданный колбэк
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
            if(cb) { cb(); }
        }, 1000)
    }

    // Функция sayHi выводит в консоль приветствие для указанного имени
    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }

    // Код выше менять нельзя

    // Нужно изменить код ниже:
    delayForSecond(() => sayHi('Глеб'));
}