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
		/* Storefront rotate one at a time carousel */

		$('.carousel .item').each(function(){
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
				next.children(':first-child').clone().appendTo($(this));

			for (var i=0;i<4;i++) {
				next=next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}

			next.children(':first-child').clone().appendTo($(this));

			}
		});
	},

	JS_CTGY: function () {

	},


	JS_PROD: function () {


	},

	

	JS_PATR: function () {

	},

	

	JS_BASK: function () {

	// ---- Estimate Shipping Function ---- //

		//function shipestimate(){var self=this;this.dialog=document.getElementById('shipestimate_dialog');this.backing=document.getElementById('shipestimate_backing');this.inputfields_tbody=document.getElementById('shipestimate_inputfields_tbody');this.shippingmethods_tbody=document.getElementById('shipestimate_shippingmethods_tbody');this.shippingmethods=document.getElementById('shipestimate_shippingmethods');this.body=document.getElementsByTagName('body')[0];this.close=document.getElementById('shipestimate_close');this.recalculate=document.getElementById('shipestimate_recalculate');this.calculate=document.getElementById('shipestimate_calculate');this.show=document.getElementById('shipestimate_show');if(this.close)this.close.onclick=function(){self.Hide();return false}if(this.recalculate)this.recalculate.onclick=function(){self.Show();return false}if(this.calculate)this.calculate.onclick=function(){self.Calculate();return false}if(this.show)this.show.onclick=function(){self.Show();return false}if(this.backing)this.backing.onclick=function(){self.Hide();return false}}shipestimate.prototype.Show=function(){var self=this;this.dialog.style.display='block';this.shippingmethods_tbody.style.display='none';this.inputfields_tbody.style.display='';this.recalculate.style.display='none';this.calculate.style.display='inline-block';window.scrollTo(0,0);window.onresize=function(){self.Resize()}self.Resize()}shipestimate.prototype.Hide=function(){this.dialog.style.display='none';this.backing.style.display='none'}shipestimate.prototype.Calculate=function(){var iframe;var self=this;try{iframe=document.createElement('<iframe name="shipestimate_iframe">')}catch(exception){iframe=document.createElement('iframe')}iframe.id='shipestimate_iframe';iframe.name='shipestimate_iframe';iframe.style.display='none';this.shippingmethods.innerHTML='<br />loading...<br /><br />';this.shippingmethods_tbody.style.display='';this.inputfields_tbody.style.display='none';this.recalculate.style.display='none';this.calculate.style.display='none';this.body.insertBefore(iframe,this.body.firstChild);if(iframe.attachEvent)iframe.attachEvent("onload",function(){self.Replace(iframe)});else iframe.onload=function(){self.Replace(iframe)};document.shipestimate_form.target='shipestimate_iframe';document.shipestimate_form.submit()}shipestimate.prototype.Replace=function(iframe){var content;var self=this;content=(iframe.contentWindow.document.getElementById('shipestimate_rates')||iframe.contentWindow.document.body).innerHTML;this.shippingmethods.innerHTML=content;this.recalculate.style.display='inline-block';setTimeout(function(){iframe.parentNode.removeChild(iframe)},1)}shipestimate.prototype.Resize=function(){if(document.documentElement.clientHeight>document.body.scrollHeight){if(this.backing)this.backing.style.height=document.documentElement.clientHeight+'px'}else{if(this.backing)this.backing.style.height=(document.body.scrollHeight>document.documentElement.scrollHeight)?document.body.scrollHeight+'px':document.documentElement.scrollHeight+'px'}if(this.dialog)this.dialog.style.left=((document.body.offsetWidth/2)-(this.dialog.offsetWidth/2))+'px';if(this.dialog)this.dialog.style.top=100+'px'}var shipestimate_init=new shipestimate();

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
				contactName: {required: 'Your Name Is Required', minlength: jQuery.format('Your Name must be a minimum of {0} characters!')},
				contactEmail: {required: 'Your Email Address Is Required', email: 'Your Email Address must be formatted like name@domain.com'},
				contactComment: {required: 'Comments or Questions Are Required', minlength: jQuery.format('Your Message must be a minimum of {0} characters!')}
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