/*
* 事件类 sea， 实现 on,off,emit
* Todo: once
*/

(function (global) {
	var seajs = global.seajs = {
		// The current version of Sea.js being used
		version: "@VERSION"
	}
	var data = seajs.data = {}

	/**
	 * util-events.js - The minimal events support
	 * 参见： https://github.com/seajs/seajs/blob/master/src/util-path.js
	 */

	var events = data.events = {}

	// Bind event
	seajs.on = function (name, callback) {
		var list = events[name] || (events[name] = [])
		list.push(callback)
		return seajs
	}

	// Remove event. If `callback` is undefined, remove all callbacks for the
	// event. If `event` and `callback` are both undefined, remove all callbacks
	// for all events
	seajs.off = function (name, callback) {
		// Remove *all* events
		if (!(name || callback)) {
			events = data.events = {}
			return seajs
		}

		var list = events[name]
		if (list) {
			if (callback) {
				for (var i = list.length - 1; i >= 0; i--) {
					if (list[i] === callback) {
						list.splice(i, 1)
					}
				}
			} else {
				delete events[name]
			}
		}

		return seajs
	}

	// Emit event, firing all bound callbacks. Callbacks receive the same
	// arguments as `emit` does, apart from the event name
	var emit = seajs.emit = function (name, data) {
		var list = events[name],
			fn

		if (list) {
			// Copy callback lists to prevent modification
			list = list.slice()

			// Execute event callbacks
			while ((fn = list.shift())) {
				fn(data)
			}
		}

		return seajs
	}
})(this);
