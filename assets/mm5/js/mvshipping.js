function shipestimate() {
	var self = this;
	this.dialog = document.getElementById('shipestimate_dialog');
	this.backing = document.getElementById('shipestimate_backing');
	this.inputfields_tbody = document.getElementById('shipestimate_inputfields_tbody');
	this.shippingmethods_tbody = document.getElementById('shipestimate_shippingmethods_tbody');
	this.shippingmethods = document.getElementById('shipestimate_shippingmethods');
	this.body = document.getElementsByTagName('body')[0];
	this.close = document.getElementById('shipestimate_close');
	this.recalculate = document.getElementById('shipestimate_recalculate');
	this.calculate = document.getElementById('shipestimate_calculate');
	this.show = document.getElementById('shipestimate_show');
	if (this.close)
		this.close.onclick = function() {
			self.Hide();
			return false
		}
	if (this.recalculate)
		this.recalculate.onclick = function() {
			self.Show();
			return false
		}
	if (this.calculate)
		this.calculate.onclick = function() {
			self.Calculate();
			return false
		}
	if (this.show)
		this.show.onclick = function() {
			self.Show();
			return false
		}
	if (this.backing)
		this.backing.onclick = function() {
			self.Hide();
			return false
		}
}
shipestimate.prototype.Show = function() {
	var self = this;
	this.dialog.style.display = 'block';
	//this.backing.style.display = 'inline-block';
	this.shippingmethods_tbody.style.display = 'none';
	this.inputfields_tbody.style.display = '';
	this.recalculate.style.display = 'none';
	this.calculate.style.display = 'inline-block';
	window.scrollTo(0, 0);
	window.onresize = function() {
		self.Resize()
	}
	self.Resize()
}
shipestimate.prototype.Hide = function() {
	this.dialog.style.display = 'none';
	this.backing.style.display = 'none'
}
shipestimate.prototype.Calculate = function() {
	var iframe;
	var self = this;
	try {
		iframe = document.createElement('<iframe name="shipestimate_iframe">')
	} catch(exception) {
		iframe = document.createElement('iframe')
	}
	iframe.id = 'shipestimate_iframe';
	iframe.name = 'shipestimate_iframe';
	iframe.style.display = 'none';
	this.shippingmethods.innerHTML = '<br />loading...<br /><br />';
	this.shippingmethods_tbody.style.display = '';
	this.inputfields_tbody.style.display = 'none';
	this.recalculate.style.display = 'none';
	this.calculate.style.display = 'none';
	this.body.insertBefore(iframe, this.body.firstChild);
	if (iframe.attachEvent)
		iframe.attachEvent("onload", function() {
			self.Replace(iframe)
		});
	else
		iframe.onload = function() {
			self.Replace(iframe)
		};
	document.shipestimate_form.target = 'shipestimate_iframe';
	document.shipestimate_form.submit()
}
shipestimate.prototype.Replace = function(iframe) {
	var content;
	var self = this;
	content = (iframe.contentWindow.document.getElementById('shipestimate_rates') || iframe.contentWindow.document.body).innerHTML;
	this.shippingmethods.innerHTML = content;
	this.recalculate.style.display = 'inline-block';
	setTimeout(function() {
		iframe.parentNode.removeChild(iframe)
	}, 1)
}
shipestimate.prototype.Resize = function() {
	if (document.documentElement.clientHeight > document.body.scrollHeight) {
		if (this.backing)
			this.backing.style.height = document.documentElement.clientHeight + 'px'
	} else {
		if (this.backing)
			this.backing.style.height = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight + 'px' : document.documentElement.scrollHeight + 'px'
	}
	if (this.dialog)
		this.dialog.style.left = ((document.body.offsetWidth / 2) - (this.dialog.offsetWidth / 2)) + 'px';
	if (this.dialog)
		this.dialog.style.top = 100 + 'px'
}
var shipestimate_init = new shipestimate(); 