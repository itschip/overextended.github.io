"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2003],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>s});var a=n(9496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,f=d["".concat(u,".").concat(s)]||d[s]||c[s]||r;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(4250),i=(n(9496),n(9613));const r={title:"Creating crafting points"},l=void 0,o={unversionedId:"ox_inventory/Guides/crafting",id:"ox_inventory/Guides/crafting",title:"Creating crafting points",description:"Crafting locations, items and their ingredients are defined in data/crafting.lua.",source:"@site/docs/ox_inventory/Guides/crafting.md",sourceDirName:"ox_inventory/Guides",slug:"/ox_inventory/Guides/crafting",permalink:"/docs/ox_inventory/Guides/crafting",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Guides/crafting.md",tags:[],version:"current",lastUpdatedAt:1670731243,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{title:"Creating crafting points"},sidebar:"ox_inventory",previous:{title:"Guides",permalink:"/docs/ox_inventory/Guides/"},next:{title:"Creating items",permalink:"/docs/ox_inventory/Guides/creatingItems"}},u={},p=[{value:"Crafting definition",id:"crafting-definition",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Crafting locations, items and their ingredients are defined in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/overextended/ox_inventory/blob/main/data/crafting.lua"},"data/crafting.lua"),"."),(0,i.kt)("h2",{id:"crafting-definition"},"Crafting definition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"{\n    items = {\n        {\n            name = 'lockpick',\n            ingredients = {\n            garbage = 3,\n            WEAPON_HAMMER = 0.1\n            },\n            duration = 5000,\n            count = 3,\n            metadata = { durability = 20 }\n        },\n        {\n            name = 'garbage',\n            ingredients = {\n            cola = 1\n            },\n            metadata = { description = 'An empty soda can.', weight = 20, image = 'trash_can' }\n        },\n    },\n    points = {\n        vec3(-1147.083008, -2002.662109, 13.180260),\n        },\n    zones = {\n        {\n            coords = vec3(-1146.2, -2002.05, 13.2),\n            size = vec3(3.8, 1.05, 0.15),\n            distance = 1.5,\n            rotation = 315.0,\n        },\n    },\n    blip = { id = 566, colour = 31, scale = 0.8 },\n},\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"items: ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"name: ",(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},"ingredients: ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Item ingredients can be seen in the item tooltip."),(0,i.kt)("li",{parentName:"ul"},"Key-value pairs of item name and consume count",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"key - Item name."),(0,i.kt)("li",{parentName:"ul"},"value - If 1 or above it's the consume count, if below 1 and above 0 it's the durability consume amount, if\nset to 0 then the item is required but not consumed."))))),(0,i.kt)("li",{parentName:"ul"},"duration: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Crafting duration in milliseconds."))),(0,i.kt)("li",{parentName:"ul"},"count: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Item amount received upon crafting."))),(0,i.kt)("li",{parentName:"ul"},"metadata: ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Metadata applied to the item being crafted."))))),(0,i.kt)("li",{parentName:"ul"},"points: ",(0,i.kt)("inlineCode",{parentName:"li"},"vector3[]"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Interaction locations that will open the crafting inventory."))),(0,i.kt)("li",{parentName:"ul"},"groups: ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Key-value pairs of job name and minimum grade to access the crafting location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'{["police"] = 0, ["ambulance"] = 2}')))),(0,i.kt)("li",{parentName:"ul"},"zones: ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ox_lib targeting zones used for ox_target."),(0,i.kt)("li",{parentName:"ul"},"coords: ",(0,i.kt)("inlineCode",{parentName:"li"},"vector3")),(0,i.kt)("li",{parentName:"ul"},"size: ",(0,i.kt)("inlineCode",{parentName:"li"},"vector3")),(0,i.kt)("li",{parentName:"ul"},"distance: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},"rotation: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")))),(0,i.kt)("li",{parentName:"ul"},"blip: ",(0,i.kt)("inlineCode",{parentName:"li"},"table"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"id: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Blip sprite number."))),(0,i.kt)("li",{parentName:"ul"},"colour: ",(0,i.kt)("inlineCode",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},"scale: ",(0,i.kt)("inlineCode",{parentName:"li"},"number"))))))}c.isMDXComponent=!0}}]);