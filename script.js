// Инициализируем Swiper

var swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});
if (window.matchMedia('(min-width: 768px)').matches) {
    swiper.destroy(); // Уничтожаем слайдер
}



document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.querySelector(".show-more-button");
    const hideButton = document.querySelector(".hide-button");
    const brandsBrands = document.querySelectorAll(".brands__brand");

    // Функция показа всех элементов .brands__brand
    function showAllBrands() {
        brandsBrands.forEach((brand) => {
            brand.classList.remove("hidden");
        });
        updateButtonsVisibility(); // Обновить видимость кнопок
    }

    // Функция скрытия последних элементов .brands__brand в зависимости от ширины экрана
    function hideExcessBrands() {
        const screenWidth = window.innerWidth;
        let hideCount = 0;

        if (screenWidth >= 1120) {
            hideCount = brandsBrands.length - 8; // Скрыть последние 4 элемента
        } else if (screenWidth >= 768) {
            hideCount = brandsBrands.length - 6; // Скрыть последние 3 элемента
        }

        for (let i = brandsBrands.length - 1; i >= 0 && hideCount > 0; i--) {
            brandsBrands[i].classList.add("hidden");
            hideCount--;
        }

        updateButtonsVisibility(); // Обновить видимость кнопок
    }

    // Обновление видимости кнопок в зависимости от состояния элементов
    function updateButtonsVisibility() {
        const hiddenBrandsCount = document.querySelectorAll(".brands__brand.hidden").length;

        if (hiddenBrandsCount > 0) {
            showButton.style.display = "flex";
            hideButton.style.display = "none";
        } else {
            showButton.style.display = "none";
            hideButton.style.display = "flex";
        }
    }

    // Обработчик события клика на кнопку "Показать все"
    showButton.addEventListener("click", function () {
        showAllBrands(); // Показать все элементы
    });

    // Обработчик события клика на кнопку "Скрыть"
    hideButton.addEventListener("click", function () {
        hideExcessBrands(); // Скрыть лишние элементы
    });

    // По умолчанию скрываем лишние элементы при загрузке страницы
    hideExcessBrands(); // Скрыть лишние элементы
});
