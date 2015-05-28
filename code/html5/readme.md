# HTML5特性检测 #

要一个全功能的库，可以试试[Modernizr](http://www.modernizr.com)。

## audio ##

	return !!document.createElement('audio').canPlayType;

## MP3格式的audio ##
	
	var a = document.createElement('audio');
	return !!(a.canPlayType && a.canPlayType('audio/mpeg').replace(/no/, ''));

## Vorbis格式的audio ##
	
	var a = document.createElement('audio');
	return !!(a.canPlayType && a.canPlayType('audio/ogg;codecs="vorbis"').replace(/no/, ''));

## WAV格式的audio ##
	
	var a = document.createElement('audio');
	return !!(a.canPlayType && a.canPlayType('audio/wav;codecs="1"').replace(/no/, ''));

## AAC格式的audio ##
	
	var a = document.createElement('audio');
	return !!(a.canPlayType && a.canPlayType('audio/mp4;codecs="mp4a.40.2"').replace(/no/, ''));

## canvas ##

	return !!document.createElement('canvas').getContext;

## canvas文本API ##

	var c = document.createElement('canvas');
	return c.getContext && typeof c.getContext('2d').fillText == 'function';

## command ##

	return 'type' in document.createElement('command');

## datalist ##

	return 'options' in document.createElement('datalist');

## details ##

	return 'open' in document.createElement('details');

## device ##

	return 'type' in document.createElement('device');

## form约束验证 ##

	return 'noValidate' in document.createElement('form');

## iframe sandbox ##

	return 'sanbox' in document.createElement('iframe');

## iframe srcdoc ##

	return 'srcdoc' in document.createElement('iframe');

### input autofocus ###

	return 'autofocus' in document.createElement('input');

## input placeholder ##

	return 'placeholder' in document.createElement('input');

## input type="color" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'color');
	return i.type !== 'text';

## input type="email" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'email');
	return i.type !== 'text';

## input type="number" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'number');
	return i.type !== 'text';

## input type="range" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'range');
	return i.type !== 'text';

## input type="search" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'search');
	return i.type !== 'text';

## input type="tel" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'tel');
	return i.type !== 'text';

## input type="url" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'url');
	return i.type !== 'text';

## input type="date" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'date');
	return i.type !== 'text';

## input type="time" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'time');
	return i.type !== 'text';

## input type="datetime" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'datetime');
	return i.type !== 'text';

## input type="datetime-local" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'datetime-local');
	return i.type !== 'text';

## input type="month" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'month');
	return i.type !== 'text';

## input type="week" ##

	var i = document.createElement('input');
	i.setAttribute('type', 'week');
	return i.type !== 'text';

## meter ##

	return 'value' in document.createElement('meter');

## output ##

	return 'value' in document.createElement('output');

## progress ##

	return 'value' in document.createElement('progress');

## time ##

	return 'valueAsDate' in document.createElement('time');

## video ##

	return !!document.createElement('video').canPlayType;

## video字幕 ##

	return 'track' in document.createElement('track');

## video poster ##

	return 'poster' in document.createElement('video');

## video WebM格式 ##

	var v = document.createElement('video');
	return !!(v.canPlayType && v.canPlayType('video/webm;codes="vp8,vorbis"').replace('no', ''));

## video H.264格式 ##

	var v = document.createElement('video');
	return !!(v.canPlayType && v.canPlayType('video/mp4;codes="avc1.142E01E,mp4a.40.2"').replace('no', ''));

## video Theora格式 ##

	var v = document.createElement('video');
	return !!(v.canPlayType && v.canPlayType('video/ogg;codes="theora,vorbis"').replace('no', ''));

## contentEditable ##

	return 'isContentEditable' in document.createElement('span');

## Cross-document messaging ##

	return !!window.postMessage;

## Drag and drop ##

	return 'draggable' in document.createElement('span');

## 文件API ##

	return typeof FileReader != 'undefined';

## Geolocation ##

	return !!navigator.geolocation;

## 历史 ##

	return !!(window.history && window.history.pushState && window.history.popState);

## 本地存储 ##

	return ('localStorage' in window) && window['localStorage'] !== null;

## 微数据 ##

	return !!document.getItems;

## 离线Web应用程序 ##

	return !!window.applicationCache;

## "服务器已发送"(Server-sent)事件 ##

	return typeof EventSource !== 'undefined';

## 会话存储(Session storage) ##

	try {
		return ('sessionStorage' in window) && window['sessionStorage'] !==null;
	} catch (e) {
		return false;
	}

## SVG ##

	return !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);

## text/html中的SVG ##

	var e = document.createElement('div');
	e.innerHTML = '<svg></svg>';
	return !!(window.SVGSVGElement && e.firstChild instanceof window.SVGSVGElement);

## WebSimpleDB ##

	return !!window.indexedDB;

## Web Sockets ##

	return !!window.WebSocket;

## Web SQL Database ##

	return !!window.openDatabase;

## Web Workers ##

	return !!window.Worker;

## Undo ##

	return typeof UndoManager !== 'undefined';