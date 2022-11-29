"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3282],{9613:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),v=a,y=d["".concat(c,".").concat(v)]||d[v]||u[v]||o;return r?n.createElement(y,l(l({ref:t},p),{},{components:r})):n.createElement(y,l({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(4250),a=(r(9496),r(9613));const o={title:"Events"},l=void 0,i={unversionedId:"ox_core/Player/Client/events",id:"ox_core/Player/Client/events",title:"Events",description:"Client events",source:"@site/docs/ox_core/Player/Client/events.md",sourceDirName:"ox_core/Player/Client",slug:"/ox_core/Player/Client/events",permalink:"/docs/ox_core/Player/Client/events",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_core/Player/Client/events.md",tags:[],version:"current",lastUpdatedAt:1669702970,formattedLastUpdatedAt:"Nov 29, 2022",frontMatter:{title:"Events"},sidebar:"ox_core",previous:{title:"Callbacks",permalink:"/docs/ox_core/Player/Client/callbacks"},next:{title:"Server",permalink:"/docs/ox_core/Player/Server/"}},c={},s=[{value:"Client events",id:"client-events",level:2},{value:"ox:playerLoaded",id:"oxplayerloaded",level:3},{value:"ox:playerLogout",id:"oxplayerlogout",level:3},{value:"ox:statusTick",id:"oxstatustick",level:3},{value:"Networked events",id:"networked-events",level:2},{value:"ox:setGroup",id:"oxsetgroup",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"client-events"},"Client events"),(0,a.kt)("h3",{id:"oxplayerloaded"},"ox:playerLoaded"),(0,a.kt)("p",null,"Triggered once the player has selected a character and spawned."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:playerLoaded', function(data) end)\n")),(0,a.kt)("h3",{id:"oxplayerlogout"},"ox:playerLogout"),(0,a.kt)("p",null,"Triggered when the player enters character selection if they were previously playing a character."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:playerLogout', function() end)\n")),(0,a.kt)("h3",{id:"oxstatustick"},"ox:statusTick"),(0,a.kt)("p",null,"Triggered every 1000ms interval, when status values are updated internally."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"AddEventHandler('ox:statusTick', function(statuses) end)\n")),(0,a.kt)("h2",{id:"networked-events"},"Networked events"),(0,a.kt)("h3",{id:"oxsetgroup"},"ox:setGroup"),(0,a.kt)("p",null,"Triggered when a player's grade in a group is modified on the server with ",(0,a.kt)("inlineCode",{parentName:"p"},"player.setGroup"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('ox:setGroup', function(source, group, grade) end)\n")))}u.isMDXComponent=!0}}]);