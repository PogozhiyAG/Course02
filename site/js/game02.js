function game02(){
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    alert("Запомните слова:\n" + words);

    const first = prompt('Чему равнялся первый элемент массива?');
    const last = prompt('Чему равнялся последний  элемент массива?');
    
    const rightFirst = words[0].toLowerCase() === first.toLowerCase();
    const rightLast = words[words.length - 1].toLowerCase() === last.toLowerCase();

    if(rightFirst && rightLast){
        alert('Молодец! Правильно!');
    } else if(rightFirst || rightLast){
        alert('Вы были близки к победе!!');
    } else{
        alert('Эх, неверно =(');
    }
}