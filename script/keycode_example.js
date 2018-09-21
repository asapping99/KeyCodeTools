(function() {
	var self = this;
	var KeyCodeExample = {

		exampleModules: [],

		initialize: function(keyCodeTools) {
			this.keyCodeTools = keyCodeTools;
			this.setExampleModules();
			this.eventBinding();
		},

		setExampleModules: function() {
			var self = this;
			var modules = document.getElementsByClassName('example_module');
			for (var i = 0; i < modules.length; i++) {
				var module = modules[i];
				var moduleObj = {
					moduleName: module.dataset.name,
					module: module,
					inputTags: module.getElementsByTagName("input"),
					buttonTags: module.getElementsByTagName("button")
				};
				this.exampleModules.push(moduleObj);
			};
		},
		
		eventBinding: function() {
			var self = this;
			this.exampleModules.forEach(function(exampleModule, idx) {
				for (var i = 0; i < exampleModule.inputTags.length; i++) {
					var inputTag = exampleModule.inputTags[i];
					if (inputTag.dataset && inputTag.dataset.event) {
						var eventName = inputTag.dataset.event;
						if (self[eventName]) {
							inputTag.addEventListener("keydown", self[eventName].bind(self));
							inputTag.addEventListener("keypress", self[eventName].bind(self));
							inputTag.addEventListener("keyup", self[eventName].bind(self));
							inputTag.addEventListener("focusout", self[eventName].bind(self));
							inputTag.addEventListener("blur", self[eventName].bind(self));
						}
					}
				}
				for (var i = 0; i < exampleModule.buttonTags.length; i++) {
					var buttonTag = exampleModule.buttonTags[i];
					if (buttonTag.dataset && buttonTag.dataset.event) {
						var eventName = buttonTag.dataset.event;
						if (self[eventName]) {
							buttonTag.addEventListener("click", self[eventName].bind(self));
						}
					}
				}
			});
		},

		onInputNumber: function(event) {
			var type = event.type;
			var keyCode = event.keyCode;
			if (type == 'keydown') {
				if (this.keyCodeTools.tools.checkInputNumber(keyCode, event)) {
					return true;
				}
				event.preventDefault();
				return false;
			} else if (type == 'keyup') {
				if (this.keyCodeTools.tools.checkEnter(keyCode)) {
					this.onSubmitNumber();
				}
				return this.keyCodeTools.tools.checkInputNumber(keyCode, event);
			}
		},

		onInputCharacter: function(event) {
			var type = event.type;
			var keyCode = event.keyCode;
			if (type == 'keydown') {
				if (this.keyCodeTools.tools.checkInputCharacter(keyCode, event)) {
					return true;
				}
				event.preventDefault();
				return false;
			} else if (type == 'keyup') {
				if (this.keyCodeTools.tools.checkEnter(keyCode)) {
					this.onSubmitCharacter();
				}
				return this.keyCodeTools.tools.checkInputCharacter(keyCode, event);
			}
		},

		onSubmitNumber: function(event) {
			var enableSubmit = false;
			if (typeof event == 'undefined') {
				enableSubmit = true;
			} else if (event && event.type) {
				enableSubmit = event.type == 'click';
			}
			if (enableSubmit) {
				var valueDom = document.getElementById('input-number-value');
				var resultDom = document.getElementById('input-number-result');
				var inputTag = document.getElementById('input-number');
				valueDom.innerText = inputTag.value; 
				if ((/[0-9]$/).test(inputTag.value)) {
					resultDom.innerText = 'value is number';
				} else {
					resultDom.innerText = 'value is not number';
				}
			}
		},

		onSubmitCharacter: function(event) {
			var enableSubmit = false;
			if (typeof event == 'undefined') {
				enableSubmit = true;
			} else if (event && event.type) {
				enableSubmit = event.type == 'click';
			}
			if (enableSubmit) {
				var valueDom = document.getElementById('input-character-value');
				var inputTag = document.getElementById('input-character');
				valueDom.innerText = inputTag.value;
			}
		}

	};

	var callback = function() {
		KeyCodeExample.initialize(self.KeyCodeTools);
	};
	
	if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
		callback();
	} else {
		document.addEventListener('DOMContentLoaded', callback);
	}
}).call(this);