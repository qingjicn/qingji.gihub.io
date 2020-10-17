/*
 * @Author: your name
 * @Date: 2019-10-28 16:50:35
 * @LastEditTime: 2019-10-29 15:36:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Blog\yii.github.io\themes\hexo-theme-next\source\js\src\dynamic_bg.js
 */


   
//     var canvas = document.querySelector("#canvas");
//     var context = canvas.getContext('2d');
//     var cw, ch;
//     var stars = [];
//     // 
//     ~~ function setSize() {
//         window.onresize = arguments.callee;
//         cw = window.innerWidth;
//         ch = window.innerHeight;
//         canvas.height = ch;
//         canvas.width = cw;
//     }();

//     function Star() {};
//     Star.prototype = {
//         init: function () {
//             this.w = rand(0, cw);
//             this.h = rand(0, ch);
//             this.r = 1;
//             this.speedX = rand(-1, 1);
//             this.speedY = rand(-1, 1);
//         },
//         draw: function () {
//             context.fillStyle = 'white';
//             context.beginPath();
//             context.arc(this.w, this.h, this.r, 0, Math.PI * 1);
//             context.fill();
//         },
//         move: function () {
//             this.w += this.speedX;
//             this.h += this.speedY;
//             if (this.w < 0 || this.w > cw) {
//                 this.speedX *= -1;
//             }
//             if (this.h < 0 || this.h > ch) {
//                 this.speedY *= -1;
//             }
//             this.draw();
//         }
//     }

//     function Line() {};
//     Line.prototype = {
//         //星星之间的连线
//         // 天藍色：#87CEEB；  霧霾藍：#92B6D5； 黑色：#000000； 豆綠色：#C7EDCC；
//         initStarLine: function () {
//             this.colorStar = '#ffffff';
//             this.colorStop = '#ffffff';
//         },
//         //鼠标与星星之间的连线
//         initNewLine: function () {
//             this.colorStar = '#C7EDCC';
//             this.colorStop = '#92B6D5';
//         },
//         drawLine: function (ow, oh, nw, nh) {
//             var dx = ow - nw;
//             var dy = oh - nh;
//             var d = Math.sqrt(dx * dx + dy * dy);
//             if (d < 80) {
//                 var line = context.createLinearGradient

//                 (ow, oh, nw, nh);
//                 context.beginPath();
//                 context.moveTo(ow, oh);
//                 context.lineTo(nw, nh);
//                 line.addColorStop(0, this.colorStar);
//                 line.addColorStop(1, this.colorStop);
//                 context.StrokeWidth = 0.5;
//                 context.strokeStyle = line;
//                 context.stroke();
//                 context.restore();
//             }
//         }
//     }
//     //生成范围在min~max之间的随机数
//     function rand(min, max) {
//         return Math.random() * (max - min) + min;
//     }

//     function create(num) {
//         for (var i = 0; i < num; i++) {
//             var star = new Star();
//             star.init();
//             star.draw();
//             stars.push(star);
//         }
//     }
//     create(150);
//     setTimeout(function () {
//         context.clearRect(0, 0, cw, ch);
//         for (var i of stars) {
//             i.move();
//             for (var j = 0; j < stars.length / 2; j++) {
//                 var line = new Line();
//                 line.initStarLine();
//                 line.drawLine(i.w, i.h, stars[j].w, stars[j].h);
//             }
//         }
//         setTimeout(arguments.callee, 1000 / 60);
//     }, 1000 / 60);

//     document.onmousemove = function (e) {
//         var e = e || window.event;
//         var mw = e.clientX;
//         var mh = e.clientY;
//         for (var i of stars) {
//             var line = new Line();
//             line.initNewLine();
//             line.drawLine(i.w, i.h, mw, mh);
//         }
//     }





//  另一个版本




var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cw = canvas.width = window.innerWidth,
  cx = cw / 2;
var ch = canvas.height = window.innerHeight,
  cy = ch / 2;

ctx.fillStyle = "#000";
var linesNum = 16;
var linesRy = [];
var requestId = null;

function Line(flag) {
  this.flag = flag;
  this.a = {};
  this.b = {};
  if (flag == "v") {
    this.a.y = 0;
    this.b.y = ch;
    this.a.x = randomIntFromInterval(0, ch);
    this.b.x = randomIntFromInterval(0, ch);
  } else if (flag == "h") {
    this.a.x = 0;
    this.b.x = cw;
    this.a.y = randomIntFromInterval(0, cw);
    this.b.y = randomIntFromInterval(0, cw);
  }
  this.va = randomIntFromInterval(25, 100) / 100;
  this.vb = randomIntFromInterval(25, 100) / 100;

  this.draw = function() {
    ctx.strokeStyle = "#ffffff";
    ctx.beginPath();
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
    ctx.stroke();
  }

  this.update = function() {
    if (this.flag == "v") {
      this.a.x += this.va;
      this.b.x += this.vb;
    } else if (flag == "h") {
      this.a.y += this.va;
      this.b.y += this.vb;
    }

    this.edges();
  }

  this.edges = function() {
    if (this.flag == "v") {
      if (this.a.x < 0 || this.a.x > cw) {
        this.va *= -1;
      }
      if (this.b.x < 0 || this.b.x > cw) {
        this.vb *= -1;
      }
    } else if (flag == "h") {
      if (this.a.y < 0 || this.a.y > ch) {
        this.va *= -1;
      }
      if (this.b.y < 0 || this.b.y > ch) {
        this.vb *= -1;
      }
    }
  }

}

for (var i = 0; i < linesNum; i++) {
  var flag = i % 2 == 0 ? "h" : "v";
  var l = new Line(flag);
  linesRy.push(l);
}

function Draw() {
  requestId = window.requestAnimationFrame(Draw);
  ctx.clearRect(0, 0, cw, ch);

  for (var i = 0; i < linesRy.length; i++) {
    var l = linesRy[i];
    l.draw();
    l.update();
  }
  for (var i = 0; i < linesRy.length; i++) {
    var l = linesRy[i];
    for (var j = i + 1; j < linesRy.length; j++) {
      var l1 = linesRy[j]
      Intersect2lines(l, l1);
    }
  }
}

function Init() {
  linesRy.length = 0;
  for (var i = 0; i < linesNum; i++) {
    var flag = i % 2 == 0 ? "h" : "v";
    var l = new Line(flag);
    linesRy.push(l);
  }

  if (requestId) {
    window.cancelAnimationFrame(requestId);
    requestId = null;
  }

  cw = canvas.width = window.innerWidth,
    cx = cw / 2;
  ch = canvas.height = window.innerHeight,
    cy = ch / 2;

  Draw();
};

setTimeout(function() {
  Init();

  addEventListener('resize', Init, false);
}, 15);

function Intersect2lines(l1, l2) {
  var p1 = l1.a,
    p2 = l1.b,
    p3 = l2.a,
    p4 = l2.b;
  var denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
  var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
  var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;
  var x = p1.x + ua * (p2.x - p1.x);
  var y = p1.y + ua * (p2.y - p1.y);
  if (ua > 0 && ub > 0) {
    markPoint({
      x: x,
      y: y
    })
  }
}

function markPoint(p) {
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, 0.1* Math.PI);
  ctx.fill();
}

function randomIntFromInterval(mn, mx) {
  return ~~(Math.random() * (mx - mn + 1) + mn);
}
console.log(2222222);











// 版本三 鼠标形圆

// 使用方法
 //<script type="text/javascript" pointColor="255,0,0" color="255,255,255" opacity='1' zIndex="-2"  count="200" src="./canvas-nest.js"></script>


// ! function () {
//     "use strict";

//     function e(e) {
//         return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
//     }

//     function t(e, t) {
//         return e(t = {
//             exports: {}
//         }, t.exports), t.exports
//     }
//     var n = t(function (e, t) {
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         });
//         var n = 1;
//         t.default = function () {
//             return "" + n++
//         }, e.exports = t.default
//     });
//     e(n);
//     var o = t(function (e, t) {
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }), t.default = function (e) {
//             var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
//                 n = null;
//             return function () {
//                 for (var o = this, i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
//                 clearTimeout(n), n = setTimeout(function () {
//                     e.apply(o, r)
//                 }, t)
//             }
//         }, e.exports = t.default
//     });
//     e(o);
//     var i = t(function (e, t) {
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         });
//         t.SizeSensorId = "size-sensor-id", t.SensorStyle = "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0", t.SensorClassName = "size-sensor-object"
//     });
//     e(i);
//     i.SizeSensorId, i.SensorStyle, i.SensorClassName;
//     var r = t(function (e, t) {
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }), t.createSensor = void 0;
//         var n, r = (n = o) && n.__esModule ? n : {
//             default: n
//         };
//         t.createSensor = function (e) {
//             var t = void 0,
//                 n = [],
//                 o = (0, r.default)(function () {
//                     n.forEach(function (t) {
//                         t(e)
//                     })
//                 }),
//                 a = function () {
//                     t && t.parentNode && (t.contentDocument.defaultView.removeEventListener("resize", o), t.parentNode.removeChild(t), t = void 0, n = [])
//                 };
//             return {
//                 element: e,
//                 bind: function (r) {
//                     t || (t = function () {
//                         "static" === getComputedStyle(e).position && (e.style.position = "relative");
//                         var t = document.createElement("object");
//                         return t.onload = function () {
//                             t.contentDocument.defaultView.addEventListener("resize", o), o()
//                         }, t.setAttribute("style", i.SensorStyle), t.setAttribute("class", i.SensorClassName), t.type = "text/html", e.appendChild(t), t.data = "about:blank", t
//                     }()), -1 === n.indexOf(r) && n.push(r)
//                 },
//                 destroy: a,
//                 unbind: function (e) {
//                     var o = n.indexOf(e); - 1 !== o && n.splice(o, 1), 0 === n.length && t && a()
//                 }
//             }
//         }
//     });
//     e(r);
//     r.createSensor;
//     var a = t(function (e, t) {
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }), t.createSensor = void 0;
//         var n, i = (n = o) && n.__esModule ? n : {
//             default: n
//         };
//         t.createSensor = function (e) {
//             var t = void 0,
//                 n = [],
//                 o = (0, i.default)(function () {
//                     n.forEach(function (t) {
//                         t(e)
//                     })
//                 }),
//                 r = function () {
//                     t.disconnect(), n = [], t = void 0
//                 };
//             return {
//                 element: e,
//                 bind: function (i) {
//                     t || (t = function () {
//                         var t = new ResizeObserver(o);
//                         return t.observe(e), o(), t
//                     }()), -1 === n.indexOf(i) && n.push(i)
//                 },
//                 destroy: r,
//                 unbind: function (e) {
//                     var o = n.indexOf(e); - 1 !== o && n.splice(o, 1), 0 === n.length && t && r()
//                 }
//             }
//         }
//     });
//     e(a);
//     a.createSensor;
//     var s = t(function (e, t) {
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }), t.createSensor = void 0;
//         t.createSensor = "undefined" != typeof ResizeObserver ? a.createSensor : r.createSensor
//     });
//     e(s);
//     s.createSensor;
//     var u = t(function (e, t) {
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }), t.removeSensor = t.getSensor = void 0;
//         var o, r = (o = n) && o.__esModule ? o : {
//             default: o
//         };
//         var a = {};
//         t.getSensor = function (e) {
//             var t = e.getAttribute(i.SizeSensorId);
//             if (t && a[t]) return a[t];
//             var n = (0, r.default)();
//             e.setAttribute(i.SizeSensorId, n);
//             var o = (0, s.createSensor)(e);
//             return a[n] = o, o
//         }, t.removeSensor = function (e) {
//             var t = e.element.getAttribute(i.SizeSensorId);
//             e.element.removeAttribute(i.SizeSensorId), e.destroy(), t && a[t] && delete a[t]
//         }
//     });
//     e(u);
//     u.removeSensor, u.getSensor;
//     var c = t(function (e, t) {
//         Object.defineProperty(t, "__esModule", {
//             value: !0
//         }), t.clear = t.bind = void 0;
//         t.bind = function (e, t) {
//             var n = (0, u.getSensor)(e);
//             return n.bind(t),
//                 function () {
//                     n.unbind(t)
//                 }
//         }, t.clear = function (e) {
//             var t = (0, u.getSensor)(e);
//             (0, u.removeSensor)(t)
//         }
//     });
//     e(c);
//     var l = c.clear,
//         d = c.bind,
//         v = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (e) {
//             return window.setTimeout(e, 1e3 / 60)
//         },
//         f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame || window.clearTimeout,
//         m = function (e) {
//             return new Array(e).fill(0).map(function (e, t) {
//                 return t
//             })
//         },
//         h = Object.assign || function (e) {
//             for (var t = 1; t < arguments.length; t++) {
//                 var n = arguments[t];
//                 for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
//             }
//             return e
//         },
//         p = function () {
//             function e(e, t) {
//                 for (var n = 0; n < t.length; n++) {
//                     var o = t[n];
//                     o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
//                 }
//             }
//             return function (t, n, o) {
//                 return n && e(t.prototype, n), o && e(t, o), t
//             }
//         }();
//     var y = function () {
//         function e(t, n) {
//             var o = this;
//             ! function (e, t) {
//                 if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
//             }(this, e), this.randomPoints = function () {
//                 return m(o.c.count).map(function () {
//                     return {
//                         x: Math.random() * o.canvas.width,
//                         y: Math.random() * o.canvas.height,
//                         xa: 2 * Math.random() - 1,
//                         ya: 2 * Math.random() - 1,
//                         max: 6e3
//                     }
//                 })
//             }, this.el = t, this.c = h({
//                 zIndex: -1,
//                 opacity: .5,
//                 color: "0,0,0",
//                 pointColor: "0,0,0",
//                 count: 99
//             }, n), this.canvas = this.newCanvas(), this.context = this.canvas.getContext("2d"), this.points = this.randomPoints(), this.current = {
//                 x: null,
//                 y: null,
//                 max: 2e4
//             }, this.all = this.points.concat([this.current]), this.bindEvent(), this.requestFrame(this.drawCanvas)
//         }
//         return p(e, [{
//             key: "bindEvent",
//             value: function () {
//                 var e = this;
//                 d(this.el, function () {
//                     e.canvas.width = e.el.clientWidth, e.canvas.height = e.el.clientHeight
//                 }), this.onmousemove = window.onmousemove, window.onmousemove = function (t) {
//                     e.current.x = t.clientX - e.el.offsetLeft + document.scrollingElement.scrollLeft, e.current.y = t.clientY - e.el.offsetTop + document.scrollingElement.scrollTop, e.onmousemove && e.onmousemove(t)
//                 }, this.onmouseout = window.onmouseout, window.onmouseout = function () {
//                     e.current.x = null, e.current.y = null, e.onmouseout && e.onmouseout()
//                 }
//             }
//         }, {
//             key: "newCanvas",
//             value: function () {
//                 "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative");
//                 var e, t = document.createElement("canvas");
//                 return t.style.cssText = "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:" + (e = this.c).zIndex + ";opacity:" + e.opacity, t.width = this.el.clientWidth, t.height = this.el.clientHeight, this.el.appendChild(t), t
//             }
//         }, {
//             key: "requestFrame",
//             value: function (e) {
//                 var t = this;
//                 this.tid = v(function () {
//                     return e.call(t)
//                 })
//             }
//         }, {
//             key: "drawCanvas",
//             value: function () {
//                 var e = this,
//                     t = this.context,
//                     n = this.canvas.width,
//                     o = this.canvas.height,
//                     i = this.current,
//                     r = this.points,
//                     a = this.all;
//                 t.clearRect(0, 0, n, o);
//                 var s = void 0,
//                     u = void 0,
//                     c = void 0,
//                     l = void 0,
//                     d = void 0,
//                     v = void 0;
//                 r.forEach(function (r, f) {
//                     for (r.x += r.xa, r.y += r.ya, r.xa *= r.x > n || r.x < 0 ? -1 : 1, r.ya *= r.y > o || r.y < 0 ? -1 : 1, t.fillStyle = "rgba(" + e.c.pointColor + ")", t.fillRect(r.x - .5, r.y - .5, 1, 1), u = f + 1; u < a.length; u++) null !== (s = a[u]).x && null !== s.y && (l = r.x - s.x, d = r.y - s.y, (v = l * l + d * d) < s.max && (s === i && v >= s.max / 2 && (r.x -= .03 * l, r.y -= .03 * d), c = (s.max - v) / s.max, t.beginPath(), t.lineWidth = c / 2, t.strokeStyle = "rgba(" + e.c.color + "," + (c + .2) + ")", t.moveTo(r.x, r.y), t.lineTo(s.x, s.y), t.stroke()))
//                 }), this.requestFrame(this.drawCanvas)
//             }
//         }, {
//             key: "destroy",
//             value: function () {
//                 l(this.el), window.onmousemove = this.onmousemove, window.onmouseout = this.onmouseout, f(this.tid), this.canvas.parentNode.removeChild(this.canvas)
//             }
//         }]), e
//     }();
//     y.version = "2.0.4";
//     var w, b;
//     new y(document.body, (w = document.getElementsByTagName("script"), {
//         zIndex: (b = w[w.length - 1]).getAttribute("zIndex"),
//         opacity: b.getAttribute("opacity"),
//         color: b.getAttribute("color"),
//         pointColor: b.getAttribute("pointColor"),
//         count: Number(b.getAttribute("count")) || 99
//     }))
// }();