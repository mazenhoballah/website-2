"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[6784],{23183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(74848),r=a(28453),i=a(11470),s=a(19365);const o={slug:"spark-big-query-partitioning",title:"Handling Dynamic Partitioning and Merge with Spark on BigQuery",author:"Hayssam Saleh",author_title:"Starlake Core Team Member",author_url:"https://www.linkedin.com/in/hayssams/",author_image_url:"https://s.gravatar.com/avatar/04aa2a859a66b52787bcba8c36beba8c.png",tags:["Spark","BigQuery","Dataproc","Google Cloud","ETL","Starlake"]},l=void 0,d={permalink:"/starlake/blog/spark-big-query-partitioning",editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/blog/2021-12-15-spark-big-query-partitioning.mdx",source:"@site/blog/2021-12-15-spark-big-query-partitioning.mdx",title:"Handling Dynamic Partitioning and Merge with Spark on BigQuery",description:"Data Loading strategies",date:"2021-12-15T00:00:00.000Z",tags:[{inline:!0,label:"Spark",permalink:"/starlake/blog/tags/spark"},{inline:!0,label:"BigQuery",permalink:"/starlake/blog/tags/big-query"},{inline:!0,label:"Dataproc",permalink:"/starlake/blog/tags/dataproc"},{inline:!0,label:"Google Cloud",permalink:"/starlake/blog/tags/google-cloud"},{inline:!0,label:"ETL",permalink:"/starlake/blog/tags/etl"},{inline:!0,label:"Starlake",permalink:"/starlake/blog/tags/starlake"}],readingTime:6.28,hasTruncateMarker:!1,authors:[{name:"Hayssam Saleh",title:"Starlake Core Team Member",url:"https://www.linkedin.com/in/hayssams/",imageURL:"https://s.gravatar.com/avatar/04aa2a859a66b52787bcba8c36beba8c.png",key:null,page:null}],frontMatter:{slug:"spark-big-query-partitioning",title:"Handling Dynamic Partitioning and Merge with Spark on BigQuery",author:"Hayssam Saleh",author_title:"Starlake Core Team Member",author_url:"https://www.linkedin.com/in/hayssams/",author_image_url:"https://s.gravatar.com/avatar/04aa2a859a66b52787bcba8c36beba8c.png",tags:["Spark","BigQuery","Dataproc","Google Cloud","ETL","Starlake"]},unlisted:!1,prevItem:{title:"Column  and Row Level Security in BigQuery",permalink:"/starlake/blog/rls-cls-big-query"},nextItem:{title:"Bonjour",permalink:"/starlake/blog/bonjour"}},c={authorsImageUrls:[void 0]},p=[{value:"Data Loading strategies",id:"data-loading-strategies",level:2},{value:"Append and Overwrite modes in Spark",id:"append-and-overwrite-modes-in-spark",level:2},{value:"Dynamic Partition Overwrite mode in Spark",id:"dynamic-partition-overwrite-mode-in-spark",level:3},{value:"Dynamic Partition Merge in Spark",id:"dynamic-partition-merge-in-spark",level:3},{value:"Starlake How-to",id:"starlake-how-to",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"data-loading-strategies",children:"Data Loading strategies"}),"\n",(0,n.jsx)(t.p,{children:"When loading data into BigQuery, you may want to:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Overwrite"})," the existing data and replace it with the incoming data."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Append"})," incoming data to existing"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Dynamic partition Overwrite"})," where only the partitions to which the incoming data belong to are overwritten."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Merge"})," incoming data with existing data by keeping the newest version of each record."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For performance reasons, when having huge amount of data, tables are usually split\ninto multiple partitions. BigQuery supports range partitioning which are uncommon and date/time partitioning\nwhich is the most widely used type of partitioning.\nThe diagram below shows our initial table partitioned by the ",(0,n.jsx)(t.code,{children:"date"})," field."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Initial data",src:a(75467).A+"",title:"Initial data",width:"740",height:"311"})}),"\n",(0,n.jsx)(t.p,{children:"Let's assume we receive the following data that we need to ingest into the table:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Incoming data",src:a(88593).A+"",title:"Incoming data",width:"257",height:"78"})}),"\n",(0,n.jsx)(t.p,{children:"The strategies above will produce respectively the results below:"}),"\n",(0,n.jsxs)(i.A,{groupId:"modes",children:[(0,n.jsxs)(s.A,{value:"overwrite",label:"Overwrite",children:[(0,n.jsx)(t.p,{children:"The table ends up with the 2 incoming records.\nAll existing partitions are deleted."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Overwrite data",src:a(40746).A+"",title:"Overwrite data",width:"724",height:"292"})})]}),(0,n.jsxs)(s.A,{value:"append",label:"Append",children:[(0,n.jsxs)(t.p,{children:["The table ends up with 7 records. Note that a new ",(0,n.jsx)(t.code,{children:"\xectem 1"})," record is added while the older one is kept."]}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Append data",src:a(82769).A+"",title:"Append data",width:"718",height:"358"})})]}),(0,n.jsxs)(s.A,{value:"partitioned-overwrite",label:"Dynamic partition Overwrite",children:[(0,n.jsx)(t.p,{children:"The table ends up with 4 records.\nThe second partition remains untouched while the first partition is erased and overwritten by with the incoming data."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Merge data",src:a(69901).A+"",title:"Merge data",width:"724",height:"268"})})]}),(0,n.jsxs)(s.A,{value:"merge",label:"Merge",children:[(0,n.jsx)(t.p,{children:"The table ends up with 4 records.\nIncoming and existing records are added up but only the newest version of each product in the kept in the resulting table."}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Merge data",src:a(8555).A+"",title:"Merge data",width:"748",height:"285"})})]})]}),"\n",(0,n.jsx)(t.p,{children:"There is no good or bad strategy, the use of one of the strategies above depends on the use case. Some use case examples for each of the strategies are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Overwrite mode may be useful when you receive every day the list of all product names."}),"\n",(0,n.jsx)(t.li,{children:"Append mode may be useful when you receive daily sales."}),"\n",(0,n.jsx)(t.li,{children:"Dynamic Partition Overwrite mode may be useful when you ingested the first time a partition, and you need to ingest it again with a different set of data and thus alter only that partition."}),"\n",(0,n.jsx)(t.li,{children:"Merge mode may be useful when you receive product updates every day and that you need to keep only the last version of each product."}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"spark-how-to",children:"Spark How-to"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/GoogleCloudDataproc/spark-bigquery-connector",children:"Apache Spark SQL connector for Google BigQuery"})," makes BigQuery a first class citizen as a source and sink for Spark jobs."]}),"\n",(0,n.jsx)(t.h2,{id:"append-and-overwrite-modes-in-spark",children:"Append and Overwrite modes in Spark"}),"\n",(0,n.jsxs)(t.p,{children:["BigQuery is supported by Spark as a source and sink through the ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleCloudDataproc/spark-bigquery-connector",children:"Spark BigQuery connector"})]}),"\n",(0,n.jsx)(t.p,{children:"Spark comes out of the box with the ability to append or overwrite existing data using a predefined save mode:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'\nval incomingDF = ... // Incoming data loaded with the correct schema\nval bqTable = "project-id.dataset.table"\nval saveMode = SaveMode.Overwrite // or SaveMode.Append fot he appending data\nincomingDF.write\n    .mode(saveMode)\n    .partitionBy("date")\n    .format("com.google.cloud.spark.bigquery")\n    .option("table", bqTable)\n    .save()\n\n'})}),"\n",(0,n.jsx)(t.h3,{id:"dynamic-partition-overwrite-mode-in-spark",children:"Dynamic Partition Overwrite mode in Spark"}),"\n",(0,n.jsx)(t.p,{children:"To activate dynamic partitioning, you need to set the configuration below before saving the data using the exact same code above:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'spark.conf.set("spark.sql.sources.partitionOverwriteMode","DYNAMIC")\n'})}),"\n",(0,n.jsx)(t.p,{children:"Unfortunately, the BigQuery Spark connector does not support this feature (at the time of writing).\nWe need to manually delete the partitions we want to overwrite first and then append the incoming data."}),"\n",(0,n.jsxs)(t.p,{children:["Assuming the table is partitioned by the field ",(0,n.jsx)(t.code,{children:"date"})," and the incoming data loaded in the incomingDF dataframe, the code below will\nremove existing partitions that need to be overwritten."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:'{3,8} title="Delete partitions that need to be updated"',children:'val incomingDF = ... // Incoming data loaded with the correct schema\nincomingDF\n  .select(date_format(col("date"), "yyyyMMdd").cast("string"))\n  .distinct()\n  .collect()\n  .map(_.getString(0))\n  .foreach { partition =>\n    bigQueryClient.deleteTable(TableId.of(datasetName, s"$table\\$$partition"));\n  }\n'})}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsxs)(t.p,{children:["To drop a table partition using the Google Cloud ",(0,n.jsx)(t.code,{children:"bq"})," command line tool, you may use the following syntax:"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"bq rm -t 'project-id.dataset.table$YYYYMMDD'\n"})})]}),"\n",(0,n.jsxs)(t.p,{children:["We now need to append the incomingDF to mimic the ",(0,n.jsx)(t.code,{children:"dynamic partition overwrite"})," feature:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:'{3} title="Append incoming partitions"',children:'val incomingDF = ... // Incoming data loaded with the correct schema\nval bqTable = "project-id.dataset.table"\nval saveMode = SaveMode.Append\nincomingDF.write\n    .mode(saveMode)\n    .partitionBy("date")\n    .format("com.google.cloud.spark.bigquery")\n    .option("table", bqTable)\n    .save()\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:'The issue with this approach is that if the program crashes during the "appending" of the incoming data, partitions will have been deleted and data would be lost.\nHowever, you can still ingest the same file again in case of failure and the end result will be the same.'})}),"\n",(0,n.jsx)(t.h3,{id:"dynamic-partition-merge-in-spark",children:"Dynamic Partition Merge in Spark"}),"\n",(0,n.jsx)(t.p,{children:"When you need to keep the last version of the record for each product, both BigQuery and Databricks (the company behind Spark in case you lived on the moon the last ten years) support\nthe merge SQL statement:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",metastring:'{5,7} title="Merge records using SQL statement"',children:"MERGE INTO target_table\nUSING incoming_table\nON target_table.product = incoming_table.product\n    WHEN NOT MATCHED\n\t\tTHEN INSERT *\n\tWHEN MATCHED AND incoming_table.date > target_table.date THEN\n\t\tUPDATE SET *\n/*\n    WHEN MATCHED AND incoming_table.timestamp <= target_table.timestamp THEN\n\t\tSKIP\n*/\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Unfortunately the ",(0,n.jsx)(t.code,{children:"MERGE"})," statement is not supported by Apache Spark. It is only supported by Databricks, its commercial version."]}),"\n",(0,n.jsx)(t.p,{children:"To do a merge using the Spark BigQuery connector, we need to do it by following the steps below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Step 1: Create a dataframe with all the rows"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:"val allRowsDF =\n    incomingDF\n    .unionByName(existingDF)\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Step 1",src:a(54292).A+"",title:"Step 1",width:"752",height:"940"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Step 2: group by product and order each product occurrence by date descending"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'val orderingWindow =\n    Window\n      .partitionBy("product")\n      .orderBy(col("date").desc, col("product")))\n\nval orderedDF =\n    allRowsDF\n        .withColumn("rownum", row_number.over(orderingWindow))\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Step 2",src:a(71526).A+"",title:"Step 2",width:"381",height:"325"})}),"\n",(0,n.jsxs)(t.p,{children:["In the step 2 above, each product is ordered by date with the most recent one first (descending order).\nWe identify it by the ",(0,n.jsx)(t.code,{children:"rownum"})," column."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Step 3: Keep the most recent product"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"{3}",children:'val toKeepDF =\n    orderedDF\n        .where(col("rownum") === 1)\n        .drop("rownum")\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Step 3",src:a(42374).A+"",title:"Step 3",width:"458",height:"349"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Step 4: Overwrite existing partitions with the data we want to keep"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",metastring:"{3}",children:'\nval bqTable = "project-id.dataset.table"\nval saveMode = SaveMode.Overwrite\ntoKeepDF.write\n    .mode(saveMode)\n    .partitionBy("date")\n    .format("com.google.cloud.spark.bigquery")\n    .option("table", bqTable)\n    .save()\n'})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Step 4",src:a(93153).A+"",title:"Step 4",width:"747",height:"278"})}),"\n",(0,n.jsx)(t.h2,{id:"starlake-how-to",children:"Starlake How-to"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://starlake.io",children:"Starlake"})," is a declarative Ingestion Framework based on YAML description files.",(0,n.jsx)("br",{}),"\nThe 4 ingestion strategies described above are supported through the settings below:"]}),"\n",(0,n.jsxs)(i.A,{groupId:"modes",children:[(0,n.jsxs)(s.A,{value:"overwrite",label:"Overwrite",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'{8,9} title="Schema Definition File"',children:'     name: "mydb"\n     directory: "..."\n+    metadata:\n    schemas:\n      - name: "mytable"\n        pattern: "data-.*.csv"\n        metadata:\n          writeStrategy:\n            type: "OVERWRITE"\n       attributes:\n          - name: "date"\n            type: "date"\n            rename: "id"\n          - name: "product"\n            type: "string"\n          - name: "price"\n            type: "decimal"\n'})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"#append-and-overwrite-modes-in-spark",children:"See again manual Spark overwrite"})})]}),(0,n.jsxs)(s.A,{value:"append",label:"Append",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'{8,9} title="Schema Definition File"',children:'     name: "mydb"\n     directory: "..."\n+    metadata:\n    schemas:\n      - name: "mytable"\n        pattern: "data-.*.csv"\n        metadata:\n          writeStrategy:\n            type: "APPEND"\n        attributes:\n          - name: "date"\n            type: "date"\n            rename: "id"\n          - name: "product"\n            type: "string"\n          - name: "price"\n            type: "decimal"\n'})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"#append-and-overwrite-modes-in-spark",children:"See again manual Spark append"})})]}),(0,n.jsxs)(s.A,{value:"partitioned-overwrite",label:"Dynamic partition Overwrite",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'{8-12} title="Schema Definition File"',children:'    name: "mydb"\n    directory: "..."\n+   metadata:\n    schemas:\n      - name: "mytable"\n        pattern: "data-.*.csv"\n        metadata:\n          strategy:\n            type: "OVERWRITE_BY_PARTITION"\n          sink:\n            partition:\n              - "date"\n       attributes:\n          - name: "date"\n            type: "date"\n            rename: "id"\n          - name: "product"\n            type: "string"\n          - name: "price"\n            type: "decimal"\n'})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"#dynamic-partition-overwrite-mode-in-spark",children:"See again manual Spark dynamic partition overwrite"})})]}),(0,n.jsxs)(s.A,{value:"merge",label:"Merge",children:[(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'{8,11} title="Schema Definition File"',children:'     name: "mydb"\n     directory: "..."\n+    metadata:\n    schemas:\n      - name: "mytable"\n        pattern: "data-.*.csv"\n        metadata:\n          strategy:\n            type: "OVERWRITE_BY_KEY_AND_TIMESTAMP"\n            key: ["product"]\n            timestamp: "date"\n        attributes:\n          - name: "date"\n            type: "date"\n          - name: "product"\n            type: "string"\n          - name: "price"\n            type: "decimal"\n'})}),(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"#dynamic-partition-merge-in-spark",children:"See again manual Spark Merge"})})]})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var n=a(18215);const r={tabItem:"tabItem_Ymn6"};var i=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(96540),r=a(18215),i=a(23104),s=a(56347),o=a(205),l=a(57485),d=a(31682),c=a(70679);function p(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return p(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function u(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,p]=m({queryString:a,groupId:r}),[g,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),y=(()=>{const e=d??g;return u({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),b(e)}),[p,b,i]),tabValues:i}}var b=a(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function x(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:p,onClick:c,...i,className:(0,r.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:i}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function f(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(f,{...e,children:p(e.children)},String(t))}},82769:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/append-data-6640aca8e10fb60122a396061e2fd835.png"},88593:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/incoming-data-cdda25bb299ec324656b344d1ec0fa69.png"},75467:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/initial-data-11df1668242b934b8701feda5810b4aa.png"},8555:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/merge-data-762cd7b1380a64e2d69fe0db8d2724d6.png"},40746:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/overwrite-data-184774b0ac03484cbc50406abf45f9ce.png"},69901:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/partitioned-overwrite-dda869e262e6573154ce334d2ae1a3a9.png"},54292:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/step1-union-data-bed4397c49e18fa5cac040448e6ca729.png"},71526:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/step2-ordering-data-54433f38583dbe31bf3f12e182ffb14b.png"},42374:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/step3-keep-data-36d7eea05a5e792e351ca7dcc1e020ab.png"},93153:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/step4-save-data-7b050f58bb2d21e98bbf8a88042a0712.png"},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);