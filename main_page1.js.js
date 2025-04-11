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
            support_button: "Підтримати",
            who_are_we: "Хто ми?",
            who_we_are_description: "Еко-платформа — Ваш особистий екологічний провідник у світі сталого споживання!",
            second_paragraph: "Сортуйте сміття, обмінюйтеся речами, долучайтесь до еко-проєктів та відкривайте безпечний еко-магазин — разом міняємо світ на краще.",
            third_paragraph: "Зробіть крок до зеленого майбутнього з нашою еко-спільнотою!",
            eco_bonuses: "Еко-бонуси",
            eco_bonuses_description: "Завітайте в захопливий світ екологічної взаємодії!",
            eco_bonuses_paragraph: "За кожну Вашу участь у еко-проєктах, обмін речами або дарування непотрібних речей Ви отримуєте еко-бонуси. Ці бонуси Ви зможете обміняти на чудові товари в нашому еко-магазині прямо на сайті.",
            eco_bonuses_paragraph_two: "Таким чином, кожен Ваш крок у напрямку збереження природи стає ще приємнішим і кориснішим — для Вас і для нашої планети.",
            map_section_title: "Знаходьте ближчі пункти прийому вторсировини на інтерактивній карті!",
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
            support_button: "Support",
            who_are_we: "Who are we?",
            who_we_are_description: "The eco-platform is your personal environmental guide to the world of sustainable consumption!",
            second_paragraph: "Sort waste, exchange items, join eco-projects, and discover a safe eco-shop — together, we change the world for the better.",
            third_paragraph: "Take a step toward a greener future with our eco-community!",
            eco_bonuses: "Eco-Bonuses",
            eco_bonuses_description: "Step into the exciting world of ecological interaction!",
            eco_bonuses_paragraph: "For every participation in eco-projects, item exchanges, or giving away unnecessary things, you will earn eco-bonuses. These bonuses can be exchanged for great products in our eco-shop directly on the website.",
            eco_bonuses_paragraph_two: "Thus, every step you take toward preserving nature becomes even more enjoyable and beneficial — for you and for our planet.",
            map_section_title: "Find the nearest recycling points on the interactive map!",
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

