var X = 0;
var Y = 0;
var mouse = { x: 0, y: 0 };

window.addEventListener("mousemove", function (event) {
  // смещение в центр
  mouse.x = event.clientX - circle.offsetWidth / 2;
  mouse.y = event.clientY - circle.offsetHeight / 2;
});

function move() {
  X += (mouse.x - X) * 0.1;
  Y += (mouse.y - Y) * 0.1;
  circle.style.transform = `matrix(1, 0, 0, 1, ${X}, ${Y})`;
  requestAnimationFrame(move);
}

move();

// Смена темы
let styleMode = localStorage.getItem("styleMode");
const styleToggle = document.querySelector("#switcher");

const enableDarkStyle = () => {
  document.body.classList.add("darkstyle");
  localStorage.setItem("styleMode", "dark");
};

const disableDarkStyle = () => {
  document.body.classList.remove("darkstyle");
  localStorage.setItem("styleMode", null);
};

styleToggle.addEventListener("click", () => {
  styleMode = localStorage.getItem("styleMode");
  if (styleMode !== "dark") {
    enableDarkStyle();
  } else {
    disableDarkStyle();
  }
});

if (styleMode === "dark") {
  enableDarkStyle();
}

// Получаем кнопки и элементы с товарами
const showWorksBtn = document.getElementById("showWorks");
const showFormsBtn = document.getElementById("showForms");
const works = document.querySelectorAll(".work");
const forms = document.querySelectorAll(".form");
const buttons = document.querySelectorAll(".catportfolio_btn");

function setActiveButton(activeButton) {
  buttons.forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
}

function showWorks() {
  works.forEach((works) => works.classList.remove("hidden"));
  forms.forEach((form) => form.classList.add("hidden"));
  setActiveButton(showWorksBtn);
}

function showForms() {
  forms.forEach((form) => form.classList.remove("hidden"));
  works.forEach((works) => works.classList.add("hidden"));
  setActiveButton(showFormsBtn);
}

showWorksBtn.addEventListener("click", showWorks);
showFormsBtn.addEventListener("click", showForms);

showWorks();

//==========================
const text = "I develop digital solutions.";
const typingSpeed = 200; // Скорость печати (мс)
const deletingSpeed = 100; // Скорость удаления (мс)
const delayBetween = 3000; // Задержка между печатью и удалением (мс)

let charIndex = 5;
let isDeleting = false;
const typedTextElement = document.querySelector(".typed-text");

function typeText() {
  if (!isDeleting) {
    typedTextElement.textContent = text.slice(0, charIndex++);
    if (charIndex > text.length) {
      isDeleting = true;
      setTimeout(typeText, delayBetween); // Пауза перед удалением
    } else {
      setTimeout(typeText, typingSpeed);
    }
  } else {
    typedTextElement.textContent = text.slice(0, --charIndex);
    if (charIndex === 10) {
      isDeleting = false;
      setTimeout(typeText, delayBetween); // Пауза перед повторной печатью
    } else {
      setTimeout(typeText, deletingSpeed);
    }
  }
}

typeText();

const translations = {
  en: {
    greeting: "Hello world.",
    intro: "My name is ",
    name: "Anatoliy.",
    description:
      "I work with entrepreneurs and company managers who want to find new clients, present themselves as a modern and successful company, use a new type of advertising, or simply update their old website with a design.",
  },
  ua: {
    greeting: "Привіт, ",
    intro: "Мене звати ",
    name: "Анатолiй",
    description:
      "Я працюю з підприємцями та керівниками компаній, які хочуть знайти нових клієнтів, представити себе як сучасну та успішну компанію, використати новий вид реклами або просто оновити дизайн свого старого сайту.",
  },
  ru: {
    greeting: "Здравствуй, мир.",
    intro: "Меня зовут ",
    name: "Анатолий",
    description:
      "Я работаю с предпринимателями и руководителями компаний, которые хотят найти новых клиентов, представить себя как современную и успешную компанию, использовать новый вид рекламы или просто обновить свой старый сайт, изменив дизайн.",
  },
};
const switchLangButtons = document.querySelectorAll(".swithlang_btn");

function setLanguage(lang, activeButton) {
  switchLangButtons.forEach((button) => button.classList.remove("is-active"));
  activeButton = activeButton.classList.add("is-active");

  // Обновление текста на странице в зависимости от выбранного языка
  document.getElementById("greeting").textContent = translations[lang].greeting;
  document.getElementById("intro").textContent = translations[lang].intro;
  document.getElementById("name").textContent = translations[lang].name;
  document.getElementById("profession").textContent =
    translations[lang].profession;
  document.getElementById("description").textContent =
    translations[lang].description;

  // Сохранение выбранного языка в localStorage для сохранения состояния
  localStorage.setItem("preferredLanguage", lang);
}

// Проверка сохраненного языка при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
  const activeButton = Array.from(switchLangButtons).find(
    (button) => button.textContent.toLowerCase() === savedLanguage
  );

  if (activeButton) {
    setLanguage(savedLanguage, activeButton);
  } else {
    setLanguage("en", switchLangButtons[0]); // По умолчанию английский
  }
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("root").style.display = "block";
  }, 1500); // 3 секунды
});
