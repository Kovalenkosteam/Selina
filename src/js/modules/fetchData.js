const fetchData = () =>{
	// Создаем объект XMLHttpRequest
	var xhr = new XMLHttpRequest();
	// Устанавливаем метод запроса и URL
	xhr.open("GET", "/assets/server.php", true);
	// Отправляем запрос
	xhr.send();

	// Обработчик события изменения состояния запроса
	xhr.onreadystatechange = function () {
		// Если состояние запроса - "Готово" и статус запроса - "Успех"
		if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
			// Парсим JSON ответ
			var data = JSON.parse(this.responseText);
			// Выводим данные в консоль
			data.forEach(function (item) {
				console.log("Room: " + item.roomName + " - Start: " + item.startDate + " - End: " + item.endDate);
			});
		}
	};
}
export default fetchData;
