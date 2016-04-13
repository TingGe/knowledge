# HTML5特性检测 #

要一个全功能的库，可以试试[Modernizr](http://www.modernizr.com)。

## audio ##

```javascript
return !!document.createElement('audio').canPlayType;
```

## MP3格式的audio ##

```javascript
var a = document.createElement('audio');
return !!(a.canPlayType && a.canPlayType('audio/mpeg').replace(/no/, ''));
```

## Vorbis格式的audio ##

```javascript
var a = document.createElement('audio');
return !!(a.canPlayType && a.canPlayType('audio/ogg;codecs="vorbis"').replace(/no/, ''));
```

## WAV格式的audio ##

```javascript
var a = document.createElement('audio');
return !!(a.canPlayType && a.canPlayType('audio/wav;codecs="1"').replace(/no/, ''));
```

## AAC格式的audio ##

```javascript
var a = document.createElement('audio');
return !!(a.canPlayType && a.canPlayType('audio/mp4;codecs="mp4a.40.2"').replace(/no/, ''));
```

## canvas ##

```javascript
return !!document.createElement('canvas').getContext;
```

## canvas文本API ##

```javascript
var c = document.createElement('canvas');
return c.getContext && typeof c.getContext('2d').fillText == 'function';
```

## command ##

```javascript
return 'type' in document.createElement('command');
```

## datalist ##

```javascript
return 'options' in document.createElement('datalist');
```

## details ##

```javascript
return 'open' in document.createElement('details');
```

## device ##

```javascript
return 'type' in document.createElement('device');
```

## form约束验证 ##

```javascript
return 'noValidate' in document.createElement('form');
```

## iframe sandbox ##

```javascript
return 'sanbox' in document.createElement('iframe');
```

## iframe srcdoc ##

```javascript
return 'srcdoc' in document.createElement('iframe');
```

### input autofocus ###

```javascript
return 'autofocus' in document.createElement('input');
```

## input placeholder ##

```javascript
return 'placeholder' in document.createElement('input');
```

## input type="color" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'color');
return i.type !== 'text';
```

## input type="email" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'email');
return i.type !== 'text';
```

## input type="number" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'number');
return i.type !== 'text';
```

## input type="range" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'range');
return i.type !== 'text';
```

## input type="search" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'search');
return i.type !== 'text';
```

## input type="tel" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'tel');
return i.type !== 'text';
```

## input type="url" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'url');
return i.type !== 'text';
```

## input type="date" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'date');
return i.type !== 'text';
```

## input type="time" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'time');
return i.type !== 'text';
```

## input type="datetime" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'datetime');
return i.type !== 'text';
```

## input type="datetime-local" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'datetime-local');
return i.type !== 'text';
```

## input type="month" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'month');
return i.type !== 'text';
```

## input type="week" ##

```javascript
var i = document.createElement('input');
i.setAttribute('type', 'week');
return i.type !== 'text';
```

## meter ##

```javascript
return 'value' in document.createElement('meter');
```

## output ##

```javascript
return 'value' in document.createElement('output');
```

## progress ##

```javascript
return 'value' in document.createElement('progress');
```

## time ##

```javascript
return 'valueAsDate' in document.createElement('time');
```

## video ##

```javascript
return !!document.createElement('video').canPlayType;
```

## video字幕 ##

```javascript
return 'track' in document.createElement('track');
```

## video poster ##

```javascript
return 'poster' in document.createElement('video');
```

## video WebM格式 ##

```javascript
var v = document.createElement('video');
return !!(v.canPlayType && v.canPlayType('video/webm;codes="vp8,vorbis"').replace('no', ''));
```

## video H.264格式 ##

```javascript
var v = document.createElement('video');
return !!(v.canPlayType && v.canPlayType('video/mp4;codes="avc1.142E01E,mp4a.40.2"').replace('no', ''));
```

## video Theora格式 ##

```javascript
var v = document.createElement('video');
return !!(v.canPlayType && v.canPlayType('video/ogg;codes="theora,vorbis"').replace('no', ''));
```

## contentEditable ##

```javascript
return 'isContentEditable' in document.createElement('span');
```

## Cross-document messaging ##

```javascript
return !!window.postMessage;
```

## Drag and drop ##

```javascript
return 'draggable' in document.createElement('span');
```

## 文件API ##

```javascript
return typeof FileReader != 'undefined';
```

## Geolocation ##

```javascript
return !!navigator.geolocation;
```

## 历史 ##

```javascript
return !!(window.history && window.history.pushState && window.history.popState);
```

## 本地存储 ##

```javascript
return ('localStorage' in window) && window['localStorage'] !== null;
```

## 微数据 ##

```javascript
return !!document.getItems;
```

## 离线Web应用程序 ##

```javascript
return !!window.applicationCache;
```

## "服务器已发送"(Server-sent)事件 ##

```javascript
return typeof EventSource !== 'undefined';
```

## 会话存储(Session storage) ##

```javascript
try {
	return ('sessionStorage' in window) && window['sessionStorage'] !==null;
} catch (e) {
	return false;
}
```

## SVG ##

```javascript
return !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect);
```

## text/html中的SVG ##

```javascript
var e = document.createElement('div');
e.innerHTML = '<svg></svg>';
return !!(window.SVGSVGElement && e.firstChild instanceof window.SVGSVGElement);
```

## WebSimpleDB ##

```javascript
return !!window.indexedDB;
```

## Web Sockets ##

```javascript
return !!window.WebSocket;
```

## Web SQL Database ##

```javascript
return !!window.openDatabase;
```

## Web Workers ##

```javascript
return !!window.Worker;
```

## Undo ##

```javascript
return typeof UndoManager !== 'undefined';
```