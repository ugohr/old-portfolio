$(function () {

	const ELEMENTS = ['🔥', '🍀', '⛰️', '⚡️', '💧'];

	/* TYPES DE CARTES
	 * 0 = ÉLÉMENT 70%
	 * 1 = CHANGEMENT DE SENS 6%
	 * 2 = PASSEMENT DE TOUR 6%
	 * 3 = +1 GÉNÉRAL 3%
	 * 4 = +2 6%
	 * 5 = +3 GÉNÉRAL 1%
	 * 6 = +4 3%
	 * 7 = +8 0.1%
	 * 8 = CHANGEMENT ELEMENTAIRE 3%
	 * 9 = MIROIR 1.4%
	 * 10 = QUITTE OU DOUBLE 0.5%
	*/
	const TYPES = ['', '🔄', '⛔️', '+1 GÉN.', '+2', '+3 GÉN.', '+4', '+8', '🔥🍀⛰️⚡️💧', '🔎', '🎲'];

	$('#pioche').click(function () {

		let cardType = getCardType();
		let cardElement = '';
		if (cardType < 5)
			cardElement = ELEMENTS[Math.floor(getIntBetween(0, 5))];

		let card = document.createElement('div');
		$(card).addClass('card').attr('onclick', 'this.parentNode.removeChild(this)');
		$(card).append('<p class="card-value">'+ TYPES[cardType] +'</p>');
		$(card).append('<p class="card-value">'+ cardElement +'</p>');

		$('.cards').append($(card));

	});

	function getCardType() {
		let n = getIntBetween(0, 100);

		if (n < 70)
			return 0
		else if (n < 76)
			return 1
		else if (n < 82)
			return 2
		else if (n < 85)
			return 3
		else if (n < 91)
			return 4
		else if (n < 92)
			return 5
		else if (n < 95)
			return 6
		else if (n < 95.1)
			return 7
		else if (n < 98.1)
			return 8
		else if (n < 99.5)
			return 9
		else if (n < 100)
			return 10
	}

	function getIntBetween(min, max) {
		return Math.random() * (max - min) + min;
	}

});