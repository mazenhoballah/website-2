"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[6785],{90219:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>o});var i=t(74848),r=t(28453);const n={sidebar_position:210,title:"kafkaload"},d=void 0,a={id:"cli/kafkaload",title:"kafkaload",description:"Synopsis",source:"@site/docs/0800-cli/kafkaload.md",sourceDirName:"0800-cli",slug:"/cli/kafkaload",permalink:"/starlake/docs/cli/kafkaload",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0800-cli/kafkaload.md",tags:[],version:"current",sidebarPosition:210,frontMatter:{sidebar_position:210,title:"kafkaload"},sidebar:"starlakeSidebar",previous:{title:"ingest",permalink:"/starlake/docs/cli/ingest"},next:{title:"lineage",permalink:"/starlake/docs/cli/lineage"}},l={},o=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Batch mode",id:"batch-mode",level:3},{value:"Streaming mode",id:"streaming-mode",level:3},{value:"Parameters",id:"parameters",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"starlake kafkaload [options]"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(s.p,{children:"Two modes are available : The batch mode and the streaming mode."}),"\n",(0,i.jsx)(s.h3,{id:"batch-mode",children:"Batch mode"}),"\n",(0,i.jsxs)(s.p,{children:["In batch mode, you start the kafka (off)loader regurarly and the last consumed offset\nwill be stored in the ",(0,i.jsx)(s.code,{children:"comet_offsets"})," topic config\n(see ",(0,i.jsx)(s.a,{href:"https://github.com/starlake-ai/starlake/blob/master/src/main/resources/reference-kafka.conf#L22",children:"reference-kafka.conf"})," for an example)."]}),"\n",(0,i.jsx)(s.p,{children:"When offloading data from kafka to a file, you may ask to coalesce the result to a specific number of files / partitions.\nIf you ask to coalesce to a single partition, the offloader will store the data in the exact filename you provided in the path\nargument."}),"\n",(0,i.jsxs)(s.p,{children:["The figure below describes the batch offloading process\n",(0,i.jsx)(s.img,{src:t(86949).A+"",width:"669",height:"504"})]}),"\n",(0,i.jsxs)(s.p,{children:["The figure below describes the batch offloading process with ",(0,i.jsx)(s.code,{children:'comet-offsets-mode = "FILE"'}),"\n",(0,i.jsx)(s.img,{src:t(90753).A+"",width:"769",height:"521"})]}),"\n",(0,i.jsx)(s.h3,{id:"streaming-mode",children:"Streaming mode"}),"\n",(0,i.jsx)(s.p,{children:"In this mode, te program keep running and you the comet_offsets topic is not used. The (off)loader will use a consumer group id\nyou specify in the access options of the topic configuration you are dealing with."}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Cardinality"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--config:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Topic Name declared in reference.conf file"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--connectionRef:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Connection to any specific sink"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--format:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Read/Write format eq : parquet, json, csv ... Default to parquet."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--path:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Source file for load and target file for store"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--options:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Options to pass to Spark Reader"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--write-config:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Topic Name declared in reference.conf file"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--write-path:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Source file for load and target file for store"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--write-mode:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"When offload is true, describes how data should be stored on disk. Ignored if offload is false."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--write-options:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Options to pass to Spark Writer"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--write-format:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Streaming format eq. kafka, console ..."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--write-coalesce:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Should we coalesce the resulting dataframe"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--transform:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Any transformation to apply to message before loading / offloading it"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--stream:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Should we use streaming mode ?"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--streaming-trigger:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Once / Continuous / ProcessingTime"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--streaming-trigger-option:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsxs)(s.td,{children:["10 seconds for example. see ",(0,i.jsx)(s.a,{href:"https://spark.apache.org/docs/latest/api/java/org/apache/spark/sql/streaming/Trigger.html#ProcessingTime-java.lang.String-",children:"https://spark.apache.org/docs/latest/api/java/org/apache/spark/sql/streaming/Trigger.html#ProcessingTime-java.lang.String-"})]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--streaming-to-table:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"Table name to sink to"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsxs)(s.td,{children:["--streaming-partition-by:",(0,i.jsx)(s.code,{children:"<value>"})]}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"Optional"})}),(0,i.jsx)(s.td,{children:"List of columns to use for partitioning"})]})]})]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},90753:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/kafka-offload-fs-1b2743b81e76d7adc87e0195e2f8b4b4.png"},86949:(e,s,t)=>{t.d(s,{A:()=>i});const i=t.p+"assets/images/kafka-offload-f33e7634d7aa0e5a6038e74902d5edc7.png"},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>a});var i=t(96540);const r={},n=i.createContext(r);function d(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);