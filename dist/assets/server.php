<?php
$servername = "127.0.0.1:3306"; // Имя сервера базы данных
$username = "Semen"; // Имя пользователя базы данных
$password = "Semen"; // Пароль пользователя базы данных
$database = "calendar"; // Имя базы данных

// Создаем соединение
$conn = new mysqli($servername, $username, $password, $database);

// Проверяем соединение
if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

// SQL запрос для выборки данных
$sql = "SELECT roomName, startDate, endDate FROM input";

$result = $conn->query($sql);

$data = array(); // Создаем массив для хранения данных

if ($result->num_rows > 0) {
    // Выводим данные из каждой строки
    while($row = $result->fetch_assoc()) {
        // Добавляем данные в массив
        $data[] = $row;
    }
} else {
    echo "0 результатов";
}
$conn->close();

// Возвращаем данные в формате JSON
echo json_encode($data);
?>