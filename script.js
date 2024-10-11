const clientId = '790005'; // Замените на ваш ID приложения
const redirectUri = 'YOUR_REDIRECT_URI/receiver.html'; // Убедитесь, что он указывает на receiver.html
const scope = 'mail';

// Приватный ключ:bfa22f24f576bf1f295aae84a6486ff0
// Секретный ключ:73fcb6019ea28c1e3bb0970a102c5a18

document.getElementById('loginButton').onclick = () => {
    const authUrl = `https://oauth.mail.ru/login?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;
    window.location.href = authUrl;
};

window.onload = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        getEmails(token);
    }
};

const getEmails = async (accessToken) => {
    const response = await fetch('https://api.mail.ru/mail/message/inbox', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        displayEmails(data);
    } else {
        console.error('Ошибка при получении писем:', response.status);
    }
};

const displayEmails = (data) => {
    const mailsDiv = document.getElementById('mails');
    mailsDiv.innerHTML = '';
    data.messages.forEach(msg => {
        const emailElement = document.createElement('div');
        emailElement.textContent = `Тема: ${msg.subject}, От: ${msg.from}`;
        mailsDiv.appendChild(emailElement);
    });
};
