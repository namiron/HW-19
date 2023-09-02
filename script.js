
function clickFunction() {
	const thisInput = this
	let inputItem = thisInput
	if (inputItem.nextElementSibling) {
		inputItem = inputItem.nextElementSibling
		inputItem.style.backgroundColor = 'red'
	}
	console.log(this);
}

const inputList = document.querySelectorAll('.input')
for (const inputItem of inputList) {
	inputItem.onclick = clickFunction
}

// Задача 1. Дано 10 рядків тексту «Hello!» у окремих div. При кліку на
// якийсь із них усі наступні повинні бути зафарбовані у червоний колір.

function clickChangeColor() {
	const thisElem = this
	let thisDiv = thisElem
	if (thisDiv.nextElementSibling) {
		while (thisDiv.nextElementSibling) {
			thisDiv = thisDiv.nextElementSibling
			thisDiv.style.color = 'red'
		}
	}
}


const divList = document.querySelectorAll('.div-hello')
for (const divItem of divList) {
	console.log(divItem);
	divItem.onclick = clickChangeColor
}


/* Задача 2. Дано 5 елементів input. При введенні значення у якийсь із них необхідно автоматично заповнювати інші (усі попередні у спадному порядку(кожен попередній має значення на 1 менше за наступний), усі наступні на 1 більше (кожен наступне на 1 більше за попереднього) */

function createInputArray() {

	let arrayInput = []
	for (let i = 0; i < 5; i++) {
		let input = document.createElement('input')
		input.setAttribute('class', 'input_item')
		arrayInput.push(input)
	}
	return arrayInput
}



/* Задача 5. Відображаємо картки товарів, які користувач може вибирати. Вибраний товар має зелену рамку (при кліку робити toogle з класом вибраного елемента) */


const listObject = [
	{
		img: `<img src="laptop1.jpeg" alt="">`,
		title: `Nout Xiomi 76Ab`,
		text: `wery-god laptop`,
		prise: `2000грн`
	},
	{
		img: `<img src="laptop2.jpeg" alt="">`,
		title: `Nout Apple Pro`,
		text: `wery-god laptop`,
		prise: `2100грн`
	},
	{
		img: `<img src="laptop3.jpeg" alt="">`,
		title: `Apple ProMax`,
		text: `wery-god laptop`,
		prise: `3200грн`
	},
	{
		img: `<img src="laptop4.jpeg" alt="">`,
		title: `Apple 2 ProMax`,
		text: `wery-god laptop`,
		prise: `3200грн`
	},
	{
		img: `<img src="laptop5.jpeg" alt="">`,
		title: `Apple 3 ProMax`,
		text: `wery-god laptop`,
		prise: `4000грн`
	},
]


function getCartsList() {
	let cartsList = []
	for (let i = 0; i < listObject.length; i++) {
		cartsList.push(`<div class="cart">
		<p class="cart__promotion">Акция</p>

		<div class="cart__image">
			${listObject[i].img}
		</div>
		<div class="cart__contant contant-cart">
			<h2 class="contant-cart__tile">${listObject[i].title}</h2>
			<p class="contant-cart__text">${listObject[i].text}</p>
			<div class="contant-cart__bay bay-block">
				<a href="" class="bay-block__prise">
				${listObject[i].prise}</a>
			</div>
		</div>
	</div>`)
	}
	return cartsList
}

function targetFunction() {
	let cart = this

	cart.classList.toggle('active')
}

let cartList = getCartsList()
console.log(getCartsList(3));

const cartContainer = document.querySelector('.carts-container')
cartContainer.style.display = 'flex'
cartContainer.style.gap = '20px'
cartContainer.style.flaxWrap = 'wrap'

cartContainer.innerHTML = cartList.join('')

cartContainer.children

for (const cartChild of cartContainer.children) {
	cartChild.onclick = targetFunction
}

/* Задача 6. Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні. При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні на зелену стрілку спортсмен переміщається у список для змагань. При натисканні на червону стрілку спортсмен переміщається у загальний список.
 */


let arrayAthletes = [
	{
		name: 'Jony Dap'
	},
	{
		name: 'Sara Wick'
	},
	{
		name: 'Dan Miro'
	},
	{
		name: 'Alan Woo'
	},
	{
		name: 'Olga Sich'
	},
	{
		name: 'Ivan Hi'
	},
]
console.log(arrayAthletes);

let arraySportsmenChampionship = []

const sportContainer = document.querySelector('.sport-container');

function generateCarts() {
	let arrCarts = []
	for (let i = 0; i < arrayAthletes.length; i++) {
		arrCarts.push(`<div class="player-cart" style=" border:2px solid black; 
		padding:10px; display:flex; justify-content: space-between;"</div>
		<h2 class="player-cart__name">${arrayAthletes[i].name}</h2>
	</div>
	`)
	}
	return arrCarts

}


let sportItems = generateCarts()
console.log(sportItems);

sportContainer.innerHTML = sportItems.join('')



const competitionsVontainer = document.querySelector('.competitions-container');
const athletesCollection = document.querySelectorAll('.player-cart');

function moveToTeam() {
	const thisAthlet = this
	console.log(thisAthlet);
	competitionsVontainer.append(thisAthlet)
	console.log(competitionsVontainer);
}
function returnBack() {
	const returnAthlet = this
	console.log(returnAthlet);
	sportContainer.append(returnAthlet)
	console.log(sportContainer);
}


for (const athlet of athletesCollection) {
	let btn = document.createElement('button')
	btn.setAttribute('class', 'add-to-team')
	btn.innerText = 'add to team'
	btn.style.backgroundColor = 'green'
	btn.style.color = '#fff'
	athlet.append(btn)

	btn.parentNode.onclick = function () {
		if (competitionsVontainer.contains(athlet)) {
			returnBack.call(btn.parentNode);
		} else {
			moveToTeam.call(btn.parentNode);
		}
	}
}