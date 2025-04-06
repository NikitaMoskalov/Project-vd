document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        ua: {
            sorting: "СОРТУВАННЯ",
            eco_shop: "ЕКО-МАГАЗИН",
            give_away: "ДАРУЙ РЕЧІ",
            eco_projects: "ЕКО-ПРОЄКТИ",
            news: "НОВИНИ",
            solutions: "РІШЕННЯ ДЛЯ ОРГАНІЗАЦІЙ",
            main_text: "Збираймо ресурси для ліпшого завтра",
            map_section_title: "Знаходьте та додавайте ближчі пункти прийому вторсировини на інтерактивній карті!",
            lang: "UA"
        },
        en: {
            sorting: "SORTING",
            eco_shop: "ECO-SHOP",
            give_away: "GIVE AWAY ITEMS",
            eco_projects: "ECO-PROJECTS",
            news: "NEWS",
            solutions: "SOLUTIONS FOR ORGANIZATIONS",
            main_text: "Collect resources for a better tomorrow",
            map_section_title: "Find and add the nearest recycling points on the interactive map!",
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