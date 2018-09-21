(function() {
	var self = this;
	var keycodeTable = {

		execute: function(keyCodeTools) {
			this.keyCodeTools = keyCodeTools;
			this.makeKeyCodes();
		},

		makeKeyCodes: function() {
			var self = this;
			var table = document.getElementById('keycode_table');
			var keyCode = this.keyCodeTools.KeyCode;
			var keys = Object.keys(keyCode);
			var col = 0;
			var row = 0;
			var tr = null;
			keys.forEach(function(key, i) {
				col++;
				if (col == 1) {
					row++;
					tr = document.createElement('tr');
					tr.className = 'keycode_tr';
				}
				var value = keyCode[key];
				var td = document.createElement('td');
				td.className = 'keycode_td';
				td.innerText = key + ' = ' + value;
				tr.appendChild(td);
				if (col == 5 || keys.length == i+1) {
					col = 0;
					table.appendChild(tr);
					tr = null;
				}
			});
		}

	};

	var callback = function() {
		keycodeTable.execute(self.KeyCodeTools);
	};
	
	if (document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
		callback();
	} else {
		document.addEventListener('DOMContentLoaded', callback);
	}
}).call(this);