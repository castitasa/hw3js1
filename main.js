let num = prompt('Введите число');

function func1() {
    if (num === '') {
        alert('Вы ничего не ввели')
    } else if (num == 0) {
        alert('0')
    } else if (num === null) {
        alert('Вы нажали на отмену')
    } else if (num % 2 == 0) {
        alert('Число четное')
    } else if (num % 2 == 1) {
        alert('Число нечетное')
    } else {
        alert('Введите только числа')
    }
}

func1()