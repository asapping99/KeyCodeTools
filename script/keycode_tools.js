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
		KO_EN: 21,
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
		EQUAL: 61,
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
		
		REST: 188,
		COMMA: 190,
		SLASH: 191,
		GRAVE: 192,
		
		BRACKETS_LEFT: 219,
		BACKSLASH: 220,
		BRACKETS_RIGHT: 221,
		QUOT: 222		
	};

	root.KeyCodeTools = factory(root, { KeyCode: KeyCode });
}(this, function(root, KeyCodeTools) {
	
	KeyCodeTools.tool = {
		checkNumber: function(key) {
			if ((key >= KeyCodeTools.KeyCode.NUM0 && key <= KeyCodeTools.KeyCode.NUM9) || 
				(key >= KeyCodeTools.KeyCode.NUMLOCK0 && key <= KeyCodeTools.KeyCode.NUMLOCK9)) {
				return true;
			}
			return false;
		}
	};

	return KeyCodeTools;
}));