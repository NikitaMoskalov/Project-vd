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
                main_text: "Екологія — це не лише слово, це дія!",
                who_are_we: "Хто ми?",
                who_we_are_description: "Еко-платформа — Ваш особистий екологічний провідник у світі сталого споживання!",
                vision: "Візія Еко-пікніка",  
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
                main_text: "Ecology is not just a word, it is action!",
                who_are_we: "Who are we?",
                who_we_are_description: "The eco-platform is your personal environmental guide to the world of sustainable consumption!",
                vision: "Eco-Picnic Vision",  
                mission: "Eco-Picnic Mission",  
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
