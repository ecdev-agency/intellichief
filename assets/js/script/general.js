/**
 * AllPage
 * @type {{init: Calculator.init}}
 */
const Calculator = function () {

    /**
     * Plugin
     */
    const pluginStart = function () {

		/**
		 * Select2 Default
		 */
		let $inSelect = $('.js-select').select2({
			placeholder					: '- Select a Value -',
			allowClear					: false,
			minimumResultsForSearch		: Infinity,
			minimumResultsForSearch		: -1,
		});

		/**
		 * After Open Select set Message
		 */
		$inSelect.on('select2:open', function (e) {

			let id 			= e.target.id,
				$container 	= $('.containerMessage');

			if( id.length ) {

				let message = $('#' + id).data('message');

				//if( message.length ) {
					$container.html(message);
				//}

			}

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
						if( type === 'hour' ) value = (new Intl.NumberFormat('ja-JP').format(Math.floor(data.from)));

						$inp_visible.prop('value', value);

					},
					onChange: function(data) {

						let value = data.from;

						if( type === 'number' ) value = data.from;
						if( type === 'percent' ) value = data.from + '%';
						if( type === 'percent_float' ) value = data.from + '%';
						if( type === 'money' ) value = '$' + (new Intl.NumberFormat('ja-JP').format(Math.floor(data.from)));
						if( type === 'hour' ) value = (new Intl.NumberFormat('ja-JP').format(Math.floor(data.from)));

						$inp_visible.prop('value', value);
						$inp_visible.trigger('change');

					},
					onFinish: function () {

						Calculate();

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

						//AnimateNumber();

					});

					/**
					 * Focus Number
					 */
					$inp_visible.focusin(function(event, parent) {

						var $this = this;

						$this.select();

						window.setTimeout(function() {
							$this.select();
						}, 10);

					});
					$inp_visible.focus(function(event, parent) {

						var $this = this;

						$this.select();

						window.setTimeout(function() {
							$this.select();
						}, 200);

					});

					/**
					 * Click Number
					 */
					$inp_visible.click(function(event, parent) {

						var $this = this;

						$this.select();

						window.setTimeout(function() {
							$this.select();
						}, 10);

					});

					/**
					 * Select Number
					 */
					$inp_visible.select(function(event, parent) {

						var $this = this;

						$this.select();

						window.setTimeout(function() {
							$this.select();
						}, 10);

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

						//AnimateNumber();

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

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(0, val_inp.length);
						}, 10);

					});
					$inp_visible.focus(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= Replace($this_inp.val());
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(0, val_inp.length);

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(0, val_inp.length);
						}, 200);

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

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(0, val_inp.length);
						}, 10);

					});

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

						//AnimateNumber();

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

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(0, val_inp.length);
						}, 10);

					});
					$inp_visible.focus(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= ReplaceFloat($this_inp.val());

						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(0, val_inp.length);

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(0, val_inp.length);
						}, 200);

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

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(0, val_inp.length);
						}, 10);

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

						//AnimateNumber();

					});

					/**
					 * Select Number
					 */
					$inp_visible.focusin(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val();
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(1, val_inp.length);

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(1, val_inp.length);
						}, 10);


					});
					$inp_visible.focus(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val();
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(1, val_inp.length);

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(1, val_inp.length);
						}, 200);

					});
					/**
					 * Click Number
					 */
					$inp_visible.click(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val();
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(1, val_inp.length);

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(1, val_inp.length);
						}, 10);

					});

					/**
					 * Select Number
					 */
					$inp_visible.select(function(event, parent) {

						let $this_inp 	= $(this),
							val_inp 	= $this_inp.val();
						/**
						 * Set Cursor
						 */
						$this_inp[0].setSelectionRange(1, val_inp.length);

						window.setTimeout(function() {
							$this_inp[0].setSelectionRange(1, val_inp.length);
						}, 10);

					});

					/**
					 * Paste
					 */
					$inp_visible.on('paste', function(event, parent) {
						return false;
					});

				}

				/**
				 * Hour
				 */
				if( type === 'hour' ) {

					/**
					 * @keypress
					 */
					$inp_visible.keypress(function(event, parent) {

						let regex 	= new RegExp('^[0-9-,]'),
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
							this.select();
						}

						if( val < min ) {
							val = min;
						}

						$(this).val( (new Intl.NumberFormat('ja-JP').format(Math.floor(val))));

						if( key === 37 || key === 39 || key === 9 ) return false;

						/**
						 * Set Cursor
						 */
						this.select();

						/**
						 * Update Slider
						 */
						slider_data.update({
							from	: val,
							to		: val
						});

					});

					/**
					 * Focus Hour
					 */
					$inp_visible.focusin(function(event, parent) {

						this.select();

					});
					$inp_visible.focus(function(event, parent) {

						this.select();

					});
					/**
					 * Click Hour
					 */
					$inp_visible.click(function(event, parent) {

						this.select();

					});

					/**
					 * Select Hour
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
				 * focusout
				 */
				$inp_visible.on('focusout', function(event, parent) {

					Calculate();

				});

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

			$('.calc__tabs-list li.active').addClass('done');

			$('.calc__tabs-content .item.active').removeClass('active');
			$(tab).addClass('active');

		});

		$(document).on('change', '.changeDone', function (e, parent) {

			e.preventDefault();

			Calculate();

		});

		$(document).on('keyup', '.changeDone', function (e, parent) {
			//Calculate();
		});

	};

	/**
	 * Animate Number
	 * @constructor
	 */
	const AnimateNumber = function (number = 0) {

		let $totalNumber = $('.totalNumber');

		$('.calc__result-total').removeClass('pulse');

		$totalNumber.animateNumber({
			number: number,
			numberStep: function(now, tween) {

				var num = (new Intl.NumberFormat('ja-JP').format(Math.floor(now)));

				$(tween.elem).text('$ ' + num);

			}
		}, 500, function() {
			$('.calc__result-total').addClass('pulse');

			if( $totalNumber.text().length > 13 ) {
				$totalNumber.addClass('small');
			}else{
				$totalNumber.removeClass('small');
			}

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

			//AnimateNumber();

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
		$('.inputMoney').focus(function(event) {

			let $this_inp 	= $(this),
				val_inp 	= $this_inp.val().replace('$', '');
			/**
			 * Set Cursor
			 */
			$this_inp[0].setSelectionRange(1, Number(val_inp.length + 1));

			window.setTimeout(function() {
				$this_inp[0].setSelectionRange(1, Number(val_inp.length + 1));
			}, 200);

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

			//AnimateNumber();

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
		$('.inputPercent').focus(function(event) {

			let $this_inp 	= $(this),
				val_inp 	= Replace($this_inp.val());
			/**
			 * Set Cursor
			 */
			$this_inp[0].setSelectionRange(0, Number(String(val_inp.length)));

			window.setTimeout(function() {
				$this_inp[0].setSelectionRange(0, Number(String(val_inp.length)));
			}, 200);

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
				v 			= parseFloat($this.val()),
				min 		= parseFloat($this.attr('min')),
				max 		= parseFloat($this.attr('max')),
				maxlength 	= parseInt($this.attr('maxlength'));

			if (v < min)
				$this.val(min);
			//
			if (v > max)
				$this.val(max);

			if ($this.val().length > maxlength)
				$this.val($this.val().slice(0, maxlength));

		});

		/**
		 * @keypress
		 */
		$(document).on('focusin', '.inputNumber', function (event, parent) {

			let $this = this;

			$this.select();

		});
		$('.inputNumber').focus(function(event) {

			let $this = this;

			$this.select();

			window.setTimeout(function() {
				$this.select();
			}, 200);

		});

		/**
		 * @keydown
		 */
		$(document).on('keydown', '.inputNumber', function (event, parent) {

			let $this = $(this);

			setTimeout(function () {

				let val = $this.val();

				if( val === '' ) {

					$this.val(0);
					$this.select();

				}

			}, 100);

		});

		/**
		 * @change
		 * @keyup
		 * @input
		 * @click
		 */
		$('.inputNumber').bind('change keyup input click', function() {
			if (this.value.match(/[^0-9\.]/g)) {
				this.value = this.value.replace(/[^0-9\.]/g, '');
			}
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
		let GLOBAL_your_total_annual_ap_processor_people_cost = 0,
			GLOBAL_ap_processor_fully_burdened_hourly_rate = 0,
			GLOBAL_your_average_people_cost_per_Invoice = 0,
			GLOBAL_your_total_ap_processor_cost_savings = 0,
			GLOBAL_annual_savings_for_eliminating_late_payments = 0,
			GLOBAL_annual_savings_for_eliminating_missed_discounts = 0,
			GLOBAL_annual_savings_for_eliminating_duplicate_payments = 0,
			GLOBAL_total_productivity_savings = 0;

		/**
		 * Calculate Tab 1
		 */
		const tab_1 = function () {

			/**
			 * Calc
			 */
			const calc = function () {

				/**
				 * Variables
				 * @type {number}
				 */
				let tab_1_content_annual 		= Number(Replace($('.tab_1_content_annual').val())),
					tab_1_content_burden_rate 	= Number(Replace($('.tab_1_content_burden_rate').val())),
					tab_1_content_headcount_reduction = Number($('.tab_1_content_headcount_reduction').val()),
					tab_1_content_headcount_reduction_ic_saver = Number($('.tab_1_content_headcount_reduction').val()),
					tab_1_content_full_time_processors = Number(Replace($('.tab_1_content_full_time_processors').val())),
					total_1 = 0,
					total_2 = 0,
					total_3 = 0;

				/**
				 * Calc Item 1
				 * @type {number}
				 */
				total_1 = tab_1_content_annual + (parseFloat(tab_1_content_burden_rate / 100) * tab_1_content_annual);

				/**
				 * Calc Item 2
				 * @type {number}
				 */
				total_2 = (total_1 > 0) ? Number(total_1 / 2080) : 0;

				/**
				 * Calc Item 3
				 * @type {number}
				 */
				total_3 = Number(total_1 * tab_1_content_headcount_reduction);

				/**
				 * Set Global
				 */
				GLOBAL_your_total_annual_ap_processor_people_cost = Number(tab_1_content_full_time_processors * total_1);
				GLOBAL_ap_processor_fully_burdened_hourly_rate = total_2;
				GLOBAL_your_total_ap_processor_cost_savings =total_3;

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
			calc();


		};

		tab_1();

		/**
		 * Calculate Tab 2
		 */
		const tab_2 = function () {

			/**
			 * Calc
			 */
			const calc = function () {

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
					tab_2_content_average_of_early_pay_discount = ReplaceFloat($('.tab_2_content_average_of_early_pay_discount').val()),
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
				total_2 = Number(tab_2_content_invoices_processed_per_year) * parseFloat(tab_2_content_invoices_paid_late / 100) * parseFloat(tab_2_content_charged_per_late_payment / 100) * tab_2_content_avg_amount_of_invoice;

				/**
				 * Calc Item 3
				 * @type {number}
				 */
				total_3 = Number(tab_2_content_invoices_processed_per_year * parseFloat(tab_2_content_invoices_missed_early_discount / 100) * parseFloat(tab_2_content_average_of_early_pay_discount / 100) * tab_2_content_avg_amount_of_invoice);

				/**
				 * Calc Item 4
				 * @type {number}
				 */
				total_4 = Number(parseFloat(tab_2_content_duplicate_payments / 100) * tab_2_content_invoices_processed_per_year * tab_2_content_avg_amount_of_invoice);

				/**
				 *
				 */
				GLOBAL_your_average_people_cost_per_Invoice = total_1;
				GLOBAL_annual_savings_for_eliminating_late_payments = total_2;
				GLOBAL_annual_savings_for_eliminating_missed_discounts = total_3;
				GLOBAL_annual_savings_for_eliminating_duplicate_payments = total_4;

				/**
				 * Currency Formated
				 * @type {string}
				 */
				total_1 = Currency(total_1);
				total_2 = Currency(total_2);
				total_3 = Currency(total_3);
				total_4 = Currency(total_4);

				/**
				 * Change Font Size Footer Numbers
				 */
				let number_length = 11;
				if( total_1.length > number_length || total_2.length > number_length || total_3.length > number_length || total_4.length > number_length ) {
					$('.dinamicFontSize-tab2').addClass('small');
				}else{
					$('.dinamicFontSize-tab2').removeClass('small');
				}

				/**
				 * Set Html
				 */
				$('.tab_2_footer_invoice').html(total_1);
				$('.tab_2_footer_late_payments').html(total_2);
				$('.tab_2_footer_discounts').html(total_3);
				$('.tab_2_footer_duplicate_payments').html(total_4);

			};
			calc();

		};

		tab_2();

		/**
		 * Calculate Tab 3
		 */
		const tab_3 = function () {

			/**
			 * Calc
			 */
			const calc = function () {

				/**
				 * Variables
				 * @type {number}
				 */
				let tab_3_content_printing_sorting_and_filing_invoices = ReplaceFloat($('.tab_3_content_printing_sorting_and_filing_invoices').val()),
					printing_sorting_and_filing_invoices_ic_saver = $('.printing_sorting_and_filing_invoices_ic_saver').val(),
					tab_3_content_tracking_invoices_routed_for_approval = ReplaceFloat($('.tab_3_content_tracking_invoices_routed_for_approval').val()),
					tracking_invoices_routed_for_approval_ic_saver = $('.tracking_invoices_routed_for_approval_ic_saver').val(),
					tab_3_content_researching_or_resolving_duplicate_payments = ReplaceFloat($('.tab_3_content_researching_or_resolving_duplicate_payments').val()),
					researching_or_resolving_duplicate_payments_ic_saver = $('.researching_or_resolving_duplicate_payments_ic_saver').val(),
					tab_3_content_calculating_unit_of_measure_conversions_discrepancies = ReplaceFloat($('.tab_3_content_calculating_unit_of_measure_conversions_discrepancies').val()),
					calculating_unit_of_measure_conversions_discrepancies_ic_saver = $('.calculating_unit_of_measure_conversions_discrepancies_ic_saver').val(),
					tab_3_content_entering_invoices_into_erp_system = ReplaceFloat($('.tab_3_content_entering_invoices_into_erp_system').val()),
					entering_invoices_into_erp_system_ic_saver = $('.entering_invoices_into_erp_system_ic_saver').val(),
					tab_3_content_tracking_reporting_managing_ap_processing = ReplaceFloat($('.tab_3_content_tracking_reporting_managing_ap_processing').val()),
					tracking_reporting_managing_ap_processing_ic_saver = $('.tracking_reporting_managing_ap_processing_ic_saver').val(),
					tab_3_content_researching_vendor_internal_audit_inquiries = ReplaceFloat($('.tab_3_content_researching_vendor_internal_audit_inquiries').val()),
					researching_vendor_internal_audit_inquiries_ic_saver = $('.researching_vendor_internal_audit_inquiries_ic_saver').val(),
					tab_3_content_annual_cost_off_site_storage = ReplaceFloat($('.tab_3_content_annual_cost_off_site_storage').val()),
					annual_cost_off_site_storage_ic_saver = $('.annual_cost_off_site_storage_ic_saver').val(),
					tab_2_content_invoices_processed_per_year = $('.tab_2_content_invoices_processed_per_year ').val(),
					tab_3_content_invoices_requiring_exception_handling = Replace($('.tab_3_content_invoices_requiring_exception_handling').val()),
					invoices_requiring_exception_handling_ic_saver = $('.invoices_requiring_exception_handling_ic_saver ').val(),
					total_1 = 0,
					total_2 = 0;

				/**
				 * Total 1
				 * @type {number}
				 */
				total_1 = (Number(tab_3_content_printing_sorting_and_filing_invoices) * Number(printing_sorting_and_filing_invoices_ic_saver)) +
					(Number(tab_3_content_tracking_invoices_routed_for_approval) * Number(tracking_invoices_routed_for_approval_ic_saver)) +
					(Number(tab_3_content_researching_or_resolving_duplicate_payments) * Number(researching_or_resolving_duplicate_payments_ic_saver)) +
					(Number(tab_3_content_calculating_unit_of_measure_conversions_discrepancies) * Number(calculating_unit_of_measure_conversions_discrepancies_ic_saver)) +
					(Number(tab_3_content_entering_invoices_into_erp_system) * Number(entering_invoices_into_erp_system_ic_saver)) +
					(Number(tab_3_content_tracking_reporting_managing_ap_processing) * Number(tracking_reporting_managing_ap_processing_ic_saver)) +
					(Number(tab_3_content_researching_vendor_internal_audit_inquiries) * Number(researching_vendor_internal_audit_inquiries_ic_saver));

				/**
				 * Total 2
				 * @type {number}
				 */

				total_2 = (total_1 * parseFloat(GLOBAL_ap_processor_fully_burdened_hourly_rate).toFixed(2)) + (tab_3_content_annual_cost_off_site_storage * annual_cost_off_site_storage_ic_saver) + (tab_2_content_invoices_processed_per_year * parseFloat(GLOBAL_your_average_people_cost_per_Invoice).toFixed(2) * (tab_3_content_invoices_requiring_exception_handling / 100) * invoices_requiring_exception_handling_ic_saver);

				/**
				 * Set Global Var
				 * @type {number}
				 */
				GLOBAL_total_productivity_savings = total_2;

				/**
				 * Currency
				 * @type {string}
				 */
				total_2 = Currency(total_2);

				/**
				 * Set Html
				 */
				$('.tab_3_footer_hours_reclaimed').html(total_1 + ' hours');
				$('.tab_3_footer_total_productivity_savings').html(total_2);


			};
			calc();

		};

		tab_3();

		/**
		 * Cal Savings Estimate
		 * @type {number}
		 */
		let animate = GLOBAL_your_total_ap_processor_cost_savings + GLOBAL_annual_savings_for_eliminating_late_payments + GLOBAL_annual_savings_for_eliminating_missed_discounts + GLOBAL_annual_savings_for_eliminating_duplicate_payments + GLOBAL_total_productivity_savings;

		AnimateNumber(animate);


	}

	/**
	 * Calculate Event
	 * @constructor
	 */
	const CalculateEvent = function () {

		/**
		 * @change
		 */
		$(document).on('change', '.tab_1_content_headcount_reduction_ic_saver', function (e, parent) {

			e.preventDefault();

			let val 	= $(this).val(),
				total 	= parseFloat($('.tab_1_content_full_time_processors').val() * val);

			$('.tab_1_content_headcount_reduction').val(FormatedNumber(total));

			// setTimeout(function () {
			// 	$('.tab_1_content_full_time_processors').trigger('change');
			// }, 100);

			Calculate();

		});

		/**
		 * @change
		 */
		$(document).on('change', '.tab_1_content_full_time_processors', function (e, parent) {

			e.preventDefault();

			let val 	= $(this).val(),
				total 	= Number(val * $('.tab_1_content_headcount_reduction_ic_saver').val());

			$('.tab_1_content_headcount_reduction').val(FormatedNumber(total)).trigger('change');

		});

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
	 *
	 * @param val
	 * @returns {*}
	 * @constructor
	 */
	const FormatedNumber = function (val) {

		val = Math.round( val * 100 + Number.EPSILON ) / 100;

		return val;
	}

	/**
	 *
	 * @param val
	 * @returns {*}
	 * @constructor
	 */
	const Form = function () {



	}

    /**
     * Init
	 *
     */
	return {
		init: function () {
			pluginStart();
			Range();
			Tab();
			Message();
			Formated();
			Calculate();
			CalculateEvent();
			Form();
		}
	};

}();

/**
 * ready
 */
jQuery(document).ready(function() {
	Calculator.init();
});

/**
 * ontact Form 7
 */
jQuery('.wpcf7').ready(function(){

	/**
	 * Standart Select2
	 */
	jQuery('.wpcf7-select').select2({
		placeholder					: '- Select a Value -',
		allowClear					: false,
		minimumResultsForSearch		: Infinity,
		minimumResultsForSearch		: -1,
		width: 'resolve',
	});
	jQuery('.wpcf7-select').val(null).trigger('change');

	/**
	 * Select2 Countries
	 */
	let url_countries = $('.calc').data('url');

	jQuery('.inputFormCountry').select2({
		placeholder					: '- Select a Value -',
		allowClear					: false,
		selectOnClose				: false,
		minimumResultsForSearch		: 10,
		tokenSeparators: [',', ' '],
		tags: true,
		minimumResultsForSearch		: Infinity,
		ajax						: {
			dataType : "json",
			url      : url_countries + "js/json/countries.json",
			type: "GET",
		},
	});

	jQuery('.inputFormCountry').val('US').trigger('change');
	jQuery('.inputFormCountry').on('select2:select', function (e) {

		let data = e.params.data,
			$accept = $('.acceptForm');

		if( data.id === 'US' ) {
			$accept.hide();
			$('#calc_form_policy').prop('checked', true);
		}else{
			$accept.show();
			$('#calc_form_policy').prop('checked', false);
		}

		jQuery('#calc_form_state_name').val(data.text);

	});

	jQuery('#calc_form_state_name').val($('#calc_form_country option:selected').text());

	/**
	 *
	 */
	jQuery('#calc_form_policy').prop('checked', true);

	jQuery('.wpcf7-form').on('submit', function (e) {
		jQuery('.wpcf7').addClass('loader');
	});

	/**
	 *
	 */
	document.addEventListener( 'wpcf7submit', function( event ) {
		jQuery('.wpcf7').removeClass('loader');
	});

	document.addEventListener( 'wpcf7mailsent', function( event ) {

		//TODO this hardcode
		setTimeout(function (){
			alert($('.screen-reader-response p').text());
		}, 200);

		$('#calc_form_erp, #calc_form_project').val('').trigger('change');

	});

	/**
	 *
	 */
	jQuery(document).on('keyup', '.wpcf7-form-control', function (e, parent) {

		let $this 	= jQuery(this),
			val 	= $this.val();

		if( val.length > 1 ) {
			$this.removeClass('wpcf7-not-valid');
			$this.parent().find('.wpcf7-not-valid-tip').remove();
		}

	});

	//


});
jQuery('.wpcf7').on( 'wpcf7:mailsent', function( event ){

	jQuery('.wpcf7-select').val(null).trigger('change');
	jQuery('.inputFormCountry').val(null).trigger('change');

});



