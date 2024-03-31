const fetchData = (callback) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/server.php", true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var data = JSON.parse(this.responseText);
            callback(data); // Вызываем колбэк с полученными данными
        }
    };
}

export default fetchData;
