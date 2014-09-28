(function () {

	var F31DevShufflerConfig = {
		developers: {
			group1: [
				{ name: "Andrea \"VerLok\" Verlicchi", className: "verlok", side: 1, mail: 'andrea.verlicchi' },
				{ name: "Aleksander \"Ketchup\" Bethke", className: "ketchup", side: 0, mail: 'aleksander.bethke' },
				//{ name: "Alessandro \"Allino\" Valenti", className: "allino", side: 0, mail: '' },
				{ name: "Alexey \"Guk\" Gukezhev", className: "guk", side: 0, mail: 'alexey.gukezhev' },
				{ name: "Marc Keane Mempin", className: "marc", side: 0, mail: 'marc.mempin' },
				{ name: "David Barbieri", className: "david", side: 1, mail: 'david.barbieri' },
				{ name: "Matteo Gazziola", className: "gazzi", side: 1, mail: 'matteo.gazziola' },
				{ name: "Bruno Scopelliti", className: "bruno", side: 1, mail: 'bruno.scopelliti' }
				//, { name: "Nicola Bagnasco", className: "nic", side: 0, mail: '' }
				//, { name: "Mauro Verardi", className: "mauro", side: 0, mail: '' }
			],
			group2: [
				{ name: "Stefano Canducci", className: "steno", side: 1, mail: 'stefano.canducci' },
				{ name: "Lucas Ramos", className: "lucas", side: 1, mail: 'lucas.ramos' },
				{ name: "Antonio Rinaldi", className: "anto", side: 0, mail: 'antonio.rinaldi' },
				{ name: "Francesco Bianco", className: "white", side: 0, mail: 'francesco.bianco' },
				{ name: "Fabio Rapetti", className: "fabio", side: 0, mail: 'fabio.rapetti' },
				{ name: "Alessandro \"Portal\" Gentile", className: "portal", side: 1, mail: 'alessandro.gentile' },
				{ name: "Arcangelo Casavola", className: "arca", side: 1, mail: 'arcangelo.casavola' }
			]
		}
	};

	function getHtmlRow(options) {
		var el = document.createElement(!!options.tagName ? options.tagName : 'div');
		el.className = options.className;
		el.innerText = options.text;
		for (var i in options.attributes) {
			el.setAttribute(i, options.attributes[i]);
		}
		return el;
	}

	function getDeveloperEl(devObj) {

		if (typeof devObj === 'undefined') {
			devObj = {
				name: '(empty)',
				className: 'empty'
			};
		}

		var liEl = document.createElement('li');
		liEl.className = 'developer ' + devObj.className;

		var picEl = document.createElement('div');
		picEl.className = "pic";

		var infoEl = document.createElement('div');
		infoEl.className = 'info';

		var nameEl = getHtmlRow({className: "name", text: devObj.name});
		infoEl.appendChild(nameEl);

		if (devObj.mail !== null) {
			var fullMail = devObj.mail + '@yoox.com';
			var mailEl = getHtmlRow({className: "mail", text: fullMail, attributes: {'href': 'mailto:' + fullMail}, tagName: 'a' });
			infoEl.appendChild(mailEl);
		}

		if (devObj.side !== null) {
			var sideEl = getHtmlRow({className: "side", text: (!!devObj.side ? 'clientSide' : 'ServerSide') + ' developer'});
			infoEl.appendChild(sideEl);
		}

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

		var developers = F31DevShufflerConfig.developers,
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
		button.addEventListener("click", function () {
			clearDevelopersList();
			addRandomDevelopers();
		});
	}

	addRandomDevelopers();
	addButtonsListeners();

}());