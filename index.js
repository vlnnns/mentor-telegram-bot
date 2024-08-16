const { Telegraf } = require('telegraf');

const bot = new Telegraf('7425989292:AAGyJDwAv5LLy-cRYsLeCgpy8pfnieRAWT4');

bot.telegram.setMyCommands([
    { command: 'start', description: 'Запустити бота та отримати привітання' },
    { command: 'help', description: 'Отримати інформацію про доступні команди' },
    { command: 'daily', description: 'Отримати планове повідомлення' },
    { command: 'info', description: 'Отримати інформацію про бота' }
]);


bot.start((ctx) => {
    const userName = ctx.message.from.first_name || ctx.message.from.username || "друже";
    ctx.reply(`Привіт, ${userName}! Вітаємо вас у нашому боті!`, { parse_mode: 'Markdown' });
    scheduleMinuteMessage(ctx.chat.id);
});


bot.command('help', (ctx) => {
    ctx.reply('Це список команд, які ви можете використовувати:\n/start - Запустити бота\n/help - Отримати допомогу\n/daily - Отримати планове повідомлення\n/info - Отримати інформацію про бота');
});


bot.command('daily', (ctx) => {
    const message = getNextMessage();
    ctx.reply(message, { parse_mode: 'Markdown' });
});


bot.command('info', (ctx) => {
    ctx.reply('Цей бот створений для надсилання щоденних планових повідомлень та підтримки корисних команд.');
});

const dailyMessages = [
    "*Добрий ранок!* ☀️\n\nНе забудьте почати свій день з позитиву та усмішки! 😊",
    "🎯 *Ваші цілі на сьогодні:*\n1. Виконати завдання.\n2. Залишатися на зв'язку.\n3. Бути на хвилі успіху!",
    "_Пам'ятайте_, що успіх складається з маленьких кроків. Крок за кроком, і ви досягнете вершини! 🏔",
    "Зробіть сьогодні щось, що наблизить вас до вашої мрії. *Вірте в себе!* 💪",
    "Ви чудово справляєтеся! Продовжуйте в тому ж дусі. 🔥",
    "*Сьогоднішній план:*\n- Працювати над собою.\n- Розвивати навички.\n- Бути щасливим. 🌈",
    "Кожен день – це новий шанс. Використовуйте його мудро! 📅",
    "Будьте сміливими, будьте креативними, будьте собою. *Світ чекає на вас!* 🌍",
    "Пам'ятайте: успіх приходить до тих, хто не здається. *Ви на правильному шляху!* 🚀",
    "*Дякуємо за вашу відданість і працю!* Сьогодні – ваш день! 🌟"
];

let messageIndex = 0;

const getNextMessage = () => {
    const message = dailyMessages[messageIndex];
    messageIndex = (messageIndex + 1) % dailyMessages.length;
    return message;
};

const sendDailyMessage = (chatId) => {
    const message = getNextMessage();
    bot.telegram.sendMessage(chatId, message, { parse_mode: 'Markdown' });
};

const scheduleMinuteMessage = (chatId) => {

    setInterval(() => {
        sendDailyMessage(chatId);
    }, 10 * 1000); // Кожні 60 секунд
};


bot.launch();