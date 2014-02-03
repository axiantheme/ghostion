/*!
 * Modernizr v2.7.1
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.7.1",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function ($, window, document, undefined) {
  'use strict';

  // Used to retrieve Foundation media queries from CSS.
  if($('head').has('.foundation-mq-small').length === 0) {
    $('head').append('<meta class="foundation-mq-small">');
  }

  if($('head').has('.foundation-mq-medium').length === 0) {
    $('head').append('<meta class="foundation-mq-medium">');
  }

  if($('head').has('.foundation-mq-large').length === 0) {
    $('head').append('<meta class="foundation-mq-large">');
  }

  if($('head').has('.foundation-mq-xlarge').length === 0) {
    $('head').append('<meta class="foundation-mq-xlarge">');
  }

  if($('head').has('.foundation-mq-xxlarge').length === 0) {
    $('head').append('<meta class="foundation-mq-xxlarge">');
  }

  // Enable FastClick if present

  $(function() {
    if(typeof FastClick !== 'undefined') {
      // Don't attach to body if undefined
      if (typeof document.body !== 'undefined') {
        FastClick.attach(document.body);
      }
    }
  });

  // private Fast Selector wrapper,
  // returns jQuery object. Only use where
  // getElementById is not available.
  var S = function (selector, context) {
    if (typeof selector === 'string') {
      if (context) {
        return $(context.querySelectorAll(selector));
      }

      return $(document.querySelectorAll(selector));
    }

    return $(selector, context);
  };

  /*
    https://github.com/paulirish/matchMedia.js
  */

  window.matchMedia = window.matchMedia || (function( doc, undefined ) {

    "use strict";

    var bool,
        docElem = doc.documentElement,
        refNode = docElem.firstElementChild || docElem.firstChild,
        // fakeBody required for <FF4 when executed in <head>
        fakeBody = doc.createElement( "body" ),
        div = doc.createElement( "div" );

    div.id = "mq-test-1";
    div.style.cssText = "position:absolute;top:-100em";
    fakeBody.style.background = "none";
    fakeBody.appendChild(div);

    return function(q){

      div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

      docElem.insertBefore( fakeBody, refNode );
      bool = div.offsetWidth === 42;
      docElem.removeChild( fakeBody );

      return {
        matches: bool,
        media: q
      };

    };

  }( document ));

  /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */

  (function( $ ) {

  // requestAnimationFrame polyfill adapted from Erik Möller
  // fixes from Paul Irish and Tino Zijdel
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating


  var animating,
    lastTime = 0,
    vendors = ['webkit', 'moz'],
    requestAnimationFrame = window.requestAnimationFrame,
    cancelAnimationFrame = window.cancelAnimationFrame;

  for(; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
    requestAnimationFrame = window[ vendors[lastTime] + "RequestAnimationFrame" ];
    cancelAnimationFrame = cancelAnimationFrame ||
      window[ vendors[lastTime] + "CancelAnimationFrame" ] || 
      window[ vendors[lastTime] + "CancelRequestAnimationFrame" ];
  }

  function raf() {
    if ( animating ) {
      requestAnimationFrame( raf );
      jQuery.fx.tick();
    }
  }

  if ( requestAnimationFrame ) {
    // use rAF
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
    jQuery.fx.timer = function( timer ) {
      if ( timer() && jQuery.timers.push( timer ) && !animating ) {
        animating = true;
        raf();
      }
    };

    jQuery.fx.stop = function() {
      animating = false;
    };
  } else {
    // polyfill
    window.requestAnimationFrame = function( callback, element ) {
      var currTime = new Date().getTime(),
        timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) ),
        id = window.setTimeout( function() {
          callback( currTime + timeToCall );
        }, timeToCall );
      lastTime = currTime + timeToCall;
      return id;
    };

    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
      
  }

  }( jQuery ));


  function removeQuotes (string) {
    if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^[\\/'"]+|(;\s?})+|[\\/'"]+$/g, '');
    }

    return string;
  }

  window.Foundation = {
    name : 'Foundation',

    version : '5.0.3',

    media_queries : {
      small : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      medium : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      large : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      xlarge: S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      xxlarge: S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
    },

    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

    init : function (scope, libraries, method, options, response) {
      var library_arr,
          args = [scope, method, options, response],
          responses = [];

      // check RTL
      this.rtl = /rtl/i.test(S('html').attr('dir'));

      // set foundation global scope
      this.scope = scope || this.scope;

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (this.libs.hasOwnProperty(libraries)) {
          responses.push(this.init_lib(libraries, args));
        }
      } else {
        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, libraries));
        }
      }

      return scope;
    },

    init_lib : function (lib, args) {
      if (this.libs.hasOwnProperty(lib)) {
        this.patch(this.libs[lib]);

        if (args && args.hasOwnProperty(lib)) {
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);
        }

        args = args instanceof Array ? args : Array(args);    // PATCH: added this line
        return this.libs[lib].init.apply(this.libs[lib], args);
      }

      return function () {};
    },

    patch : function (lib) {
      lib.scope = this.scope;
      lib['data_options'] = this.lib_methods.data_options;
      lib['bindings'] = this.lib_methods.bindings;
      lib['S'] = S;
      lib.rtl = this.rtl;
    },

    inherit : function (scope, methods) {
      var methods_arr = methods.split(' ');

      for (var i = methods_arr.length - 1; i >= 0; i--) {
        if (this.lib_methods.hasOwnProperty(methods_arr[i])) {
          this.libs[scope.name][methods_arr[i]] = this.lib_methods[methods_arr[i]];
        }
      }
    },

    random_str : function (length) {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

      if (!length) {
        length = Math.floor(Math.random() * chars.length);
      }

      var str = '';
      for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    },

    libs : {},

    // methods that can be inherited in libraries
    lib_methods : {
      throttle : function(fun, delay) {
        var timer = null;

        return function () {
          var context = this, args = arguments;

          clearTimeout(timer);
          timer = setTimeout(function () {
            fun.apply(context, args);
          }, delay);
        };
      },

      // parses data-options attribute
      data_options : function (el) {
        var opts = {}, ii, p, opts_arr, opts_len,
            data_options = el.data('options');

        if (typeof data_options === 'object') {
          return data_options;
        }

        opts_arr = (data_options || ':').split(';'),
        opts_len = opts_arr.length;

        function isNumber (o) {
          return ! isNaN (o-0) && o !== null && o !== "" && o !== false && o !== true;
        }

        function trim(str) {
          if (typeof str === 'string') return $.trim(str);
          return str;
        }

        // parse options
        for (ii = opts_len - 1; ii >= 0; ii--) {
          p = opts_arr[ii].split(':');

          if (/true/i.test(p[1])) p[1] = true;
          if (/false/i.test(p[1])) p[1] = false;
          if (isNumber(p[1])) p[1] = parseInt(p[1], 10);

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1]);
          }
        }

        return opts;
      },

      delay : function (fun, delay) {
        return setTimeout(fun, delay);
      },

      // test for empty object or array
      empty : function (obj) {
        if (obj.length && obj.length > 0)    return false;
        if (obj.length && obj.length === 0)  return true;

        for (var key in obj) {
          if (hasOwnProperty.call(obj, key))    return false;
        }

        return true;
      },

      register_media : function(media, media_class) {
        if(Foundation.media_queries[media] === undefined) {
          $('head').append('<meta class="' + media_class + '">');
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));
        }
      },

      addCustomRule : function(rule, media) {
        if(media === undefined) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
        } else {
          var query = Foundation.media_queries[media];
          if(query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' + 
              Foundation.media_queries[media] + '{ ' + rule + ' }');
          }
        }
      },

      loaded : function (image, callback) {
        function loaded () {
          callback(image[0]);
        }

        function bindLoad () {
          this.one('load', loaded);

          if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
            var src = this.attr( 'src' ),
                param = src.match( /\?/ ) ? '&' : '?';

            param += 'random=' + (new Date()).getTime();
            this.attr('src', src + param);
          }
        }

        if (!image.attr('src')) {
          loaded();
          return;
        }

        if (image[0].complete || image[0].readyState === 4) {
          loaded();
        } else {
          bindLoad.call(image);
        }
      },

      bindings : function (method, options) {
        var self = this,
            should_bind_events = !S(this).data(this.name + '-init');

        if (typeof method === 'string') {
          return this[method].call(this, options);
        }

        if (S(this.scope).is('[data-' + this.name +']')) {
          S(this.scope).data(this.name + '-init', $.extend({}, this.settings, (options || method), this.data_options(S(this.scope))));

          if (should_bind_events) {
            this.events(this.scope);
          }

        } else {
          S('[data-' + this.name + ']', this.scope).each(function () {
            var should_bind_events = !S(this).data(self.name + '-init');

            S(this).data(self.name + '-init', $.extend({}, self.settings, (options || method), self.data_options(S(this))));

            if (should_bind_events) {
              self.events(this);
            }
          });
        }
      }
    }
  };

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };

}(jQuery, this, this.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.alert = {
    name : 'alert',

    version : '5.0.3',

    settings : {
      animation: 'fadeOut',
      speed: 300, // fade out speed
      callback: function (){}
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      $(this.scope).off('.alert').on('click.fndtn.alert', '[data-alert] a.close', function (e) {
          var alertBox = $(this).closest("[data-alert]"),
              settings = alertBox.data('alert-init') || Foundation.libs.alert.settings;

        e.preventDefault();
        alertBox[settings.animation](settings.speed, function () {
          $(this).trigger('closed').remove();
          settings.callback();
        });
      });
    },

    reflow : function () {}
  };
}(jQuery, this, this.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.offcanvas = {
    name : 'offcanvas',

    version : '5.0.3',

    settings : {},

    init : function (scope, method, options) {
      this.events();
    },

    events : function () {
      $(this.scope).off('.offcanvas')
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
          e.preventDefault();
          $(this).closest('.off-canvas-wrap').toggleClass('move-right');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          e.preventDefault();
          $(".off-canvas-wrap").removeClass("move-right");
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
          e.preventDefault();
          $(this).closest(".off-canvas-wrap").toggleClass("move-left");
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          e.preventDefault();
          $(".off-canvas-wrap").removeClass("move-left");
        });
    },

    reflow : function () {}
  };
}(jQuery, this, this.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.reveal = {
    name : 'reveal',

    version : '5.0.3',

    locked : false,

    settings : {
      animation: 'fadeAndPop',
      animation_speed: 250,
      close_on_background_click: true,
      close_on_esc: true,
      dismiss_modal_class: 'close-reveal-modal',
      bg_class: 'reveal-modal-bg',
      open: function(){},
      opened: function(){},
      close: function(){},
      closed: function(){},
      bg : $('.reveal-modal-bg'),
      css : {
        open : {
          'opacity': 0,
          'visibility': 'visible',
          'display' : 'block'
        },
        close : {
          'opacity': 1,
          'visibility': 'hidden',
          'display': 'none'
        }
      }
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'delay');
      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this;

      $('[data-reveal-id]', this.scope)
        .off('.reveal')
        .on('click.fndtn.reveal', function (e) {
          e.preventDefault();

          if (!self.locked) {
            var element = $(this),
                ajax = element.data('reveal-ajax');

            self.locked = true;

            if (typeof ajax === 'undefined') {
              self.open.call(self, element);
            } else {
              var url = ajax === true ? element.attr('href') : ajax;

              self.open.call(self, element, {url: url});
            }
          }
        });

      $(this.scope)
        .off('.reveal');

      $(document)
        .on('click.fndtn.reveal', this.close_targets(), function (e) {

          e.preventDefault();

          if (!self.locked) {
            var settings = $('[data-reveal].open').data('reveal-init'),
                bg_clicked = $(e.target)[0] === $('.' + settings.bg_class)[0];

            if (bg_clicked && !settings.close_on_background_click) {
              return;
            }

            self.locked = true;
            self.close.call(self, bg_clicked ? $('[data-reveal].open') : $(this).closest('[data-reveal]'));
          }
        });

      if($('[data-reveal]', this.scope).length > 0) {
        $(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', this.settings.open)
          .on('opened.fndtn.reveal', this.settings.opened)
          .on('opened.fndtn.reveal', this.open_video)
          .on('close.fndtn.reveal', this.settings.close)
          .on('closed.fndtn.reveal', this.settings.closed)
          .on('closed.fndtn.reveal', this.close_video);
      } else {
        $(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', '[data-reveal]', this.settings.open)
          .on('opened.fndtn.reveal', '[data-reveal]', this.settings.opened)
          .on('opened.fndtn.reveal', '[data-reveal]', this.open_video)
          .on('close.fndtn.reveal', '[data-reveal]', this.settings.close)
          .on('closed.fndtn.reveal', '[data-reveal]', this.settings.closed)
          .on('closed.fndtn.reveal', '[data-reveal]', this.close_video);
      }

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_on : function (scope) {
      var self = this;

      // PATCH #1: fixing multiple keyup event trigger from single key press
      $('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {
        var open_modal = $('[data-reveal].open'),
            settings = open_modal.data('reveal-init');
        // PATCH #2: making sure that the close event can be called only while unlocked,
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);
        }
      });

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_off : function (scope) {
      $('body').off('keyup.fndtn.reveal');
      return true;
    },

    open : function (target, ajax_settings) {
      var self = this;
      if (target) {
        if (typeof target.selector !== 'undefined') {
          var modal = $('#' + target.data('reveal-id'));
        } else {
          var modal = $(this.scope);

          ajax_settings = target;
        }
      } else {
        var modal = $(this.scope);
      }

      var settings = modal.data('reveal-init');

      if (!modal.hasClass('open')) {
        var open_modal = $('[data-reveal].open');

        if (typeof modal.data('css-top') === 'undefined') {
          modal.data('css-top', parseInt(modal.css('top'), 10))
            .data('offset', this.cache_offset(modal));
        }

        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open
        modal.trigger('open');

        if (open_modal.length < 1) {
          this.toggle_bg(modal);
        }

        if (typeof ajax_settings === 'string') {
          ajax_settings = {
            url: ajax_settings
          };
        }

        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
          if (open_modal.length > 0) {
            var open_modal_settings = open_modal.data('reveal-init');
            this.hide(open_modal, open_modal_settings.css.close);
          }

          this.show(modal, settings.css.open);
        } else {
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;

          $.extend(ajax_settings, {
            success: function (data, textStatus, jqXHR) {
              if ( $.isFunction(old_success) ) {
                old_success(data, textStatus, jqXHR);
              }

              modal.html(data);
              $(modal).foundation('section', 'reflow');

              if (open_modal.length > 0) {
                var open_modal_settings = open_modal.data('reveal-init');
                self.hide(open_modal, open_modal_settings.css.close);
              }
              self.show(modal, settings.css.open);
            }
          });

          $.ajax(ajax_settings);
        }
      }
    },

    close : function (modal) {
      var modal = modal && modal.length ? modal : $(this.scope),
          open_modals = $('[data-reveal].open'),
          settings = modal.data('reveal-init');

      if (open_modals.length > 0) {
        this.locked = true;
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open
        modal.trigger('close');
        this.toggle_bg(modal);
        this.hide(open_modals, settings.css.close, settings);
      }
    },

    close_targets : function () {
      var base = '.' + this.settings.dismiss_modal_class;

      if (this.settings.close_on_background_click) {
        return base + ', .' + this.settings.bg_class;
      }

      return base;
    },

    toggle_bg : function (modal) {
      var settings = modal.data('reveal-init');

      if ($('.' + this.settings.bg_class).length === 0) {
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})
          .appendTo('body');
      }

      if (this.settings.bg.filter(':visible').length > 0) {
        this.hide(this.settings.bg);
      } else {
        this.show(this.settings.bg);
      }
    },

    show : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data('reveal-init');
        if (el.parent('body').length === 0) {
          var placeholder = el.wrap('<div style="display: none;" />').parent(),
              rootElement = this.settings.rootElement || 'body';;
          el.on('closed.fndtn.reveal.wrapped', function() {
            el.detach().appendTo(placeholder);
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');
          });

          el.detach().appendTo(rootElement);
        }

        if (/pop/i.test(settings.animation)) {
          css.top = $(window).scrollTop() - el.data('offset') + 'px';
          var end_css = {
            top: $(window).scrollTop() + el.data('css-top') + 'px',
            opacity: 1
          };

          return this.delay(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.trigger('opened');
              }.bind(this))
              .addClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        if (/fade/i.test(settings.animation)) {
          var end_css = {opacity: 1};

          return this.delay(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.trigger('opened');
              }.bind(this))
              .addClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        return el.css(css).show().css({opacity: 1}).addClass('open').trigger('opened');
      }

      var settings = this.settings;

      // should we animate the background?
      if (/fade/i.test(settings.animation)) {
        return el.fadeIn(settings.animation_speed / 2);
      }

      return el.show();
    },

    hide : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data('reveal-init');
        if (/pop/i.test(settings.animation)) {
          var end_css = {
            top: - $(window).scrollTop() - el.data('offset') + 'px',
            opacity: 0
          };

          return this.delay(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed');
              }.bind(this))
              .removeClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        if (/fade/i.test(settings.animation)) {
          var end_css = {opacity: 0};

          return this.delay(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed');
              }.bind(this))
              .removeClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        return el.hide().css(css).removeClass('open').trigger('closed');
      }

      var settings = this.settings;

      // should we animate the background?
      if (/fade/i.test(settings.animation)) {
        return el.fadeOut(settings.animation_speed / 2);
      }

      return el.hide();
    },

    close_video : function (e) {
      var video = $(this).find('.flex-video'),
          iframe = video.find('iframe');

      if (iframe.length > 0) {
        iframe.attr('data-src', iframe[0].src);
        iframe.attr('src', 'about:blank');
        video.hide();
      }
    },

    open_video : function (e) {
      var video = $(this).find('.flex-video'),
          iframe = video.find('iframe');

      if (iframe.length > 0) {
        var data_src = iframe.attr('data-src');
        if (typeof data_src === 'string') {
          iframe[0].src = iframe.attr('data-src');
        } else {
          var src = iframe[0].src;
          iframe[0].src = undefined;
          iframe[0].src = src;
        }
        video.show();
      }
    },

    cache_offset : function (modal) {
      var offset = modal.show().height() + parseInt(modal.css('top'), 10);

      modal.hide();

      return offset;
    },

    off : function () {
      $(this.scope).off('.fndtn.reveal');
    },

    reflow : function () {}
  };
}(jQuery, this, this.document));

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.tooltip = {
    name : 'tooltip',

    version : '5.0.3',

    settings : {
      additional_inheritable_classes : [],
      tooltip_class : '.tooltip',
      append_to: 'body',
      touch_close_text: 'Tap To Close',
      disable_for_touch: false,
      tip_template : function (selector, content) {
        return '<span data-selector="' + selector + '" class="' 
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1) 
          + '">' + content + '<span class="nub"></span></span>';
      }
    },

    cache : {},

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this;

      if (Modernizr.touch) {
        $(this.scope)
          .off('.tooltip')
          .on('click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip', 
            '[data-tooltip]', function (e) {
            var settings = $.extend({}, self.settings, self.data_options($(this)));
            if (!settings.disable_for_touch) {
              e.preventDefault();
              $(settings.tooltip_class).hide();
              self.showOrCreateTip($(this));
            }
          })
          .on('click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip', 
            this.settings.tooltip_class, function (e) {
            e.preventDefault();
            $(this).fadeOut(150);
          });
      } else {
        $(this.scope)
          .off('.tooltip')
          .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip', 
            '[data-tooltip]', function (e) {
            var $this = $(this);

            if (/enter|over/i.test(e.type)) {
              self.showOrCreateTip($this);
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {
              self.hide($this);
            }
          });
      }
    },

    showOrCreateTip : function ($target) {
      var $tip = this.getTip($target);

      if ($tip && $tip.length > 0) {
        return this.show($target);
      }

      return this.create($target);
    },

    getTip : function ($target) {
      var selector = this.selector($target),
          tip = null;

      if (selector) {
        tip = $('span[data-selector="' + selector + '"]' + this.settings.tooltip_class);
      }

      return (typeof tip === 'object') ? tip : false;
    },

    selector : function ($target) {
      var id = $target.attr('id'),
          dataSelector = $target.attr('data-tooltip') || $target.attr('data-selector');

      if ((id && id.length < 1 || !id) && typeof dataSelector != 'string') {
        dataSelector = 'tooltip' + Math.random().toString(36).substring(7);
        $target.attr('data-selector', dataSelector);
      }

      return (id && id.length > 0) ? id : dataSelector;
    },

    create : function ($target) {
      var $tip = $(this.settings.tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),
          classes = this.inheritable_classes($target);

      $tip.addClass(classes).appendTo(this.settings.append_to);
      if (Modernizr.touch) {
        $tip.append('<span class="tap-to-close">'+this.settings.touch_close_text+'</span>');
      }
      $target.removeAttr('title').attr('title','');
      this.show($target);
    },

    reposition : function (target, tip, classes) {
      var width, nub, nubHeight, nubWidth, column, objPos;

      tip.css('visibility', 'hidden').show();

      width = target.data('width');
      nub = tip.children('.nub');
      nubHeight = nub.outerHeight();
      nubWidth = nub.outerHeight();
      
      tip.css({'width' : (width) ? width : 'auto'});

      objPos = function (obj, top, right, bottom, left, width) {
        return obj.css({
          'top' : (top) ? top : 'auto',
          'bottom' : (bottom) ? bottom : 'auto',
          'left' : (left) ? left : 'auto',
          'right' : (right) ? right : 'auto'
        }).end();
      };

      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);

      if (this.small()) {
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());
        tip.addClass('tip-override');
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
      } else {
        var left = target.offset().left;
        if (Foundation.rtl) {
          left = target.offset().left + target.offset().width - tip.outerWidth();
        }
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);
        tip.removeClass('tip-override');
        if (classes && classes.indexOf('tip-top') > -1) {
          objPos(tip, (target.offset().top - tip.outerHeight() - 10), 'auto', 'auto', left)
            .removeClass('tip-override');
        } else if (classes && classes.indexOf('tip-left') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');
        } else if (classes && classes.indexOf('tip-right') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');
        }
      }

      tip.css('visibility', 'visible').hide();
    },

    small : function () {
      return matchMedia(Foundation.media_queries.small).matches;
    },

    inheritable_classes : function (target) {
      var inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'noradius'].concat(this.settings.additional_inheritable_classes),
          classes = target.attr('class'),
          filtered = classes ? $.map(classes.split(' '), function (el, i) {
            if ($.inArray(el, inheritables) !== -1) {
              return el;
            }
          }).join(' ') : '';

      return $.trim(filtered);
    },

    show : function ($target) {
      var $tip = this.getTip($target);

      this.reposition($target, $tip, $target.attr('class'));
      $tip.fadeIn(150);
    },

    hide : function ($target) {
      var $tip = this.getTip($target);

      $tip.fadeOut(150);
    },

    // deprecate reload
    reload : function () {
      var $self = $(this);

      return ($self.data('fndtn-tooltips')) ? $self.foundationTooltips('destroy').foundationTooltips('init') : $self.foundationTooltips('init');
    },

    off : function () {
      $(this.scope).off('.fndtn.tooltip');
      $(this.settings.tooltip_class).each(function (i) {
        $('[data-tooltip]').get(i).attr('title', $(this).text());
      }).remove();
    },

    reflow : function () {}
  };
}(jQuery, this, this.document));

/* Disqus Comment */
var disqus_identifier = '{{post.id}}';
var atPost = atPost || {};
atPost.loadDisqus = function() {
    var dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + ghostionConfig.disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
};
/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0.3
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null
    };

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        "iframe[src*='player.vimeo.com']",
        "iframe[src*='youtube.com']",
        "iframe[src*='youtube-nocookie.com']",
        "iframe[src*='kickstarter.com'][src*='video.html']",
        "object",
        "embed"
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

      $allVideos.each(function(){
        var $this = $(this);
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + Math.floor(Math.random()*999999);
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

/**
 * ghostHunter - 0.1
 * Copyright (C) 2014 Jamal Neufeld (jamal@i11u.me)
 * MIT Licensed
 * @license
 */
(function( $ ) {

	/* The lunr 0.4.3 library is included here to perform the fulltext searching. lunr is copyright (C) 2013 Oliver Nightingale. MIT Licensed */
	var lunr=function(t){var e=new lunr.Index;return e.pipeline.add(lunr.stopWordFilter,lunr.stemmer),t&&t.call(e,e),e};lunr.version="0.4.3","undefined"!=typeof module&&(module.exports=lunr),lunr.utils={},lunr.utils.warn=function(t){return function(e){t.console&&console.warn&&console.warn(e)}}(this),lunr.utils.zeroFillArray=function(){var t=[0];return function(e){for(;e>t.length;)t=t.concat(t);return t.slice(0,e)}}(),lunr.EventEmitter=function(){this.events={}},lunr.EventEmitter.prototype.addListener=function(){var t=Array.prototype.slice.call(arguments),e=t.pop(),n=t;if("function"!=typeof e)throw new TypeError("last argument must be a function");n.forEach(function(t){this.hasHandler(t)||(this.events[t]=[]),this.events[t].push(e)},this)},lunr.EventEmitter.prototype.removeListener=function(t,e){if(this.hasHandler(t)){var n=this.events[t].indexOf(e);this.events[t].splice(n,1),this.events[t].length||delete this.events[t]}},lunr.EventEmitter.prototype.emit=function(t){if(this.hasHandler(t)){var e=Array.prototype.slice.call(arguments,1);this.events[t].forEach(function(t){t.apply(void 0,e)})}},lunr.EventEmitter.prototype.hasHandler=function(t){return t in this.events},lunr.tokenizer=function(t){if(!arguments.length||null==t||void 0==t)return[];if(Array.isArray(t))return t.map(function(t){return t.toLowerCase()});for(var e=(""+t).replace(/^\s+/,""),n=e.length-1;n>=0;n--)if(/\S/.test(e.charAt(n))){e=e.substring(0,n+1);break}return e.split(/\s+/).map(function(t){return t.replace(/^\W+/,"").replace(/\W+$/,"").toLowerCase()})},lunr.Pipeline=function(){this._stack=[]},lunr.Pipeline.registeredFunctions={},lunr.Pipeline.registerFunction=function(t,e){e in this.registeredFunctions&&lunr.utils.warn("Overwriting existing registered function: "+e),t.label=e,lunr.Pipeline.registeredFunctions[t.label]=t},lunr.Pipeline.warnIfFunctionNotRegistered=function(t){var e=t.label&&t.label in this.registeredFunctions;e||lunr.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\n",t)},lunr.Pipeline.load=function(t){var e=new lunr.Pipeline;return t.forEach(function(t){var n=lunr.Pipeline.registeredFunctions[t];if(!n)throw Error("Cannot load un-registered function: "+t);e.add(n)}),e},lunr.Pipeline.prototype.add=function(){var t=Array.prototype.slice.call(arguments);t.forEach(function(t){lunr.Pipeline.warnIfFunctionNotRegistered(t),this._stack.push(t)},this)},lunr.Pipeline.prototype.after=function(t,e){lunr.Pipeline.warnIfFunctionNotRegistered(e);var n=this._stack.indexOf(t)+1;this._stack.splice(n,0,e)},lunr.Pipeline.prototype.before=function(t,e){lunr.Pipeline.warnIfFunctionNotRegistered(e);var n=this._stack.indexOf(t);this._stack.splice(n,0,e)},lunr.Pipeline.prototype.remove=function(t){var e=this._stack.indexOf(t);this._stack.splice(e,1)},lunr.Pipeline.prototype.run=function(t){for(var e=[],n=t.length,r=this._stack.length,o=0;n>o;o++){for(var i=t[o],s=0;r>s&&(i=this._stack[s](i,o,t),void 0!==i);s++);void 0!==i&&e.push(i)}return e},lunr.Pipeline.prototype.toJSON=function(){return this._stack.map(function(t){return lunr.Pipeline.warnIfFunctionNotRegistered(t),t.label})},lunr.Vector=function(t){this.elements=t},lunr.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var t,e=0,n=this.elements,r=n.length,o=0;r>o;o++)t=n[o],e+=t*t;return this._magnitude=Math.sqrt(e)},lunr.Vector.prototype.dot=function(t){for(var e=this.elements,n=t.elements,r=e.length,o=0,i=0;r>i;i++)o+=e[i]*n[i];return o},lunr.Vector.prototype.similarity=function(t){return this.dot(t)/(this.magnitude()*t.magnitude())},lunr.Vector.prototype.toArray=function(){return this.elements},lunr.SortedSet=function(){this.length=0,this.elements=[]},lunr.SortedSet.load=function(t){var e=new this;return e.elements=t,e.length=t.length,e},lunr.SortedSet.prototype.add=function(){Array.prototype.slice.call(arguments).forEach(function(t){~this.indexOf(t)||this.elements.splice(this.locationFor(t),0,t)},this),this.length=this.elements.length},lunr.SortedSet.prototype.toArray=function(){return this.elements.slice()},lunr.SortedSet.prototype.map=function(t,e){return this.elements.map(t,e)},lunr.SortedSet.prototype.forEach=function(t,e){return this.elements.forEach(t,e)},lunr.SortedSet.prototype.indexOf=function(t,e,n){var e=e||0,n=n||this.elements.length,r=n-e,o=e+Math.floor(r/2),i=this.elements[o];return 1>=r?i===t?o:-1:t>i?this.indexOf(t,o,n):i>t?this.indexOf(t,e,o):i===t?o:void 0},lunr.SortedSet.prototype.locationFor=function(t,e,n){var e=e||0,n=n||this.elements.length,r=n-e,o=e+Math.floor(r/2),i=this.elements[o];if(1>=r){if(i>t)return o;if(t>i)return o+1}return t>i?this.locationFor(t,o,n):i>t?this.locationFor(t,e,o):void 0},lunr.SortedSet.prototype.intersect=function(t){for(var e=new lunr.SortedSet,n=0,r=0,o=this.length,i=t.length,s=this.elements,l=t.elements;;){if(n>o-1||r>i-1)break;s[n]!==l[r]?s[n]<l[r]?n++:s[n]>l[r]&&r++:(e.add(s[n]),n++,r++)}return e},lunr.SortedSet.prototype.clone=function(){var t=new lunr.SortedSet;return t.elements=this.toArray(),t.length=t.elements.length,t},lunr.SortedSet.prototype.union=function(t){var e,n,r;return this.length>=t.length?(e=this,n=t):(e=t,n=this),r=e.clone(),r.add.apply(r,n.toArray()),r},lunr.SortedSet.prototype.toJSON=function(){return this.toArray()},lunr.Index=function(){this._fields=[],this._ref="id",this.pipeline=new lunr.Pipeline,this.documentStore=new lunr.Store,this.tokenStore=new lunr.TokenStore,this.corpusTokens=new lunr.SortedSet,this.eventEmitter=new lunr.EventEmitter,this._idfCache={},this.on("add","remove","update",function(){this._idfCache={}}.bind(this))},lunr.Index.prototype.on=function(){var t=Array.prototype.slice.call(arguments);return this.eventEmitter.addListener.apply(this.eventEmitter,t)},lunr.Index.prototype.off=function(t,e){return this.eventEmitter.removeListener(t,e)},lunr.Index.load=function(t){t.version!==lunr.version&&lunr.utils.warn("version mismatch: current "+lunr.version+" importing "+t.version);var e=new this;return e._fields=t.fields,e._ref=t.ref,e.documentStore=lunr.Store.load(t.documentStore),e.tokenStore=lunr.TokenStore.load(t.tokenStore),e.corpusTokens=lunr.SortedSet.load(t.corpusTokens),e.pipeline=lunr.Pipeline.load(t.pipeline),e},lunr.Index.prototype.field=function(t,e){var e=e||{},n={name:t,boost:e.boost||1};return this._fields.push(n),this},lunr.Index.prototype.ref=function(t){return this._ref=t,this},lunr.Index.prototype.add=function(t,e){var n={},r=new lunr.SortedSet,o=t[this._ref],e=void 0===e?!0:e;this._fields.forEach(function(e){var o=this.pipeline.run(lunr.tokenizer(t[e.name]));n[e.name]=o,lunr.SortedSet.prototype.add.apply(r,o)},this),this.documentStore.set(o,r),lunr.SortedSet.prototype.add.apply(this.corpusTokens,r.toArray());for(var i=0;r.length>i;i++){var s=r.elements[i],l=this._fields.reduce(function(t,e){var r=n[e.name].length;if(!r)return t;var o=n[e.name].filter(function(t){return t===s}).length;return t+o/r*e.boost},0);this.tokenStore.add(s,{ref:o,tf:l})}e&&this.eventEmitter.emit("add",t,this)},lunr.Index.prototype.remove=function(t,e){var n=t[this._ref],e=void 0===e?!0:e;if(this.documentStore.has(n)){var r=this.documentStore.get(n);this.documentStore.remove(n),r.forEach(function(t){this.tokenStore.remove(t,n)},this),e&&this.eventEmitter.emit("remove",t,this)}},lunr.Index.prototype.update=function(t,e){var e=void 0===e?!0:e;this.remove(t,!1),this.add(t,!1),e&&this.eventEmitter.emit("update",t,this)},lunr.Index.prototype.idf=function(t){if(this._idfCache[t])return this._idfCache[t];var e=this.tokenStore.count(t),n=1;return e>0&&(n=1+Math.log(this.tokenStore.length/e)),this._idfCache[t]=n},lunr.Index.prototype.search=function(t){var e=this.pipeline.run(lunr.tokenizer(t)),n=lunr.utils.zeroFillArray(this.corpusTokens.length),r=[],o=this._fields.reduce(function(t,e){return t+e.boost},0),i=e.some(function(t){return this.tokenStore.has(t)},this);if(!i)return[];e.forEach(function(t,e,i){var s=1/i.length*this._fields.length*o,l=this,u=this.tokenStore.expand(t).reduce(function(e,r){var o=l.corpusTokens.indexOf(r),i=l.idf(r),u=1,a=new lunr.SortedSet;if(r!==t){var h=Math.max(3,r.length-t.length);u=1/Math.log(h)}return o>-1&&(n[o]=s*i*u),Object.keys(l.tokenStore.get(r)).forEach(function(t){a.add(t)}),e.union(a)},new lunr.SortedSet);r.push(u)},this);var s=r.reduce(function(t,e){return t.intersect(e)}),l=new lunr.Vector(n);return s.map(function(t){return{ref:t,score:l.similarity(this.documentVector(t))}},this).sort(function(t,e){return e.score-t.score})},lunr.Index.prototype.documentVector=function(t){for(var e=this.documentStore.get(t),n=e.length,r=lunr.utils.zeroFillArray(this.corpusTokens.length),o=0;n>o;o++){var i=e.elements[o],s=this.tokenStore.get(i)[t].tf,l=this.idf(i);r[this.corpusTokens.indexOf(i)]=s*l}return new lunr.Vector(r)},lunr.Index.prototype.toJSON=function(){return{version:lunr.version,fields:this._fields,ref:this._ref,documentStore:this.documentStore.toJSON(),tokenStore:this.tokenStore.toJSON(),corpusTokens:this.corpusTokens.toJSON(),pipeline:this.pipeline.toJSON()}},lunr.Store=function(){this.store={},this.length=0},lunr.Store.load=function(t){var e=new this;return e.length=t.length,e.store=Object.keys(t.store).reduce(function(e,n){return e[n]=lunr.SortedSet.load(t.store[n]),e},{}),e},lunr.Store.prototype.set=function(t,e){this.store[t]=e,this.length=Object.keys(this.store).length},lunr.Store.prototype.get=function(t){return this.store[t]},lunr.Store.prototype.has=function(t){return t in this.store},lunr.Store.prototype.remove=function(t){this.has(t)&&(delete this.store[t],this.length--)},lunr.Store.prototype.toJSON=function(){return{store:this.store,length:this.length}},lunr.stemmer=function(){var t={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},e={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},n="[^aeiou]",r="[aeiouy]",o=n+"[^aeiouy]*",i=r+"[aeiou]*",s="^("+o+")?"+i+o,l="^("+o+")?"+i+o+"("+i+")?$",u="^("+o+")?"+i+o+i+o,a="^("+o+")?"+r;return function(n){var i,h,c,p,f,d,v;if(3>n.length)return n;if(c=n.substr(0,1),"y"==c&&(n=c.toUpperCase()+n.substr(1)),p=/^(.+?)(ss|i)es$/,f=/^(.+?)([^s])s$/,p.test(n)?n=n.replace(p,"$1$2"):f.test(n)&&(n=n.replace(f,"$1$2")),p=/^(.+?)eed$/,f=/^(.+?)(ed|ing)$/,p.test(n)){var m=p.exec(n);p=RegExp(s),p.test(m[1])&&(p=/.$/,n=n.replace(p,""))}else if(f.test(n)){var m=f.exec(n);i=m[1],f=RegExp(a),f.test(i)&&(n=i,f=/(at|bl|iz)$/,d=RegExp("([^aeiouylsz])\\1$"),v=RegExp("^"+o+r+"[^aeiouwxy]$"),f.test(n)?n+="e":d.test(n)?(p=/.$/,n=n.replace(p,"")):v.test(n)&&(n+="e"))}if(p=/^(.+?)y$/,p.test(n)){var m=p.exec(n);i=m[1],p=RegExp(a),p.test(i)&&(n=i+"i")}if(p=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,p.test(n)){var m=p.exec(n);i=m[1],h=m[2],p=RegExp(s),p.test(i)&&(n=i+t[h])}if(p=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,p.test(n)){var m=p.exec(n);i=m[1],h=m[2],p=RegExp(s),p.test(i)&&(n=i+e[h])}if(p=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,f=/^(.+?)(s|t)(ion)$/,p.test(n)){var m=p.exec(n);i=m[1],p=RegExp(u),p.test(i)&&(n=i)}else if(f.test(n)){var m=f.exec(n);i=m[1]+m[2],f=RegExp(u),f.test(i)&&(n=i)}if(p=/^(.+?)e$/,p.test(n)){var m=p.exec(n);i=m[1],p=RegExp(u),f=RegExp(l),d=RegExp("^"+o+r+"[^aeiouwxy]$"),(p.test(i)||f.test(i)&&!d.test(i))&&(n=i)}return p=/ll$/,f=RegExp(u),p.test(n)&&f.test(n)&&(p=/.$/,n=n.replace(p,"")),"y"==c&&(n=c.toLowerCase()+n.substr(1)),n}}(),lunr.Pipeline.registerFunction(lunr.stemmer,"stemmer"),lunr.stopWordFilter=function(t){return-1===lunr.stopWordFilter.stopWords.indexOf(t)?t:void 0},lunr.stopWordFilter.stopWords=new lunr.SortedSet,lunr.stopWordFilter.stopWords.length=119,lunr.stopWordFilter.stopWords.elements=["","a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"],lunr.Pipeline.registerFunction(lunr.stopWordFilter,"stopWordFilter"),lunr.TokenStore=function(){this.root={docs:{}},this.length=0},lunr.TokenStore.load=function(t){var e=new this;return e.root=t.root,e.length=t.length,e},lunr.TokenStore.prototype.add=function(t,e,n){var n=n||this.root,r=t[0],o=t.slice(1);return r in n||(n[r]={docs:{}}),0===o.length?(n[r].docs[e.ref]=e,this.length+=1,void 0):this.add(o,e,n[r])},lunr.TokenStore.prototype.has=function(t){if(!t)return!1;for(var e=this.root,n=0;t.length>n;n++){if(!e[t[n]])return!1;e=e[t[n]]}return!0},lunr.TokenStore.prototype.getNode=function(t){if(!t)return{};for(var e=this.root,n=0;t.length>n;n++){if(!e[t[n]])return{};e=e[t[n]]}return e},lunr.TokenStore.prototype.get=function(t,e){return this.getNode(t,e).docs||{}},lunr.TokenStore.prototype.count=function(t,e){return Object.keys(this.get(t,e)).length},lunr.TokenStore.prototype.remove=function(t,e){if(t){for(var n=this.root,r=0;t.length>r;r++){if(!(t[r]in n))return;n=n[t[r]]}delete n.docs[e]}},lunr.TokenStore.prototype.expand=function(t,e){var n=this.getNode(t),r=n.docs||{},e=e||[];return Object.keys(r).length&&e.push(t),Object.keys(n).forEach(function(n){"docs"!==n&&e.concat(this.expand(t+n,e))},this),e},lunr.TokenStore.prototype.toJSON=function(){return{root:this.root,length:this.length}};

	//This is the main plugin definition
	$.fn.ghostHunter 	= function( options ) {

	 	//Here we use jQuery's extend to set default values if they weren't set by the user
	    var opts 		= $.extend( {}, $.fn.ghostHunter.defaults, options );
	    if( opts.results ) pluginMethods.init( this , opts );

	};

	$.fn.ghostHunter.defaults = {
		results 		: false,
		rss 			: "/rss/",
		onKeyUp 		: false,
		result_template : "<h2><a href='{{link}}'>{{title}}</a></h2><h4>{{pubDate}}</h4>",
		info_template	: "<p>Number of posts found: {{amount}}</p>"
	};

	var pluginMethods 	= {

		isInit 			: false,

		init 			: function( target , opts ){

			var that 				= this;
			this.target 			= target;
			this.rss 				= opts.rss;
			this.results 			= opts.results;
			this.blogData 			= [];
			this.result_template 	= opts.result_template;
			this.info_template 		= opts.info_template;

			//This is where we'll build the index for later searching. It's not a big deal to build it on every load as it takes almost no space without data
			this.index = lunr(function () {
			    this.field('title', {boost: 10});
			    this.field('description');
			    this.field('link');
			    this.field('pubDate');
			    this.ref('id');
			});

			target.focus(function(){
				that.loadRSS();
			});

			target.closest("form").submit(function(e){
				e.preventDefault();
				that.find(target.val());
			});

			if( opts.onKeyUp ) {
				that.loadRSS();
				target.keyup(function() {
					that.find(target.val());
				});

			}

		},

		loadRSS			: function(){

			if(this.isInit) return false;

		/*	Here we load an rss feed, parse it and load it into the index.
			This function will not call on load to avoid unnecessary heavy
			operations on a page if a visitor never ends up searching anything. */

			var index 		= this.index,
				rssURL 		= this.rss,
				blogData 	= this.blogData;

			$.get(rssURL,function( data ){

		    	var posts = $(data).find('item');

		    	for (var i = 0; posts && i < posts.length; i++) {
			        var post  		= posts.eq(i);
			        var parsedData 	= {
						id: i+1,
						title 		: post.find('title').text(),
						description	: post.find('description').text(),
						pubDate 	: post.find('pubDate').text(),
						link 		: post.find('link').text()
					};

				    index.add(parsedData);
				    blogData.push(parsedData);
			    };

			});

			this.isInit = true;

		},

		find 		 	: function( value ){
			var searchResult = this.index.search( value );
			var results = $(this.results)
			results.empty();
			results.addClass("at_search_active").append(this.format(this.info_template,{"amount":searchResult.length}));

			for (var i = 0; i < searchResult.length; i++)
			{
				var postData  	= this.blogData[searchResult[i].ref - 1];
				results.append(this.format(this.result_template,postData));
			}

			if (value == 0) results.removeClass("at_search_active");
		},

		clear 			: function(){
			$(this.results).empty();
			this.target.val("");
		},

		format 			: function (t, d) {
	        return t.replace(/{{([^{}]*)}}/g, function (a, b) {
	            var r = d[b];
	            return typeof r === 'string' || typeof r === 'number' ? r : a;
	        });
		}
	}

})( jQuery );
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', ghostionConfig.google_analytics_tracking_id, ghostionConfig.site_url);
ga('send', 'pageview');
WebFontConfig = {
  google: { families: [ ghostionConfig.google_fonts_family ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1.5.0/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
/*
Syntax highlighting with language autodetection.
http://highlightjs.org/
*/

var hljs = new
function () {
  function k(v) {
    return v.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
  }
  function t(v) {
    return v.nodeName.toLowerCase()
  }
  function i(w, x) {
    var v = w && w.exec(x);
    return v && v.index == 0
  }
  function d(v) {
    return Array.prototype.map.call(v.childNodes, function (w) {
      if (w.nodeType == 3) {
        return b.useBR ? w.nodeValue.replace(/\n/g, "") : w.nodeValue
      }
      if (t(w) == "br") {
        return "\n"
      }
      return d(w)
    }).join("")
  }
  function r(w) {
    var v = (w.className + " " + (w.parentNode ? w.parentNode.className: "")).split(/\s+/);
    v = v.map(function (x) {
      return x.replace(/^language-/, "")
    });
    return v.filter(function (x) {
      return j(x) || x == "no-highlight"
    })[0]
  }
  function o(x, y) {
    var v = {};
    for (var w in x) {
      v[w] = x[w]
    }
    if (y) {
      for (var w in y) {
        v[w] = y[w]
      }
    }
    return v
  }
  function u(x) {
    var v = [];
    (function w(y, z) {
      for (var A = y.firstChild; A; A = A.nextSibling) {
        if (A.nodeType == 3) {
          z += A.nodeValue.length
        } else {
          if (t(A) == "br") {
            z += 1
          } else {
            if (A.nodeType == 1) {
              v.push({
                event: "start",
                offset: z,
                node: A
              });
              z = w(A, z);
              v.push({
                event: "stop",
                offset: z,
                node: A
              })
            }
          }
        }
      }
      return z
    })(x, 0);
    return v
  }
  function q(w, y, C) {
    var x = 0;
    var F = "";
    var z = [];
    function B() {
      if (!w.length || !y.length) {
        return w.length ? w: y
      }
      if (w[0].offset != y[0].offset) {
        return (w[0].offset < y[0].offset) ? w: y
      }
      return y[0].event == "start" ? w: y
    }
    function A(H) {
      function G(I) {
        return " " + I.nodeName + '="' + k(I.value) + '"'
      }
      F += "<" + t(H) + Array.prototype.map.call(H.attributes, G).join("") + ">"
    }
    function E(G) {
      F += "</" + t(G) + ">"
    }
    function v(G) { (G.event == "start" ? A: E)(G.node)
    }
    while (w.length || y.length) {
      var D = B();
      F += k(C.substr(x, D[0].offset - x));
      x = D[0].offset;
      if (D == w) {
        z.reverse().forEach(E);
        do {
          v(D.splice(0, 1)[0]);
          D = B()
        } while (D == w && D.length && D[0].offset == x);
        z.reverse().forEach(A)
      } else {
        if (D[0].event == "start") {
          z.push(D[0].node)
        } else {
          z.pop()
        }
        v(D.splice(0, 1)[0])
      }
    }
    return F + k(C.substr(x))
  }
  function m(y) {
    function v(z) {
      return (z && z.source) || z
    }
    function w(A, z) {
      return RegExp(v(A), "m" + (y.cI ? "i": "") + (z ? "g": ""))
    }
    function x(D, C) {
      if (D.compiled) {
        return
      }
      D.compiled = true;
      D.k = D.k || D.bK;
      if (D.k) {
        var z = {};
        function E(G, F) {
          if (y.cI) {
            F = F.toLowerCase()
          }
          F.split(" ").forEach(function (H) {
            var I = H.split("|");
            z[I[0]] = [G, I[1] ? Number(I[1]) : 1]
          })
        }
        if (typeof D.k == "string") {
          E("keyword", D.k)
        } else {
          Object.keys(D.k).forEach(function (F) {
            E(F, D.k[F])
          })
        }
        D.k = z
      }
      D.lR = w(D.l || /\b[A-Za-z0-9_]+\b/, true);
      if (C) {
        if (D.bK) {
          D.b = D.bK.split(" ").join("|")
        }
        if (!D.b) {
          D.b = /\B|\b/
        }
        D.bR = w(D.b);
        if (!D.e && !D.eW) {
          D.e = /\B|\b/
        }
        if (D.e) {
          D.eR = w(D.e)
        }
        D.tE = v(D.e) || "";
        if (D.eW && C.tE) {
          D.tE += (D.e ? "|": "") + C.tE
        }
      }
      if (D.i) {
        D.iR = w(D.i)
      }
      if (D.r === undefined) {
        D.r = 1
      }
      if (!D.c) {
        D.c = []
      }
      var B = [];
      D.c.forEach(function (F) {
        if (F.v) {
          F.v.forEach(function (G) {
            B.push(o(F, G))
          })
        } else {
          B.push(F == "self" ? D: F)
        }
      });
      D.c = B;
      D.c.forEach(function (F) {
        x(F, D)
      });
      if (D.starts) {
        x(D.starts, C)
      }
      var A = D.c.map(function (F) {
        return F.bK ? "\\.?\\b(" + F.b + ")\\b\\.?": F.b
      }).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);
      D.t = A.length ? w(A.join("|"), true) : {
        exec: function (F) {
          return null
        }
      };
      D.continuation = {}
    }
    x(y)
  }
  function c(S, L, J, R) {
    function v(U, V) {
      for (var T = 0; T < V.c.length; T++) {
        if (i(V.c[T].bR, U)) {
          return V.c[T]
        }
      }
    }
    function z(U, T) {
      if (i(U.eR, T)) {
        return U
      }
      if (U.eW) {
        return z(U.parent, T)
      }
    }
    function A(T, U) {
      return ! J && i(U.iR, T)
    }
    function E(V, T) {
      var U = M.cI ? T[0].toLowerCase() : T[0];
      return V.k.hasOwnProperty(U) && V.k[U]
    }
    function w(Z, X, W, V) {
      var T = V ? "": b.classPrefix,
      U = '<span class="' + T,
      Y = W ? "": "</span>";
      U += Z + '">';
      return U + X + Y
    }
    function N() {
      var U = k(C);
      if (!I.k) {
        return U
      }
      var T = "";
      var X = 0;
      I.lR.lastIndex = 0;
      var V = I.lR.exec(U);
      while (V) {
        T += U.substr(X, V.index - X);
        var W = E(I, V);
        if (W) {
          H += W[1];
          T += w(W[0], V[0])
        } else {
          T += V[0]
        }
        X = I.lR.lastIndex;
        V = I.lR.exec(U)
      }
      return T + U.substr(X)
    }
    function F() {
      if (I.sL && !f[I.sL]) {
        return k(C)
      }
      var T = I.sL ? c(I.sL, C, true, I.continuation.top) : g(C);
      if (I.r > 0) {
        H += T.r
      }
      if (I.subLanguageMode == "continuous") {
        I.continuation.top = T.top
      }
      return w(T.language, T.value, false, true)
    }
    function Q() {
      return I.sL !== undefined ? F() : N()
    }
    function P(V, U) {
      var T = V.cN ? w(V.cN, "", true) : "";
      if (V.rB) {
        D += T;
        C = ""
      } else {
        if (V.eB) {
          D += k(U) + T;
          C = ""
        } else {
          D += T;
          C = U
        }
      }
      I = Object.create(V, {
        parent: {
          value: I
        }
      })
    }
    function G(T, X) {
      C += T;
      if (X === undefined) {
        D += Q();
        return 0
      }
      var V = v(X, I);
      if (V) {
        D += Q();
        P(V, X);
        return V.rB ? 0 : X.length
      }
      var W = z(I, X);
      if (W) {
        var U = I;
        if (! (U.rE || U.eE)) {
          C += X
        }
        D += Q();
        do {
          if (I.cN) {
            D += "</span>"
          }
          H += I.r;
          I = I.parent
        } while (I != W.parent);
        if (U.eE) {
          D += k(X)
        }
        C = "";
        if (W.starts) {
          P(W.starts, "")
        }
        return U.rE ? 0 : X.length
      }
      if (A(X, I)) {
        throw new Error('Illegal lexeme "' + X + '" for mode "' + (I.cN || "<unnamed>") + '"')
      }
      C += X;
      return X.length || 1
    }
    var M = j(S);
    if (!M) {
      throw new Error('Unknown language: "' + S + '"')
    }
    m(M);
    var I = R || M;
    var D = "";
    for (var K = I; K != M; K = K.parent) {
      if (K.cN) {
        D = w(K.cN, D, true)
      }
    }
    var C = "";
    var H = 0;
    try {
      var B, y, x = 0;
      while (true) {
        I.t.lastIndex = x;
        B = I.t.exec(L);
        if (!B) {
          break
        }
        y = G(L.substr(x, B.index - x), B[0]);
        x = B.index + y
      }
      G(L.substr(x));
      for (var K = I; K.parent; K = K.parent) {
        if (K.cN) {
          D += "</span>"
        }
      }
      return {
        r: H,
        value: D,
        language: S,
        top: I
      }
    } catch(O) {
      if (O.message.indexOf("Illegal") != -1) {
        return {
          r: 0,
          value: k(L)
        }
      } else {
        throw O
      }
    }
  }
  function g(y, x) {
    x = x || b.languages || Object.keys(f);
    var v = {
      r: 0,
      value: k(y)
    };
    var w = v;
    x.forEach(function (z) {
      if (!j(z)) {
        return
      }
      var A = c(z, y, false);
      A.language = z;
      if (A.r > w.r) {
        w = A
      }
      if (A.r > v.r) {
        w = v;
        v = A
      }
    });
    if (w.language) {
      v.second_best = w
    }
    return v
  }
  function h(v) {
    if (b.tabReplace) {
      v = v.replace(/^((<[^>]+>|\t)+)/gm, function (w, z, y, x) {
        return z.replace(/\t/g, b.tabReplace)
      })
    }
    if (b.useBR) {
      v = v.replace(/\n/g, "<br>")
    }
    return v
  }
  function p(z) {
    var y = d(z);
    var A = r(z);
    if (A == "no-highlight") {
      return
    }
    var v = A ? c(A, y, true) : g(y);
    var w = u(z);
    if (w.length) {
      var x = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
      x.innerHTML = v.value;
      v.value = q(w, u(x), y)
    }
    v.value = h(v.value);
    z.innerHTML = v.value;
    z.className += " hljs " + (!A && v.language || "");
    z.result = {
      language: v.language,
      re: v.r
    };
    if (v.second_best) {
      z.second_best = {
        language: v.second_best.language,
        re: v.second_best.r
      }
    }
  }
  var b = {
    classPrefix: "hljs-",
    tabReplace: null,
    useBR: false,
    languages: undefined
  };
  function s(v) {
    b = o(b, v)
  }
  function l() {
    if (l.called) {
      return
    }
    l.called = true;
    var v = document.querySelectorAll("pre code");
    Array.prototype.forEach.call(v, p)
  }
  function a() {
    addEventListener("DOMContentLoaded", l, false);
    addEventListener("load", l, false)
  }
  var f = {};
  var n = {};
  function e(v, x) {
    var w = f[v] = x(this);
    if (w.aliases) {
      w.aliases.forEach(function (y) {
        n[y] = v
      })
    }
  }
  function j(v) {
    return f[v] || f[n[v]]
  }
  this.highlight = c;
  this.highlightAuto = g;
  this.fixMarkup = h;
  this.highlightBlock = p;
  this.configure = s;
  this.initHighlighting = l;
  this.initHighlightingOnLoad = a;
  this.registerLanguage = e;
  this.getLanguage = j;
  this.inherit = o;
  this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
  this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
  this.NR = "\\b\\d+(\\.\\d+)?";
  this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
  this.BNR = "\\b(0b[01]+)";
  this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
  this.BE = {
    b: "\\\\[\\s\\S]",
    r: 0
  };
  this.ASM = {
    cN: "string",
    b: "'",
    e: "'",
    i: "\\n",
    c: [this.BE]
  };
  this.QSM = {
    cN: "string",
    b: '"',
    e: '"',
    i: "\\n",
    c: [this.BE]
  };
  this.CLCM = {
    cN: "comment",
    b: "//",
    e: "$"
  };
  this.CBLCLM = {
    cN: "comment",
    b: "/\\*",
    e: "\\*/"
  };
  this.HCM = {
    cN: "comment",
    b: "#",
    e: "$"
  };
  this.NM = {
    cN: "number",
    b: this.NR,
    r: 0
  };
  this.CNM = {
    cN: "number",
    b: this.CNR,
    r: 0
  };
  this.BNM = {
    cN: "number",
    b: this.BNR,
    r: 0
  };
  this.REGEXP_MODE = {
    cN: "regexp",
    b: /\//,
    e: /\/[gim]*/,
    i: /\n/,
    c: [this.BE, {
      b: /\[/,
      e: /\]/,
      r: 0,
      c: [this.BE]
    }]
  };
  this.TM = {
    cN: "title",
    b: this.IR,
    r: 0
  };
  this.UTM = {
    cN: "title",
    b: this.UIR,
    r: 0
  }
} ();
hljs.registerLanguage("bash", function (b) {
  var a = {
    cN: "variable",
    v: [{
      b: /\$[\w\d#@][\w\d_]*/
    },
    {
      b: /\$\{(.*?)\}/
    }]
  };
  var d = {
    cN: "string",
    b: /"/,
    e: /"/,
    c: [b.BE, a, {
      cN: "variable",
      b: /\$\(/,
      e: /\)/,
      c: [b.BE]
    }]
  };
  var c = {
    cN: "string",
    b: /'/,
    e: /'/
  };
  return {
    l: /-?[a-z\.]+/,
    k: {
      keyword: "if then else elif fi for break continue while in do done exit return set declare case esac export exec",
      literal: "true false",
      built_in: "printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",
      operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
    },
    c: [{
      cN: "shebang",
      b: /^#![^\n]+sh\s*$/,
      r: 10
    },
    {
      cN: "function",
      b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
      rB: true,
      c: [b.inherit(b.TM, {
        b: /\w[\w\d_]*/
      })],
      r: 0
    },
    b.HCM, b.NM, d, c, a]
  }
});
hljs.registerLanguage("cs", function (b) {
  var a = "abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";
  return {
    k: a,
    c: [{
      cN: "comment",
      b: "///",
      e: "$",
      rB: true,
      c: [{
        cN: "xmlDocTag",
        b: "///|<!--|-->"
      },
      {
        cN: "xmlDocTag",
        b: "</?",
        e: ">"
      }]
    },
    b.CLCM, b.CBLCLM, {
      cN: "preprocessor",
      b: "#",
      e: "$",
      k: "if else elif endif define undef warning error line region endregion pragma checksum"
    },
    {
      cN: "string",
      b: '@"',
      e: '"',
      c: [{
        b: '""'
      }]
    },
    b.ASM, b.QSM, b.CNM, {
      bK: "protected public private internal",
      e: /[{;=]/,
      k: a,
      c: [{
        bK: "class namespace interface",
        starts: {
          c: [b.TM]
        }
      },
      {
        b: b.IR + "\\s*\\(",
        rB: true,
        c: [b.TM]
      }]
    }]
  }
});
hljs.registerLanguage("ruby", function (e) {
  var h = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
  var g = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";
  var a = {
    cN: "yardoctag",
    b: "@[A-Za-z]+"
  };
  var i = {
    cN: "comment",
    v: [{
      b: "#",
      e: "$",
      c: [a]
    },
    {
      b: "^\\=begin",
      e: "^\\=end",
      c: [a],
      r: 10
    },
    {
      b: "^__END__",
      e: "\\n$"
    }]
  };
  var c = {
    cN: "subst",
    b: "#\\{",
    e: "}",
    k: g
  };
  var d = {
    cN: "string",
    c: [e.BE, c],
    v: [{
      b: /'/,
      e: /'/
    },
    {
      b: /"/,
      e: /"/
    },
    {
      b: "%[qw]?\\(",
      e: "\\)"
    },
    {
      b: "%[qw]?\\[",
      e: "\\]"
    },
    {
      b: "%[qw]?{",
      e: "}"
    },
    {
      b: "%[qw]?<",
      e: ">",
      r: 10
    },
    {
      b: "%[qw]?/",
      e: "/",
      r: 10
    },
    {
      b: "%[qw]?%",
      e: "%",
      r: 10
    },
    {
      b: "%[qw]?-",
      e: "-",
      r: 10
    },
    {
      b: "%[qw]?\\|",
      e: "\\|",
      r: 10
    },
    {
      b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
    }]
  };
  var b = {
    cN: "params",
    b: "\\(",
    e: "\\)",
    k: g
  };
  var f = [d, i, {
    cN: "class",
    bK: "class module",
    e: "$|;",
    i: /=/,
    c: [e.inherit(e.TM, {
      b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
    }), {
      cN: "inheritance",
      b: "<\\s*",
      c: [{
        cN: "parent",
        b: "(" + e.IR + "::)?" + e.IR
      }]
    },
    i]
  },
  {
    cN: "function",
    bK: "def",
    e: " |$|;",
    r: 0,
    c: [e.inherit(e.TM, {
      b: h
    }), b, i]
  },
  {
    cN: "constant",
    b: "(::)?(\\b[A-Z]\\w*(::)?)+",
    r: 0
  },
  {
    cN: "symbol",
    b: ":",
    c: [d, {
      b: h
    }],
    r: 0
  },
  {
    cN: "symbol",
    b: e.UIR + "(\\!|\\?)?:",
    r: 0
  },
  {
    cN: "number",
    b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
    r: 0
  },
  {
    cN: "variable",
    b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
  },
  {
    b: "(" + e.RSR + ")\\s*",
    c: [i, {
      cN: "regexp",
      c: [e.BE, c],
      i: /\n/,
      v: [{
        b: "/",
        e: "/[a-z]*"
      },
      {
        b: "%r{",
        e: "}[a-z]*"
      },
      {
        b: "%r\\(",
        e: "\\)[a-z]*"
      },
      {
        b: "%r!",
        e: "![a-z]*"
      },
      {
        b: "%r\\[",
        e: "\\][a-z]*"
      }]
    }],
    r: 0
  }];
  c.c = f;
  b.c = f;
  return {
    k: g,
    c: f
  }
});
hljs.registerLanguage("diff", function (a) {
  return {
    c: [{
      cN: "chunk",
      r: 10,
      v: [{
        b: /^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/
      },
      {
        b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
      },
      {
        b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
      }]
    },
    {
      cN: "header",
      v: [{
        b: /Index: /,
        e: /$/
      },
      {
        b: /=====/,
        e: /=====$/
      },
      {
        b: /^\-\-\-/,
        e: /$/
      },
      {
        b: /^\*{3} /,
        e: /$/
      },
      {
        b: /^\+\+\+/,
        e: /$/
      },
      {
        b: /\*{5}/,
        e: /\*{5}$/
      }]
    },
    {
      cN: "addition",
      b: "^\\+",
      e: "$"
    },
    {
      cN: "deletion",
      b: "^\\-",
      e: "$"
    },
    {
      cN: "change",
      b: "^\\!",
      e: "$"
    }]
  }
});
hljs.registerLanguage("javascript", function (a) {
  return {
    aliases: ["js"],
    k: {
      keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
      literal: "true false null undefined NaN Infinity",
      built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
    },
    c: [{
      cN: "pi",
      b: /^\s*('|")use strict('|")/,
      r: 10
    },
    a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {
      b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
      k: "return throw case",
      c: [a.CLCM, a.CBLCLM, a.REGEXP_MODE, {
        b: /</,
        e: />;/,
        r: 0,
        sL: "xml"
      }],
      r: 0
    },
    {
      cN: "function",
      bK: "function",
      e: /\{/,
      c: [a.inherit(a.TM, {
        b: /[A-Za-z$_][0-9A-Za-z$_]*/
      }), {
        cN: "params",
        b: /\(/,
        e: /\)/,
        c: [a.CLCM, a.CBLCLM],
        i: /["'\(]/
      }],
      i: /\[|%/
    },
    {
      b: /\$[(.]/
    },
    {
      b: "\\." + a.IR,
      r: 0
    }]
  }
});
hljs.registerLanguage("xml", function (a) {
  var c = "[A-Za-z0-9\\._:-]+";
  var d = {
    b: /<\?(php)?(?!\w)/,
    e: /\?>/,
    sL: "php",
    subLanguageMode: "continuous"
  };
  var b = {
    eW: true,
    i: /</,
    r: 0,
    c: [d, {
      cN: "attribute",
      b: c,
      r: 0
    },
    {
      b: "=",
      r: 0,
      c: [{
        cN: "value",
        v: [{
          b: /"/,
          e: /"/
        },
        {
          b: /'/,
          e: /'/
        },
        {
          b: /[^\s\/>]+/
        }]
      }]
    }]
  };
  return {
    aliases: ["html"],
    cI: true,
    c: [{
      cN: "doctype",
      b: "<!DOCTYPE",
      e: ">",
      r: 10,
      c: [{
        b: "\\[",
        e: "\\]"
      }]
    },
    {
      cN: "comment",
      b: "<!--",
      e: "-->",
      r: 10
    },
    {
      cN: "cdata",
      b: "<\\!\\[CDATA\\[",
      e: "\\]\\]>",
      r: 10
    },
    {
      cN: "tag",
      b: "<style(?=\\s|>|$)",
      e: ">",
      k: {
        title: "style"
      },
      c: [b],
      starts: {
        e: "</style>",
        rE: true,
        sL: "css"
      }
    },
    {
      cN: "tag",
      b: "<script(?=\\s|>|$)",
      e: ">",
      k: {
        title: "script"
      },
      c: [b],
      starts: {
        e: "<\/script>",
        rE: true,
        sL: "javascript"
      }
    },
    {
      b: "<%",
      e: "%>",
      sL: "vbscript"
    },
    d, {
      cN: "pi",
      b: /<\?\w+/,
      e: /\?>/,
      r: 10
    },
    {
      cN: "tag",
      b: "</?",
      e: "/?>",
      c: [{
        cN: "title",
        b: "[^ /><]+",
        r: 0
      },
      b]
    }]
  }
});
hljs.registerLanguage("markdown", function (a) {
  return {
    c: [{
      cN: "header",
      v: [{
        b: "^#{1,6}",
        e: "$"
      },
      {
        b: "^.+?\\n[=-]{2,}$"
      }]
    },
    {
      b: "<",
      e: ">",
      sL: "xml",
      r: 0
    },
    {
      cN: "bullet",
      b: "^([*+-]|(\\d+\\.))\\s+"
    },
    {
      cN: "strong",
      b: "[*_]{2}.+?[*_]{2}"
    },
    {
      cN: "emphasis",
      v: [{
        b: "\\*.+?\\*"
      },
      {
        b: "_.+?_",
        r: 0
      }]
    },
    {
      cN: "blockquote",
      b: "^>\\s+",
      e: "$"
    },
    {
      cN: "code",
      v: [{
        b: "`.+?`"
      },
      {
        b: "^( {4}|\t)",
        e: "$",
        r: 0
      }]
    },
    {
      cN: "horizontal_rule",
      b: "^[-\\*]{3,}",
      e: "$"
    },
    {
      b: "\\[.+?\\][\\(\\[].+?[\\)\\]]",
      rB: true,
      c: [{
        cN: "link_label",
        b: "\\[",
        e: "\\]",
        eB: true,
        rE: true,
        r: 0
      },
      {
        cN: "link_url",
        b: "\\]\\(",
        e: "\\)",
        eB: true,
        eE: true
      },
      {
        cN: "link_reference",
        b: "\\]\\[",
        e: "\\]",
        eB: true,
        eE: true,
      }],
      r: 10
    },
    {
      b: "^\\[.+\\]:",
      e: "$",
      rB: true,
      c: [{
        cN: "link_reference",
        b: "\\[",
        e: "\\]",
        eB: true,
        eE: true
      },
      {
        cN: "link_url",
        b: "\\s",
        e: "$"
      }]
    }]
  }
});
hljs.registerLanguage("css", function (a) {
  var b = "[a-zA-Z-][a-zA-Z0-9_-]*";
  var c = {
    cN: "function",
    b: b + "\\(",
    e: "\\)",
    c: ["self", a.NM, a.ASM, a.QSM]
  };
  return {
    cI: true,
    i: "[=/|']",
    c: [a.CBLCLM, {
      cN: "id",
      b: "\\#[A-Za-z0-9_-]+"
    },
    {
      cN: "class",
      b: "\\.[A-Za-z0-9_-]+",
      r: 0
    },
    {
      cN: "attr_selector",
      b: "\\[",
      e: "\\]",
      i: "$"
    },
    {
      cN: "pseudo",
      b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
    },
    {
      cN: "at_rule",
      b: "@(font-face|page)",
      l: "[a-z-]+",
      k: "font-face page"
    },
    {
      cN: "at_rule",
      b: "@",
      e: "[{;]",
      c: [{
        cN: "keyword",
        b: /\S+/
      },
      {
        b: /\s/,
        eW: true,
        eE: true,
        r: 0,
        c: [c, a.ASM, a.QSM, a.NM]
      }]
    },
    {
      cN: "tag",
      b: b,
      r: 0
    },
    {
      cN: "rules",
      b: "{",
      e: "}",
      i: "[^\\s]",
      r: 0,
      c: [a.CBLCLM, {
        cN: "rule",
        b: "[^\\s]",
        rB: true,
        e: ";",
        eW: true,
        c: [{
          cN: "attribute",
          b: "[A-Z\\_\\.\\-]+",
          e: ":",
          eE: true,
          i: "[^\\s]",
          starts: {
            cN: "value",
            eW: true,
            eE: true,
            c: [c, a.NM, a.QSM, a.ASM, a.CBLCLM, {
              cN: "hexcolor",
              b: "#[0-9A-Fa-f]+"
            },
            {
              cN: "important",
              b: "!important"
            }]
          }
        }]
      }]
    }]
  }
});
hljs.registerLanguage("http", function (a) {
  return {
    i: "\\S",
    c: [{
      cN: "status",
      b: "^HTTP/[0-9\\.]+",
      e: "$",
      c: [{
        cN: "number",
        b: "\\b\\d{3}\\b"
      }]
    },
    {
      cN: "request",
      b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
      rB: true,
      e: "$",
      c: [{
        cN: "string",
        b: " ",
        e: " ",
        eB: true,
        eE: true
      }]
    },
    {
      cN: "attribute",
      b: "^\\w",
      e: ": ",
      eE: true,
      i: "\\n|\\s|=",
      starts: {
        cN: "string",
        e: "$"
      }
    },
    {
      b: "\\n\\n",
      starts: {
        sL: "",
        eW: true
      }
    }]
  }
});
hljs.registerLanguage("java", function (b) {
  var a = "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";
  return {
    k: a,
    i: /<\//,
    c: [{
      cN: "javadoc",
      b: "/\\*\\*",
      e: "\\*/",
      c: [{
        cN: "javadoctag",
        b: "(^|\\s)@[A-Za-z]+"
      }],
      r: 10
    },
    b.CLCM, b.CBLCLM, b.ASM, b.QSM, {
      bK: "protected public private",
      e: /[{;=]/,
      k: a,
      c: [{
        cN: "class",
        bK: "class interface",
        eW: true,
        i: /[:"<>]/,
        c: [{
          bK: "extends implements",
          r: 10
        },
        b.UTM]
      },
      {
        b: b.UIR + "\\s*\\(",
        rB: true,
        c: [b.UTM]
      }]
    },
    b.CNM, {
      cN: "annotation",
      b: "@[A-Za-z]+"
    }]
  }
});
hljs.registerLanguage("php", function (b) {
  var e = {
    cN: "variable",
    b: "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"
  };
  var a = {
    cN: "preprocessor",
    b: /<\?(php)?|\?>/
  };
  var c = {
    cN: "string",
    c: [b.BE, a],
    v: [{
      b: 'b"',
      e: '"'
    },
    {
      b: "b'",
      e: "'"
    },
    b.inherit(b.ASM, {
      i: null
    }), b.inherit(b.QSM, {
      i: null
    })]
  };
  var d = {
    v: [b.BNM, b.CNM]
  };
  return {
    cI: true,
    k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
    c: [b.CLCM, b.HCM, {
      cN: "comment",
      b: "/\\*",
      e: "\\*/",
      c: [{
        cN: "phpdoc",
        b: "\\s@[A-Za-z]+"
      },
      a]
    },
    {
      cN: "comment",
      b: "__halt_compiler.+?;",
      eW: true,
      k: "__halt_compiler",
      l: b.UIR
    },
    {
      cN: "string",
      b: "<<<['\"]?\\w+['\"]?$",
      e: "^\\w+;",
      c: [b.BE]
    },
    a, e, {
      cN: "function",
      bK: "function",
      e: /[;{]/,
      i: "\\$|\\[|%",
      c: [b.UTM, {
        cN: "params",
        b: "\\(",
        e: "\\)",
        c: ["self", e, b.CBLCLM, c, d]
      }]
    },
    {
      cN: "class",
      bK: "class interface",
      e: "{",
      i: /[:\(\$"]/,
      c: [{
        bK: "extends implements",
        r: 10
      },
      b.UTM]
    },
    {
      bK: "namespace",
      e: ";",
      i: /[\.']/,
      c: [b.UTM]
    },
    {
      bK: "use",
      e: ";",
      c: [b.UTM]
    },
    {
      b: "=>"
    },
    c, d]
  }
});
hljs.registerLanguage("python", function (a) {
  var f = {
    cN: "prompt",
    b: /^(>>>|\.\.\.) /
  };
  var b = {
    cN: "string",
    c: [a.BE],
    v: [{
      b: /(u|b)?r?'''/,
      e: /'''/,
      c: [f],
      r: 10
    },
    {
      b: /(u|b)?r?"""/,
      e: /"""/,
      c: [f],
      r: 10
    },
    {
      b: /(u|r|ur)'/,
      e: /'/,
      r: 10
    },
    {
      b: /(u|r|ur)"/,
      e: /"/,
      r: 10
    },
    {
      b: /(b|br)'/,
      e: /'/,
    },
    {
      b: /(b|br)"/,
      e: /"/,
    },
    a.ASM, a.QSM]
  };
  var d = {
    cN: "number",
    r: 0,
    v: [{
      b: a.BNR + "[lLjJ]?"
    },
    {
      b: "\\b(0o[0-7]+)[lLjJ]?"
    },
    {
      b: a.CNR + "[lLjJ]?"
    }]
  };
  var e = {
    cN: "params",
    b: /\(/,
    e: /\)/,
    c: ["self", f, d, b]
  };
  var c = {
    e: /:/,
    i: /[${=;\n]/,
    c: [a.UTM, e]
  };
  return {
    k: {
      keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",
      built_in: "Ellipsis NotImplemented"
    },
    i: /(<\/|->|\?)/,
    c: [f, d, b, a.HCM, a.inherit(c, {
      cN: "function",
      bK: "def",
      r: 10
    }), a.inherit(c, {
      cN: "class",
      bK: "class"
    }), {
      cN: "decorator",
      b: /@/,
      e: /$/
    },
    {
      b: /\b(print|exec)\(/
    }]
  }
});
hljs.registerLanguage("sql", function (a) {
  return {
    cI: true,
    i: /[<>]/,
    c: [{
      cN: "operator",
      b: "\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",
      e: ";",
      eW: true,
      k: {
        keyword: "all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",
        aggregate: "count sum min max avg"
      },
      c: [{
        cN: "string",
        b: "'",
        e: "'",
        c: [a.BE, {
          b: "''"
        }]
      },
      {
        cN: "string",
        b: '"',
        e: '"',
        c: [a.BE, {
          b: '""'
        }]
      },
      {
        cN: "string",
        b: "`",
        e: "`",
        c: [a.BE]
      },
      a.CNM]
    },
    a.CBLCLM, {
      cN: "comment",
      b: "--",
      e: "$"
    }]
  }
});
hljs.registerLanguage("ini", function (a) {
  return {
    cI: true,
    i: /\S/,
    c: [{
      cN: "comment",
      b: ";",
      e: "$"
    },
    {
      cN: "title",
      b: "^\\[",
      e: "\\]"
    },
    {
      cN: "setting",
      b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
      e: "$",
      c: [{
        cN: "value",
        eW: true,
        k: "on off true false yes no",
        c: [a.QSM, a.NM],
        r: 0
      }]
    }]
  }
});
hljs.registerLanguage("perl", function (c) {
  var d = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";
  var f = {
    cN: "subst",
    b: "[$@]\\{",
    e: "\\}",
    k: d
  };
  var g = {
    b: "->{",
    e: "}"
  };
  var a = {
    cN: "variable",
    v: [{
      b: /\$\d/
    },
    {
      b: /[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/
    },
    {
      b: /[\$\%\@\*][^\s\w{]/,
      r: 0
    }]
  };
  var e = {
    cN: "comment",
    b: "^(__END__|__DATA__)",
    e: "\\n$",
    r: 5
  };
  var h = [c.BE, f, a];
  var b = [a, c.HCM, e, {
    cN: "comment",
    b: "^\\=\\w",
    e: "\\=cut",
    eW: true
  },
  g, {
    cN: "string",
    c: h,
    v: [{
      b: "q[qwxr]?\\s*\\(",
      e: "\\)",
      r: 5
    },
    {
      b: "q[qwxr]?\\s*\\[",
      e: "\\]",
      r: 5
    },
    {
      b: "q[qwxr]?\\s*\\{",
      e: "\\}",
      r: 5
    },
    {
      b: "q[qwxr]?\\s*\\|",
      e: "\\|",
      r: 5
    },
    {
      b: "q[qwxr]?\\s*\\<",
      e: "\\>",
      r: 5
    },
    {
      b: "qw\\s+q",
      e: "q",
      r: 5
    },
    {
      b: "'",
      e: "'",
      c: [c.BE]
    },
    {
      b: '"',
      e: '"'
    },
    {
      b: "`",
      e: "`",
      c: [c.BE]
    },
    {
      b: "{\\w+}",
      c: [],
      r: 0
    },
    {
      b: "-?\\w+\\s*\\=\\>",
      c: [],
      r: 0
    }]
  },
  {
    cN: "number",
    b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
    r: 0
  },
  {
    b: "(\\/\\/|" + c.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
    k: "split return print reverse grep",
    r: 0,
    c: [c.HCM, e, {
      cN: "regexp",
      b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
      r: 10
    },
    {
      cN: "regexp",
      b: "(m|qr)?/",
      e: "/[a-z]*",
      c: [c.BE],
      r: 0
    }]
  },
  {
    cN: "sub",
    bK: "sub",
    e: "(\\s*\\(.*?\\))?[;{]",
    r: 5
  },
  {
    cN: "operator",
    b: "-\\w\\b",
    r: 0
  }];
  f.c = b;
  g.c = b;
  return {
    k: d,
    c: b
  }
});
hljs.registerLanguage("objectivec", function (a) {
  var d = {
    keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",
    literal: "false true FALSE TRUE nil YES NO NULL",
    built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
  };
  var c = /[a-zA-Z@][a-zA-Z0-9_]*/;
  var b = "@interface @class @protocol @implementation";
  return {
    k: d,
    l: c,
    i: "</",
    c: [a.CLCM, a.CBLCLM, a.CNM, a.QSM, {
      cN: "string",
      b: "'",
      e: "[^\\\\]'",
      i: "[^\\\\][^']"
    },
    {
      cN: "preprocessor",
      b: "#import",
      e: "$",
      c: [{
        cN: "title",
        b: '"',
        e: '"'
      },
      {
        cN: "title",
        b: "<",
        e: ">"
      }]
    },
    {
      cN: "preprocessor",
      b: "#",
      e: "$"
    },
    {
      cN: "class",
      b: "(" + b.split(" ").join("|") + ")\\b",
      e: "({|$)",
      k: b,
      l: c,
      c: [a.UTM]
    },
    {
      cN: "variable",
      b: "\\." + a.UIR,
      r: 0
    }]
  }
});
hljs.registerLanguage("coffeescript", function (c) {
  var b = {
    keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
    literal: "true false null undefined yes no on off",
    reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",
    built_in: "npm require console print module exports global window document"
  };
  var a = "[A-Za-z$_][0-9A-Za-z$_]*";
  var f = c.inherit(c.TM, {
    b: a
  });
  var e = {
    cN: "subst",
    b: /#\{/,
    e: /}/,
    k: b
  };
  var d = [c.BNM, c.inherit(c.CNM, {
    starts: {
      e: "(\\s*/)?",
      r: 0
    }
  }), {
    cN: "string",
    v: [{
      b: /'''/,
      e: /'''/,
      c: [c.BE]
    },
    {
      b: /'/,
      e: /'/,
      c: [c.BE]
    },
    {
      b: /"""/,
      e: /"""/,
      c: [c.BE, e]
    },
    {
      b: /"/,
      e: /"/,
      c: [c.BE, e]
    }]
  },
  {
    cN: "regexp",
    v: [{
      b: "///",
      e: "///",
      c: [e, c.HCM]
    },
    {
      b: "//[gim]*",
      r: 0
    },
    {
      b: "/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"
    }]
  },
  {
    cN: "property",
    b: "@" + a
  },
  {
    b: "`",
    e: "`",
    eB: true,
    eE: true,
    sL: "javascript"
  }];
  e.c = d;
  return {
    k: b,
    c: d.concat([{
      cN: "comment",
      b: "###",
      e: "###"
    },
    c.HCM, {
      cN: "function",
      b: "(" + a + "\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",
      e: "[-=]>",
      rB: true,
      c: [f, {
        cN: "params",
        b: "\\(",
        rB: true,
        c: [{
          b: /\(/,
          e: /\)/,
          k: b,
          c: ["self"].concat(d)
        }]
      }]
    },
    {
      cN: "class",
      bK: "class",
      e: "$",
      i: /[:="\[\]]/,
      c: [{
        bK: "extends",
        eW: true,
        i: /[:="\[\]]/,
        c: [f]
      },
      f]
    },
    {
      cN: "attribute",
      b: a + ":",
      e: ":",
      rB: true,
      eE: true,
      r: 0
    }])
  }
});
hljs.registerLanguage("nginx", function (c) {
  var b = {
    cN: "variable",
    v: [{
      b: /\$\d+/
    },
    {
      b: /\$\{/,
      e: /}/
    },
    {
      b: "[\\$\\@]" + c.UIR
    }]
  };
  var a = {
    eW: true,
    l: "[a-z/_]+",
    k: {
      built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
    },
    r: 0,
    i: "=>",
    c: [c.HCM, {
      cN: "string",
      c: [c.BE, b],
      v: [{
        b: /"/,
        e: /"/
      },
      {
        b: /'/,
        e: /'/
      }]
    },
    {
      cN: "url",
      b: "([a-z]+):/",
      e: "\\s",
      eW: true,
      eE: true
    },
    {
      cN: "regexp",
      c: [c.BE, b],
      v: [{
        b: "\\s\\^",
        e: "\\s|{|;",
        rE: true
      },
      {
        b: "~\\*?\\s+",
        e: "\\s|{|;",
        rE: true
      },
      {
        b: "\\*(\\.[a-z\\-]+)+"
      },
      {
        b: "([a-z\\-]+\\.)+\\*"
      }]
    },
    {
      cN: "number",
      b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
    },
    {
      cN: "number",
      b: "\\b\\d+[kKmMgGdshdwy]*\\b",
      r: 0
    },
    b]
  };
  return {
    c: [c.HCM, {
      b: c.UIR + "\\s",
      e: ";|{",
      rB: true,
      c: [c.inherit(c.UTM, {
        starts: a
      })],
      r: 0
    }],
    i: "[^\\s\\}]"
  }
});
hljs.registerLanguage("json", function (a) {
  var e = {
    literal: "true false null"
  };
  var d = [a.QSM, a.CNM];
  var c = {
    cN: "value",
    e: ",",
    eW: true,
    eE: true,
    c: d,
    k: e
  };
  var b = {
    b: "{",
    e: "}",
    c: [{
      cN: "attribute",
      b: '\\s*"',
      e: '"\\s*:\\s*',
      eB: true,
      eE: true,
      c: [a.BE],
      i: "\\n",
      starts: c
    }],
    i: "\\S"
  };
  var f = {
    b: "\\[",
    e: "\\]",
    c: [a.inherit(c, {
      cN: null
    })],
    i: "\\S"
  };
  d.splice(d.length, 0, b, f);
  return {
    c: d,
    k: e,
    i: "\\S"
  }
});
hljs.registerLanguage("apache", function (a) {
  var b = {
    cN: "number",
    b: "[\\$%]\\d+"
  };
  return {
    cI: true,
    c: [a.HCM, {
      cN: "tag",
      b: "</?",
      e: ">"
    },
    {
      cN: "keyword",
      b: /\w+/,
      r: 0,
      k: {
        common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
      },
      starts: {
        e: /$/,
        r: 0,
        k: {
          literal: "on off all"
        },
        c: [{
          cN: "sqbracket",
          b: "\\s\\[",
          e: "\\]$"
        },
        {
          cN: "cbracket",
          b: "[\\$%]\\{",
          e: "\\}",
          c: ["self", b]
        },
        b, a.QSM]
      }
    }],
    i: /\S/
  }
});
hljs.registerLanguage("cpp", function (a) {
  var b = {
    keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",
    built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"
  };
  return {
    aliases: ["c"],
    k: b,
    i: "</",
    c: [a.CLCM, a.CBLCLM, a.QSM, {
      cN: "string",
      b: "'\\\\?.",
      e: "'",
      i: "."
    },
    {
      cN: "number",
      b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
    },
    a.CNM, {
      cN: "preprocessor",
      b: "#",
      e: "$",
      c: [{
        b: "include\\s*<",
        e: ">",
        i: "\\n"
      },
      a.CLCM]
    },
    {
      cN: "stl_container",
      b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
      e: ">",
      k: b,
      r: 10,
      c: ["self"]
    }]
  }
});
hljs.registerLanguage("makefile", function (a) {
  var b = {
    cN: "variable",
    b: /\$\(/,
    e: /\)/,
    c: [a.BE]
  };
  return {
    c: [a.HCM, {
      b: /^\w+\s*\W*=/,
      rB: true,
      r: 0,
      starts: {
        cN: "constant",
        e: /\s*\W*=/,
        eE: true,
        starts: {
          e: /$/,
          r: 0,
          c: [b],
        }
      }
    },
    {
      cN: "title",
      b: /^[\w]+:\s*$/
    },
    {
      cN: "phony",
      b: /^\.PHONY:/,
      e: /$/,
      k: ".PHONY",
      l: /[\.\w]+/
    },
    {
      b: /^\t+/,
      e: /$/,
      c: [a.QSM, b]
    }]
  }
});
(function ($) {
    "use strict";
    $(document).foundation();
    $(document).ready(function(){
        $(".at_block").fitVids();
        $("pre code").each(function(i, e) {hljs.highlightBlock(e)});
        $("#at_body").wrap( "<div class='off-canvas-wrap'><div class='inner-wrap'></div></div>" ).append("<a class='at_off_canvas_toggle left-off-canvas-toggle'><span class='fa fa-bars'></span></a><a class='exit-off-canvas'></a>");
		$(".at_search_input").ghostHunter({results: ".at_search_results", onKeyUp: true, info_template: "<span class='at_search_clear_toggle'>&#215;</span> <span class='at_search_results_amount'>Number of posts found: {{amount}}</span><span class='clearfix'></span>", result_template : "<span><a href='{{link}}'><span class='at_search_results_title'>{{title}}</span></a></span>"});
		$("#at_search").on('click', '.at_search_clear_toggle', function(e) {e.preventDefault();$(".at_search_input").val('');$(".at_search_results").removeClass("at_search_active");});
    });
}(jQuery));