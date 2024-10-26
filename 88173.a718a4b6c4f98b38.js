"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[88173],{88173:(zt,W,b)=>{b.r(W),b.d(W,{rux_timeline:()=>At});var g=b(54452),h=b(7515),l=b(2628);b(49096),b(61906);var M={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function O(a){return function(t){var e=t||{},r=e.width?String(e.width):a.defaultWidth;return a.formats[r]||a.formats[a.defaultWidth]}}var Q={date:O({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:O({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:O({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function x(a){return function(t,e){var i,r=e||{};if("formatting"===(r.context?String(r.context):"standalone")&&a.formattingValues){var s=a.defaultFormattingWidth||a.defaultWidth,u=r.width?String(r.width):s;i=a.formattingValues[u]||a.formattingValues[s]}else{var o=a.defaultWidth,c=r.width?String(r.width):a.defaultWidth;i=a.values[c]||a.values[o]}return i[a.argumentCallback?a.argumentCallback(t):t]}}function P(a){return function(t,e){var r=String(t),n=e||{},i=n.width,u=r.match(i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth]);if(!u)return null;var m,o=u[0],c=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth];return m="[object Array]"===Object.prototype.toString.call(c)?function rt(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}(c,function(v){return v.test(o)}):function at(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}(c,function(v){return v.test(o)}),m=a.valueCallback?a.valueCallback(m):m,{value:m=n.valueCallback?n.valueCallback(m):m,rest:r.slice(o.length)}}}var wt={code:"en-US",formatDistance:function H(a,t,e){var r;return e=e||{},r="string"==typeof M[a]?M[a]:1===t?M[a].one:M[a].other.replace("{{count}}",t),e.addSuffix?e.comparison>0?"in "+r:r+" ago":r},formatLong:Q,formatRelative:function z(a,t,e,r){return X[a]},localize:{ordinalNumber:function Z(a,t){var e=Number(a),r=e%100;if(r>20||r<10)switch(r%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"},era:x({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:x({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(a){return Number(a)-1}}),month:x({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:x({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:x({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:function et(a){return function(t,e){var r=String(t),n=e||{},i=r.match(a.matchPattern);if(!i)return null;var s=i[0],u=r.match(a.parsePattern);if(!u)return null;var o=a.valueCallback?a.valueCallback(u[0]):u[0];return{value:o=n.valueCallback?n.valueCallback(o):o,rest:r.slice(s.length)}}}({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:P({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:P({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:P({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:P({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:P({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function d(a,t){for(var e=a<0?"-":"",r=Math.abs(a).toString();r.length<t;)r="0"+r;return e+r}function S(a){(0,l.r)(1,arguments);var e=(0,l.t)(a),r=e.getUTCDay(),n=(r<1?7:0)+r-1;return e.setUTCDate(e.getUTCDate()-n),e.setUTCHours(0,0,0,0),e}function E(a){(0,l.r)(1,arguments);var t=(0,l.t)(a),e=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(e+1,0,4),r.setUTCHours(0,0,0,0);var n=S(r),i=new Date(0);i.setUTCFullYear(e,0,4),i.setUTCHours(0,0,0,0);var s=S(i);return t.getTime()>=n.getTime()?e+1:t.getTime()>=s.getTime()?e:e-1}function k(a,t){(0,l.r)(1,arguments);var e=t||{},r=e.locale,n=r&&r.options&&r.options.weekStartsOn,i=null==n?0:(0,h.t)(n),s=null==e.weekStartsOn?i:(0,h.t)(e.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=(0,l.t)(a),o=u.getUTCDay(),c=(o<s?7:0)+o-s;return u.setUTCDate(u.getUTCDate()-c),u.setUTCHours(0,0,0,0),u}function U(a,t){(0,l.r)(1,arguments);var e=(0,l.t)(a,t),r=e.getUTCFullYear(),n=t||{},i=n.locale,s=i&&i.options&&i.options.firstWeekContainsDate,u=null==s?1:(0,h.t)(s),o=null==n.firstWeekContainsDate?u:(0,h.t)(n.firstWeekContainsDate);if(!(o>=1&&o<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,o),c.setUTCHours(0,0,0,0);var m=k(c,t),v=new Date(0);v.setUTCFullYear(r,0,o),v.setUTCHours(0,0,0,0);var T=k(v,t);return e.getTime()>=m.getTime()?r+1:e.getTime()>=T.getTime()?r:r-1}var kt={G:function(a,t,e){var r=a.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return e.era(r,{width:"abbreviated"});case"GGGGG":return e.era(r,{width:"narrow"});default:return e.era(r,{width:"wide"})}},y:function(a,t,e){if("yo"===t){var r=a.getUTCFullYear();return e.ordinalNumber(r>0?r:1-r,{unit:"year"})}return function(a,t){var e=a.getUTCFullYear(),r=e>0?e:1-e;return d("yy"===t?r%100:r,t.length)}(a,t)},Y:function(a,t,e,r){var n=U(a,r),i=n>0?n:1-n;return"YY"===t?d(i%100,2):"Yo"===t?e.ordinalNumber(i,{unit:"year"}):d(i,t.length)},R:function(a,t){return d(E(a),t.length)},u:function(a,t){return d(a.getUTCFullYear(),t.length)},Q:function(a,t,e){var r=Math.ceil((a.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return d(r,2);case"Qo":return e.ordinalNumber(r,{unit:"quarter"});case"QQQ":return e.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(r,{width:"narrow",context:"formatting"});default:return e.quarter(r,{width:"wide",context:"formatting"})}},q:function(a,t,e){var r=Math.ceil((a.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return d(r,2);case"qo":return e.ordinalNumber(r,{unit:"quarter"});case"qqq":return e.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(r,{width:"narrow",context:"standalone"});default:return e.quarter(r,{width:"wide",context:"standalone"})}},M:function(a,t,e){var r=a.getUTCMonth();switch(t){case"M":case"MM":return function(a,t){var e=a.getUTCMonth();return"M"===t?String(e+1):d(e+1,2)}(a,t);case"Mo":return e.ordinalNumber(r+1,{unit:"month"});case"MMM":return e.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(r,{width:"narrow",context:"formatting"});default:return e.month(r,{width:"wide",context:"formatting"})}},L:function(a,t,e){var r=a.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return d(r+1,2);case"Lo":return e.ordinalNumber(r+1,{unit:"month"});case"LLL":return e.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(r,{width:"narrow",context:"standalone"});default:return e.month(r,{width:"wide",context:"standalone"})}},w:function(a,t,e,r){var n=function St(a,t){(0,l.r)(1,arguments);var e=(0,l.t)(a),r=k(e,t).getTime()-function Pt(a,t){(0,l.r)(1,arguments);var e=t||{},r=e.locale,n=r&&r.options&&r.options.firstWeekContainsDate,i=null==n?1:(0,h.t)(n),s=null==e.firstWeekContainsDate?i:(0,h.t)(e.firstWeekContainsDate),u=U(a,t),o=new Date(0);return o.setUTCFullYear(u,0,s),o.setUTCHours(0,0,0,0),k(o,t)}(e,t).getTime();return Math.round(r/6048e5)+1}(a,r);return"wo"===t?e.ordinalNumber(n,{unit:"week"}):d(n,t.length)},I:function(a,t,e){var r=function xt(a){(0,l.r)(1,arguments);var t=(0,l.t)(a),e=S(t).getTime()-function Ct(a){(0,l.r)(1,arguments);var t=E(a),e=new Date(0);return e.setUTCFullYear(t,0,4),e.setUTCHours(0,0,0,0),S(e)}(t).getTime();return Math.round(e/6048e5)+1}(a);return"Io"===t?e.ordinalNumber(r,{unit:"week"}):d(r,t.length)},d:function(a,t,e){return"do"===t?e.ordinalNumber(a.getUTCDate(),{unit:"date"}):function(a,t){return d(a.getUTCDate(),t.length)}(a,t)},D:function(a,t,e){var r=function pt(a){(0,l.r)(1,arguments);var t=(0,l.t)(a),e=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime();return Math.floor((e-r)/864e5)+1}(a);return"Do"===t?e.ordinalNumber(r,{unit:"dayOfYear"}):d(r,t.length)},E:function(a,t,e){var r=a.getUTCDay();switch(t){case"E":case"EE":case"EEE":return e.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},e:function(a,t,e,r){var n=a.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return d(i,2);case"eo":return e.ordinalNumber(i,{unit:"day"});case"eee":return e.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(n,{width:"short",context:"formatting"});default:return e.day(n,{width:"wide",context:"formatting"})}},c:function(a,t,e,r){var n=a.getUTCDay(),i=(n-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return d(i,t.length);case"co":return e.ordinalNumber(i,{unit:"day"});case"ccc":return e.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(n,{width:"narrow",context:"standalone"});case"cccccc":return e.day(n,{width:"short",context:"standalone"});default:return e.day(n,{width:"wide",context:"standalone"})}},i:function(a,t,e){var r=a.getUTCDay(),n=0===r?7:r;switch(t){case"i":return String(n);case"ii":return d(n,t.length);case"io":return e.ordinalNumber(n,{unit:"day"});case"iii":return e.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(r,{width:"short",context:"formatting"});default:return e.day(r,{width:"wide",context:"formatting"})}},a:function(a,t,e){var n=a.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(n,{width:"narrow",context:"formatting"});default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(a,t,e){var n,r=a.getUTCHours();switch(n=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(n,{width:"narrow",context:"formatting"});default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(a,t,e){var n,r=a.getUTCHours();switch(n=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return e.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(n,{width:"narrow",context:"formatting"});default:return e.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(a,t,e){if("ho"===t){var r=a.getUTCHours()%12;return 0===r&&(r=12),e.ordinalNumber(r,{unit:"hour"})}return function(a,t){return d(a.getUTCHours()%12||12,t.length)}(a,t)},H:function(a,t,e){return"Ho"===t?e.ordinalNumber(a.getUTCHours(),{unit:"hour"}):function(a,t){return d(a.getUTCHours(),t.length)}(a,t)},K:function(a,t,e){var r=a.getUTCHours()%12;return"Ko"===t?e.ordinalNumber(r,{unit:"hour"}):d(r,t.length)},k:function(a,t,e){var r=a.getUTCHours();return 0===r&&(r=24),"ko"===t?e.ordinalNumber(r,{unit:"hour"}):d(r,t.length)},m:function(a,t,e){return"mo"===t?e.ordinalNumber(a.getUTCMinutes(),{unit:"minute"}):function(a,t){return d(a.getUTCMinutes(),t.length)}(a,t)},s:function(a,t,e){return"so"===t?e.ordinalNumber(a.getUTCSeconds(),{unit:"second"}):function(a,t){return d(a.getUTCSeconds(),t.length)}(a,t)},S:function(a,t){return function(a,t){var e=t.length,r=a.getUTCMilliseconds();return d(Math.floor(r*Math.pow(10,e-3)),t.length)}(a,t)},X:function(a,t,e,r){var i=(r._originalDate||a).getTimezoneOffset();if(0===i)return"Z";switch(t){case"X":return Y(i);case"XXXX":case"XX":return p(i);default:return p(i,":")}},x:function(a,t,e,r){var i=(r._originalDate||a).getTimezoneOffset();switch(t){case"x":return Y(i);case"xxxx":case"xx":return p(i);default:return p(i,":")}},O:function(a,t,e,r){var i=(r._originalDate||a).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+_(i,":");default:return"GMT"+p(i,":")}},z:function(a,t,e,r){var i=(r._originalDate||a).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+_(i,":");default:return"GMT"+p(i,":")}},t:function(a,t,e,r){return d(Math.floor((r._originalDate||a).getTime()/1e3),t.length)},T:function(a,t,e,r){return d((r._originalDate||a).getTime(),t.length)}};function _(a,t){var e=a>0?"-":"+",r=Math.abs(a),n=Math.floor(r/60),i=r%60;if(0===i)return e+String(n);var s=t||"";return e+String(n)+s+d(i,2)}function Y(a,t){return a%60==0?(a>0?"-":"+")+d(Math.abs(a)/60,2):p(a,t)}function p(a,t){var e=t||"",r=a>0?"-":"+",n=Math.abs(a);return r+d(Math.floor(n/60),2)+e+d(n%60,2)}function N(a,t){switch(a){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}}function F(a,t){switch(a){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}}var Ot={p:F,P:function Dt(a,t){var i,e=a.match(/(P+)(p+)?/),r=e[1],n=e[2];if(!n)return N(a,t);switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;default:i=t.dateTime({width:"full"})}return i.replace("{{date}}",N(r,t)).replace("{{time}}",F(n,t))}},Wt=["D","DD"],Et=["YY","YYYY"];function I(a,t,e){if("YYYY"===a)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://git.io/fxCyr"));if("YY"===a)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(e,"`; see: https://git.io/fxCyr"));if("D"===a)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://git.io/fxCyr"));if("DD"===a)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(e,"`; see: https://git.io/fxCyr"))}var Yt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Ft=/^'([^]*?)'?$/,It=/''/g,Rt=/[a-zA-Z]/;const At=(()=>{let a=class{constructor(t){(0,g.r)(this,t),this.slots="empty",this.playheadPositionInPixels=200,this.columnWidth=120,this.playheadHeight=0,this.showPlayhead=!0,this.start="",this.end="",this.zoom=1,this.playhead=void 0,this.hasPlayedIndicator=!1,this.interval="hour",this.timezone="UTC"}syncPlayhead(){if(this.playhead){const t=this._calculatePlayheadFromTime(this.playhead);t&&(this.playheadPositionInPixels=t),this._updateRegions()}}handleZoomChange(){this._setZoom(),this.syncPlayhead(),this._updateRegions()}handleChange(){this.syncPlayhead(),this._updateRegions(),this.syncPlayhead()}connectedCallback(){this._handleSlotChange=this._handleSlotChange.bind(this),this._handleMouse=this._handleMouse.bind(this),this.syncPlayhead=this.syncPlayhead.bind(this),this._updateRegions=this._updateRegions.bind(this)}componentWillLoad(){this._setZoom(),this.syncPlayhead()}get width(){let t=60;return"day"===this.interval&&(t=24),"week"===this.interval&&(t=24),"month"===this.interval&&(t=24),this.columnWidth/t}get columns(){let t=60;return"day"===this.interval&&(t=24),"week"===this.interval&&(t=24),"month"===this.interval&&(t=24),this.totalColumns*t}get totalColumns(){return this.start||this.end?(0,h.d)(this.start,this.end,this.interval).length:0}get pxToTimeRatio(){return"hour"===this.interval?this.columnWidth/60:"minute"===this.interval?this.columnWidth/1:"day"===this.interval||"week"===this.interval||"month"===this.interval?this.columnWidth/24:2}get formattedCurrentTime(){return this.playhead?function Lt(a,t,e){(0,l.r)(2,arguments);var r=String(t),n=e||{},i=n.locale||wt,s=i.options&&i.options.firstWeekContainsDate,u=null==s?1:(0,h.t)(s),o=null==n.firstWeekContainsDate?u:(0,h.t)(n.firstWeekContainsDate);if(!(o>=1&&o<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,m=null==c?0:(0,h.t)(c),v=null==n.weekStartsOn?m:(0,h.t)(n.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var T=(0,l.t)(a);if(!function L(a){(0,l.r)(1,arguments);var t=(0,l.t)(a);return!isNaN(t)}(T))throw new RangeError("Invalid time value");var Qt=function yt(a,t){(0,l.r)(2,arguments);var e=(0,h.t)(t);return(0,h.a)(a,-e)}(T,(0,l.g)(T)),R={firstWeekContainsDate:o,weekStartsOn:v,locale:i,_originalDate:T},Xt=r.match(Nt).map(function(f){var y=f[0];return"p"===y||"P"===y?(0,Ot[y])(f,i.formatLong,R):f}).join("").match(Yt).map(function(f){if("''"===f)return"'";var y=f[0];if("'"===y)return function Ht(a){return a.match(Ft)[1].replace(It,"'")}(f);var D=kt[y];if(D)return!n.useAdditionalWeekYearTokens&&function _t(a){return-1!==Et.indexOf(a)}(f)&&I(f,t,a),!n.useAdditionalDayOfYearTokens&&function Ut(a){return-1!==Wt.indexOf(a)}(f)&&I(f,t,a),D(Qt,f,i.localize,R);if(y.match(Rt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return f}).join("");return Xt}(new Date(this.playhead),"MM/dd/Y HH:mm:ss"):null}initializeTracks(){const t=[...this.el.children].filter(r=>"rux-track"===r.tagName.toLowerCase());let e=(0,h.g)(this.start,this.end,this.interval);t.map(r=>{r.width=this.width,r.columns=this.columns,r.playhead=this.hasPlayedIndicator?this.playhead:null,r.interval=this.interval,r.start=e.timelineStart.toISOString(),r.end=e.timelineEnd.toISOString()})}_calculatePlayheadFromTime(t){if(!t)return;let e=(0,h.g)(this.start,this.end,this.interval);(new Date(t)<e.timelineStart||new Date(t)>e.timelineEnd)&&console.warn(`Playhead date must be between ${e.timelineStart.toISOString()} - ${e.timelineEnd.toISOString()}`);const r=new Date(t);let n=Math.abs((0,h.b)(e.timelineStart,r));if("day"===this.interval&&(n=Math.abs((0,h.c)(e.timelineStart,r))),"week"===this.interval&&(n=Math.abs((0,h.c)(e.timelineStart,r))/7),"month"===this.interval){const s=(0,h.e)(e.timelineStart,0),u=Math.abs((0,h.f)(s,r)),o=r.getDate()-1,c=(0,h.h)(r);return n=(u+(o+r.getHours()/24)/c)*this.columnWidth+200,n}return n*this.pxToTimeRatio+200}_handleMouse(t){this.el.getBoundingClientRect()}_handleSlotChange(){this._updateRegions()}_updateRegions(){var t,e;const r=null===(t=this.slotContainer)||void 0===t?void 0:t.querySelectorAll("slot")[0];if(r){const s=[...null==r?void 0:r.assignedElements({flatten:!0}).filter(o=>"rux-track"===o.tagName.toLowerCase())];let u=(0,h.g)(this.start,this.end,this.interval);s.map(o=>{o.width=this.width,o.columns=this.columns,o.playhead=this.hasPlayedIndicator?this.playhead:null,o.interval=this.interval,o.start=u.timelineStart.toISOString(),o.end=u.timelineEnd.toISOString(),o.timezone=this.timezone})}const n=null===(e=this.rulerContainer)||void 0===e?void 0:e.querySelector("slot"),i=null==n?void 0:n.assignedElements({flatten:!0}).find(s=>"rux-track"===s.tagName.toLowerCase());if(i){let s=(0,h.g)(this.start,this.end,this.interval);i.width=this.width,i.columns=this.columns,i.interval=this.interval,i.start=s.timelineStart.toISOString(),i.end=s.timelineEnd.toISOString();const u=[...i.children].find(o=>"rux-ruler"===o.tagName.toLowerCase());u&&((0,h.v)(this.timezone).then(()=>{u.timezone=this.timezone}),u.start=s.timelineStart.toISOString(),u.end=s.timelineEnd.toISOString(),u.interval=this.interval)}}_setZoom(){let t=60;"day"===this.interval&&(t=120),"month"===this.interval&&(t=120),"week"===this.interval&&(t=120),isNaN(this.zoom)&&(this.zoom=1),this.zoom>0&&(this.columnWidth=Math.floor(this.zoom*t))}_handleScroll(){var t,e;const r=this.timelineContainer?null===(t=this.timelineContainer)||void 0===t?void 0:t.scrollTop:0;this.playheadHeight=r;const n=this.timelineContainer?null===(e=this.timelineContainer)||void 0===e?void 0:e.scrollLeft:0;this.showPlayhead=n+200<=this.playheadPositionInPixels}render(){return(0,g.h)(g.H,null,(0,g.h)("div",{class:"rux-timeline",onMouseMove:t=>this._handleMouse(t),onScroll:()=>this._handleScroll(),ref:t=>this.timelineContainer=t,part:"time-region-container"},this.playhead&&(0,g.h)("div",{class:{"rux-playhead":!0,hidden:!this.showPlayhead},part:"playhead",style:{top:`${this.playheadHeight}px`,left:`${this.playheadPositionInPixels}px`}}),(0,g.h)("div",{class:"events",ref:t=>this.slotContainer=t},(0,g.h)("slot",{onSlotchange:this._handleSlotChange})),(0,g.h)("div",{class:"ruler",ref:t=>this.rulerContainer=t},(0,g.h)("slot",{name:"ruler"}))))}get el(){return(0,g.g)(this)}static get watchers(){return{hasPlayedIndicator:["syncPlayhead"],playhead:["syncPlayhead"],zoom:["handleZoomChange"],start:["handleChange"],end:["handleChange"],interval:["handleChange"],timezone:["handleChange"]}}};return a.style=':host{display:block;}:host ::-webkit-scrollbar{width:16px;height:16px}:host ::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:8px;border:3px solid transparent;background-clip:padding-box}:host ::-webkit-scrollbar-thumb:vertical{border-left-width:4px}:host ::-webkit-scrollbar-thumb:horizontal{border-top-width:4px}:host ::-webkit-scrollbar-thumb:active,:host ::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}:host ::-webkit-scrollbar-track,:host ::-webkit-scrollbar-corner{background:var(--color-background-surface-default, #1b2d3e)}:host ::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}:host ::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-horizontal, inset 1px 3px 3px 0px rgba(0, 0, 0, 0.5))}.rux-timeline{display:flex;flex-direction:column;overflow-x:auto;position:relative}.hidden{display:none}.rux-playhead{width:2px;background:var(--color-background-interactive-default, #4dacff);z-index:2;position:absolute;height:100%;top:0;pointer-events:none}.rux-playhead:after{width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-top:12px solid var(--color-background-interactive-default, #4dacff);content:"";position:absolute;left:-10.9px}.ruler{position:sticky;bottom:0;z-index:2}.rux-track{display:contents}.ruler-time{display:flex;align-items:center;padding:12px 20px}#rulerTrack::part(container){margin-bottom:0}',a})()}}]);