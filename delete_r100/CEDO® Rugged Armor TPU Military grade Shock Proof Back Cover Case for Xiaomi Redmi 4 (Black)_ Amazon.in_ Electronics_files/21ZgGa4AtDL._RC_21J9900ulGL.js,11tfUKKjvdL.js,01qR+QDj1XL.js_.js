(function(y){var v=window.AmazonUIPageJS||window.P,G=v._namespace||v.attributeErrors,r=G?G("TwisterHardlinesDetailPageAsset"):v;r.guardFatal?r.guardFatal(y)(r,window):r.execute(function(){y(r,window)})})(function(y,v,G){y.when("A","jQuery","atf").execute(function(r,d){r.on.ready(function(){function g(a,b,c,e,f){d(a).slideToggle(300);d(b).slideToggle(300);d(c).toggleClass("tmmShowPrompt tmmHidePrompt");d(e).toggleClass("tmmShowPrompt tmmHidePrompt");d(f).toggleClass("rotate")}function q(a){a.position();
a.width();d(".swatchElement");a.find(".swatchElement").each(function(){d(this).attr("data-width",d(this).width())});d("#formats").find(".a-row").removeClass("nonJSFormats")}function b(){var a=d("#formats"),b=a.width()-40,c=0;a.find(".swatchElement").each(function(){d(this).is(":visible")&&(c+=d(this).width())});c>b?d(a.find(".swatchElement:visible").get().reverse()).each(function(){var a=0,e=!1;d(this).find(".format").hasClass("a-button-selected")?(a=d(this).prev(".swatchElement").width(),e=d(this).prev(".swatchElement").is(":hidden"),
d(this).prev(".swatchElement").hide()):(a=d(this).width(),e=d(this).is(":hidden"),d(this).hide());e||(c-=a);return c>b}):c<b&&a.find(".swatchElement").each(function(){if(d(this).is(":hidden"))return d(this).attr("data-width")<=b-c&&d(this).show(),!1})}var a=0,c=0,f,e=function(a){"undefined"!=typeof a&&(f=new a.ImpressionLogger("dpbxapps","bxapps-atfMarker",!0,!0))};"undefined"!=typeof amznJQ?amznJQ.available("DPClientLogger",function(){e(v.DPClientLogger)}):y.when("DPClientLogger").execute(e);r.declarative("tmm-see-more-editions-click",
["click"],function(a){var b=a.data,c=b.metabindingUrl;if(a.$target.hasClass("a-link-expander")||a.$target.parent().hasClass("a-link-expander")){var b=b.metabindingPlaceHolder,e="#metabinding_row_top_"+b,f="#metabinding_row_bottom_"+b,h="#editionsSeePrompt_"+b,l="#editionsHidePrompt_"+b,q="#editionsIcon_"+b,w="isAjaxComplete_"+b,u="isAjaxInProgress_"+b;a="#tmmSpinnerDiv_"+b;var y=r.state("mediamatrix-state"),b=y["url_"+b].replace(/&amp;/g,"&");d("#formats .tmmErrorClass").hide();"1"===y[w]||"1"===
y[u]?g(e,f,h,l,q):(r.ajax(b,{method:"get",success:function(){y[w]="1";r.state("mediamatrix-state",y);g(e,f,h,l,q)},indicator:d(a),error:function(){d($tmmErrorDiv).show();y[u]="0";r.state("mediamatrix-state",y)}}),y[u]="1",r.state("mediamatrix-state",y))}else"#"!==c&&(v.location=c)});if(0<d("#formats > .a-link-expander").length){var l=v.ue;l&&l.count&&l.count("mediaMatrixExpanderPresent",1)}d("#formats > .a-link-expander").click(function(){g("#tmmSwatches","#twister","#showMoreFormatsPrompt","#hideMoreFormatsPrompt",
"#formatsIcon");if(!c){var b=v.ue;b&&b.count&&b.count("mediaMatrixExpanderClicked",1);c=1}f&&d("#twister").is(":visible")&&!a&&(f.logImpression("tmm-show-more-formats-viewed"),a=1)});var l=r.state("mediamatrix-state"),h="1";"undefined"!==typeof l&&"undefined"!==typeof l.showHybridMediaMatrix&&"1"===l.showHybridMediaMatrix?h="0":"undefined"!==typeof l&&"undefined"!==typeof l.isDvdWeblabEnabled&&"1"===l.isDvdWeblabEnabled&&(h="0");"1"===h&&(d("#formats.responsive").each(function(){q(d(this))}),b(),
r.on("resize",b));d("#formats .unselected .format").mouseenter(function(){d(this).find(".a-color-secondary").addClass("a-color-price").removeClass("a-color-secondary")}).mouseleave(function(){d(this).find(".a-color-price").addClass("a-color-secondary").removeClass("a-color-price")});d("#landingItemRentalLink").attr("href","javascript:document.getElementById('rentBuySection').click();")})});y.when("A","jQuery","a-dropdown").execute(function(r,d,g){function q(a){return a?a.replace(/&#0/g,"&#"):undef}
function b(a){for(var b=a.getOptions(),b=b?b.size():0,c=1;c<b;c++)a.removeOption(1)}function a(a,b){var c=a.getOption(0),e=c.info()[0];c.remove();d.each(b,function(b,c){a.addOption({text:n[q(c)],value:c,css_class:"dropdownAvailable"},1)});a.addOption(e,0);a.val(e.value)}function c(c){y=c.value;b(x);"-1"!==y&&(f(),a(x,Object.keys(h[q(y)])))}function f(){Object.keys||(Object.keys=function(){var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
d=c.length;return function(e){if("object"!==typeof e&&("function"!==typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f=[],g;for(g in e)a.call(e,g)&&f.push(g);if(b)for(g=0;g<d;g++)a.call(e,c[g])&&f.push(c[g]);return f}}())}function e(a){F=a.value;"-1"!==F&&"-1"!==y&&(v.location=m[h[q(y)][q(F)]])}function l(a){a=a.value;"-1"!==a&&(v.location=m[q(a)])}var h,k=r.state("dcdMetaData");if(k){var m=k.asinToDetailPageURLMap,n=k.truncatedValuesMap,p=k.dimensionKeys,t=p[0],y=-1,
F=-1,x;2===p.length?(h=k.doubleValuesToAsinMap,k=p[1],p=g.getSelect("native_dcd_dropdown_"+t),x=g.getSelect("native_dcd_dropdown_"+k),p.setValue("-1"),x.setValue("-1"),b(x),r.on("a:dropdown:selected:"+t,c),r.on("a:dropdown:selected:"+k,e)):(p=g.getSelect("native_dcd_dropdown_"+t),(g=k.selectedAsin)?p.setValue(g):p.setValue("-1"),r.on("a:dropdown:selected:asin-redirect",l))}})});
/* ******** */
(function(y){var v=window.AmazonUIPageJS||window.P,G=v._namespace||v.attributeErrors,r=G?G("PInfoHardlinesDetailPageAsset"):v;r.guardFatal?r.guardFatal(y)(r,window):r.execute(function(){y(r,window)})})(function(y,v,G){y.when("A","jQuery","atf").execute(function(r,d,g){function q(){var b=parseInt(d("#byline").width()),a=0;d("#byline .author").each(function(){d(this).is(".notFaded")&&(a+=d(this).outerWidth())});a+=d("#byline .more").outerWidth();if(a>b){var c=d("#byline .author.notFaded").length;d(d("#byline .author.notFaded").get().reverse()).each(function(e){a>
b&&e<c-1&&(e=d(this).width(),d(this).removeClass("notFaded"),d(this).fadeOut(10,function(){d(this).hide()}),a-=e,d("#byline .moreCount").html(d("#byline .author").length-d("#byline .author.notFaded").length),d("#byline .more").addClass("notFaded").fadeIn(10))})}else if(a<b&&d("#byline .author.notFaded").length<d("#byline .author").length){var f=b-a;d("#byline .author").each(function(){if(!d(this).hasClass("notFaded")){var a=d(this).outerWidth();a<=f?(f-=a,d(this).addClass("notFaded").fadeIn(10),a=
d("#byline .author").length-d("#byline .author.notFaded").length,0===a?d("#byline .more").removeClass("notFaded").fadeOut(10):(d("#byline .moreCount").html(a),d("#byline .more").addClass("notFaded").fadeIn(10))):f=0}})}}d("#byline .showMoreLink").click(function(){d("#byline .author").each(function(){d(this).hasClass("notFaded")||d(this).addClass("notFaded").fadeIn(0);d("#byline .more").removeClass("notFaded").fadeOut(0)});return!1});d("#byline .contributorNameID").mouseenter(function(){var b=d(this).attr("data-asin"),
a={},c="isAjaxComplete_"+b,f="isAjaxInProgress_"+b,e=r.state("popoverImage-state");a.entityID=b;"1"!==e[c]&&"1"!==e[f]&&(d.ajax({url:"/gp/product/utility/by-line/book-contributor-details/ajax/author-image.html",data:a,dataType:"html",timeout:1E3,success:function(a){d("#contributorImageContainer"+b).get(0).innerHTML=a;e[c]="1";r.state("popoverImage-state",e)},error:function(){e[f]="0";r.state("popoverImage-state",e)}}),e[f]="1",r.state("popoverImage-state",e))});(function(b){var a=parseInt(b.width()),
c=parseInt(b.find(".more").outerWidth()),f=0;d("#byline .author").each(function(){d(this).is(".notFaded")&&(f+=d(this).outerWidth())});d("#byline .more").attr("data-width",c);var e=a-c;if(e>f)b.find(".author").each(function(){var a=d(this).index();3<=parseInt(a)?(a=d(this).outerWidth(),d(this).attr("data-width",a),a<e?(e-=a,d(this).addClass("notFaded"),d(this).fadeIn("slow")):(e=0,d(this).fadeOut("slow"))):(a=d(this).outerWidth(),d(this).attr("data-width",a),e-=a)});else{var g=d("#byline .author.notFaded").length;
d(d("#byline .author.notFaded").get().reverse()).each(function(a){e<f&&a<g-1&&(a=d(this).outerWidth(),f-=a,d(this).fadeOut("slow").removeClass("notFaded"))})}a=b.find(".author").length-b.find(".author.notFaded").length;0<a&&(b.find(".moreCount").html(a),b.find(".more").fadeIn("slow"),b.find(".more").addClass("notFaded"))})(r.$("#byline"));d(v).resize(function(){q()})});y.when("A","jQuery","atf").execute(function(r,d,g){function q(){var b=parseInt(d("#bylineInfo").width()),a=0;d("#bylineInfo .author").each(function(){d(this).is(".notFaded")&&
(a+=d(this).outerWidth())});a+=d("#bylineInfo .more").outerWidth();if(a>b){var c=d("#bylineInfo .author.notFaded").length;d(d("#bylineInfo .author.notFaded").get().reverse()).each(function(e){a>b&&e<c-1&&(e=d(this).width(),d(this).removeClass("notFaded"),d(this).fadeOut(10,function(){d(this).hide()}),a-=e,d("#bylineInfo .moreCount").html(d("#bylineInfo .author").length-d("#bylineInfo .author.notFaded").length),d("#bylineInfo .more").addClass("notFaded").fadeIn(10))})}else if(a<b&&d("#bylineInfo .author.notFaded").length<
d("#bylineInfo .author").length){var f=b-a;d("#bylineInfo .author").each(function(){if(!d(this).hasClass("notFaded")){var a=d(this).outerWidth();a<=f?(f-=a,d(this).addClass("notFaded").fadeIn(10),a=d("#bylineInfo .author").length-d("#bylineInfo .author.notFaded").length,0===a?d("#bylineInfo .more").removeClass("notFaded").fadeOut(10):(d("#bylineInfo .moreCount").html(a),d("#bylineInfo .more").addClass("notFaded").fadeIn(10))):f=0}})}}d("#bylineInfo .showMoreLink").click(function(){d("#bylineInfo .author").each(function(){d(this).hasClass("notFaded")||
d(this).addClass("notFaded").fadeIn(0);d("#bylineInfo .more").removeClass("notFaded").fadeOut(0)});return!1});d("#bylineInfo .contributorNameID").mouseenter(function(){var b=d(this).attr("data-asin"),a={},c="isAjaxComplete_"+b,f="isAjaxInProgress_"+b,e=r.state("popoverImage-state");a.entityID=b;"1"!==e[c]&&"1"!==e[f]&&(d.ajax({url:"/gp/product/utility/by-line/book-contributor-details/ajax/author-image.html",data:a,dataType:"html",timeout:1E3,success:function(a){d("#contributorImageContainer"+b).get(0).innerHTML=
a;e[c]="1";r.state("popoverImage-state",e)},error:function(){e[f]="0";r.state("popoverImage-state",e)}}),e[f]="1",r.state("popoverImage-state",e))});(function(b){var a=parseInt(b.width()),c=parseInt(b.find(".more").outerWidth()),f=0;d("#bylineInfo .author").each(function(){d(this).is(".notFaded")&&(f+=d(this).outerWidth())});d("#bylineInfo .more").attr("data-width",c);var e=a-c;if(e>f)b.find(".author").each(function(){var a=d(this).index();3<=parseInt(a)?(a=d(this).outerWidth(),d(this).attr("data-width",
a),a<e?(e-=a,d(this).addClass("notFaded"),d(this).fadeIn("slow")):(e=0,d(this).fadeOut("slow"))):(a=d(this).outerWidth(),d(this).attr("data-width",a),e-=a)});else{var g=d("#bylineInfo .author.notFaded").length;d(d("#bylineInfo .author.notFaded").get().reverse()).each(function(a){e<f&&a<g-1&&(a=d(this).outerWidth(),f-=a,d(this).fadeOut("slow").removeClass("notFaded"))})}a=b.find(".author").length-b.find(".author.notFaded").length;0<a&&(b.find(".moreCount").html(a),b.find(".more").fadeIn("slow"),b.find(".more").addClass("notFaded"))})(r.$("#bylineInfo"));
d(v).resize(function(){q()})});y.when("A","jQuery").register("product-description-fix",function(r,d){return{fixTableIssue:function(){d("#productDescription .productDescriptionWrapper table").each(function(){var g=d(this).attr("width");"undefined"!==typeof g?d(this).css("width",g):d(this).css("width","auto")})}}})});
/* ******** */
(function(y){var v=window.AmazonUIPageJS||window.P,G=v._namespace||v.attributeErrors,r=G?G("OffersHardlinesDetailPageAsset"):v;r.guardFatal?r.guardFatal(y)(r,window):r.execute(function(){y(r,window)})})(function(y,v,G){y.when("A","jQuery","atf").register("accordionBuyBoxJS",function(r,d,g){var q={updateCssClass:function(b){var a=d("#rbbContainer");a.find(".selected .a-icon-radio-active").removeClass("a-icon-radio-active").addClass("a-icon-radio-inactive");a.find(".selected .offer-price").removeClass("a-color-price").addClass("a-color-secondary");
b.parents(".rbbSection").removeClass("unselected").addClass("selected");b.parents(".rbbSection").toggleClass("dp-accordion-active",500);b.find(".a-icon-radio-inactive").removeClass("a-icon-radio-inactive").addClass("a-icon-radio-active");b.find(".offer-price").removeClass("a-color-secondary").addClass("a-color-price");d("#rbbContainer .rbbSection .rbbContent").find(".offer-price").removeClass("a-color-secondary").addClass("a-color-price")},animate:function(b){var a=d("#rbbContainer"),c=b.attr("id"),
f,e;a.find(".rbbSection").each(function(a,b){d(b).find(".rbbHeader")[0].id==c?f=d(b):d(b).hasClass("selected")&&(e=d(b))});e.find(".rbbContent").slideUp(500,function(){e.removeClass("selected").addClass("unselected");e.toggleClass("dp-accordion-active",500)});f.find(".rbbContent").slideDown(500);d.browser.msie&&7==parseInt(d.browser.version,10)&&(f.find(".rbbContent").css("display","inline"),setTimeout(function(){f.find(".rbbContent").css("display","block")},505))},oneClickJS:function(){d("#one-click-button, #one-click-button-ubb").click(function(){var b=
"https://"+v.location.host+d("#addToCart").attr("action");d("#addToCart").attr("action",b);return!0})},usedBuyBoxJS:function(){d("#one-click-button-ubb, #usedbuyBox #add-to-cart-button-ubb").click(function(){var b=d("#addToCart"),a=b.attr("action").replace("ref=dp_start-bbf_1_glance","ref=dp_start-ubbf_1_glance");b.attr("action",a);return!0});y.when("a-popover").execute(function(b){var a=d("#usedItemConditionInfoLink"),c=b.create(a,{width:250,position:"triggerBottom",activate:r.capabilities.touch?
"onmousemove":"onclick",closeButton:!1,popoverLabel:"Used condition details",name:"usedItemConditionDetailsPopover",dataStrategy:"preload"});a.mouseleave(function(){c.hide()})})},initialize:function(){d(".rbbHeaderLink").attr("href","javascript:void(0);");d("#rbbContainer .rbbSection.unselected .dp-accordion-inner").hide();d("#rbbContainer .rbbSection .rbbHeader").click(function(b){d(b.target);b=d(this);var a=b.hasClass("rbbHeader")?b:b.parents(".rbbHeader");if(a.parents(".rbbSection").hasClass("selected"))return!1;
b=d("#rbbContainer .rbbSection.selected .rbbHeader").attr("id");var c=a.attr("id");q.updateCssClass(a);d("#abbWrapper [id^=mbb-offeringID-]").each(function(){this.checked=!1});a=d(this);q.animate(a);r.trigger("buybox:accordion:changed",c,b);return!0});q.oneClickJS();q.usedBuyBoxJS()}};return q})});
/* ******** */
(function(a){var c=window.AmazonUIPageJS||window.P,d=c._namespace||c.attributeErrors,b=d?d("DetailPagePromotionalBundleAssets"):c;b.guardFatal?b.guardFatal(a)(b,window):b.execute(function(){a(b,window)})})(function(a,c,d){a.when("A","ready").execute("kbpMobileExpander",function(b){var a=b.$;a(".pb-bundle-section-expander").click(function(b){a(".pb-bundle-mobile-box").removeClass("aok-hidden");a(".pb-bundle-expander-box").addClass("aok-hidden")})})});
/* ******** */
