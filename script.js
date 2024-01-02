const button = document.querySelector('.button');

const firstValue = document.querySelector('.ul__item-span_type_first');
const secondValue = document.querySelector('.ul__item-span_type_second');
const thirdValue = document.querySelector('.ul__item-span_type_third');

const alfabetRu = [
  'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К',
  'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч',
  'Ш', 'Щ', 'Э', 'Ю', 'Я'
];

const themes = [
  'животные', 'растения', 'автомобиль', 'бренды одежды', 'мужские имена',
  'женские имена', 'фамилия писателя', 'города', 'рабочие инструменты',
  'фильмы', 'мультфильмы', 'продукты питания', 'профессии', 'части тела',
  'эмоции', 'игры', 'известная личность / группа'
];
  
const conditions = ['первая буква', 'вторая буква', 'последняя буква'];

function getRandomItem(list) {
  const randomNumber = Math.round(Math.random() * (list.length - 1));

  return list[randomNumber];
}
button.addEventListener('click', () => {
  firstValue.textContent = getRandomItem(alfabetRu);

  secondValue.textContent = getRandomItem(themes);

  thirdValue.textContent = getRandomItem(conditions);
});
