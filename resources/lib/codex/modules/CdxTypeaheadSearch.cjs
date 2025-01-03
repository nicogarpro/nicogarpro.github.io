"use strict";var M=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var _=(e,o)=>{var r={};for(var s in e)O.call(e,s)&&o.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&M)for(var s of M(e))o.indexOf(s)<0&&W.call(e,s)&&(r[s]=e[s]);return r};const t=require("vue"),N=require("./Icon.js"),G=require("./CdxMenu.cjs"),j=require("./CdxSearchInput.cjs"),J=require("./useGeneratedId.cjs"),X=require("./useSplitAttributes.cjs"),Y=require("./useI18n.cjs"),h=require("./constants.js"),Z=require("./_plugin-vue_export-helper.js"),ee=t.defineComponent({name:"CdxTypeaheadSearch",components:{CdxIcon:N.CdxIcon,CdxMenu:G,CdxSearchInput:j},inheritAttrs:!1,props:{id:{type:String,required:!0},formAction:{type:String,required:!0},searchResults:{type:Array,required:!0},useButton:{type:Boolean,default:!1},buttonLabel:{type:String,default:""},initialInputValue:{type:String,default:""},searchFooterUrl:{type:String,default:""},debounceInterval:{type:Number,default:h.DebounceInterval},highlightQuery:{type:Boolean,default:!1},showThumbnail:{type:Boolean,default:!1},autoExpandWidth:{type:Boolean,default:!1},visibleItemLimit:{type:Number,default:null}},emits:["input","search-result-click","submit","load-more"],setup(e,{attrs:o,emit:r,slots:s}){const I=t.ref(),i=t.ref(),S=J("typeahead-search-menu"),C=Y("cdx-typeahead-search-search-results-label","Search results"),u=t.ref(!1),l=t.ref(!1),v=t.ref(!1),g=t.ref(!1),p=t.ref(e.initialInputValue),m=t.ref(""),x=t.computed(()=>{var a,n;return(n=(a=i.value)==null?void 0:a.getHighlightedMenuItem())==null?void 0:n.id}),y=t.ref(null),F=t.computed(()=>({"cdx-typeahead-search__menu-message--has-thumbnail":e.showThumbnail})),d=t.computed(()=>e.searchResults.find(a=>a.value===y.value)),q=t.computed(()=>e.searchFooterUrl?{value:h.MenuFooterValue,url:e.searchFooterUrl}:void 0),U=t.computed(()=>({"cdx-typeahead-search--show-thumbnail":e.showThumbnail,"cdx-typeahead-search--expanded":u.value,"cdx-typeahead-search--auto-expand-width":e.showThumbnail&&e.autoExpandWidth})),{rootClasses:B,rootStyle:E,otherAttrs:T}=X(o,U);function $(a){return a}const K=t.computed(()=>({visibleItemLimit:e.visibleItemLimit,showThumbnail:e.showThumbnail,boldLabel:!0,hideDescriptionOverflow:!0}));let b,f;function V(a,n=!1){d.value&&d.value.label!==a&&d.value.value!==a&&(y.value=null),f!==void 0&&(clearTimeout(f),f=void 0),a===""?u.value=!1:(l.value=!0,s["search-results-pending"]&&(f=setTimeout(()=>{g.value&&(u.value=!0),v.value=!0},h.PendingDelay))),b!==void 0&&(clearTimeout(b),b=void 0);const c=()=>{r("input",a)};n?c():b=setTimeout(()=>{c()},e.debounceInterval)}function A(a){var n;if(a===h.MenuFooterValue){y.value=null,p.value=m.value;return}y.value=a,a!==null&&(p.value=d.value?(n=d.value.label)!=null?n:String(d.value.value):"")}function L(){g.value=!0,(m.value||v.value)&&(u.value=!0)}function Q(){g.value=!1,u.value=!1}function R(a){const k=a,{id:n}=k,c=_(k,["id"]);if(c.value===h.MenuFooterValue){r("search-result-click",{searchResult:null,index:e.searchResults.length,numberOfResults:e.searchResults.length});return}w(c)}function w(a){const n={searchResult:a,index:e.searchResults.findIndex(c=>c.value===a.value),numberOfResults:e.searchResults.length};r("search-result-click",n)}function D(a){var n;if(a.value===h.MenuFooterValue){p.value=m.value;return}p.value=a.value?(n=a.label)!=null?n:String(a.value):""}function P(a){var n;u.value=!1,(n=i.value)==null||n.clearActive(),R(a)}function z(a){if(d.value)w(d.value),a.stopPropagation(),window.location.assign(d.value.url),a.preventDefault();else{const n={searchResult:null,index:-1,numberOfResults:e.searchResults.length};r("submit",n)}}function H(a){if(!i.value||!m.value||a.key===" ")return;const n=i.value.getHighlightedMenuItem(),c=i.value.getHighlightedViaKeyboard();switch(a.key){case"Enter":n&&(n.value===h.MenuFooterValue&&c?window.location.assign(e.searchFooterUrl):i.value.delegateKeyNavigation(a,{prevent:!1})),u.value=!1;break;case"Tab":u.value=!1;break;default:i.value.delegateKeyNavigation(a);break}}return t.onMounted(()=>{e.initialInputValue&&V(e.initialInputValue,!0)}),t.watch(t.toRef(e,"searchResults"),()=>{m.value=p.value.trim(),g.value&&l.value&&m.value.length>0&&(u.value=!0),f!==void 0&&(clearTimeout(f),f=void 0),l.value=!1,v.value=!1}),{form:I,menu:i,menuId:S,highlightedId:x,selection:y,menuMessageClass:F,footer:q,asSearchResult:$,inputValue:p,searchQuery:m,expanded:u,showPending:v,rootClasses:B,rootStyle:E,otherAttrs:T,menuConfig:K,onUpdateInputValue:V,onUpdateMenuSelection:A,onFocus:L,onBlur:Q,onSearchResultClick:R,onSearchResultKeyboardNavigation:D,onSearchFooterClick:P,onSubmit:z,onKeydown:H,MenuFooterValue:h.MenuFooterValue,articleIcon:N.S3,translatedSearchResultsLabel:C}},methods:{focus(){this.$refs.searchInput.focus()}}}),te=["id","action"],ae={class:"cdx-typeahead-search__menu-message__text"},ne={class:"cdx-typeahead-search__menu-message__text"},le=["href","onClickCapture"],oe={class:"cdx-menu-item__text cdx-typeahead-search__search-footer__text"},se={class:"cdx-typeahead-search__search-footer__query"};function ue(e,o,r,s,I,i){const S=t.resolveComponent("cdx-icon"),C=t.resolveComponent("cdx-menu"),u=t.resolveComponent("cdx-search-input");return t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["cdx-typeahead-search",e.rootClasses]),style:t.normalizeStyle(e.rootStyle)},[t.createElementVNode("form",{id:e.id,ref:"form",class:"cdx-typeahead-search__form",action:e.formAction,onSubmit:o[4]||(o[4]=(...l)=>e.onSubmit&&e.onSubmit(...l))},[t.createVNode(u,t.mergeProps({ref:"searchInput",modelValue:e.inputValue,"onUpdate:modelValue":o[3]||(o[3]=l=>e.inputValue=l),"button-label":e.buttonLabel,"use-button":e.useButton},e.otherAttrs,{class:"cdx-typeahead-search__input",name:"search",role:"combobox",autocomplete:"off","aria-autocomplete":"list","aria-controls":e.menuId,"aria-expanded":e.expanded,"aria-activedescendant":e.highlightedId,"onUpdate:modelValue":e.onUpdateInputValue,onFocus:e.onFocus,onBlur:e.onBlur,onKeydown:e.onKeydown}),{default:t.withCtx(()=>[t.createVNode(C,t.mergeProps({id:e.menuId,ref:"menu",expanded:e.expanded,"onUpdate:expanded":o[0]||(o[0]=l=>e.expanded=l),class:"cdx-typeahead-search__menu","show-pending":e.showPending,selected:e.selection,"menu-items":e.searchResults,footer:e.footer,"search-query":e.highlightQuery?e.searchQuery:"","show-no-results-slot":e.searchQuery.length>0&&e.searchResults.length===0&&e.$slots["search-no-results-text"]&&e.$slots["search-no-results-text"]().length>0},e.menuConfig,{"aria-label":e.translatedSearchResultsLabel,"onUpdate:selected":e.onUpdateMenuSelection,onMenuItemClick:o[1]||(o[1]=l=>e.onSearchResultClick(e.asSearchResult(l))),onMenuItemKeyboardNavigation:e.onSearchResultKeyboardNavigation,onLoadMore:o[2]||(o[2]=l=>e.$emit("load-more"))}),{pending:t.withCtx(()=>[t.createElementVNode("div",{class:t.normalizeClass(["cdx-menu-item__content cdx-typeahead-search__menu-message",e.menuMessageClass])},[t.createElementVNode("span",ae,[t.renderSlot(e.$slots,"search-results-pending")])],2)]),"no-results":t.withCtx(()=>[t.createElementVNode("div",{class:t.normalizeClass(["cdx-menu-item__content cdx-typeahead-search__menu-message",e.menuMessageClass])},[t.createElementVNode("span",ne,[t.renderSlot(e.$slots,"search-no-results-text")])],2)]),default:t.withCtx(({menuItem:l,active:v})=>[l.value===e.MenuFooterValue?(t.openBlock(),t.createElementBlock("a",{key:0,class:t.normalizeClass(["cdx-menu-item__content cdx-typeahead-search__search-footer",{"cdx-typeahead-search__search-footer__active":v}]),href:e.asSearchResult(l).url,onClickCapture:t.withModifiers(g=>e.onSearchFooterClick(e.asSearchResult(l)),["stop"])},[t.createVNode(S,{class:"cdx-menu-item__thumbnail cdx-typeahead-search__search-footer__icon",icon:e.articleIcon},null,8,["icon"]),t.createElementVNode("span",oe,[t.renderSlot(e.$slots,"search-footer-text",{searchQuery:e.searchQuery},()=>[t.createElementVNode("strong",se,t.toDisplayString(e.searchQuery),1)])])],42,le)):t.createCommentVNode("v-if",!0)]),_:3},16,["id","expanded","show-pending","selected","menu-items","footer","search-query","show-no-results-slot","aria-label","onUpdate:selected","onMenuItemKeyboardNavigation"])]),_:3},16,["modelValue","button-label","use-button","aria-controls","aria-expanded","aria-activedescendant","onUpdate:modelValue","onFocus","onBlur","onKeydown"]),t.renderSlot(e.$slots,"default")],40,te)],6)}const re=Z._export_sfc(ee,[["render",ue]]);module.exports=re;