(function(root, factory) {
	var KeyCode = {
		BACK: 8,
		TAB: 9,
		ENTER: 13,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PAUSEBREAK: 19,
		CAPSLOOK: 20,
		ZH: 25,
		ESC: 27,
		SPACE: 32,
		PAGEUP: 33,
		PAGEDOWN: 34,
		END: 35,
		HOME: 36,
		LEFTARROW: 37,
		UPARROW: 38,
		DOWNARROW: 40,
		RIGHTARROW: 39,
		INSERT: 45,
		DEL: 46,
		
		NUM0: 48,
		NUM1: 49,
		NUM2: 50,
		NUM3: 51,
		NUM4: 52,
		NUM5: 53,
		NUM6: 54,
		NUM7: 55,
		NUM8: 56,
		NUM9: 57,
		
		SEMICOLON: 59,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		
		WINODWS_L: 91,
		WINDOWS_R: 92,
		FUNC: 93,
		
		NUMLOCK0: 96,
		NUMLOCK1: 97,
		NUMLOCK2: 98,
		NUMLOCK3: 99,
		NUMLOCK4: 100,
		NUMLOCK5: 101,
		NUMLOCK6: 102,
		NUMLOCK7: 103,
		NUMLOCK8: 104,
		NUMLOCK9: 105,
		NUMLOCK_ASTARISK: 106,
		NUMLOCK_PLUS: 107,
		NUMLOCK_MINUS: 109,
		NUMLOCK_DOT: 110,
		NUMLOCK_SLASH: 111,
		
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		
		NUMLOCK: 144,
		SCROLL_LOCK: 145,
		
		EQUAL: 187,
		REST: 188,
		COMMA: 190,
		SLASH: 191,
		GRAVE: 192,

		KO_EN_OPERA: 197,
		
		BRACKETS_LEFT: 219,
		BACKSLASH: 220,
		BRACKETS_RIGHT: 221,
		QUOT: 222,

		KO_EN: 229
	};

	root.KeyCodeTools = factory(root, { KeyCode: KeyCode });
}(this, function(root, KeyCodeTools) {
	
	KeyCodeTools.tools = {
		shiftPullKey: false,
		ctrlPullKey: false,
		altPullKey: false,
		useEnglish: true,

		checkInputBasic: function(key, event) {
			return (key >= 8 && key <= 46) ||
				   (key == 59 || key == 61) ||
				   (key >= 91 && key <= 93) ||
				   (key >= 106 && key <= 111) || 
				   (key >= 112);
		},
		checkChangeLanguage: function(key) {
			return (key == KeyCodeTools.KeyCode.KO_EN_OPERA || key == KeyCodeTools.KeyCode.KO_EN);
		},
		checkSpecialCharacter: function(key, event) {
			return key == KeyCodeTools.KeyCode.SEMICOLON || 
				   (key >= KeyCodeTools.KeyCode.NUMLOCK_ASTARISK && key <= KeyCodeTools.KeyCode.NUMLOCK_SLASH) ||
				   (key >= KeyCodeTools.KeyCode.EQUAL && key <= KeyCodeTools.KeyCode.QUOT && key != KeyCodeTools.KeyCode.KO_EN_OPERA);
		},
		checkNumber: function(key, event) {
			return (key >= KeyCodeTools.KeyCode.NUM0 && key <= KeyCodeTools.KeyCode.NUM9 && !event.shiftKey) || 
				   (key >= KeyCodeTools.KeyCode.NUMLOCK0 && key <= KeyCodeTools.KeyCode.NUMLOCK9);
		},
		checkAlphabet: function(key, event) {
			return (key >= KeyCodeTools.KeyCode.A && key <= KeyCodeTools.KeyCode.Z);
		},
		checkInputNumber: function(key, event) {
			if (event && event.type == 'keyup') {
				event.target.value = event.target.value.replace(/[^0-9]/g, "");
			}
			return this.checkNumber(key, event) || 
				   (this.checkInputBasic(key, event) && 
				   !this.checkSpecialCharacter(key, event) &&
				   !this.checkChangeLanguage(key) &&
				   key != KeyCodeTools.KeyCode.SPACE);
		},
		checkInputCharacter: function(key, event) {
			return this.checkAlphabet(key, event) || 
				   this.checkInputBasic(key, event);
		},
		checkEnter: function(key) {
			return key == KeyCodeTools.KeyCode.ENTER;
		}
	};

	return KeyCodeTools;
}));