$(function () {

	const ELEMENTS = ['🔥', '🍀', '🪨', '⚡️', '💧'];

	/* TYPES DE CARTES
	 * 0 = CHIFFRE 80%
	 * 1 = CHANGEMENT DE SENS 5%
	 * 2 = PASSEMENT DE TOUR 5%
	 * 3 = +2 5%
	 * 4 = +4 2%
	 * 5 = CHANGEMENT ELEMENTAIRE 3%
	*/
	const TYPES = ['CHIFFRE', '⤾', 'Ø', '+2', '+4', '🔥/🍀/🪨/⚡️/💧'];

	$('#pioche').click(function () {

		let cardType = getCardType();
		let cardElement = '';
		let cardNumber = 0;
		if (cardType < 5)
			cardElement = ELEMENTS[getIntBetween(0, 5)];
		if (cardType === 0)
			cardNumber = getIntBetween(0, 10);

		let card = document.createElement('div');
		$(card).addClass('card '+cardElement.toLowerCase()).attr('onclick', 'this.parentNode.removeChild(this)');
		$(card).append((cardType === 0 ? cardNumber : TYPES[cardType]) +' '+ cardElement);

		$('.cards').append($(card));

	});

	function getCardType() {
		let n = getIntBetween(0, 100);

		if (n < 80)
			return 0
		else if (n < 85)
			return 1
		else if (n < 90)
			return 2
		else if (n < 95)
			return 3
		else if (n < 97)
			return 4
		else if (n < 100)
			return 5
	}

	function getIntBetween(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

});