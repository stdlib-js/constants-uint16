// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,o=Object.prototype,a=o.toString,n=o.__defineGetter__,l=o.__defineSetter__,i=o.__lookupGetter__,_=o.__lookupSetter__;var u=r,c=function(e,t,r){var u,c,p,f;if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(i.call(e,t)||_.call(e,t)?(u=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=u):e[t]=r.value),p="get"in r,f="set"in r,c&&(p||f))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&n&&n.call(e,t,r.get),f&&l&&l.call(e,t,r.set),e},p=t()?u:c;var f=65535,b=2,y=function(e,t,r){p(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})},s={};y(s,"MAX",65535),y(s,"NUM_BYTES",2);var v=s;export{f as MAX,b as NUM_BYTES,v as default};
//# sourceMappingURL=mod.js.map
