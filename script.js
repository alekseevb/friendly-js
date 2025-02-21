// в языке программировании есть 8 типов данных
// 6 примитивных
const name = 'Aleksandr'
const age = 28
const isDeveloper = true
const power = 99999999999999n
const sign = Symbol()
const something = undefined

// два специальных
const user = {
	login: '123',
	password: 'qwerty',
}

const data = null

// Преобразуются в false

console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(''))
console.log(Boolean(null))
console.log(Boolean(undefined))

// Все остальные значения - в true

const message = year === 2023 ? 'Начал учиться' : 'Странный год' //если нужно записать в переменную значение, которое зависит 
// от какого-то условия обычно ее записывают с помощью тернарного оператора

// как вариант для перевода полученного значения от пользовотеля в числовой тип данных можно использовать не функцию Number()
// а унарный оператор +
const userAge = +prompt('how old are you?')

// continue - если у нас есть условие и мы не хотим, чтобы цикл прерывался
// break - если мы хотим досрочно прервать выполнение цикла
