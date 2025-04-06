document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Language translations for both Ukrainian and English
        const translations = {
            ua: {
                sorting: "СОРТУВАННЯ",
                eco_shop: "ЕКО-МАГАЗИН",
                give_away: "ДАРУЙ РЕЧІ",
                eco_projects: "ЕКО-ПРОЄКТИ",
                news: "НОВИНИ",
                solutions: "РІШЕННЯ ДЛЯ ОРГАНІЗАЦІЙ",
                main_text: "Приєднуйтеся до нашого креативного співтовариства",
                who_are_we: "Хто ми?",
                who_we_are_description1:"Вітаємо вас у нашій творчій та екологічно-орієнтованій спільноті дизайнерів! Тут ми об'єднуємо силу для створення унікальних та інноваційних проектів,використовуючи вторинну сировину як основу нашого творчого процесу.",
                who_we_are_description2: "Наша спільнота складається з талановитих та амбіційних дизайнерів, серед яких є студенти, професіонали та експерти в галузі вторинної переробки. Ми розмаїті за спеціалізацією,але нас єднає спільна любов до дизайну та прагнення робити світ кращим через творчість.",
                text1: "Долучайся до майбутніх воркшопів або створюй власні",
                p1: "Дата: 12.02.2025",
                h31: "Зелений дизайн",
                p2: "Дата: 22.02.2025",
                h32: "Цікаві речі для малечі",
                p3: "Дата: 15.03.2025",
                vision: "Наша спільнота",  
                mission: "Місія Еко-пікніка",  
                goals: "Цілі Еко-пікніку",   
                support_button_footer: "Підтримати",
                lang: "UA"
            },
            en: {
                sorting: "SORTING",
                eco_shop: "ECO-SHOP",
                give_away: "GIVE AWAY ITEMS",
                eco_projects: "ECO-PROJECTS",
                news: "NEWS",
                solutions: "SOLUTIONS FOR ORGANIZATIONS",
                main_text: "Join our creative community",
                who_are_we: "Who are we?",
                who_we_are_description1: "Welcome to our creative and eco-friendly community of designers! Here we join forces to create unique and innovative projects, using recycled materials as the basis of our creative process.",
                who_we_are_description2: "Our community consists of talented and ambitious designers, including students, professionals, and recycling experts. We are diverse in our specializations, but we are united by a shared love of design and a desire to make the world a better place through creativity.",
                text1: "Join upcoming workshops or create your own",
                p1: "Date: 12.02.2025",
                h31: "Green design",
                p2: "Date: 22.02.2025",
                h32: "Interesting things for kids",
                p3: "Date: 15.03.2025",
                vision: "Our community",  
                mission: "Who are we?",  
                goals: "Eco-Picnic Goals",    
                support_button_footer: "Support",
                lang: "ENG"
            }
        };
    const langToggle = document.getElementById("lang-toggle");
    const translateElements = document.querySelectorAll("[data-translate]");

    langToggle.addEventListener("click", () => {
        const currentLang = langToggle.textContent.trim();
        const newLang = currentLang === "UA" ? "en" : "ua";

        langToggle.textContent = translations[newLang].lang;

        translateElements.forEach(element => {
            const translationKey = element.getAttribute("data-translate");
            if (translations[newLang][translationKey]) {
                element.textContent = translations[newLang][translationKey];
            }
        });
    });
});