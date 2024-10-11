mailru.loader.require('api', function() {
    // Инициализация приложения Mail.ru
    mailru.connect.init({
        api_id: '790005', // Замените на ваш ID приложения
        domain: 'https://desairdhawk.github.io'
    });

    // Обработка кнопки входа
    document.getElementById('loginButton').onclick = () => {
        console.log("Кнопка нажата"); // Проверка клика
        // Открываем окно авторизации
        mailru.connect.login(function(session) {
            if (session.is_app_user) {
                // Если успешная авторизация, получаем данные пользователя
                console.log("Пользователь авторизован");
                getUserInfo();
            } else {
                console.error('Пользователь не авторизован в приложении.');
            }
        });
    };

    // Функция для получения информации о пользователе
    function getUserInfo() {
        mailru.common.users.getInfo(function(result) {
            console.log('Информация о пользователе:', result[0]);
            displayUserInfo(result[0]);
        });
    }

    // Функция для отображения информации о пользователе
    function displayUserInfo(userInfo) {
        const mailsDiv = document.getElementById('mails');
        mailsDiv.innerHTML = `<p>Имя пользователя: ${userInfo.first_name} ${userInfo.last_name}</p>`;
    }
});
