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

// function declaration
//  главная особенность function declaration - это ее возможность использовать до объявления
//  можно перезаписать
//  внутри мы можем получить доступ к неявной переменной argument
function sum(a, b) {
	return a + b
}

// function Expression
//  такую функцию нельзя переопределить
//  такую функцию нельзя использовать до ее использования
const logHello = function () {
	console.log('Привет')
}

// arrow function
//  такую функцию нельзя использовать до ее использования
//  не имеет доступ к неявной переменной argument
//  нет своего контекста
const logHello2 = () => {}

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

const obj1 = {
	name: 'Алексей',
	age: 20,
}

// два способа копирования объекта

const obj2 = Object.assign({}, obj1)
const obj3 = { ...obj1 }

-----------------------------------------
	// способ объединения объекта
const obj1 = {
	age: 20,
}

const objNew = {
	name: 'Dima',
}

const user = Object.assign({}, obj1, objNew)

-----------------------------------------
	const logGuestInfo = guest => {
	console.log(`
		имя ${guest.name}
		Возраст ${guest.age}
		Дата выезда ${guest.orderInfo?.stayDate?.to ?? 'не указана'}`) // опциональная цепочка, которая помогает 
		// безопасно проверить объект
}

---------------------------------------

const calculator = {
	read() {
		this.a = Number(prompt('Введите значение буквы а'))
		this.b = Number(prompt('Введите значение буквы b'))
	},
	sum() {
		return this.a + this.b
	},
	mul() {
		return this.a * this.b
	},
}

-------------------------------------------
const price = 99.555

console.log('Округление до 0 знаков после запятой', price.toFixed())
console.log('Округление до 3 знака с начала', price.toPrecision(3))
console.log('Приводит число к строке', price.toString(3))

console.log('Случайное число:', Math.random())
console.log('Получение модуля числа -100:', Math.abs(-100))
console.log('Возведение в степень 3 числа 3:', Math.pow(3, 3))
console.log('Получение квадратного корня числа', Math.sqrt(4))
console.log('Получение кубического корня числа', Math.cbrt(8))
console.log('Получение минимального числа', Math.min(-1, 10, 100))
console.log('Получение максимального числа', Math.max(-1, 10, 100))

//Чтобы заработало свойство min с массивом надо перед массивом указать точки
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Math.min(...nums))

console.log(Math.round(12.22)) // округляет число до ближайшего целого
console.log(Math.floor(12.22)) // округляет вниз до ближайшего целого
console.log(Math.ceil(12.22)) // округляет вверх до ближайшего целого
console.log(Math.trunc(12.22)) // округляет до ближайшего целого вниз без учета знака

// -------------------------методы строк
const text = 'Привет, это Алексей'
const name = 'Aleksei'

console.log('Длина строки', name.length)
console.log(name[name.length - 1])
console.log('Получение индекса 0: ', name.at(0))
console.log('Получение строки в верхнем регистре: ', name.toUpperCase(0))
console.log('Получение индекса в нижнем регистре: ', name.toLowerCase(0))
console.log('Избавление от пробелов', name.trim())
console.log('Избавление от пробелов в начале', name.trimStart())
console.log('Избавление от пробелов в конце', name.trimEnd())
console.log(
	'Вернет true или false если найдет подстроку в указанном предложение',
	text.includes('это')
)
console.log(
	'Вернет число с которого начинается, если найдет подстроку',
	text.indexOf('это')
)
console.log(name.startsWith('A'))
console.log(name.endsWith('ei'))
console.log('Возвращает слово указанное в промежутке 0-4', name.substring(0, 4))
console.log('Возвращает слово указанное в промежутке 0-4', name.slice(0, 4))
console.log('Повторяет 4 раза указанное слово', name.repeat(4))
console.log('Заменяет слов', name.replace('Aleksei', 'Дмитрий'))
console.log('Заменяет все вхождение', name.replaceAll('Aleksei', 'Дмитрий'))
console.log('Позволяет разбить массив на строку', text.split(' '))
