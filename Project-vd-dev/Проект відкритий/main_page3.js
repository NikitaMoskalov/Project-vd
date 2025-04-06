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
            sorting_sorting_title: "Важливі дрібниці у світі сортування ",
            what_recycles: "Що перероблюють:",
            metal_recycling_info: "Повторно переробляти можна: нержавіюча сталь, алюміній, мідь, латунь, свинець, чорний метал, радіатори, баночки від консервів, кришки від банок, алюмінієві баночки від напоїв та інше.",
            preparation: "Підготовка:",
            clean_food: "Очистити від залишків їжі (промити), максимально спресувати.",
            separate_materials: "Впевнитися, що металеві вироби вільні від інших матеріалів, таких як пластик, гума, скло чи деревина.",
            remove_dangerous: "Вилучайте небезпечні елементи, такі як батарейки, акумулятори чи електронні компоненти перед викиданням.",
            plastic_recycling_info: "Пластик має 7 основних видів, з яких в Україні переробляти можна:",
            pet_description: "більшість пляшок для напоїв, деяка побутова хімія та одноразова упаковка.",
            phd_description: "побутова хімія, деякі пакети, кришечки на пляшках, пластикова упаковка з-під ліків.",
            peld_description: "кульки, пакети-маєчки, упаковки, які тягнуться (наприклад, з-під вологих дисків). Також це матеріал, який наноситься тонким шаром на внутрішню стінку одноразового (мумного паперового) стакана.",
            lang: "UA",
            sorting: "СОРТУВАННЯ",
            eco_shop: "ЕКО-МАГАЗИН",
            give_away: "ДАРУЙ РЕЧІ",
            eco_projects: "ЕКО-ПРОЄКТИ",
            news: "НОВИНИ",
            solutions: "РІШЕННЯ ДЛЯ ОРГАНІЗАЦІЙ",
            main_text: "Сміття — не кінець шляху, а початок нового життя.",
            support_button: "Підтримати",
            sorting_title: "Важливі дрібниці у світі сортування",
            support_button_footer: "Підтримати"
        },
        en: {
            sorting_sorting_title: "Important trinkets in different sortings",
            what_recycles: "What is recycled:",
            metal_recycling_info: "You can recycle: stainless steel, aluminum, copper, brass, lead, ferrous metal, radiators, tin cans, jar lids, aluminum drink cans, and more.",
            preparation: "Preparation:",
            clean_food: "Remove food residue (rinse), compress as much as possible.",
            separate_materials: "Ensure metal items are free from other materials such as plastic, rubber, glass, or wood.",
            remove_dangerous: "Remove hazardous elements such as batteries, accumulators, or electronic components before disposal.",
            plastic_recycling_info: "Plastic has 7 main types, of which in Ukraine you can recycle:",
            pet_description: "Most beverage bottles, some household chemicals, and single-use packaging.",
            phd_description: "Household chemicals, some plastic bags, bottle caps, plastic medicine packaging.",
            peld_description: "Bags, t-shirt bags, stretchable packaging (e.g., from wet wipes). This material is also applied as a thin layer to the inside wall of disposable (coated paper) cups.",
            lang: "ENG",
            sorting: "SORTING",
            eco_shop: "ECO-SHOP",
            give_away: "GIVE AWAY",
            eco_projects: "ECO-PROJECTS",
            news: "NEWS",
            solutions: "SOLUTIONS FOR ORGANIZATIONS",
            main_text: "Trash is not the end of the road, but the beginning of a new life.",
            support_button: "Support",
            sorting_title: "Important Details in Sorting",
            support_button_footer: "Support"
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
