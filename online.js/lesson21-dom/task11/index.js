/*
Работа с классами для DOM
элементов
view raw
С помощью JavaScript измените классы на элементах в соответствии с
условиями ниже
Основные требования:
1. Напишите ф-цию manageClasses , которая делает следующее:

2. Должна добавить класс "selected" к элементу с классом "one"

3. Должна удалить класс "selected" с элемента с классом "two"

4. Должна переключить (toggle) класс "three_done" у элемента с
классом "three"

5. Должна добавить класс "another-class" для элемента с классом
"four" если на нем есть класс "some-class"
6. После того, как ф-ция отработает, HTML должен измениться
следующим образом:

index html hosted with ❤ by GitHub
УСЛОВИЕ РЕЗУЛЬТАТ ПРОВЕРКИ
Задача домой
<!-- index.html before -->
<ul class="list">
 <li class="one">1</li>
 <li class="two selected">2</li>
 <li class="three three_done">3</li>
 <li class="four some-class">4</li>
</ul>

<!-- index.html after -->
<ul class="list">
 <li class="one selected">1</li>
 <li class="two">2</li>
 <li class="three">3</li>
 <li class="four some-class another-class">4</li>
</ul>
*/
const manageClasses = () => {
     document.querySelector('.one').classList.add('selected');
     document.querySelector('.two').classList.remove('selected');
     document.querySelector('.three').classList.toggle('three_done');
     if ([...document.querySelector('.four').classList].includes('some-class')) {
          document.querySelector('.four').classList.add('another-class');
     }
}

manageClasses();