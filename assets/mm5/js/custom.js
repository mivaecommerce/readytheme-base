var MivaMerchantDesign = {

		init: function () {

		// Don't Edit From Here ------>
		
		var mivaPageCode = document.body.id;

		String.prototype.toCamelCase = function () {

			return this.replace(/(\-[a-z])/g, function ($1) {

				return $1.toUpperCase().replace('-', '');
			});

		};

		mivaPageCode = mivaPageCode.toCamelCase();

		if (MivaMerchantDesign[mivaPageCode]) {

			$(document).ready(function () {

				MivaMerchantDesign[mivaPageCode]();

			}); // ---- If the function exists, run it, otherwise, don't do anything. ---- //

		};

		// <----- To Here

		$(document).ready(function () {

		// ---- Back to Top Controls ---- //

			function backToTop () {

				var chaser = $('.totop');

				windowHeight = $(window).height();

				if (chaser) {

					$(window).scroll(function() {

						if ($(window).scrollTop() >= windowHeight / 2) {


							chaser.fadeIn();

						}

						else {


							chaser.hide();

						};
					});

					chaser.find('a').on('click', function (e) {

						e.preventDefault();

						$('html, body').animate({scrollTop: '0px'}, 800);

					});

				};

			};

			var backToTop = new backToTop;

		});

	},


	JS_SFNT: function () {
	

	},

	JS_CTGY: function () {

	},


	JS_PROD: function () {


	},

	

	JS_PATR: function () {

	},

	

	JS_BASK: function () {

	
	},

	

	JS_ACAD: function () {

		$('#acad_form').find('select').addClass('form-control');

	},

	

	JS_ACED: function () {

		$('#aced_form').find('select').addClass('form-control');

	},

	

	JS_AFAD: function () {

		$('#afad_form').find('select').addClass('form-control');

	},

	

	JS_AFED: function () {

		$('#afed_form').find('select').addClass('form-control');

	},

	

	JS_CTUS: function () {
	// ---- Additional Server Security To Help Against Spambots ---- //
		var contactForm = $('#contact-form');
		$('#noscript-warning').remove();
		contactForm.removeClass('hidden');
		$.get('forms/token.php', function (tkn) {
			contactForm.append('<input type="hidden" name="mms" value="' + tkn + '" />');
		});
		
	// ---- Form Validation ---- //
		contactForm.validate({
			errorContainer: '#contact-form div.error-message',
			errorLabelContainer: '#contact-form div.error-message ul',
			errorElement: 'li',
			rules: {
				contactName: {required: true, minlength: 2},
				contactEmail: {required: true, email: true},
				contactComment: {required: true, minlength: 2}
			},
			messages: {
				contactName: {required: 'Your Name Is Required', minlength: jQuery.validator.format('Your Name must be a minimum of {0} characters!')},
				contactEmail: {required: 'Your Email Address Is Required', email: 'Your Email Address must be formatted like name@domain.com'},
				contactComment: {required: 'Comments or Questions Are Required', minlength: jQuery.validator.format('Your Message must be a minimum of {0} characters!')}
			},
			highlight: function (element, errorClass) {
				$(element.form).find('label[for=' + element.id + ']').addClass(errorClass);
			},
			unhighlight: function (element, errorClass) {
				$(element.form).find('label[for=' + element.id + ']').removeClass(errorClass);
			}
		});
	},

	

	JS_AFCL: function () {

	},

	

	JS_LOGN: function () {

	},

	

	JS_ORDL: function () {

	},

	

	JS_ORHL: function () {

	},

	

	JS_OCST: function () {

		$('#ocst_form').find('select').addClass('form-control');



		if ($('#shipping_controls').is(':visible')) {

			if ($('#shipping_to_show').is(':checked')) {

				$('#shipping_fields').hide();

			};

			$('#shipping_to_show').on('change', function () {

				$('#shipping_fields').toggle();

			});

		};

		if ($('#billing_controls').is(':visible')) {

			if ($('#billing_to_show').is(':checked')) {

				$('#billing_fields').hide();

			};

			$('#billing_to_show').on('change', function () {

				$('#billing_fields').toggle();

			});

		};

	},

	

	JS_OSEL: function () {

	},

	

	JS_OPAY: function () {

		$('#opay-form').find('input[type="text"]').addClass('form-control');

		$('#opay-form').find('select').addClass('form-control').wrap('<div class="col-md-6"></div>');

		$('#opay-form').find('#js-cc_exp select').first().find('option:first').text('Month');

		$('#opay-form').find('#js-cc_exp select').last().find('option:first').text('Year');

	},

	

	JS_INVC: function () {

	}

};

MivaMerchantDesign.init();