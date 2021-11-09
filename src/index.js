import './style.css';

const leftColumn = () => {
	const column = document.getElementById('left-col');
	const sideList = document.createElement('div');
	const list = document.createElement('ol');
	var listName = document.createElement('h2');

	sideList.classList.add('side-list');
	//create func that loops through and adds movies, books, & shows class to each div
	listName.innerHTML = 'Movies';

	sideList.appendChild(listName);
	sideList.appendChild(list);

	column.appendChild(sideList);

};

var btnArray = ['All', 'Movies', 'Books', 'Shows', 'Hobbies']

const listNav = () => {
	const navBar = document.getElementById('nav');
	const ul = document.createElement('ul');
	ul.setAttribute('id','nav-ul');

	(function() {
		for(let i = 0; i < btnArray.length; i++) {
			var li = document.createElement('li');
			li.setAttribute('id',`${btnArray[i]}`);
			li.innerHTML = `${btnArray[i]}`;
			ul.appendChild(li);
		}
	})();

	console.log(ul)
	navBar.appendChild(ul);
}


// NEW ITEM Button
const newItemBtn = document.getElementById('new-item');
const closeBtn = document.getElementById('close-button');
const popupForm = document.getElementById('modal');
const overlayBG = document.getElementById('overlay');
newItemBtn.addEventListener('click', newPopup);
closeBtn.addEventListener('click', closeModal);

function newPopup() {
	popupForm.style.display = "block";
	overlayBG.style.display = "block";
}

function closeModal() {
	popupForm.style.display = "none";
	overlayBG.style.display = "none";
}

// ITEM OBJECT CONSTRUCTOR
var itemsList = [];

class Item {
	constructor(title, date, description, priority, list){
		this.title = title
		this.date = date
		this.description = description
		this.priority = priority
		this.list = list
		this.addList();
	}
	addList() {
		//this.addedMessage();
		itemsList.push(this);
		UI.addToList(this);
	}
	saveList() {
		localStorage.setItem('MyLists', JSON.stringify(itemsList));
	}
};

var form = document.querySelector('form');
form.onsubmit = function(e){
	e.preventDefault();
	var title = document.getElementById('title').value
	var date = document.getElementById('due-date').value
	var description = document.getElementById('description').value
	var priority = document.querySelector('input[name="priority"]:checked').value
	var list = document.querySelector('input[name="list-type"]:checked').value

	let newItem = new Item(title, date, description, priority, list);
	//document.querySelector('form').reset();
	closeModal();
	form.reset();
}

function displayList() {
	itemsList.forEach(item => console.log(item));
}

// OBJECT DISPLAY

class UI {
	static displayItems() {
		const StoredItems = [
			{
				title: 'The Travels',
				description: 'Details the adventures of Marco Polo',
				priority: 'none',
				list: 'Books',
				date: '01/13/22',
			},
			{
				title: 'The River of Doubt',
				description: 'Details Theodore Roosevelts darkest journey by Candice Millard',
				priority: 'Low',
				list: 'Books',
				date: '01/13/22'
			},
			{
				title: 'Fire Force',
				description: 'Fire fighting anime show',
				priority: 'Low',
				list: 'Shows',
				date: '01/13/22',
			}
		]


		const items = StoredItems;

		items.forEach((item) => itemsList.push(item));
		items.forEach((item) => UI.addToList(item));
		console.log(itemsList);
	}

	static addToList(item) {
		const mainList = document.querySelector('.main-list');
		const li = document.createElement('li');
		li.setAttribute('class','main-list-item');
		const itemBtnComplete = document.createElement('button');
		itemBtnComplete.classList.add('complete', 'list-btn');
		itemBtnComplete.setAttribute('id', 'complete');
		itemBtnComplete.innerHTML = 'O';

		const itemBtnUpdate = document.createElement('button');
		itemBtnUpdate.classList.add('update', 'list-btn');
		itemBtnUpdate.setAttribute('id', 'update');
		itemBtnUpdate.innerHTML = '•••';


		li.innerHTML =`
			<button id="complete-btn" class="complete list-btn">O</button>
			<span id='item-title'>${item.title}</span>
			<span>${item.priority}</span>
			<span>${item.list}</span>
			<span>${item.date}</span>
			<button id="update-btn" class="update list-btn">•••</button>`
		;
		//li.appendChild(itemBtnComplete);
		mainList.appendChild(li);
	}

	static completeItem(element) {
		if(element.classList.contains('complete')) {
			let row = element.parentElement
			let obj = row.querySelector('#item-title').textContent;
			itemsList.forEach(function (arrayObj, ind) {
				if(arrayObj.title === obj){
					itemsList.splice(ind);
				}
			})
			row.remove();
		}
	}

	static clearList(){
		const mainList = document.querySelector('.main-list');
		mainList.querySelectorAll('.main-list-item').forEach((elem) => elem.remove());;
	}

	//this is the filter function for tab switching.
	static changeList(subList){
		UI.clearList()
		subList.forEach((item) => UI.addToList(item));

	}

	static addSublists(obj){
		console.log(obj)
		if(obj === 'All'){
			UI.clearList()
			itemsList.forEach((item) => UI.addToList(item));
		} else {
			var subList = itemsList.filter((item) => UI.capitalize(item.list) === obj);
			UI.changeList(subList);
		}
	}

	static capitalize(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	static addList() {
		let newList = document.querySelector('#add-list').value
		let listLength = newList.trim().length;
		if(listLength == 0){
			alert('Please enter a value');
		} else {
			btnArray.push(newList);
			UI.updateNav(newList)

		}
	}

	static updateNav(newList) {
		UI.clearNav()
		listNav()
		UI.updateFormList(newList)
	}

	static clearNav() {
		const mainNav = document.querySelector('.list-nav');
		mainNav.querySelector('#nav-ul').remove();
	}

	static updateFormList(listName) {
		const btnContainer = document.querySelector('.new-item-list-container');
		const div = document.createElement('div');
		const input = document.createElement('input');
		const label = document.createElement('label');

		input.type = 'radio';
		input.setAttribute('id', `${listName}`);
		input.setAttribute('name', `list-type`);
		input.setAttribute('value', `${listName}`);
		label.setAttribute('for', `${listName}`);
		label.innerHTML = `${listName}`;

		div.appendChild(input);
		div.appendChild(label);

		btnContainer.appendChild(div);
	}
}
document.addEventListener('DOMContentLoaded', UI.displayItems);


leftColumn();
listNav();

document.querySelector('#main-list').addEventListener('click', (e) => {
	UI.completeItem(e.target);
})

document.querySelector('#new-list-btn').addEventListener('click', () => {
	UI.addList();
})

const randomBtn = document.getElementById('rndm-btn');
randomBtn.addEventListener('click', UI.clearList);

document.querySelector('#nav').addEventListener('click', (e) => {
	//this will call the change tab function
	UI.addSublists(e.target.id);
})