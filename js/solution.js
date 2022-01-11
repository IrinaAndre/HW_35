// 1. Напишите код, который выведет каждый элемент списка в консоль :
// Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
const ul = document.body.childNodes[1];
console.log(ul.attributes);

for (let attr of ul.attributes) {
  console.log(attr);
}

const arr = [];

for (i = 0; i < ul.attributes.length; i++) {
  let result = arr.push(ul.attributes[i].value);
}
console.log(arr);

// Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
const arr1 = [];

for (i = 0; i < ul.attributes.length; i++) {
  let result = arr1.push(ul.attributes[i].name);
}
console.log(arr1);

// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
const myName = "Ira";
ul.lastElementChild.textContent = `Привет меня зовут ${myName}`;

// Добавить первому элементу li аттрибут 'data-my-name' со значением в котором будет лежать Ваше имя
ul.firstElementChild.setAttribute("data-my-name", myName);

// Удалить у тега ul аттрибут 'data-dog-tail'
ul.removeAttribute("data-dog-tail");

//2. Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из елементов:
function generateList(arr) {
  const listWrapper = document.querySelector(".itemsList");
  const list = document.createElement("ul");

  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = arr[i];
    list.append(li);
  }

  listWrapper.append(list);
}
generateList([1, 2, 3]);

//А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3]) то делать вложенный список. Для проверки на массив используйте Array.isArray()
function generateList(arr, listWrapper) {
  function createList(arr) {
    const list = document.createElement("ul");

    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement("li");

      if (Array.isArray(arr[i])) {
        li.append(createList(arr[i]));
      } else {
        li.innerHTML = arr[i];
      }
      list.append(li);
    }
    return list;
  }
  listWrapper.append(createList(arr));
}

generateList([1, 2, [1.1, 1.2, 1.3], 3], document.querySelector(".itemsList"));

//3. Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100
function generateTable() {
  const table = document.querySelector(".tab");
  let num = 1;

  for (let i = 0; i < 10; i++) {
    const tr = document.createElement("tr");

    for (let a = 0; a < 10; a++) {
      const td = document.createElement("td");
      td.innerHTML = num++;
      tr.append(td);
    }
    table.append(tr);
  }
}
generateTable();
