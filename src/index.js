import _ from 'lodash';
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

const listNav = () => {
	const btnArray = ['Movies', 'Books', 'Shows', 'Anime', 'Hobbies'];
	const navBar = document.getElementById('nav');
	const ul = document.createElement('ul');

	(function() {
		for(let i = 0; i < btnArray.length; i++) {
			var li = document.createElement('li');
			li.innerHTML = `<a>${btnArray[i]}</a>`;
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
		//saveList();
		alert(itemsList);
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
	var priority = document.querySelector('input[name="priority"]:checked')
	var list = document.querySelector('input[name="list-type"]:checked')

	let newItem = new Item(title, date, description, priority, list);
	//document.querySelector('form').reset();
	closeModal();
	form.reset();
}

function displayList() {
	itemsList.forEach(item => console.log(item));
}

const randomBtn = document.getElementById('rndm-btn');
randomBtn.addEventListener('click', displayList);

leftColumn();
listNav();
