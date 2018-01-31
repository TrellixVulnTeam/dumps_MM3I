(function(l){var n=window.AmazonUIPageJS||window.P,p=n._namespace||n.attributeErrors,e=p?p("TwisterCoreAsset"):n;e.guardFatal?e.guardFatal(l)(e,window):e.execute(function(){l(e,window)})})(function(l,n,p){l.when("twister-variation-matrix","twister-dim-util","twister-state-machine","twister-metadata","twister-view-controller","twister-dispatcher","twister-actions","twister-slots-dimsum","twister-dimsum").register("TwisterCore",function(e,k,h,f,b,d,g,c,a){function q(g,m){this.tvm=new e(g);this.util=
new k(this.tvm);this.tsm=new h(this.tvm,this.util,g.initDimCombination);this.dimSum=new a(g.config.ajaxTimeout,g.config.ajaxUrlParams,g.config.deviceType,m);this.slotsDimSum=new c(g.config.ajaxTimeout,g.config.ajaxUrlParams,g.config.deviceType);var q=this;d.registerStore("twister-state-machine",function(a,c){q.tsm.accept(a,c).THEN(function(c){b.publishView(a,c)}).ELSE()});var l=new f;d.registerStore("twister-metadata",function(a,c){l.process(a,c,function(c){b.publishView(a,c)})})}function m(a,c){var b=
a.viewAttribution+"_"+a.viewName+"_"+c;return function(a){try{var e=g.create(c,a);d.dispatch(c,e)}catch(f){n.ueLogError&&n.ueLogError(f,{logLevel:"ERROR",attribution:"Twister_view_"+b,message:"This error is caused by the Twister view - "+b+" while updating the TwisterCore"})}}}q.prototype={registerActive:function(a,c){b.register(a.viewAttribution+"_"+a.viewName,c.updateView);return{dimensionChanged:m(a,"VARIATION_CHANGE"),dimensionPeek:m(a,"VARIATION_PEEK"),metaData:m(a,"METADATA")}},registerPassive:function(a,
c){b.register(a.viewAttribution+"_"+a.viewName,c.updateView);return{metaData:m(a,"METADATA")}},state:function(){return this.tsm.currentState().selected().selectionInfo()}};return q});l.when("A").register("twister-actions",function(e){var k=e.$,h={VARIATION_CHANGE:function(e){return e=k.isArray(e)?e:[e]},VARIATION_PEEK:function(e){return e},METADATA:function(e){return e}};return{create:function(e,b){return h[e]?h[e](b):!1}}});l.when("A","publisherSubscriber").register("twister-dispatcher",
function(e,k){function h(){h=1;return this}var f=e.$,b=new k,h=0,d=[];return{registerStore:function(d,c){b.register(d,c);return this},deregisterStore:function(d){b.deRegister(d);return this},dispatch:function(g,c){h?d.push(arguments):b.publish(g,c);return this},hold:h,release:function(){f.each(d,function(d,c){b.publish.apply(b,c)});h=0;return this}}});l.when("A","publisherSubscriber").register("twister-view-controller",function(e,k){function h(){b?d.push(arguments):(b=1,f.publish.apply(f,
arguments),b=0,d.length&&h.apply(this,d.shift()));return this}var f=new k,b=0,d=[];return{register:function(b,c){f.register(b,c);return this},deRegister:function(b){f.deRegister(b);return this},publishView:h}});l.when("A").register("twister-dimsel-api",function(e){function k(e){var b=this;this.dimSelectionMap={};this.selInfo=e;h.each(e,function(d,e){b.dimSelectionMap[e.dimKey]=e.val})}var h=e.$;k.prototype={matches:function(e){e=e.selectionInfo();for(var b=0;b<e.length;b++){var d=e[b].dimKey;
if(!(d in this.dimSelectionMap)||this.dimSelectionMap[d]!==e[b].val)return!1}return!0},selectionInfo:function(){return e.copy(this.selInfo)}};return k});l.when("A","twister-dimsel-api").register("twister-dim-util",function(e,k){function h(b){this.tvm=b;this.dimensionMetaData={};var d=[];b=b.dimensionInfo;for(var e=0;e<b.length;e++){d.push(b[e].dimKey);var c={};c.isRequired=b[e].isRequired;c.isSingleton=b[e].isSingleton;c.dimOrder=e;c.size=b[e].size;this.dimensionMetaData[b[e].dimKey]=
c}}var f=e.$;h.prototype={createSelectionInfo:function(b){return new k(b)},extendSelectionInfo:function(b,d,e){var c=e||0===e,a={},h=[];f.each(d.selectionInfo(),function(c,b){a[b.dimKey]=b.val});f.each(b.selectionInfo(),function(b,d){var f=d.dimKey,k=c?e:d.val;f in a&&(k=a[f]);h.push({dimKey:f,val:k})});return new k(h)},createNextDimSelection:function(b,d){var e=[],c=d.selectionInfo(),a=this;f.each(b.split(":"),function(b,d){var f=c[b].dimKey,h=parseInt(d,10);a.dimensionMetaData[f].isRequired&&h!==
c[b].val&&(h=-1);e.push({dimKey:f,val:h})});return new k(e)},getDimScore:function(b,d){var e=0,c=b.split(":"),a=this;f.each(d.selectionInfo(),function(b,d){var f=d.dimKey,h=d.val,k=parseInt(c[b],10),l=c.length-b;h===k?(e+=200*l,a.dimensionMetaData[f].isRequired&&(e+=2E4)):(h=Math.abs(h-k),f=Math.round(h/a.dimensionMetaData[f].size*100),e+=100-f)});return e},isSingletonDim:function(b){return this.dimensionMetaData[b]?this.dimensionMetaData[b].isSingleton:!1},isRequiredDim:function(b){return this.dimensionMetaData[b]?
this.dimensionMetaData[b].isRequired:!1},getDimensionInfo:function(){return this.tvm.dimensionInfo},getDimAvailability:function(b,d){d=d.selectionInfo?d:this.createSelectionInfo(d);var e=[],c=[],a=this.tvm.dimensionList,h=this.tvm.dimtoValueMap[b],m=this.createSelectionInfo([{dimKey:b,val:-1}]),m=this.tvm.fetch(this.extendSelectionInfo(d,m).selectionInfo()),k={},l=this;f.each(m,function(c,d){k[d.split(":")[a.indexOf(b)]]=l.tvm.dimCombinations[d]});f.each(h,function(a,b){a in k?e.push({index:a,asin:k[a],
label:b}):c.push({index:a,label:b})});return{available:e,unavailable:c}},getUnselectedDims:function(b){var d={};f.each(b,function(a,c){d[c.dimKey]=c.val});b=[];var e=this.tvm.dimensionList,c;for(c in e)if(e.hasOwnProperty(c)){var a=e[c];if(d[a]===p||-1===d[a])this.isSingletonDim(a)?d[a]=0:b.push(a)}return b},showDimSum:function(b,d){var e=this.getUnselectedDims(d);return!e||0===e.length||1===e.length&&e[0]===b?1:0},isFullySelected:function(b){var d=!0;"string"===typeof b&&(b=this.getSelectionInfoFromDimComb(b));
b=b.selectionInfo?b.selectionInfo():b;if(b.length!=this.tvm.dimensionList.length)return!1;f.each(b,function(b,c){-1===c.val&&(d=!1)});return d},createDimensionSelectionMap:function(b){var d={},e;for(e in b)if(b.hasOwnProperty(e)){var c=b[e];d[c.dimKey]=c.val}return d},getSelectedDimKeys:function(b){var d=this.tvm.dimensionList,e=[],c;for(c in d)if(d.hasOwnProperty(c)){var a=b[d[c]];"undefined"===typeof a||-1==a?e.push("*"):e.push(a)}return e},getValidDimCombination:function(b,d){var e,c,a=this,h=
0,m=0;c=this.tvm.fetch(b);f.each(c,function(c,b){m=a.getDimScore(b,d);m>h&&(e=c,h=m)});return c[e]},getAsinFromSelectionInfo:function(b,d){var g,c;"undefined"==typeof d||d?g=this.createDimensionSelectionMap(b):(c=e.copy(b),g=this.getValidDimCombination(c,this.createSelectionInfo(b)),f.each(g.split(":"),function(a,b){var d=parseInt(b,10);c[a].val=d}),g=this.createDimensionSelectionMap(c));g=this.getSelectedDimKeys(g).join(":");return this.tvm.dimCombinations[g]},getSelectionInfoFromSelectedVariationValuesMap:function(b){var d=
[],e;for(e in this.tvm.dimensionList){var c={},a=this.tvm.dimensionList[e];c.dimKey=a;c.val=b[a];d.push(c)}return d},getSelectionInfoFromDimComb:function(b){var d=[];b=b.split("_");for(var e in this.tvm.dimensionList){var c={},a=b[e];c.dimKey=this.tvm.dimensionList[e];c.val="X"===a||"*"===a?-1:parseInt(a,10);d.push(c)}return d},getSelectionInfoFromDimIndexAndValue:function(b,d){var e=[],c={};c.dimKey=this.tvm.dimensionList[b];c.val="X"===d||"*"===d?-1:parseInt(d,10);e.push(c);return e},predictNextState:function(b,
d){var e=this.extendSelectionInfo(b,d);if(function(a){var c;f.each(a.selectionInfo(),function(a,b){c=-1===b.val});return c}(d)||this.tvm.exists(e.selectionInfo()))return e;for(var c=this.extendSelectionInfo(b,d,-1),c=this.tvm.fetch(c.selectionInfo()),a=0,h=0,m,k=0;k<c.length;k++)h=this.getDimScore(c[k],e),h>a&&(m=k,a=h);return this.createNextDimSelection(c[m],e)}};return h});l.when("A","url-builder").register("twister-dimsum",function(e,k){function h(b,d,g,c){this.cache;c&&(this.cache=
new c);this.ajaxTimeout=b;this.batchLimit=10;this.ajaxUrl="/gp/twister/dimension?asinList=###asinString###&vs=1"+(d||"");g&&(this.ajaxUrl+="&deviceType="+g);(b=e.state("pwState"))&&b.isTryState&&(this.ajaxUrl=k.addUrlParams(this.ajaxUrl,{isTryState:"true"}))}var f=e.$;h.prototype={get:function(b,d,g){function c(b){var d=b-this.batchLimit,g="";0<d&&c.call(this,d);if(g=k.slice(0>d?0:d,b).join(","))b=this.ajaxUrl.replace("###asinString###",g),e.ajax(b,{chunk:a,timeout:this.ajaxTimeout})}function a(a){if(a)for(var c in a)if(a.hasOwnProperty(c)){var b=
a[c];if(b&&b.asin){if(m){var e=h(b.asin,g);m.put(e,b)}d&&d(b)}}}function h(a,c){var b=a;e.objectIsEmpty(c)||(b={asin:a},f.extend(!0,b,c));return b}var m=this.cache,k=[],l={};f.each(b,function(a,c){var b=h(c,g);m&&m.get(b)?d?d(m.get(b)):l[c]=m.get(b):k.push(c)});if(!d)return l;c.call(this,k.length)}};return h});l.when("A").register("twister-slots-dimsum",function(e){function k(b,e,c){this.cache=f;this.ajaxTimeout=b;this.batchLimit=8;this.ajaxUrl="/gp/twister/dimension?isDimensionSlotsAjax=1&asinList=###asinString###&vs=1"+
(e||"");c&&(this.ajaxUrl+="&deviceType="+c)}var h=e.$,f={},b={};k.prototype={get:function(d,g){function c(b){var d=b-this.batchLimit,g="",h=[];0<d&&c.call(this,d);h=l.slice(0>d?0:d,b);if(g=h.join(","))b=this.ajaxUrl.replace("###asinString###",g),e.ajax(b,{chunk:f,timeout:this.ajaxTimeout,cache:!0,error:a.apply(null,h)})}function a(){var a=arguments;return function(){e.each(a,function(a){delete b[a]})}}function f(a){if(a&&a.ASIN){var c=a.ASIN;k[c]=a;for(g&&g(a);b[c]&&b[c].length;)b[c].pop()(a);delete b[c]}}
var k=this.cache,l=[],n={};h.each(d,function(a,c){k[c]?g?g(k[c]):n[c]=k[c]:b[c]&&g?b[c].push(g):g&&(l.push(c),b[c]=[])});if(!g)return n;l.length&&c.call(this,l.length)}};return k});l.register("twister-metadata",function(){function e(){this.config={}}e.prototype={process:function(e,h,f){"METADATA"===e&&f(h)}};return e});l.when("A").register("publisherSubscriber",function(e){function k(){this.Subscribers=[];this.Names=[]}var h=e.$;k.prototype={register:function(f,b){if(-1<
e.indexOfArray(this.Names,f))return!1;this.Names.push(f);this.Subscribers.push({name:f,handler:b})},deRegister:function(f){var b=e.indexOfArray(this.Names,f),d=this,g=function(c,a){if(c.name===f)return d.Subscribers.splice(a,1),!0};return-1<b?(this.Names.splice(b,1),[].some?this.Subscribers.some(g):h.each(this.Subscribers,function(c,a){g(a,c)}),!0):!1},publish:function(){var e=arguments;h.each(this.Subscribers,function(b,d){setTimeout(function(){d.handler.apply(null,e)},0)})}};return k});
l.when("jQuery").register("twister-state-machine",function(e){return function(e,h,f){function b(a,c){this.selected=function(){return a};this.peek=function(){return c}}function d(a,c){return{THEN:function(b){a&&b&&b(c());return this},ELSE:function(b){a||b&&b(c());return this}}}var g,c;this.accept=function(a,e){var f;switch(a){case "VARIATION_PEEK":var k=h.createSelectionInfo(e);f=g();f.peek().matches(k)?f=!1:(-1===e.val?f=new b(g.selected(),g.selected()):(k=h.predictNextState(f.peek(),k),f=new b(f.selected(),
k)),c=f,f=!0);f=d(f,this.currentState);break;case "VARIATION_CHANGE":f=g();var k=h.createSelectionInfo(e),l=h.getDimensionInfo();f.selected().matches(k)?f=!1:(f=k.selectionInfo().length!==l.length?h.predictNextState(f.selected(),k):k,c=new b(f,f),f=!0);f=d(f,this.currentState);break;default:f=d(!1)}return f};g=this.currentState=function(){return c};(function(a){c=a})(new b(h.createSelectionInfo(f),h.createSelectionInfo(f)))}});l.when("A").register("twister-variation-matrix",function(e){function k(d){d=
e.copy(d);var g=this;this.dimCombinations=d.dimCombinations;this.validCombinatonString=" "+e.keys(d.dimCombinations).join("  ")+" ";this.dimensionInfo=d.dimensionInfo;this.dimensionList=d.dimensionList;this.dimensionDisplayText=d.dimensionDisplayText;this.config=d.config;this.dimInfoMap={};b.each(this.dimensionInfo,function(c,a){var b=a.dimKey,d={};d.size=a.size;d.dimOrder=c;g.dimInfoMap[b]=d});this.dimtoValueMap=d.dimtoValueMap}function h(d){d=b.map(d,function(b){b=b.val;return-1===b?"\\d+":""+b}).join(":");
return new RegExp("\\s"+d+"\\s","gm")}function f(d){return b.map(d,function(b){return""+b.val}).join(":")}var b=e.$;k.prototype={fetch:function(d){d=h(d);d=this.validCombinatonString.match(d);return d=b.map(d,function(d){return b.trim(d)})},exists:function(b){return f(b)in this.dimCombinations}};return k});l.when("A","jQuery").register("url-builder",function(e,k){function h(b,g){var c;if(b&&g&&"object"==typeof g){c=b;var a="?";e.each(g,function(b,d){b=g[d];c+=a+d+"="+b;a="&"})}return c}
function f(b){var e;b&&(e=b.split("?")[0]);return e}function b(b){var g={};b&&(b=b.split("?"),1<b.length&&(b=b[1].split("&"),e.each(b,function(c,a){var b=c.split("=");g[b[0]]=b[1]})));return g}return{addUrlParams:function(d,e){var c=d;if(d&&e&&"object"==typeof e)var c=f(d),a=b(d),a=k.extend(a,e),c=h(c,a);return c},removeUrlParams:function(d,g){var c=d;if(d&&g&&"object"==typeof g){var c=f(d),a=b(d);e.each(g,function(c,b){delete a[c]});c=h(c,a)}return c}}})});