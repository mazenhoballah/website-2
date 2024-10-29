"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[3921],{44491:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=s(74848),n=s(28453);const r={sidebar_position:300,title:"stage"},a=void 0,o={id:"cli/stage",title:"stage",description:"Synopsis",source:"@site/docs/0800-cli/stage.md",sourceDirName:"0800-cli",slug:"/cli/stage",permalink:"/starlake/docs/cli/stage",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0800-cli/stage.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{sidebar_position:300,title:"stage"},sidebar:"starlakeSidebar",previous:{title:"site",permalink:"/starlake/docs/cli/site"},next:{title:"table-dependencies",permalink:"/starlake/docs/cli/table-dependencies"}},d={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2}];function l(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"starlake stage [options]"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(t.p,{children:"Move the files from the landing area to the pending area."}),"\n",(0,i.jsx)(t.p,{children:"Files are loaded one domain at a time."}),"\n",(0,i.jsx)(t.p,{children:'Each domain has its own directory and is specified in the "directory" key of Domain YML file\ncompressed files are uncompressed if a corresponding ack file exist.'}),"\n",(0,i.jsx)(t.p,{children:"Compressed files are recognized by their extension which should be one of .tgz, .zip, .gz.\nraw file should also have a corresponding ack file\nbefore moving the files to the pending area, the ack files are deleted."}),"\n",(0,i.jsx)(t.p,{children:'To import files without ack specify an empty "ack" key (aka ack:"") in the domain YML file.'}),"\n",(0,i.jsx)(t.p,{children:'"ack" is the default ack extension searched for but you may specify a different one in the domain YML file.'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"comet import\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Cardinality"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["--domains:",(0,i.jsx)(t.code,{children:"domain1,domain2..."})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Optional"})}),(0,i.jsx)(t.td,{children:"Domains to stage"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["--options:",(0,i.jsx)(t.code,{children:"k1=v1,k2=v2..."})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.em,{children:"Optional, Unbounded"})}),(0,i.jsx)(t.td,{children:"Stage arguments to be used as substitutions"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var i=s(96540);const n={},r=i.createContext(n);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);