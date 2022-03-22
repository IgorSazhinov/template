

function createContentCard(movie) {
    const content = document.querySelector('.content');
    for (let i = 0; i < movie.length; i++) {
        const newBox = document.createElement("div");
        newBox.className = 'content__card';
        newBox.innerHTML = `
            <div class="imgBox">
                <img src=${movie[i].img} alt="обложка фильма">
                <button class="imgBox__play">
                    <img src="img/6.png" alt="">
                </button>
            </div>
            <div class="content__text">
                <h2>${movie[i].title}</h2>
                <p>${movie[i].text}</p>
            </div>
            `;
        content.appendChild(newBox);
    }
}

let movie = [ // переменная для теста
    {
        img: '/img/1.png',
        title: 'Круэлла',
        text: `Предыстория экстравагантной и коварной Круэллы Де Виль из диснеевской классики «101 далматинец». В 1970-х молодая Эстелла, которой только предстоит стать злодейкой, начинает покорять мир британской моды. Она знакомится с баронессой фон Хельман, главой престижного модного дома, и эта встреча становится началом восхождения Круэллы – тёмной стороны личности Эстеллы, которая была с ней с самого детства.

        Юная Эстелла Миллер – творческая девочка с хорошим вкусом, которая интересуется модой и мечтает стать дизайнером одежды. У Эстеллы есть тёмная сторона – её жестокая и скандальная версия, которую мама девочки шутливо называет Круэллой. Однажды проблемы в школе вынуждают Кэтрин с дочерью переехать в Лондон, но по дороге женщина погибает в результате несчастного случая, и Эстелла остаётся сиротой.
        
        Через десять лет выросшая Эстелла, которой всё же удалось добраться до столицы, работает уборщицей в модном универмаге. Она продолжает заниматься дизайном одежды, и однажды судьба сводит девушку с её кумиром – знаменитой баронессой фон Хельман. Это знакомство позволяет Эстелле приблизиться к своей мечте о карьере дизайнера, но вскоре героиня понимает, что фон Хельман хранит множество тёмных секретов. Когда дружба двух талантливых женщин превращается во вражду, на помощь Эстелле приходит её альтер-эго – дерзкая и смелая Круэлла, которая готова на всё, чтобы добиться своего и победить.
        
        Приглашаем поклонников стильных и остроумных историй посмотреть онлайн фильм «Круэлла», где главную роль исполнила великолепная Эмма Стоун.
        
        Приглашаем посмотреть фильм «Круэлла» в нашем онлайн-кинотеатре в хорошем HD качестве. Приятного просмотра!`,
        url: 'https://www.youtube.com/'
    },
    {
        img: '/img/3.png',
        title: 'Гарри Поттер. 20 лет спустя',
        text: `Сказка, в которую мы поверили: «Гарри Поттер» снова собирает всех, кто стал частью большого волшебного мира. Специальный эпизод – это красивый и теплый праздник в Хогвартсе, открывающем двери для старых друзей в честь 20-летия первого фильма «Гарри Поттер и философский камень». На вечер магии и чудесных воспоминаний приглашены звезды и создатели франшизы, а также миллионы поклонников «поттерианы» со всего света. Присоединяйтесь к нам!

        По знакомому маршруту – от платформы 9¾ до Большого зала школы Хогвартс – прибывают повзрослевшие «выпускники»: Дэниэл Рэдклифф, Руперт Гринт и Эмма Уотсон вместе со своими друзьями и старшим поколением волшебников. В проекте также приняли участие режиссеры всех частей: Крис Коламбус, Альфонсо Куарон, Майк Ньюэлл, Дэвид Йейтс. Кроме ностальгического путешествия, трогательного воссоединения и искренних признаний, спецэпизод готовит для зрителей множество сюрпризов, подарков и по-настоящему волшебных мгновений.
        
        Встречаемся в Хогвартсе на Новый год: приглашаем посмотреть онлайн фильм-праздник «Гарри Поттер 20 лет спустя: Возвращение в Хогвартс».
        
        Приглашаем посмотреть фильм «Гарри Поттер 20 лет спустя: Возвращение в Хогвартс» в нашем онлайн-кинотеатре в хорошем HD качестве. Приятного просмотра!`,
        url: 'https://www.youtube.com/'
    },
    {
        img: '/img/2.png',
        title: 'Мстители Финал',
        text: `Команда Мстителей в последний раз противостоит самому могущественному злодею во Вселенной Таносу. Ради победы им придется объединить силы и выложить, наконец, все припрятанные козыри. Эпохальный блокбастер братьев-режиссеров Руссо «Мстители: Финал» завершает историю о подвигах старой гвардии супергероев в исполнении Роберта Дауни-младшего, Криса Эванса, Скарлетт Йоханссон и других. Легендарная команда одержала свою последнюю фантастическую победу, побив рекорды кассовых сборов за всю историю кино.

        Мир опустел после триумфа Таноса. Команда Мстителей практически развалилась. Одни исчезли с лица земли, другие – потеряли самых близких, а третьи – начали новую жизнь, пытаясь сбежать от воспоминаний. Но этот побег был заведомо обречен: спустя пять лет после катастрофы Тони Старк, Капитан Америка, Соколиный глаз, Черная вдова, Халк и Тор воссоединяются, чтобы всё исправить и взять судьбу мира в свои надежные руки.
        
        Приглашаем посмотреть главный супергеройский фильм 2019 года «Мстители: Финал» в нашем онлайн-кинотеатре.
        
        Приглашаем посмотреть фильм «Мстители: Финал» в нашем онлайн-кинотеатре в хорошем HD качестве. Приятного просмотра!`,
        url: 'https://www.youtube.com/'
    }
];


createContentCard(movie);
createContentCard(movie);
createContentCard(movie);
createContentCard(movie);

