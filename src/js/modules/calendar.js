import fetchData from './fetchData.js';

const calendar = () => {
    const monthsData = [
        { name: 'Июнь', days: 30 },
        { name: 'Июль', days: 31 },
        { name: 'Август', days: 31 }
    ];

    document.querySelectorAll('.roomMainContent').forEach(room => {
        const firstChildClass = room.firstElementChild.className;
        const calendarContainer = document.createElement('div');
        calendarContainer.id = firstChildClass;
        room.appendChild(calendarContainer);

        const calendarDiv = document.createElement('div');
        calendarDiv.classList.add('month-container');
        calendarContainer.appendChild(calendarDiv);

        monthsData.forEach(({ name, days }, index) => {
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const tbody = document.createElement('tbody');

            const headerRow = document.createElement('tr');
            ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].forEach(weekday => {
                const weekdayHeader = document.createElement('th');
                weekdayHeader.textContent = weekday;
                headerRow.appendChild(weekdayHeader);
            });
            thead.appendChild(headerRow);

            const firstDay = new Date(new Date().getFullYear(), index + 5, 1);
            const startingDay = (firstDay.getDay() + 6) % 7;

            let currentRow = document.createElement('tr');
            for (let i = 0; i < startingDay; i++) {
                currentRow.appendChild(document.createElement('td'));
            }

            for (let day = 1; day <= days; day++) {
                const cell = document.createElement('td');
                cell.textContent = day;
                currentRow.appendChild(cell);
                if ((day + startingDay) % 7 === 0 || day === days) {
                    tbody.appendChild(currentRow);
                    currentRow = document.createElement('tr');
                }
            }

            table.appendChild(thead);
            table.appendChild(tbody);
            const monthDiv = document.createElement('div');
            monthDiv.classList.add('month');
            const monthNameHeader = document.createElement('h3');
            monthNameHeader.textContent = name;
            monthDiv.appendChild(monthNameHeader);
            monthDiv.appendChild(table);
            calendarDiv.appendChild(monthDiv);

            fetchData(data => {
                data.forEach(item => {
                    const { roomName, startDate, endDate } = item;
                    const startDateObj = new Date(startDate.replace(/-/g, '/'));
                    const endDateObj = new Date(endDate.replace(/-/g, '/'));
                    if (roomName === calendarContainer.id) {
                        tbody.querySelectorAll('td').forEach(cell => {
                            const day = parseInt(cell.textContent);
                            const cellDate = new Date(firstDay.getFullYear(), index + 5, day);
                            if (cellDate.getMonth() === index + 5 && cellDate >= startDateObj && cellDate <= endDateObj) {
                                cell.style.backgroundColor = 'red';
                            }
                        });
                    }
                });
            });
        });
    });
};

export default calendar;
