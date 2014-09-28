var F31DevShuffler = {
	config: {
		developers: {
			group1: [
				{ name: "Andrea \"VerLok\" Verlicchi", className: "verlok", side: 1 },
				{ name: "Aleksander \"Ketchup\" Bethke", className: "ketchup", side: 0 },
				//{ name: "Alessandro \"Allino\" Valenti", className: "allino", side: 0 },
				{ name: "Alexey \"Guk\" Gukezhev", className: "guk", side: 0 },
				{ name: "Marc Keane Mempin", className: "marc", side: 0 },
				{ name: "David Barbieri", className: "david", side: 1 },
				{ name: "Matteo Gazziola", className: "gazzi", side: 1 },
				{ name: "Bruno Scopelliti", className: "bruno", side: 1 }
				//, { name: "Nicola Bagnasco", className: "nic", side: 0 }
				//, { name: "Mauro Verardi", className: "mauro", side: 0 }
			],
			group2: [
				{ name: "Stefano Canducci", className: "steno", side: 1 },
				{ name: "Lucas Ramos", className: "lucas", side: 1 },
				{ name: "Antonio Rinaldi", className: "anto", side: 0 },
				{ name: "Francesco Bianco", className: "white", side: 0 },
				{ name: "Fabio Rapetti", className: "fabio", side: 0 },
				{ name: "Alessandro \"Portal\" Gentile", className: "portal", side: 1 },
				{ name: "Arcangelo Casavola", className: "arca", side: 1 }
			]
		}
	}
};

(function () {

	function getHtmlRow(options) {
		var el = document.createElement(!!options.tagName ? options.tagName : 'div');
		el.className = options.className;
		el.innerText = options.text;
		return el;
	}

	function getDeveloperEl(devObj) {

		if (typeof devObj === 'undefined') {
			devObj = {
				name: '(empty)',
				side: null
			}
		}

		var picEl = document.createElement('div');
		picEl.className = "pic";

		var nameEl = getHtmlRow({className: "name", text: devObj.name});
		var sideEl = getHtmlRow({className: "side", text: devObj.side === null ? 'none' : !!devObj.side ? 'clientSide' : 'ServerSide'});

		var liEl = document.createElement('li');
		liEl.className = 'developer '+devObj.className;

		var infoEl = document.createElement('div');
		infoEl.className = 'info';
		infoEl.appendChild(nameEl);
		infoEl.appendChild(sideEl);

		liEl.appendChild(picEl);
		liEl.appendChild(infoEl);



		return liEl;
	}

	function getPairEl(dev1, dev2) {
		var dev1el = getDeveloperEl(dev1);
		var dev2el = getDeveloperEl(dev2);
		var columnsEl = document.createElement('ul');
		columnsEl.className = 'developers';
		columnsEl.appendChild(dev1el);
		columnsEl.appendChild(dev2el);
		var pairEl = document.createElement('li');
		pairEl.className = 'pair';
		pairEl.appendChild(columnsEl);
		return pairEl;
	}

	function addRandomDevelopers() {

		var developers = F31DevShuffler.config.developers,
			expertDevelopers = developers.group1,
			noviceDevelopers = developers.group2,
			pairsEl = document.querySelector('.pairs'),
			rows = Math.max(expertDevelopers.length, noviceDevelopers.length);

		function randomizer() {
			return 0.5 - Math.random();
		}

		expertDevelopers.sort(randomizer);
		noviceDevelopers.sort(randomizer);

		for (var i = 0; i < rows; i++) {
			pairsEl.appendChild(getPairEl(expertDevelopers[i], noviceDevelopers[i]));
		}
	}

	function clearDevelopersList() {
		var pairsEl = document.querySelector('.pairs');
		pairsEl.innerHTML = '';
	}

	function addButtonsListeners() {
		var button = document.querySelector('.buttonsRow .randomize');
		button.addEventListener("click", function() {
			clearDevelopersList();
			addRandomDevelopers();
		});
	}

	addRandomDevelopers();
	addButtonsListeners();

}());