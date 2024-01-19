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
  'Погода',
  'Хобби',
  'Любимая еда',
  'Путешествия',
  'Семья',
  'Фильмы',
  'Музыка',
  'Книги',
  'Спорт',
  'Работа',
  'Образование',
  'Здоровье',
  'Праздники',
  'Друзья',
  'Технологии',
  'Планы на выходные',
  'Природа',
  'Города, которые посетил',
  'Животные',
  'Мода',
  'Искусство',
  'Игры',
  'Прошлые каникулы',
  'Личные цели',
  'Домашние любимцы',
  'Любимые цвета',
  'Автомобили',
  'Здоровый образ жизни',
  'Шутки и анекдоты',
  'Сны',
  'Места, которые хочу посетить',
  'Рестораны и кафе',
  'Изучение новых языков',
  'Творческие хобби',
  'Способы релаксации',
  'Любимые места в городе',
  'Специальные навыки',
  'Эмоциональные состояния',
  'Любимые праздники',
  'Интересные факты',
  'Опыт работы',
  'Покупки',
  'Техника безопасности',
  'Любимые сезоны',
  'Фотографии из детства',
  'Спортивные мероприятия',
  'Любимые телепередачи'
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
