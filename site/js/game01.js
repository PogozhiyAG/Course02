function game01(){
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