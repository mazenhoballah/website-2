"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[6991],{74897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=r(74848),a=r(28453),s=r(11470),l=r(19365);const o={},i="Access control",u={id:"guides/load/security",title:"Access control",description:"Table Level Security",source:"@site/docs/0300-guides/200-load/205-security.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/security",permalink:"/starlake/docs/guides/load/security",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/200-load/205-security.mdx",tags:[],version:"current",sidebarPosition:205,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Transform on load",permalink:"/starlake/docs/guides/load/transform"},next:{title:"Expectations",permalink:"/starlake/docs/guides/load/expectations"}},c={},d=[{value:"Table Level Security",id:"table-level-security",level:2},{value:"Row Level Security",id:"row-level-security",level:2},{value:"Column Level Security",id:"column-level-security",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"access-control",children:"Access control"})}),"\n",(0,n.jsx)(t.h2,{id:"table-level-security",children:"Table Level Security"}),"\n",(0,n.jsx)(t.p,{children:"Security on a table is defined by the ACL section of the table definition. The ACL section defines the role and the grants for the role. The role is the permission that is granted to the grants. The grants can be users, groups or service accounts."}),"\n",(0,n.jsx)(t.p,{children:"Below is an example of the ACL section of a table definition."}),"\n","\n",(0,n.jsxs)(s.A,{children:[(0,n.jsxs)(l.A,{value:"bigquery",label:"BigQuery",children:[(0,n.jsx)(t.p,{children:"BigQuery Example"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:"{3-8}",children:"table:\n    ...\n    acl:\n        - role: role/bigQueryViewer\n          grants:\n            - user:user@starlake.ai\n            - group:goup@starlake.ai\n            - serviceAccount:service@gserviceaccount.google.com\n"})})]}),(0,n.jsx)(l.A,{value:"spark",label:"Spark",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml{3-8}",children:"table:\n    ...\n    acl:\n        - role: SELECT\n          grants:\n            - user@starlake.ai\n            - group\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"row-level-security",children:"Row Level Security"}),"\n",(0,n.jsx)(t.p,{children:"You may also want to restrict access to specific rows in a table.\nThis is done by defining a row level security policy.\nThe policy is defined by a SQL expression that is evaluated for each row in the table.\nIf the expression evaluates to true, the row is returned. If the expression evaluates to false, the row is not returned."}),"\n",(0,n.jsx)(t.p,{children:"Below is an example of a row level security policy."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'table:\n    ...\n    acl:\n        - role: SELECT\n          grants:\n            - user@starlake.ai\n            - group\n    rls:\n      - name: "USA only"\n        predicate: "country = \'USA\'"\n        grants:\n          - "group:mygroup"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"column-level-security",children:"Column Level Security"}),"\n",(0,n.jsx)(t.p,{children:"You may also want to restrict access to specific columns in a table."}),"\n",(0,n.jsx)(t.p,{children:"This is done by defining a column level security policy."}),"\n",(0,n.jsx)(t.p,{children:"This feature is supported on BigQuery only and makes use of access policies to restrict access to specific columns in a table."}),"\n",(0,n.jsx)(t.p,{children:"Below is an example of a column level security policy."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'table:\n    ...\n    acl:\n        - role: SELECT\n          grants:\n            - user@starlake.ai\n            - group\n    rls:\n      - name: "USA only"\n        predicate: "country = \'USA\'"\n        grants:\n          - "group:mygroup"\n    attributes:\n        - name: "code0"\n          accessPolicy: PII\n          type: "string"\n    ...\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(18215),s=r(23104),l=r(56347),o=r(205),i=r(57485),u=r(31682),c=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),a=o[r].value;a!==n&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);