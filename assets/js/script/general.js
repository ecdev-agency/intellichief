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

						if( type === 'number' ) value = data.from;
						if( type === 'percent' ) value = data.from + '%';
						if( type === 'percent_float' ) value = data.from + '%';
						if( type === 'money' ) value = '$' + (new Intl.NumberFormat('ja-JP').format(Math.floor(data.from)));

						$inp_visible.prop('value', value);

					},
					onChange: function(data) {

						let value = data.from;

						if( type === 'number' ) value = data.from;
						if( type === 'percent' ) value = data.from + '%';
						if( type === 'percent_float' ) value = data.from + '%';
						if( type === 'money' ) value = '$' + (new Intl.NumberFormat('ja-JP').format(Math.floor(data.from)));

						$inp_visible.prop('value', value);


					},
					onFinish: function () {

						AnimateNumber();

					}
				});
				let slider_data = slider.data('ionRangeSlider');

				/**
				 * Number
				 */

				if( type === 'number' ) {

					/**
					 * @keypress
					 */
					$inp_visible.keypress(function(event, parent) {

						let regex 	= new RegExp('^[0-9]'),
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
							val 	= Replace($this.val()),
							len		= val.length,
							key 	= event.keyCode;

						if( ! $this.val() ) {
							this.select();
						}

						if( len === 0 ) {
							val = min;
							$this.val( val );
							this.select();
						}

						if( val > max ) {
							val = max;
							$this.val( val );
							this.select();
						}

						if( val < min ) {
							val = min;
							$this.val( val );
							this.select();
						}

						if( key === 37 || key === 39 || key === 9 ) return false;

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

						this.select();

					});

					/**
					 * Click Number
					 */
					$inp_visible.click(function(event, parent) {

						this.select();

					});

					/**
					 * Select Number
					 */
					$inp_visible.select(function(event, parent) {

						this.select();

					});

					/**
					 * Paste
					 */
					$inp_visible.on('paste', function(event, parent) {

						return false;

					});

				}

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
							val 	= Replace($this.val()),
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
							val_inp 	= Replace($this_inp.val());
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
							val_inp 	= Replace($this_inp.val());
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(0, val_inp.length);

					});

					/**
					 * Select Number
					 */
					// $inp_visible.select(function(event, parent) {
					//
					// 	let $this_inp 	= $(this),
					// 		val_inp 	= $this_inp.val().replace('%', '');
					// 	/**
					// 	 * Set Cursor
					// 	 */
					// 	$this_inp[0].setSelectionRange(0, val_inp.length);
					//
					// });

					/**
					 * Paste
					 */
					$inp_visible.on('paste', function(event, parent) {
						return false;
					});

				}

				/**
				 * Percentage Float
				 */
				if( type === 'percent_float' ) {

					/**
					 * @keypress
					 */
					$inp_visible.keypress(function(event, parent) {

						let regex 	= new RegExp('^[0-9-%-.]'),
							key 	= String.fromCharCode(event.charCode ? event.which : event.charCode);

						if (!regex.test(key)) {

							event.preventDefault();
							return false;

						}

					});

					/**
					 * @keydown
					 */
					$inp_visible.keydown(function(event, parent) {

						let $this = $(this);
						setTimeout(function () {

							let val = Number(Replace($this.val()));

							if( val === 0 ) {
								$this[0].setSelectionRange(0, 1);
							}

						}, 100)

					});

					/**
					 * @keyup
					 */
					$inp_visible.keyup(function(event, parent) {

						let $this 	= $(this),
							val 	= ReplaceFloat($this.val()),
							len		= val.length,
							key 	= event.keyCode;

						$this.val( val + '%');

						if( len === 0 ) {
							val = min;
							$this.val( val + '%');
							$this[0].setSelectionRange(0, 1);
						}

						if( val === 0 ) {
							$this.val( val + '%');
							$this[0].setSelectionRange(0, 1);
						}

						if( val > max ) {
							val = max;
							$this.val( val + '%');
						}

						if( val < min ) {
							val = min;
							$this.val( val + '%');
						}

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
							val_inp 	= ReplaceFloat($this_inp.val());

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
							val_inp 	= ReplaceFloat($this_inp.val());
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
							val 	= Replace($this.val()),
							len		= val.length,
							key 	= event.keyCode;

						if( len === 0 )
							val = min;

						if( val > max ) {
							val = max;
							$this[0].setSelectionRange(1, $this.val().length);
						}


						if( val < min )
							val = min;

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
							val_inp 	= Replace($this_inp.val());
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
							val_inp 	= Replace($this_inp.val());
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
							val_inp 	= Replace($this_inp.val());
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

			$('.calc__tabs-content .item.active').removeClass('active');
			$(tab).addClass('active');

		});

		$(document).on('change', '.changeDone', function (e, parent) {

			e.preventDefault();

			let tab = $(this).data('tab');

			$('.calc__tabs-list li.active').addClass('done');

			Calculate();

		});

		$(document).on('keyup', '.changeDone', function (e, parent) {
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


		/**
		 * **********************************************
		 * Input Number
		 */

		/**
		 * @keyup
		 */
		$(document).on('keyup change', '.inputNumber', function (event, parent) {

			let $this 		= $(this),
				v 			= parseInt($this.val()),
				min 		= parseInt($this.attr('min')),
				max 		= parseInt($this.attr('max')),
				maxlength 	= parseInt($this.attr('maxlength'));

			if( ! $this.val() ) {
				$this.val(0);
				this.select();
			}

			if (v < min)
				$this.val(min);

			if (v > max)
				$this.val(max);

			if ($this.val().length > maxlength)
				$this.val($this.val().slice(0, maxlength));

		});

		/**
		 * @keypress
		 */
		$(document).on('focusin', '.inputNumber', function (event, parent) {

			this.select();

		});

	}

	/**
	 * Calculate
	 * @constructor
	 */
	const Calculate = function () {

		/**
		 * Global Calc Variables
		 * @type {number}
		 */
		let GLOBAL_your_total_annual_ap_processor_people_cost = 0;

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
					tab_1_content_full_time_processors = Number(Replace($('.tab_1_content_full_time_processors').val())),
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
				 * Set Global
				 */
				GLOBAL_your_total_annual_ap_processor_people_cost = Number(tab_1_content_full_time_processors * total_1);

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

		/**
		 * Calculate Tab 2
		 */
		const tab_2 = function () {

			/**
			 * Footer Calc
			 */
			const footer_calc = function () {

				/**
				 * Variables
				 * @type {number}
				 */
				let tab_2_content_invoices_processed_per_year = $('.tab_2_content_invoices_processed_per_year').val(),
					tab_2_content_annual_invoice = Replace($('.tab_2_content_annual_invoice').val()),
					tab_2_content_invoices_paid_late = Replace($('.tab_2_content_invoices_paid_late').val()),
					tab_2_content_charged_per_late_payment = ReplaceFloat($('.tab_2_content_charged_per_late_payment').val()),
					tab_2_content_avg_amount_of_invoice = Replace($('.tab_2_content_avg_amount_of_invoice').val()),
					tab_2_content_invoices_missed_early_discount = Replace($('.tab_2_content_invoices_missed_early_discount').val()),
					tab_2_content_duplicate_payments = ReplaceFloat($('.tab_2_content_duplicate_payments').val()),
					total_1 = 0,
					total_2 = 0,
					total_3 = 0,
					total_4 = 0;

				/**
				 * Calc Item 1
				 * @type {number}
				 */
				total_1 = Number(GLOBAL_your_total_annual_ap_processor_people_cost / tab_2_content_invoices_processed_per_year);

				/**
				 * Calc Item 2
				 * @type {number}
				 */
				total_2 = Number(tab_2_content_annual_invoice * tab_2_content_invoices_paid_late * tab_2_content_charged_per_late_payment * tab_2_content_avg_amount_of_invoice);

				/**
				 * Calc Item 3
				 * @type {number}
				 */
				total_3 = Number(tab_2_content_annual_invoice * tab_2_content_invoices_missed_early_discount * 0.02 * tab_2_content_avg_amount_of_invoice);

				/**
				 * Calc Item 4
				 * @type {number}
				 */
				total_4 = Number(tab_2_content_duplicate_payments * tab_2_content_annual_invoice * tab_2_content_avg_amount_of_invoice);

				/**
				 * Currency Formated
				 * @type {string}
				 */
				total_1 = Currency(total_1);
				total_2 = Currency(total_2);
				total_3 = Currency(total_3);
				total_4 = Currency(total_4);

				/**
				 * Set Html
				 */
				$('.tab_2_footer_invoice').html(total_1);
				$('.tab_2_footer_late_payments').html(total_2);
				$('.tab_2_footer_discounts').html(total_3);
				$('.tab_2_footer_duplicate_payments').html(total_4);

			};
			footer_calc();

		};

		tab_2();



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
	 * Replacer Float
	 * @param val
	 * @returns integer
	 * @constructor
	 */
	const ReplaceFloat = function (val) {

		const regEx = /[^\d\.]/g;
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



