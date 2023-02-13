// Создайте константу slides и обратитесь ко всем слайдам 
// Создайте цикл const slide of slides 
// Добавьте к слайд слушалку и через клик используя стрелочную функцию используйте clearActiveClasses()
// Затем внизу внутри цикла к слайд добавьте класслист и add('active')
// После цикла нужно создать функцию с названием clearActiveClasses() 
// Внутри этой функции обратитесь к константе slides используя метод forEach через стрелочную функцию
// Внутри скобок стрелочной функции даете название slide
// Затем внизу внутри функции используйте класслист и remove с классом ('active') 
// Молодцы: Теперь замените все фото в html. Обратите внимание на заголовки
// Фото машин должны быть анологичны названиям заголовков
// Измените фон на светло-зеленый
// Дайте класс active в css к слайду
// Добавьте родителю класса 'container' значения  display: flex; justify-content:center; align-items: center;
// Измените viewport на border-box в css;
// Для класса slide.active h3 добавьте свойтво transition: opacity 0.3s ease-in 0.4s;
// ГОТОВО!!!!!!!!!!!!!

const slides = document.querySelectorAll('.slide')

for(const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove()
    })
}
