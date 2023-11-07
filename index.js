const blockInfoItem = document.querySelectorAll(".ar__information-item")
const blockInfo = document.querySelector(".ar__block-info-for-item")
const textContent = document.querySelector(".ar__text-info-item")
const buttonClose = document.querySelector(".ar__block-info-close")
const sections = document.querySelectorAll(".nav")
const links = document.querySelectorAll(".header__navigation-item")
const hamb = document.querySelector(".hamburger__item")


window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    document.querySelector('.header').classList.add('header-scroll')
  } else {
    document.querySelector('.header').classList.remove('header-scroll')
  }
})


const text = {
  0:'Система позволяет заполнять цифровые технологические карты голосовым вводом, обращаться к справочному материалу при необходимости, а также вести полный контроль за правильностью проведения технического обслуживания и с использованием средств дополненной реальности и программы. Также имеется возможность распознавания QR меток на узлах и агрегатах, а мультиплатформенность программы позволяет пользоваться ею на современных устройствах. Инновационная сельскохозяйственная технически сложная сельскохозяйственная техника требует повышенного внимания к правильности проведения ТО.',
  1: 'Технологии дополненной реальности при облуживании техники Использование дополненной реальности может быть реализовано не только с помощью модулей и очков дополненной, но и на смартфонах и планшетах, что подчеркивает мультиплатформенность и подходит механизаторам и сотрудникам дилерских центров. С устройствами дополненной реальности все операции происходят в естественной среде. И дело не только в этом – AR предлагает широкий функционал и множество сценариев для оптимизации производственных процессов.',
  2: 'Пошаговые рекомендации, позволяющие сотруднику совершать сборочные операции, операции по обслуживанию и ремонту оборудования с привязкой к конкретным узлам оборудования',
}

function openBlock (el, i) {
  blockInfoItem.forEach(a => {
    a.classList.add("ar__information-item-anim")
    a.classList.remove("ar__information-item-anim-active")
  })
  el.classList.remove("ar__information-item-anim")
  el.classList.add("ar__information-item-anim-active")
  blockInfo.classList.add("ar__block-info-for-item-active")
  textContent.classList.add('ar__text-info-item-rotate')
  textContent.innerHTML = text[i]
}


blockInfoItem.forEach((el, i) => { el.addEventListener("click",() =>openBlock(el, i))})

buttonClose.addEventListener('click', () => {
      blockInfo.classList.remove("ar__block-info-for-item-active")
      blockInfoItem.forEach(a => {
        a.classList.add("ar__information-item-anim")
        a.classList.remove("ar__information-item-anim-active")
      })
})

links.forEach((el, i) => { el.addEventListener("click", ()=>{
  sections[i].scrollIntoView()
  hamb.classList.remove("ham-active")
  document.querySelector(".header__navigation-items").classList.remove("header__navigation-items-activeHamb")
  document.querySelector("html").classList.remove("bodyBlock")
})})

hamb.addEventListener("click", () =>{
  hamb.classList.toggle("ham-active")
  document.querySelector(".header__navigation-items").classList.toggle("header__navigation-items-activeHamb")
  document.querySelector("html").classList.toggle("bodyBlock")
})