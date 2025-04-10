const responses = {
  привет: "Привет! Чем могу помочь?",
  "как дела": "У меня всё отлично! А у вас?",
  "что делаешь": "Я здесь, чтобы отвечать на ваши вопросы!",
  "можешь мне помочь": "Конечно! Задайте ваш вопрос.",
  "что ты знаешь об экологии":
    "Экология — это наука об окружающей среде. Начните сортировать мусор и сокращать пластиковые отходы!",
  "как сократить отходы":
    "Используйте многоразовые сумки, бутылки и откажитесь от одноразового пластика.",
  "почему важно сохранять природу":
    "Сохранение природы помогает поддерживать баланс экосистем и улучшает качество жизни.",
  пока: "До свидания! Хорошего дня!",
  "ты лох": "сам лох",
  "что ты умеешь": "Я умею поддерживать диалог на тему экологии",
  дастан: "дастан ты красавчик ваще базар жок бала ",
  "ты за реалми или барселон":
    "барселон это лутшая команда а тот кто за реал тот вылетый лох",
};

function sendMessage() {
  const userInput = document
    .getElementById("userInput")
    .value.trim()
    .toLowerCase();
  const chatMessages = document.getElementById("chatMessages");

  if (userInput) {
    const userMessage = document.createElement("div");
    userMessage.className = "message user";
    userMessage.textContent = userInput;
    chatMessages.appendChild(userMessage);

    const botMessage = document.createElement("div");
    botMessage.className = "message bot";
    botMessage.textContent =
      responses[userInput] ||
      "Извините, я не понимаю этого вопроса. Попробуйте задать что-то другое!";
    chatMessages.appendChild(botMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    document.getElementById("userInput").value = "";
  }
}
