/**
 * AllPage
 * @type {{init: Calculator.init}}
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
		 * Select2
		 */
		$('.js-select').select2({
			placeholder					: '- Select a Value -',
			allowClear					: true,
			minimumResultsForSearch		: Infinity,
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
					min 			= $this.data('min'),
					max 			= $this.data('max'),
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

						if( len === 0 )
							val = min;

						if( val > max )
							val = max;

						if( val < min )
							val = min;

						$(this).val( val + '%');

						if( key === 37 || key === 39 || key === 9 ) return false;

						/**
						 * Set Cursor
						 */
						if( Number(val) === max ) {
							$this[0].setSelectionRange(0, String(max).length);
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
					 * Focus Number
					 */
					$inp_visible.focusin(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val().replace('%', '');
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(0, val_inp.length);

					});

					/**
					 * Click Number
					 */
					$inp_visible.click(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val().replace('%', '');
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(0, val_inp.length);

					});

					/**
					 * Select Number
					 */
					$inp_visible.select(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val().replace('%', '');
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(0, val_inp.length);

					});

					/**
					 * Paste
					 */
					$inp_visible.on('paste', function(event, parent) {
						return false;
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

						if( key === 37 || key === 39 || key === 9 ) return false;

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

					/**
					 * Click Number
					 */
					$inp_visible.click(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val().replace('$', '');
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(1, Number(val_inp.length + 1));

					});

					/**
					 * Select Number
					 */
					$inp_visible.select(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val().replace('$', '');
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(1, Number(val_inp.length + 1));

					});

					/**
					 * Paste
					 */
					$inp_visible.on('paste', function(event, parent) {
						return false;
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
			//$this.parent().addClass('done');

			$('.calc__tabs-content .item.active').removeClass('active');
			$(tab).addClass('active');

		});

		$(document).on('change', '.changeDone', function (e, parent) {

			e.preventDefault();

			let tab = $(this).data('tab');

			$('.calc__tabs-list li.active').addClass('done');

			Calculate();

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

		/**
		 * **********************************************
		 * Input Money
		 */

		/**
		 * @keypress
		 */
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
				val 	= Replace($this.val()),
				len		= String(val).length,
				min		= Number($this.data('min')),
				max		= Number($this.data('max')),
				key 	= event.keyCode;

			if( len === 0 )
				val = 0;

			if( val > max )
				val = max;

			$(this).val( '$' + (new Intl.NumberFormat('ja-JP').format(Math.floor(val))));

			if( key === 37 || key === 39 || key === 9 ) return false;

			/**
			 * Set Cursor
			 */
			if( Number(val) === 0 ) {
				$this[0].setSelectionRange(1, 2);
			}else if (Number(val) === max){
				$this[0].setSelectionRange(1, $this.val().length);
			}

			AnimateNumber();

		});

		/**
		 * Select Number
		 */
		$(document).on('focusin click select', '.inputMoney', function (event, parent) {

			let $this_inp 	= $(this),
				val_inp 	= $this_inp.val().replace('$', '');
			/**
			 * Set Cursor
			 */
			$this_inp[0].setSelectionRange(1, Number(val_inp.length + 1));

		});

		/**
		 * Paste
		 */
		$(document).on('paste', '.inputMoney', function (event, parent) {

			return false;

		});

		/**
		 * **********************************************
		 * Input Percent
		 */

		/**
		 * @keypress
		 */
		$(document).on('keypress', '.inputPercent', function (event, parent) {

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
		$(document).on('keyup', '.inputPercent', function (event, parent) {

			let $this 	= $(this),
				val 	= Replace($this.val()),
				len		= String(val).length,
				min		= Number($this.data('min')),
				max		= Number($this.data('max')),
				key 	= event.keyCode;

			if( len === 0 )
				val = min;

			if( val > max )
				val = max;

			if( val < min )
				val = min;

			$(this).val((new Intl.NumberFormat('ja-JP').format(Math.floor(val))) + '%');

			if( key === 37 || key === 39 || key === 9 ) return false;

			/**
			 * Set Cursor
			 */
			if( Number(val) === max ) {
				$this[0].setSelectionRange(0, String(max).length);
			}else if (Number(val) === 0){
				$this[0].setSelectionRange(0, 1);
			}

			AnimateNumber();

		});

		/**
		 * Select Number
		 */
		$(document).on('focusin click select', '.inputPercent', function (event, parent) {

			let $this_inp 	= $(this),
				val_inp 	= Replace($this_inp.val());
			/**
			 * Set Cursor
			 */
			$this_inp[0].setSelectionRange(0, Number(String(val_inp.length)));

		});

		/**
		 * Paste
		 */
		$(document).on('paste', '.inputPercent', function (event, parent) {

			return false;

		});

	}

	/**
	 * Calculate
	 * @constructor
	 */
	const Calculate = function () {

		/**
		 * Calculate Tab 1
		 */
		const tab_1 = function () {

			/**
			 * Footer Calc
			 */
			const footer_calc = function () {

				/**
				 * Variables
				 * @type {number}
				 */
				let tab_1_content_annual 		= Number(Replace($('.tab_1_content_annual').val())),
					tab_1_content_burden_rate 	= Number(Replace($('.tab_1_content_burden_rate').val())),
					tab_1_content_headcount_reduction = Number(Replace($('.tab_1_content_headcount_reduction').val())),
					total_1 = 0,
					total_2 = 0,
					total_3 = 0;

				/**
				 * Calc Item 1
				 * @type {number}
				 */
				total_1 = tab_1_content_annual + ((tab_1_content_burden_rate / 100) * tab_1_content_annual);

				/**
				 * Calc Item 2
				 * @type {number}
				 */
				total_2 = (total_1 > 0) ? Number(total_1 / 2080) : 0;

				/**
				 * Calc Item 3
				 * @type {number}
				 */
				total_3 = total_1 * tab_1_content_headcount_reduction;

				/**
				 * Currency Formated
				 * @type {string}
				 */
				total_1 = Currency(total_1);
				total_2 = Currency(total_2);
				total_3 = Currency(total_3);

				/**
				 * Set Html
				 */
				$('.tab_1_footer_annual').html(total_1);
				$('.tab_1_footer_rate').html(total_2);
				$('.tab_1_footer_cost').html(total_3);

			};
			footer_calc();


		};

		tab_1();



	}

	/**
	 * Replacer
	 * @param val
	 * @returns integer
	 * @constructor
	 */
	const Replace = function (val) {

		const regEx = /[^\d]/g;
		val = val.replace(regEx, '');

		return val;

	}

	/**
	 * Currency Formater
	 * @param val
	 * @returns {string}
	 * @constructor
	 */
	const Currency = function (val) {

		val = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val)

		return val;

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
			Calculate();
		}
	};

}();

/**
 * ready
 */
jQuery(document).ready(function() {
	Calculator.init();
});



