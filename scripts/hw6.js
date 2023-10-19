function task1(){    
    const arr = [1, 5, 4, 10, 0, 3];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 10){
            break;
        }
        console.log(arr[i]);
    }
}

function task2(){    
    const arr = [1, 5, 4, 10, 0, 3];
    const index = arr.indexOf(4);
}

function task3(){    
    const arr = [1, 3, 5, 10, 20]
    console.log(arr.join(' '));
}

function task4(){    
    let result = [];
    for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
            result[i].push(1);        
        }        
    }    
}

function task5(){    
    let arr = [1, 1, 1];
    arr = arr.concat([2, 2, 2]);
}

function task6(){    
    let arr = [9, 8, 7, 'a', 6, 5];
    arr = arr.filter(i => !isNaN(i)).sort();
    console.log(arr);
}

function task7(){    
    const arr = [9, 8, 7, 6, 5];
    const userInput = +prompt("Угадай число!");
    if(arr.includes(userInput)){
        alert('Угадал!');
    } else {
        alert('Не угадал :(');
    }
}

function task8(){    
    let s = 'abcdef';
    console.log(s
        .split('')
        .sort()
        .join('')
    );
}

function task9(){
    let arr = [[1, 2, 3,],[4, 5, 6]];
    console.log(arr.flat());
}

function task10(){
    let arr = [1, 5, 4, 10, 0, 3];
    for (let i = 0; i < arr.length - 1; i++) {        
        console.log(arr[i] + arr[i + 1]);
    }
}

const task11 = (arr) => arr.map(i => i ** 2);

const task12 = (strings) => strings.map(s => s.length);

const task13 = (arr) => arr.filter(i => i < 0);


function task14(){
    const source = [];
    for (let i = 0; i < 10; i++) {
        source.push(Math.floor(Math.random() * 11));        
    }

    const even = source.filter(i => i % 2 === 0);

    console.log(`Исходный: ${source}`);
    console.log(`Четные: ${even}`);
}


function task15(){
    const source = [];
    for (let i = 0; i < 6; i++) {
        source.push(1 + Math.floor(Math.random() * 10));        
    }
    
    console.log(source.reduce((a, i) => a + i) / source.length);
}