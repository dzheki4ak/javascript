/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/*
 урок 21. dom
Дата атрибуты (data-attributes)
i
Сохраняем информацию на HTML элементах
Основные требования:
1. Стартовый HTML находится в редакторе ниже
2. Напишите ф-цию squaredNumbers , которая считывает число из
дата атрибута и записывает квадрат этого числа в другой дата
атрибут

3. Ищите элементы с классом .number
4. Считайте число из атрибута "data-number". Запишите квадрат
этого числа в атрибут "data-squared-number"

5. Считывайте и записывайте дата атрибуты с помощью свойства
dataset у DOM элемента

6. После того, как ф-ция отработает, HTML должен измениться
следующим образом:
<!-- index.html before -->
<ul class="list">
 <li data-number="5" class="number"></li>
 <li data-number="7" class="number"></li>
 <li data-number="-3" class="number"></li>
</ul>
<!-- index.html after -->
<ul class="list">
 <li data-number="5" data-squared-number="25" class="number"></li>
 <li data-number="7" data-squared-number="49" class="number"></li>
 <li data-number="-3" data-squared-number="9" class="number"></li>
</ul>
*/

const squaredNumbers = () => {
  [...document.querySelectorAll('.number')].map(
    el => (el.dataset.squaredNumber = el.dataset.number ** 2),
  );
};

squaredNumbers();
