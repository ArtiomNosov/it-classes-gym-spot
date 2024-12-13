fetch('json/lublinopf.json')
    .then(response => {

        if (!response.ok) {
            throw new Error('БД не найдена!');
        }

        return response.json();
    })
    .then(data => {
        const container = document.getElementById('card-container');
        data.forEach(item => {
            const card = createCard(item);
            container.className = 'container'
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });

// Функция для создания карточки
function createCard(item) {
    // Создаем элементы для карточки
    const card = document.createElement('div');
    const photo = document.createElement('img');
    const type = document.createElement('h2');
    const adres = document.createElement('h3');
    const opisanie = document.createElement('h4');
    

    // Добавляем классы и Contentконтент
    card.className = 'card';
    type.textContent = item.type
    adres.textContent = item.adres;
    opisanie.textContent = item.opisanie;
    photo.src = item.photo;;

    // Структурируем и добавляем содержимое
    card.appendChild(photo);
    card.appendChild(type);
    card.appendChild(adres);
    card.appendChild(opisanie);

    card.addEventListener('click', () => {
        window.location.href = item.link; 
    });

    return card;
}