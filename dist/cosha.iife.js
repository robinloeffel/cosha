var cosha=function(){"use strict";return function(e){void 0===e&&(e={});var n=e.className;void 0===n&&(n="cosha");var t=e.blur;void 0===t&&(t="5px");var o=e.brightness;void 0===o&&(o=1);var r=e.saturation;void 0===r&&(r=1);var a=e.y;void 0===a&&(a=0);var i=e.x;void 0===i&&(i=0);var s=document.getElementsByClassName(n);HTMLCollection.prototype.forEach||(HTMLCollection.prototype.forEach=Array.prototype.forEach),"filter"in document.documentElement.style&&(document.head.insertAdjacentHTML("beforeend","\n        <style>\n            ."+n+"-wrapper {\n                position: relative;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n\n            ."+n+"-clone {\n                filter: blur("+t+") brightness("+o+") saturate("+r+");\n                position: absolute;\n                z-index: -1;\n                transform: translate3d("+i+", "+a+", 0);\n            }\n        </style>\n    "),s.forEach((function(e){var t=e.cloneNode(),o=document.createElement("div");o.classList.add(n+"-wrapper"),t.classList.add(n+"-clone"),t.classList.remove(n),e.parentNode.insertBefore(o,e),o.appendChild(e),o.appendChild(t)})))}}();
