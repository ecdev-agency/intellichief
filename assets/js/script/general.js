/**
 * AllPage
 * @type {{init: AllPage.init}}
 */
const Calculator = function () {

	$(document).on('change', '.animateNumber', function (e, parent) {

		AnimateNumber();

	});

    /**
     * Plugin
     */
    const pluginStart = function () {

        /**
         * Replace all SVG images with inline SVG
         */
		jQuery('img.svg').each(function(){
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');

		});

		/**
		 * Select2
		 */
		$('.js-select').select2({
			placeholder: '- Select a Value -',
			allowClear: true,
			minimumResultsForSearch: Infinity
		});






	};

	/**
	 * Range Slider
	 * @constructor
	 */
	const Range = function () {

		/**
		 * ion Range Slider
		 */
		if( $('.rangeSlider').length ) {

			$('.rangeSlider').each(function (index, value) {

				let $this 			= $(this),
					name 			= $this.attr('id'),
					$inp_visible 	= $('#' + name + '_visible'),
					type 			= $this.data('input-type');

				let slider = $this.ionRangeSlider({
					onStart: function(data) {

						let value = data.from;

						if( type === 'percent' ) value = data.from + '%';
						if( type === 'money' ) value = '$' + (new Intl.NumberFormat('ja-JP').format(Math.floor(data.from)));

						$inp_visible.prop('value', value);

					},
					onChange: function(data) {

						let value = data.from;

						if( type === 'percent' ) value = data.from + '%';
						if( type === 'money' ) value = '$' + (new Intl.NumberFormat('ja-JP').format(Math.floor(data.from)));

						$inp_visible.prop('value', value);


					},
					onFinish: function () {

						AnimateNumber();

					}
				});
				let slider_data = slider.data('ionRangeSlider');

				/**
				 * Percentage
				 */

				if( type === 'percent' ) {

					/**
					 * @keypress
					 */
					$inp_visible.keypress(function(event, parent) {

						let regex 	= new RegExp('^[0-9-%]'),
							key 	= String.fromCharCode(event.charCode ? event.which : event.charCode);

						if (!regex.test(key)) {

							event.preventDefault();
							return false;

						}

					});

					/**
					 * @keyup
					 */
					$inp_visible.keyup(function(event, parent) {

						let $this 	= $(this),
							val 	= $this.val().replace('%', ''),
							len		= val.length,
							key 	= event.keyCode;

						if( len === 0 ) val = 0;

						if( val > 100 ) val = 100;

						$(this).val( val + '%');

						if( key === 37 || key === 39 ) return false;

						/**
						 * Set Cursor
						 */
						if( Number(val) === 0 ) {
							$this[0].setSelectionRange(0, 1);
						}else{
							$this[0].setSelectionRange(len, len);
						}

						/**
						 * Update Slider
						 */
						slider_data.update({
							from	: val,
							to		: val
						});

						AnimateNumber();

					});

					/**
					 * Select Number
					 */
					$inp_visible.focusin(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val().replace('%', '');
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(0, val_inp.length);

					});

				}

				/**
				 * Money
				 */

				if( type === 'money' ) {

					/**
					 * @keypress
					 */
					$inp_visible.keypress(function(event, parent) {

						let regex 	= new RegExp('^[0-9-$-,]'),
							key 	= String.fromCharCode(event.charCode ? event.which : event.charCode);

						if (!regex.test(key)) {

							event.preventDefault();
							return false;

						}

					});

					/**
					 * @keyup
					 */
					$inp_visible.keyup(function(event, parent) {

						let $this 	= $(this),
							val 	= $this.val().replace(/[\$\,\.]/g, ''),
							len		= val.length,
							key 	= event.keyCode;

						if( len === 0 ) val = 0;

						$(this).val( '$' + (new Intl.NumberFormat('ja-JP').format(Math.floor(val))));

						if( key === 37 || key === 39 ) return false;

						/**
						 * Set Cursor
						 */
						if( Number(val) === 0 ) {
							$this[0].setSelectionRange(1, 2);
						}

						/**
						 * Update Slider
						 */
						slider_data.update({
							from	: val,
							to		: val
						});

						AnimateNumber();

					});

					/**
					 * Select Number
					 */
					$inp_visible.focusin(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val().replace('$', '');
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(1, Number(val_inp.length + 1));

					});

				}


			});

		}

	};

	/**
	 * Tabs
	 */
	const Tab = function () {


		$(document).on('click', '[data-tab="calc"]', function (e, parent) {

			e.preventDefault();

			let $this 	= $(this),
				tab 	= $this.attr('href');

			$('[data-tab="calc"]').parent().removeClass('active');
			$this.parent().addClass('active');
			$this.parent().addClass('done');

			$('.calc__tabs-content .item.active').removeClass('active');
			$(tab).addClass('active');

		});

	};

	/**
	 * Animate Number
	 * @constructor
	 */
	const AnimateNumber = function () {


		$('.calc__result-total').removeClass('pulse');
		$('.totalNumber').animateNumber({
			number: 400000,
			numberStep: function(now, tween) {

				var num = (new Intl.NumberFormat('ja-JP').format(Math.floor(now)));

				$(tween.elem).text('$ ' + num);

			}
		}, 500, function() {
			$('.calc__result-total').addClass('pulse');
		});

	};

	/**
	 * Message Footer
	 * @constructor
	 */
	const Message = function () {

		$(document).on('focusin change', '.inputMessage, .selectMessage', function (e, parent) {

			let $this 		= $(this),
				message 	= $this.data('message'),
				$container 	= $('.containerMessage');

			if( message.length )
				$container.html(message);

		});

	}

	/**
	 * Formated
	 * @constructor
	 */
	const Formated = function () {

		$(document).on('keypress', '.inputMoney', function (event, parent) {

			let regex 	= new RegExp('^[0-9-$-,]'),
				key 	= String.fromCharCode(event.charCode ? event.which : event.charCode);

			if (!regex.test(key)) {

				event.preventDefault();
				return false;

			}

		});

		/**
		 * @keyup
		 */
		$(document).on('keyup', '.inputMoney', function (event, parent) {

			let $this 	= $(this),
				val 	= $this.val().replace(/[\$\,\.]/g, ''),
				len		= val.length,
				key 	= event.keyCode;

			if( len === 0 ) val = 0;

			$(this).val( '$' + (new Intl.NumberFormat('ja-JP').format(Math.floor(val))));

			if( key === 37 || key === 39 ) return false;

			/**
			 * Set Cursor
			 */
			if( Number(val) === 0 ) {
				$this[0].setSelectionRange(1, 2);
			}

			AnimateNumber();

		});

		/**
		 * Select Number
		 */
		$(document).on('focusin', '.inputMoney', function (event, parent) {

			let $this_inp 	= $(this),
				val_inp 	= $this_inp.val().replace('$', '');
			/**
			 * Set Cursor
			 */
			$this_inp[0].setSelectionRange(1, Number(val_inp.length + 1));

		});

	}

    /**
     * Init
     */
	return {
		init: function () {
			pluginStart();
			Range();
			Tab();
			Message();
			Formated();
		}
	};

}();

/**
 * ready
 */
jQuery(document).ready(function() {
	Calculator.init();







});



