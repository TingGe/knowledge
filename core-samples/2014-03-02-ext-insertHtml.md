---
layout: post
category : lessons
tagline: "insertAdjacentHTML方法"
tags : [ext, insertHTML, insertAdjacentHTML]
---

## 兼容FF/IE的insertAdjacentHTML方法

改自ext-4.2.1.883的ext-all-dev.js中的insertHtml(where,el,html)方法。

方法名称：insertHtml(where,el,html)

参数介绍：

where：插入位置。包括beforeBegin,beforeEnd,afterBegin,afterEnd。

el：用于参照插入位置的html元素对象

html：要插入的html代码
    
   	var global = this,
     Ext = Ext || {};
     Ext.global = global;

    Ext.userAgent = navigator.userAgent.toLowerCase();
    var check = function (regex) {
            return regex.test(Ext.userAgent);
        },
        isOpera = check(/opera/),
        isIE = !isOpera && check(/msie/);
    Ext.isIE = isIE;

    /**
     * @property Range True if browser support document.createRange native method.
     * @type {Boolean}
     */
    function Range() {
        return !!document.createRange;
    }
    /**
     * @property CreateContextualFragment True if browser support CreateContextualFragment range native methods.
     * @type {Boolean}
     */
    function CreateContextualFragment() {
        var range = Range() ? document.createRange() : false;
        return range && !!range.createContextualFragment;
    }

    // kill repeat to save bytes
    var tableRe = /^(?:table|thead|tbody|tr|td)$/i,
        tableElRe = /td|tr|tbody|thead/i,
        afterbegin = 'afterbegin',
        afterend = 'afterend',
        beforebegin = 'beforebegin',
        beforeend = 'beforeend',
        ts = '<table>',
        te = '</table>',
        tbs = ts + '<tbody>',
        tbe = '</tbody>' + te,
        trs = tbs + '<tr>',
        tre = '</tr>' + tbe,
        endRe = /end/i,
        bbValues = ['BeforeBegin', 'previousSibling'],
        aeValues = ['AfterEnd', 'nextSibling'],
        bb_ae_PositionHash = {
            beforebegin: bbValues,
            afterend: aeValues
        },
        fullPositionHash = {
            beforebegin: bbValues,
            afterend: aeValues,
            afterbegin: ['AfterBegin', 'firstChild'],
            beforeend: ['BeforeEnd', 'lastChild']
        };

    /**
     * @private
     * Nasty code for IE's broken table implementation
     */
    function insertIntoTable(tag, where, destinationEl, html) {
        var node,
                before,
                bb = where == beforebegin,
                ab = where == afterbegin,
                be = where == beforeend,
                ae = where == afterend;

        if (tag == 'td' && (ab || be) || !tableElRe.test(tag) && (bb || ae)) {
            return null;
        }
        before = bb ? destinationEl :
                ae ? destinationEl.nextSibling :
                        ab ? destinationEl.firstChild : null;

        if (bb || ae) {
            destinationEl = destinationEl.parentNode;
        }

        if (tag == 'td' || (tag == 'tr' && (be || ab))) {
            node = this.ieTable(4, trs, html, tre);
        } else if (((tag == 'tbody' || tag == 'thead') && (be || ab)) ||
                (tag == 'tr' && (bb || ae))) {
            node = this.ieTable(3, tbs, html, tbe);
        } else {
            node = this.ieTable(2, ts, html, te);
        }
        destinationEl.insertBefore(node, before);
        return node;
    }

    function insertHtml(where, el, html) {
        var hashVal,
            range,
            rangeEl,
            setStart,
            frag;

        where = where.toLowerCase();

        // Has fast HTML insertion into existing DOM: http://www.w3.org/TR/html5/apis-in-html-documents.html#insertadjacenthtml
        if (el.insertAdjacentHTML) {

            // IE's incomplete table implementation: http://www.ericvasilik.com/2006/07/code-karma.html
            if (Ext.isIE && tableRe.test(el.tagName) && (frag = insertIntoTable(el.tagName.toLowerCase(), where, el, html))) {
                return frag;
            }

            if ((hashVal = fullPositionHash[where])) {

                if (Ext.global.MSApp && Ext.global.MSApp.execUnsafeLocalFunction) {
                    //ALLOW MS TO EXECUTE THIS CODE FOR NATIVE WINDOWS 8 DESKTOP APPS
                    MSApp.execUnsafeLocalFunction(function () {
                        el.insertAdjacentHTML(hashVal[0], html);
                    });
                } else {
                    el.insertAdjacentHTML(hashVal[0], html);
                }

                return el[hashVal[1]];
            }
            // if (not IE and context element is an HTMLElement) or TextNode
        } else {
            // we cannot insert anything inside a textnode so...
            if (el.nodeType === 3) {
                where = where === 'afterbegin' ? 'beforebegin' : where;
                where = where === 'beforeend' ? 'afterend' : where;
            }
            range = CreateContextualFragment() ? el.ownerDocument.createRange() : undefined;
            setStart = 'setStart' + (endRe.test(where) ? 'After' : 'Before');
            if (bb_ae_PositionHash[where]) {
                if (range) {
                    range[setStart](el);
                    frag = range.createContextualFragment(html);
                } else {
                    frag = this.createContextualFragment(html);
                }
                el.parentNode.insertBefore(frag, where == beforebegin ? el : el.nextSibling);
                return el[(where == beforebegin ? 'previous' : 'next') + 'Sibling'];
            } else {
                rangeEl = (where == afterbegin ? 'first' : 'last') + 'Child';
                if (el.firstChild) {
                    if (range) {
                        range[setStart](el[rangeEl]);
                        frag = range.createContextualFragment(html);
                    } else {
                        frag = this.createContextualFragment(html);
                    }

                    if (where == afterbegin) {
                        el.insertBefore(frag, el.firstChild);
                    } else {
                        el.appendChild(frag);
                    }
                } else {
                    el.innerHTML = html;
                }
                return el[rangeEl];
            }
        }
    }
    
## 更多参见

- 司徒正美博客园：[javascript动态插入技术](http://www.cnblogs.com/rubylouvre/archive/2009/12/14/1622631.html)
- sniper007博客园：[【javascript基础】insertAdjacentHTML和insertAdjacentText方法](http://www.cnblogs.com/sniper007/archive/2013/05/07/3065260.html)
- W3C:[HTML5/element](http://www.w3.org/html/ig/zh/wiki/HTML5/elements#dom-insertadjacenthtml)
- 司徒正美博客园：[高效将字符串转换为文档碎片](http://www.cnblogs.com/rubylouvre/archive/2011/04/15/2016800.html)
