var F31DevShuffler = {
	config: {
		developers: {
			column2: [
				{
					name: "Stefano Canducci",
					twitter: "steno_c",
					side: 1
				},
				{
					name: "Lucas Ramos",
					twitter: "lucas__ramos",
					side: 1
				},
				{
					name: "Antonio Rinaldi",
					twitter: "",
					side: 0
				},
				{
					name: "Francesco Bianco",
					twitter: "",
					side: 0
				},
				{
					name: "Fabio Rapetti",
					twitter: "",
					side: 0
				},
				{
					name: "Alessandro \"portal\" Gentile",
					twitter: "",
					side: 1
				},
				{
					name: "Arcangelo Casavola",
					twitter: "",
					side: 1
				}
			],
			column1: [
				{
					name: "Andrea \"Verlok\" Verlicchi",
					twitter: "verlok",
					side: 1
				},
				{
					name: "Aleksander \"Ketchup\" Bethke",
					twitter: "",
					side: 0
				},
				{
					name: "Alessandro \"Allino\" Valenti",
					twitter: "",
					side: 0
				},
				{
					name: "Alexey \"Guk\" Gukezhev",
					twitter: "",
					side: 0
				},
				{
					name: "Marc Mempin",
					twitter: "",
					side: 0
				},
				{
					name: "David Barbieri",
					twitter: "",
					side: 1
				},
				{
					name: "Matteo Gazziola",
					twitter: "",
					side: 1
				}/*,
				{
					name: "Mauro Verardi",
					twitter: "",
					side: 0
				}*/
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
				twitter: '',
				side: null
			}
		}

		var picEl = document.createElement('div');
		picEl.className = "pic";
		// USE TWITTER API TO GET IMG

		var nameEl = getHtmlRow({className: "name", text: devObj.name, tagName: 'h3'});
		var sideEl = getHtmlRow({className: "side", text: devObj.side === null ? 'none' : !!devObj.side ? 'Client' : 'Server'});
		var twitterEl = getHtmlRow({className: "twitter", text: '@' + devObj.twitter});

		var liEl = document.createElement('li');
		liEl.className = 'developer';
		liEl.appendChild(picEl);
		liEl.appendChild(nameEl);
		liEl.appendChild(sideEl);
		liEl.appendChild(twitterEl);

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

	function randomizer() {
		return 0.5 - Math.random();
	}

	var i,
		developers = F31DevShuffler.config.developers,
		expertDevelopers = developers.column1,
		noviceDevelopers = developers.column2,
		pairsEl = document.querySelector('.pairs'),
		rows = Math.max(expertDevelopers.length, noviceDevelopers.length);

	expertDevelopers.sort(randomizer);
	noviceDevelopers.sort(randomizer);

	for (i = 0; i < rows; i++) {
		pairsEl.appendChild(getPairEl(expertDevelopers[i], noviceDevelopers[i]));
	}


}());