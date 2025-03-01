//-----------------------------------------------------try catch / throw / finally -----------------
console.log('Начало кода...')

try {
	//пробуем выполнить код
	const names = ['Александр', 'Михаил', 'Василий']

	names1.forEach(name => {
		console.log('Имя:', name)
	})
} catch (error) {
	//обрабатываем возникшую ошибку
	console.log('Возникла ошибка:', error)
}

console.log('Конец кода...')
