(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],o(n),o(r))}function a(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=i.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=a(n[0]);r!==n[0]&&(t[n[0]]=r)}n=i.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),l=0;l<o.length;l++){var c=o[l];e=e.replace(new RegExp(c,"g"),t[c])}return e}(e)}}},105:function(e,t,n){"use strict";var r=n(93),i=n(97),o=n(87),a=o.b.div.withConfig({displayName:"Title"})(["color:white;text-align:center;font-family:Lato;font-size:36px;font-weight:300;letter-spacing:0.04em;padding-top:120px;margin-bottom:75px;"]),l=(n(91),n(32)),c=n.n(l),p=n(1),s=n.n(p),u=n(88),d=n.n(u),f=Object(o.b)(i.a).withConfig({displayName:"SubThemeCard__Container"})(["color:white;padding:1vw;font-family:'Lato';text-align:center;"]),m=o.b.div.withConfig({displayName:"SubThemeCard__Title"})(['position:relative;font-size:20pt;line-height:26px;font-weight:bold;padding-bottom:1vh;&:after{content:"\0a0\0a0";position:absolute;bottom:-.25vh;left:calc(50% - 50px);width:100px;height:1px;border-bottom:2px solid #D83C46;}']),g=o.b.div.withConfig({displayName:"SubThemeCard__Description"})(["font-family:'Tisa Pro';font-size:16pt;padding-top:1vh;padding-bottom:1vh;"]),h=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.name,n=e.description?e.description.value:"",r="/subthemes/"+d()(t);return s.a.createElement(f,{to:r},s.a.createElement(m,null,t),s.a.createElement(g,{dangerouslySetInnerHTML:{__html:n}}))},t}(s.a.Component),b="linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(1,1,2,0.64) 25%,rgba(1,1,2,1) 100%)",y=o.b.div.withConfig({displayName:"ThemeCard__Container"})(["border-radius:45;width:90%;margin-left:5%;margin-bottom:60px;margin-right:0;display:inline-block;vertical-align:top;position:relative;overflow:hidden;box-shadow:rgba(39,39,39,0.58) 0px 3px 57px 0px;user-select:none;border-radius:60px;color:white;background-size:cover !important;background-attachment:fixed;transition:all .5s ease;&:hover{background-size:125% auto !important;transition:all .5s ease;background:",";background:",";}background:",";background:",";background:",";height:",";"],function(e){return e.background?"url("+e.background+") center no-repeat":"none"},function(e){return e.background?b+", url("+e.background+") center no-repeat":"none"},function(e){return e.background?"url("+e.background+") center no-repeat":"none"},function(e){return e.backgrounGrayscale?"url("+e.backgrounGrayscale+") center no-repeat":"none"},function(e){return e.backgrounGrayscale?b+", url("+e.backgrounGrayscale+") center no-repeat":"none"},function(e){return e.open?"100vh":"60vh"}),x=o.b.div.withConfig({displayName:"ThemeCard__Title"})(["font-family:Lato;font-size:48px;line-height:1;text-align:left;letter-spacing:0.011em;padding-top:30vh;padding-bottom:5vh;text-align:center;"]),v=o.b.div.withConfig({displayName:"ThemeCard__Description"})(["font-family:Lato;text-align:center;padding-left:10vw;padding-right:10vw;"]),w=o.b.div.withConfig({displayName:"ThemeCard__Chevron"})(["cursor:pointer;position:absolute;right:1vw;top:30vh;font-family:'Lato';font-size:100px;color:white;transform:",";"],function(e){return e.open?"rotate(90deg)":"none"}),k=o.b.div.withConfig({displayName:"ThemeCard__SubThemes"})(["display:grid;grid-template-columns:30vw 30vw 30vw;"]),C=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={open:!1},n}return c()(t,e),t.prototype.render=function(){var e=this,t=this.state.open,n=this.props.data,r=n.relationships.field_theme_image&&n.relationships.field_theme_image.localFile.publicURL,i="";try{i=n.relationships.field_theme_image.localFile.childImageSharp.grayscale.src}catch(e){i=r}var o=n.description&&n.description.processed;"undefined"!=typeof window&&((new window.Image).src=r);var a=n.relationships.subthemes;return s.a.createElement(y,{open:t,background:r,backgrounGrayscale:i,onClick:function(){return e.setState({open:!t})}},s.a.createElement(x,null,n.name),s.a.createElement(v,{dangerouslySetInnerHTML:{__html:o}}),s.a.createElement(w,{open:t},"〉"),s.a.createElement(k,null,t&&a.map(function(e,t){return s.a.createElement(h,{key:t,data:e})})))},t}(s.a.Component),_=n(101),E=n(94),N=n(96),T=n(89),j=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){return s.a.createElement(T.a,{to:"/"+this.props.slug+"s/"+d()(this.props.title),className:this.props.className,style:this.props.style},this.props.type?s.a.createElement("h4",null,this.props.type):null,s.a.createElement("div",{className:"RCimage",style:{backgroundImage:"url("+this.props.imgSrc+")",backgroundSize:"cover",backgroundPosition:"center"}}),s.a.createElement("p",null,this.props.title),this.props.children)},t}(s.a.Component),z=Object(o.b)(j).withConfig({displayName:"rccard__StyledRCCard"})(["display:inline-block;height:auto;flex:"," "," ",'px;border:solid thin lightgrey;background-color:#f7f7f7;-webkit-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);-moz-box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);box-shadow:0px 2px 15px 0px rgba(179,179,179,0.38);margin-bottom:20px;font-family:"ff-tisa-web-pro";vertical-align:top;text-align:left;margin-left:10px;margin-right:10px;max-width:',"px color:inherit;text-decoration:inherit;"," "," ",""],100,100,350,350*.7,function(e){return e.background&&Object(o.a)(["background-image:url('","');background-size:cover;"],e.background)},function(e){return"Article"===e.type&&Object(o.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)},function(e){return"QuickFact"===e.type&&Object(o.a)(["flex:"," "," ","px;max-width:","px;"],150,150,525,350*.7*1.5)}),O=o.b.div.withConfig({displayName:"Filter__Row"})(["display:flex;flex-direction:row;padding:10px;color:",";"],function(e){return e.color?e.color:"white"}),F=o.b.div.withConfig({displayName:"Filter__Element"})(["cursor:pointer;margin-left:10px;font-weight:",";"],function(e){return e.selected?"bold":"normal"}),L=o.b.div.withConfig({displayName:"Filter__Title"})(["text-decoration:underline;"]),R=function(e){function t(){return e.apply(this,arguments)||this}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.selected,n=e.onSelected,r=e.color;return s.a.createElement(O,{color:r},"Sort by: ",s.a.createElement(F,{selected:"all"===t,onClick:function(){return n("all")}},"All"),s.a.createElement(F,{selected:"1"===t,onClick:function(){return n("1")}},s.a.createElement(L,null,"Episode One:")," The Difference Between Us"),s.a.createElement(F,{selected:"2"===t,onClick:function(){return n("2")}},s.a.createElement(L,null,"Episode Two:")," The Story We Tell"),s.a.createElement(F,{selected:"3"===t,onClick:function(){return n("3")}},s.a.createElement(L,null,"Episode Three:")," The House We Live In"))},t}(p.Component),I=n(92);n.d(t,"d",function(){return r.a}),n.d(t,"e",function(){return i.a}),n.d(t,"k",function(){return a}),n.d(t,"j",function(){return C}),n.d(t,"i",function(){return _.a}),n.d(t,"a",function(){return E.a}),n.d(t,"b",function(){return N.a}),n.d(t,"h",function(){return z}),n.d(t,"c",function(){return R}),n.d(t,"f",function(){return I.a}),n.d(t,"g",function(){return I.b})},253:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return C}),n(102),n(86),n(91),n(71);var r=n(32),i=n.n(r),o=n(1),a=n.n(o),l=n(88),c=n.n(l),p=n(105),s=n(87),u=n(107),d=n(98),f=s.b.div.withConfig({displayName:"subtheme__Container"})(["padding-left:50px;padding-right:50px;padding-top:200px;background:",";min-height:100vh;"],u.a),m=s.b.div.withConfig({displayName:"subtheme__Main"})(["background-size:cover !important;text-align:center;border-radius:3px;color:white;background:",";background:",";position:relative;z-index:3;"],function(e){return e.background?"url("+e.background+") center no-repeat":"none"},function(e){return e.background?"linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0.15)), url("+e.background+") center no-repeat":"none"}),g=s.b.div.withConfig({displayName:"subtheme__Header"})(["min-height:340px;display:flex;flex-direction:column;justify-content:center;"]),h=s.b.div.withConfig({displayName:"subtheme__Title"})(["color:",";font-family:Lato;font-size:42pt;font-weight:bold;line-height:60px;margin-bottom:2vh;"],u.d),b=Object(s.b)(p.e).withConfig({displayName:"subtheme__TopLink"})(["position:absolute;top:10px;left:10px;"]),y=s.b.div.withConfig({displayName:"subtheme__Description"})(["padding-left:10vw;padding-right:10vw;color:#DBDBDB;"]),x=s.b.div.withConfig({displayName:"subtheme__GrandTitle"})(["position:fixed;top:2vh;width:100vw;font-family:Tisa-Pro;font-size:24pt;text-align:center;line-height:30px;letter-spacing:36px;color:",";z-index:2;"],u.b),v=s.b.div.withConfig({displayName:"subtheme__Menu"})(["display:flex;flex-direction:row;justify-content:center;align-items:center;position:fixed;top:10vh;width:100vw;z-index:2;font-family:Lato;font-size:14pt;line-height 30px;text-transform:uppercase;"]),w=Object(s.b)(p.e).withConfig({displayName:"subtheme__MenuLink"})(["width:120px;text-align:center;"]),k=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.body.style.backgroundColor=u.a},n.render=function(){var e=this.props,t=e.data,n=e.pageContext,r=n.field_theme_image,i=(n.theme,t.taxonomyTermSubthemes),o=i,l=d.parse(this.props.location.search),s=function(e){var t=e.name?e.name.split("-"):[];return encodeURIComponent(c()(t[t.length-1]))},u=r&&r.localFile.publicURL,k=o.name,C=i.description?i.description.processed:"<br/>";return a.a.createElement(f,null,a.a.createElement(x,null,"RACE: THE POWER OF AN ILLUSION"),a.a.createElement(v,null,[{title:"overview",link:"/the-film"},{title:"themes",link:"/"},{title:"articles",link:"/articles"},{title:"interviews",link:"/interviews"},{title:"q&a",link:"/qa"},{title:"clips",link:"/clips"},{title:"teaching",link:"/teaching"},{title:"about",link:"/about"}].map(function(e,t){var n=e.title,r=e.link;return a.a.createElement(w,{to:r,key:t},n)})),a.a.createElement(m,{background:u},a.a.createElement(g,null,a.a.createElement(b,{to:"/"},"〈   All themes"),a.a.createElement(h,null,k),a.a.createElement(y,{dangerouslySetInnerHTML:{__html:C}})),a.a.createElement(p.i,{data:o,key:s(o),name:s(o),filter:l[s(o)],queryParams:l})))},t}(a.a.Component);t.default=k;var C="2809860765"},94:function(e,t,n){"use strict";n(102);var r=n(1),i=n.n(r),o=n(87),a=n(89),l=n(88),c=n.n(l),p=o.b.div.withConfig({displayName:"allClips__ClipCard"})(["width:300px;background-color:#292929;color:white;display:inline-block;vertical-align:top;margin-right:30px;margin-bottom:30px;transition:all .3s;border-radius:6px;&:hover{transition:all .3s;}cursor:pointer;"]),s=o.b.div.withConfig({displayName:"allClips__ClipCaption"})(["font-family:'Lato';font-size:14px;line-height:1.5;font-weight:300;letter-spacing:0.04em;padding:15px 30px 30px 30px;"]),u=o.b.div.withConfig({displayName:"allClips__ClipPoster"})(["height:200px;width:100%;background-color:red;background-size:cover;background-position:center;background-image:",";"],function(e){return e.background?"url("+e.background+")":"none"}),d=function(e){var t=e.clip,n=e.link;return i.a.createElement(p,null,n?i.a.createElement(a.a,{style:{color:"inherit",textDecoration:"none"},to:"/clips/"+c()(t.title)},i.a.createElement(u,{background:t.relationships.field_poster_image&&t.relationships.field_poster_image.localFile.publicURL}),i.a.createElement(s,null,t.title)):i.a.createElement("iframe",{title:t.title,src:(t.field_external_video_url&&t.field_external_video_url.uri)+"?title=0&byline=0&portrait=0",frameborder:"0",webkitallowfullscreen:!0,mozallowfullscreen:!0,allowfullscreen:!0}))};t.a=function(e){var t=e.data,n=e.selected,r=t.allNodeClip.edges;return n&&(r=r.filter(function(e){return"all"===n||e.node.field_episode===parseInt(n)})),i.a.createElement("div",{style:{padding:"0 30px"}},r.map(function(e,t){return i.a.createElement(d,{key:"clip-"+t,clip:e.node,link:!0})}))}},98:function(e,t,n){"use strict";const r=n(99),i=n(100);function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function a(e,t){return t.decode?i(e):e}function l(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function c(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const i of e.split("&")){let[e,o]=i.replace(/\+/g," ").split("=");o=void 0===o?null:a(o,t),n(a(e,t),o,r)}return Object.keys(r).sort().reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=l,t.parse=c,t.stringify=((e,t)=>{!1===(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=(()=>{}));const n=function(e){switch(e.arrayFormat){case"index":return(t,n,r)=>null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("");case"bracket":return(t,n)=>null===n?[o(t,e),"[]"].join(""):[o(t,e),"[]=",o(n,e)].join("");default:return(t,n)=>null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}(t);return e?Object.keys(e).sort(t.sort).map(r=>{const i=e[r];if(void 0===i)return"";if(null===i)return o(r,t);if(Array.isArray(i)){const e=[];for(const t of i.slice())void 0!==t&&e.push(n(r,t,e.length));return e.join("&")}return o(r,t)+"="+o(i,t)}).filter(e=>e.length>0).join("&"):""}),t.parseUrl=((e,t)=>({url:e.split("?")[0]||"",query:c(l(e),t)}))},99:function(e,t,n){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))}}]);
//# sourceMappingURL=component---src-templates-subtheme-js-fe1024856d3855f2c455.js.map