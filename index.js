const {Telegraf, Input} = require('telegraf');
const path = require('path');

const bot = new Telegraf('7425989292:AAGyJDwAv5LLy-cRYsLeCgpy8pfnieRAWT4');

bot.telegram.setMyCommands([
    {command: 'start', description: 'Запустить бота и получить приветствие'},
]);

bot.start((ctx) => {
    const userName = ctx.message.from.first_name || ctx.message.from.username || "друг";
    ctx.reply(`Приветствую, ${userName}`, {parse_mode: 'Markdown'});
    scheduleDailyMessage(ctx.chat.id);
});


const dailyMessages = [
    {
        text: "Моя дорогая, и прежде, чем ты перейдешь к изучению SOS курса «Женщина нового времени»\n" +
            "Ознакомься с программой курса\n" +
            "\n" +
            "Это курс я создала специально для тебя! ✨\n" +
            "Ты знаешь, как бывает, когда опускаются руки... Каждый день со всех сторон твердят об успехе, миллионах, идеальных отношениях. И в какой-то момент начинаешь сомневаться в себе, задаваясь вопросом: «А почему у меня не так?!» 🤔\n" +
            "\n" +
            "Как стать той самой женщиной, которая успешна, зарабатывает столько, сколько хочет, и живет в отношениях, о которых мечтала? 💪💖\n" +
            "\n" +
            "Я сама прошла через это. Однажды я потеряла всё и тоже опустила руки. Но, несмотря на это, я нашла в себе силы и изменила свою жизнь! 🌟 У меня получилось, и у тебя получится!\n" +
            "\n" +
            "Именно поэтому я создала SOS курс «Женщина нового времени», чтобы помочь тебе пройти этот путь! 🚀",
    },
    {
        text: "Урок 1.\n" +
            "\n" +
            " «Знакомство с собой»\n" +
            "\n" +
            "Видеоурок посвящен внутреннему состоянию и внешнему миру. \n" +
            "А так же, практическим заданиям, где расчищаем своё пространство, для новой энергии. \n\n" +
            "https://youtu.be/-pH6WY0LeY4?si=5ZcLiyvkGdPa7SHJ",
    },
    {
        text:"Урок 2.\n" +
            "«Путь Героя»\n" +
            "\n" +
            "Как пройти путь от неуверенной в себе к Женщине нового времени.\n" +
            "Обсуждаем, почему так важно в работе над своим внутренним состоянием и личностным ростом помнить все этапы пути. " +
            "Этап «мясорубки» и Этап «победы» над самой собой. Учимся благодарить и выполнять практику благодарности правильно. \n" +
            "https://youtu.be/2HQ3jWX7YCo?si=-gVhBwzayeIFBLIe",
    },

    { text: "Урок 3.\n" +
            "Говорим об очень важной теме «Обесценивания».\n" +
            "\n" +
            "Причины чувства того, что Я-не ценна в этом мире. " +
            "Первопричина  рождения чувства обесценивания и как пройти этот путь, после которого почувствуешь себя ценной, значимой и уверенной в себе. Выполнение практических заданий. Медитативные практики. \n" +
            "https://youtu.be/Hwq7WYdNAkc?si=3R8DESVgSbJmJl1n"
    },

    {text: "Урок 4.\n" +
            "«Перестань спешить.Останавливаемся. Заземляемся» \n" +
            "\n" +
            "На этом видеоуроке ты поймешь, как держать фокус внимания на себе! Пока ты будешь сливать энергию на то, что не играет никакой роли в твоей жизни, особых изменений не жди!" +
            "Изучаем законы «Женщины нового времени».  Подключаем к своим практическим заданиям, авторскую Медитацию «Я-Женщина». После прослушивания медитации, у тебя не останется сомнений о том, что ты та самая «Женщина»! \n" +
            "https://youtu.be/hPYBI56T1wY?si=obDuZyZyK0nAu1EW"
    },

    {text: "Урок 5.\n" +
            "Свидание с Женщиной нового времени. \n" +
            "Аскеза. \n" +
            "\n" +
            "Ты прошла этот путь! Я в тебя верила!," +
            "ТЫ - Женщина нового времени! Подводим итоги от полученных результатов. Берем Аскезу на выполнение желания. " +
            "Правила постановки Аскезы. Как брать Аскезу и какие последствия от невыполнения прийдется заплатить." +
            "https://youtu.be/BVvJQjMakl0?si=9LQP9RgVrzt27GNw"
    }


];

const dailyImages = [
    [path.join(__dirname, 'img', '1.jpg')],
    [
        path.join(__dirname, 'img', '1-1.png'),
        path.join(__dirname, 'img', '1-2.png'),
        path.join(__dirname, 'img', '1-3.png'),
        path.join(__dirname, 'img', '1-4.png')
    ],
    [
        path.join(__dirname, 'img', '3-1.png'),
        path.join(__dirname, 'img', '3-2.png'),
        path.join(__dirname, 'img', '3-3.png'),
        path.join(__dirname, 'img', '3-4.png'),
        path.join(__dirname, 'img', '3-5.png'),
        path.join(__dirname, 'img', '3-6.png'),

    ],
    [
        path.join(__dirname, 'img', '33-1.png'),
        path.join(__dirname, 'img', '33-2.png'),
        path.join(__dirname, 'img', '33-3.png'),
        path.join(__dirname, 'img', '33-4.png'),
        path.join(__dirname, 'img', '33-5.png'),
        path.join(__dirname, 'img', '33-6.png'),

    ],
    [
        path.join(__dirname, 'img', '4-0.png'),
        path.join(__dirname, 'img', '4-1.png'),
        path.join(__dirname, 'img', '4-2.png'),
        path.join(__dirname, 'img', '4-3.png'),
        path.join(__dirname, 'img', '4-4.png'),
        path.join(__dirname, 'img', '4-5.png'),
    ],
    [
        path.join(__dirname, 'img', '5-1.png'),
        path.join(__dirname, 'img', '5-2.png'),
        path.join(__dirname, 'img', '5-3.png'),
        path.join(__dirname, 'img', '5-4.png'),
    ]

];

let messageIndex = 0;
let imageIndex = 0;

const getNextMessage = () => {
    const message = dailyMessages[messageIndex];
    messageIndex = (messageIndex + 1) % dailyMessages.length;
    return message;
};

const getNextImages = () => {
    const images = dailyImages[imageIndex];
    imageIndex = (imageIndex + 1) % dailyImages.length;
    return images;
};

const sendDailyMessage = async (chatId) => {
    const message = getNextMessage();
    const images = getNextImages();

    await bot.telegram.sendMessage(chatId, message.text, {parse_mode: 'Markdown'});

    for (const image of images) {
        await bot.telegram.sendPhoto(chatId, {source: image});
    }
};

const scheduleDailyMessage = (chatId) => {
    // Отправка первого сообщения сразу после старта
    sendDailyMessage(chatId);

    const now = new Date();
    const next9AM = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        9, 0, 0, 0
    );

    if (now > next9AM) {
        // Если текущее время позже 9 утра, запланируйте на следующий день
        next9AM.setDate(next9AM.getDate() + 1);
    }

    const timeUntil9AM = next9AM - now;

    setTimeout(() => {
        sendDailyMessage(chatId);

        // Установите интервал для ежедневного отправления в 9 утра
        setInterval(() => {
            sendDailyMessage(chatId);
        }, 24 * 60 * 60 * 1000);
    }, timeUntil9AM);
};


bot.launch();
