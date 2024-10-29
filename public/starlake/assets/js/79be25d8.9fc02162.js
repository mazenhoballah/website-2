"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[4175],{91342:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(74848),t=a(28453),o=a(11470),s=a(19365);const l={},i="On Premise Hadoop Cluster",c={id:"configuration/platforms/hadoop",title:"On Premise Hadoop Cluster",description:"Running on Hadoop is similar to running on a local filesystem, we just need to set the correct filesystem",source:"@site/docs/0500-configuration/0700-platforms/060.hadoop.mdx",sourceDirName:"0500-configuration/0700-platforms",slug:"/configuration/platforms/hadoop",permalink:"/starlake/docs/configuration/platforms/hadoop",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0500-configuration/0700-platforms/060.hadoop.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Local filesystem",permalink:"/starlake/docs/configuration/platforms/file"},next:{title:"CLI",permalink:"/starlake/docs/category/cli"}},u={},d=[];function p(e){const r={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"on-premise-hadoop-cluster",children:"On Premise Hadoop Cluster"})}),"\n","\n",(0,n.jsxs)(r.p,{children:["Running on Hadoop is similar to running on a ",(0,n.jsx)(r.a,{href:"file",children:"local filesystem"}),", we just need to set the correct filesystem\nand add the ",(0,n.jsx)(r.code,{children:"jackson-dataformat-yaml"})," library to the classpath on HDP:"]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(s.A,{value:"spark3",label:"Spark 3",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-shell",metastring:'title="HDP example"',children:"spark-submit --deploy-mode cluster --master yarn \\\n--jars hdfs://my-namespace/libraires/jackson-dataformat-yaml-2.12.3.jar \\\n--conf spark.yarn.appMasterEnv.SL_ROOT=/user/userguide \\\n--conf spark.yarn.appMasterEnv.SL_FS=hdfs://my-namespace \\\n--class ai.starlake.job.Main \\\nhdfs://my-namespace/libraires/comet-spark2_2.12-0.2.8-assembly.jar import\n"})})}),(0,n.jsx)(s.A,{value:"oozie",label:"Oozie",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-xml",metastring:'title="HDP example"',children:'<action name="ImportToHDFS" cred="hdfs_creds">\n    <spark xmlns="uri:oozie:spark-action:0.2">\n        <job-tracker>${jobTracker}</job-tracker>\n        <name-node>${nameNode}</name-node>\n        <job-xml>${commonRoot}/conf/hbase-site.xml</job-xml>\n        <master>yarn-cluster</master>\n        <name>ai.starlake.job.Main</name>\n        <class>ai.starlake.job.Main</class>\n        <jar>hdfs://${appRoot}/libraries/comet-spark2_2.12-0.2.8-assembly.jar</jar>\n        <spark-opts>\n            --num-executors 6\n            --executor-cores 3 --executor-memory 2g --driver-memory 5g\n            --queue ${queueName}\n            --driver-java-options "-Djava.security.auth.login.config=./jaas.conf -Dconfig.file=./application.conf"\n            --conf spark.yarn.security.tokens.hive.enabled=false\n            --conf spark.history.kerberos.enabled=true\n            --conf spark.history.kerberos.keytab="${sparkHistoryKerberosKeytab}"\n            --conf spark.history.kerberos.principal="${sparkHistoryKerberosPrincipal}"\n            --conf spark.yarn.historyServer.address="${sparkYarnHistoryServerAddress}"\n            --conf spark.history.ui.port="${sparkYarnHistoryServerUiPort}"\n            --conf spark.history.fs.logDirectory="${sparkHistoryFsLogDirectory}"\n            --conf spark.eventLog.dir="${sparkHistoryFsLogDirectory}"\n            --conf spark.eventLog.enabled=true\n            --conf spark.executor.extraJavaOptions="-Djava.security.auth.login.config=./jaas.conf"\n            --conf spark.ssl.enabledAlgorithms=TLS_RSA_WITH_AES_256_CBC_SHA\n            --jars hdfs://${appRoot}/libraries/jackson-dataformat-yaml-2.6.7.jar\n        </spark-opts>\n        <arg>import</arg>\n        <file>${nameNode}/${appRoot}/config/application.conf</file>\n        <file>${nameNode}/user/${userName}/${userKeytab}</file>\n        <file>${nameNode}/${commonRoot}/conf/hive-site.xml</file>\n        <file>${nameNode}/${appRoot}/config/jaas.conf</file>\n        <file>${nameNode}/${commonRoot}/conf/hbase-site.xml</file>\n        <file>${nameNode}/${appRoot}/config/metrics.properties</file>\n        <file>${nameNode}/${commonRoot}/kerberos/krb5.conf</file>\n    </spark>\n    <ok to="..." />\n    <error to="..." />\n</action>\n'})})})]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,a)=>{a.d(r,{A:()=>s});a(96540);var n=a(18215);const t={tabItem:"tabItem_Ymn6"};var o=a(74848);function s(e){let{children:r,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,s),hidden:a,children:r})}},11470:(e,r,a)=>{a.d(r,{A:()=>x});var n=a(96540),t=a(18215),o=a(23104),s=a(56347),l=a(205),i=a(57485),c=a(31682),u=a(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:a}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:a,attributes:n,default:t}}=e;return{value:r,label:a,attributes:n,default:t}}))}(a);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,a])}function m(e){let{value:r,tabValues:a}=e;return a.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:a}=e;const t=(0,s.W6)(),o=function(e){let{queryString:r=!1,groupId:a}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:r,groupId:a});return[(0,i.aZ)(o),(0,n.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(t.location.search);r.set(o,e),t.replace({...t.location,search:r.toString()})}),[o,t])]}function h(e){const{defaultValue:r,queryString:a=!1,groupId:t}=e,o=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[c,d]=f({queryString:a,groupId:t}),[h,b]=function(e){let{groupId:r}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(r),[t,o]=(0,u.Dv)(a);return[t,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:t}),k=(()=>{const e=c??h;return m({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{k&&i(k)}),[k]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=a(92303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(74848);function g(e){let{className:r,block:a,selectedValue:n,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const r=e.currentTarget,a=i.indexOf(r),t=l[a].value;t!==n&&(c(r),s(t))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;r=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;r=i[a]??i[i.length-1];break}}r?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},r),children:l.map((e=>{let{value:r,label:a,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,t.A)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":n===r}),children:a??r},r)}))})}function v(e){let{lazy:r,children:a,selectedValue:o}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===o));return e?(0,n.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==o})))})}function j(e){const r=h(e);return(0,y.jsxs)("div",{className:(0,t.A)("tabs-container",k.tabList),children:[(0,y.jsx)(g,{...r,...e}),(0,y.jsx)(v,{...r,...e})]})}function x(e){const r=(0,b.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(r))}},28453:(e,r,a)=>{a.d(r,{R:()=>s,x:()=>l});var n=a(96540);const t={},o=n.createContext(t);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);