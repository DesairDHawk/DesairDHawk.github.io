document.getElementById('loginButton').onclick = () => {
    console.log("Кнопка нажата"); // Проверка клика
    
    // Явно открываем окно авторизации в основном потоке
    let loginWindow = window.open(`https://oauth.mail.ru/login?client_id=790005&response_type=token&redirect_uri=${encodeURIComponent('https://desairdhawk.github.io/receiver.html')}&scope=mail`, 'Mail.ru OAuth', 'width=600,height=400');
    
    if (!loginWindow || loginWindow.closed || typeof loginWindow.closed === 'undefined') { 
        alert("Окно авторизации было заблокировано браузером. Разрешите всплывающие окна.");
    }
};
