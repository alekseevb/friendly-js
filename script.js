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
console.log('цикл сейчас начнется')

for (let i = 0; i < 10; i++) {
	console.log(i)

	if (i === 3) {
		console.log('Цикл прерван досрочно')
		break
	}
}

console.log('цикл закончился сейчас начнется другой цикл')

for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		continue
	}

	console.log(i)
}

// локальная сущность видит, что происходит снаружи, но то что находится 
// снаружи не видно, что находится внутри

function getSecretMessage(name) {
	if (!name) return // с помощью этой конструкции делают проверку на введенные данные
	return `О, я знаю, что ты тот самый ${name}`
}

console.log(getSecretMessage())

/*
 * Как правильно называть функцию:
 * get - получить какое-то значение
 * set - установить какое-то значение
 * create - создать какую-то сущность
 * update - обновить какую-то сущность
 * delete - удалить какую-то сущность
 * show - показать что-то
 * hide - скрыть что-то
 * search - найти что-то
 * calc - вычислить что-то
 * check - проверить что-то
 */
