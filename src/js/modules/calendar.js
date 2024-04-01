import fetchData from './fetchData.js';

const calendar = () => {
    const rooms = document.querySelectorAll('.roomMainContent');

    rooms.forEach(room => {
        const firstChildClass = room.firstElementChild.className;
        const calendarContainer = document.createElement('div');
        calendarContainer.id = firstChildClass;
        room.appendChild(calendarContainer);

        const months = ['Июнь', 'Июль', 'Август'];
        const daysInMonth = [30, 31, 31];
        const weekdays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

        const calendarDiv = document.createElement('div');
        calendarDiv.classList.add('month-container');
        calendarContainer.appendChild(calendarDiv);

        months.forEach((month, index) => {
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const headerRow = document.createElement('tr');
            weekdays.forEach(weekday => {
                const weekdayHeader = document.createElement('th');
                weekdayHeader.textContent = weekday;
                headerRow.appendChild(weekdayHeader);
            });
            thead.appendChild(headerRow);

            const firstDay = new Date(new Date().getFullYear(), index + 5, 1);
            const startingDay = (firstDay.getDay() + 6) % 7;

            let currentRow = document.createElement('tr');
            for (let i = 0; i < startingDay; i++) {
                const emptyCell = document.createElement('td');
                currentRow.appendChild(emptyCell);
            }

            for (let day = 1; day <= daysInMonth[index]; day++) {
                const cell = document.createElement('td');
                cell.textContent = day;
                currentRow.appendChild(cell);
                if ((day + startingDay) % 7 === 0 || day === daysInMonth[index]) {
                    tbody.appendChild(currentRow);
                    currentRow = document.createElement('tr');
                }
            }

            table.appendChild(thead);
            table.appendChild(tbody);
            const monthDiv = document.createElement('div');
            monthDiv.classList.add('month');
            const monthNameHeader = document.createElement('h3');
            monthNameHeader.textContent = month;
            monthDiv.appendChild(monthNameHeader);
            monthDiv.appendChild(table);
            calendarDiv.appendChild(monthDiv);

            fetchData(function(data) {
                data.forEach(function(item) {
                    let roomName = item.roomName;
                    const startDate = new Date(item.startDate);
                    const endDate = new Date(item.endDate);

                    if (roomName === calendarContainer.id) {
                        const cells = tbody.querySelectorAll('td'); // Используем tbody, чтобы найти ячейки только в текущем месяце
                        cells.forEach(cell => {
                            const day = parseInt(cell.textContent);
                            const cellDate = new Date(firstDay.getFullYear(), index + 5, day);

                            // Проверяем, принадлежит ли день текущему месяцу
                            if (cellDate.getMonth() === index + 5) {
                                // Если день находится в промежутке между startDate и endDate, закрашиваем его красным
                                if (cellDate >= startDate && cellDate <= endDate) {
                                    cell.style.backgroundColor = 'red';
                                }
                            }
                        });
                    }
                });
            });
        });
    });
};

export default calendar;

