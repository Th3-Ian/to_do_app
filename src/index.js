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
			li.innerHTML = btnArray[i];
			ul.appendChild(li);
		}
	})();

	console.log(ul)
	navBar.appendChild(ul);
}

const addNavItems = (navArray, menu) => {
	for(let i = 0; i < navArray.length; i++) {
		var li = document.createElement('li');
		li.innerHTML = navArray[i];
		menu.appendChild(li);
	}
}



leftColumn();
listNav();
