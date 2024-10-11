// Инициализация приложения Mail.ru
mailru.connect.init({
    // Замените на ваш ID приложения, который вы получили при регистрации в Mail.ru
    api_id: '790005', 
    domain: 'https://desairdhawk.github.io'
});

// Обработка кнопки входа
document.getElementById('loginButton').onclick = () => {
    // Открываем окно авторизации
    mailru.connect.login(function(session) {
        if (session.is_app_user) {
            // Если успешная авторизация, получаем данные пользователя
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
