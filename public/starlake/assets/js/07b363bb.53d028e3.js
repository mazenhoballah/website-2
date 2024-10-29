"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[5828],{26190:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=i(74848),t=i(28453);const a={sidebar_position:1},s="What is Starlake ?",l={id:"intro",title:"What is Starlake ?",description:"Starlake is a configuration only Extract, Load, Transform and Orchestration Declarative Data Pipeline Tool.",source:"@site/docs/0000-intro.md",sourceDirName:".",slug:"/intro",permalink:"/starlake/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0000-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"starlakeSidebar",next:{title:"Installation",permalink:"/starlake/docs/install"}},o={},d=[{value:"Extract",id:"extract",level:2},{value:"Load",id:"load",level:2},{value:"Transform",id:"transform",level:2},{value:"Orchestrate",id:"orchestrate",level:2}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"what-is-starlake-",children:"What is Starlake ?"})}),"\n",(0,r.jsx)(n.p,{children:"Starlake is a configuration only Extract, Load, Transform and Orchestration Declarative Data Pipeline Tool.\nThe workflow below is a typical use case:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Extract your data as a set of Fixed Position, DSV (Delimiter-separated values) or JSON or XML files"}),"\n",(0,r.jsx)(n.li,{children:"Define or infer the structure of each POSITION/DSV/JSON/XML file with a schema using YAML syntax"}),"\n",(0,r.jsx)(n.li,{children:"Configure the loading process"}),"\n",(0,r.jsx)(n.li,{children:"Start watching your data being available as Tables in your warehouse."}),"\n",(0,r.jsx)(n.li,{children:"Build aggregates using SQL, Jinja and YAML configuration files."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Starlake may be used indistinctly for all or any of these steps."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"extract"})," step allows to export selective data from an existing SQL database to a set of CSV files."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"load"})," step allows you to load text files, to ingest FIXED-WIDTH/CSV/JSON/XML files as strong typed records stored as parquet files or DWH tables (eq. Google BigQuery) or whatever sink you configured"]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"transform"})," step allows to join loaded data and save them as parquet files, DWH tables or Elasticsearch indices"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The figure below illustrates the typical data lifecycle in Starlake.\n",(0,r.jsx)(n.img,{src:i(99753).A+"",width:"1467",height:"960"})]}),"\n",(0,r.jsx)(n.p,{children:"Input file schemas, ingestion rules, transformation and indexing definitions used in the steps above are all defined in YAML files."}),"\n",(0,r.jsx)(n.h2,{id:"extract",children:"Extract"}),"\n",(0,r.jsx)(n.p,{children:"Starlake provides a simple yet powerful  way to extract, in full or incrementally, tables from your database."}),"\n",(0,r.jsx)(n.p,{children:"Using parallel load through a JDBC connection and configuring the incremental fields in the schema, you may extract your data incrementally.\nOnce copied to the cloud provider of your choice, the data is available for further processing by the Load and Transform steps."}),"\n",(0,r.jsx)(n.p,{children:"The extraction module support two modes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Native mode: Native database scripts are generated and must be run against your database."}),"\n",(0,r.jsx)(n.li,{children:"JDBC mode: In this mode, Starlake will spawn a number of threads to extract the data. We were able to extract an average of 1 million records per second using the AdventureWorks database on Postgres."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"load",children:"Load"}),"\n",(0,r.jsx)(n.p,{children:"Usually, data loading is done by writing hand made custom parsers that transform input files into datasets of records."}),"\n",(0,r.jsx)(n.p,{children:"Starlake aims at automating this parsing task by making data loading purely declarative."}),"\n",(0,r.jsx)(n.p,{children:"The major benefits the Starlake data loader bring to your warehouse are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Eliminates manual coding for data loading"}),"\n",(0,r.jsx)(n.li,{children:"Assign metadata to each dataset"}),"\n",(0,r.jsx)(n.li,{children:"Expose data loading metrics and history"}),"\n",(0,r.jsx)(n.li,{children:"Transform text files to strongly typed records without coding"}),"\n",(0,r.jsx)(n.li,{children:"Support semantic types by allowing you to set type constraints on the incoming data"}),"\n",(0,r.jsx)(n.li,{children:"Apply privacy to specific fields"}),"\n",(0,r.jsx)(n.li,{children:"Apply security at load time"}),"\n",(0,r.jsx)(n.li,{children:"Preview your data lifecycle and publish in SVG format"}),"\n",(0,r.jsx)(n.li,{children:"Support multiple data sources and sinks"}),"\n",(0,r.jsx)(n.li,{children:"Starlake is a very, very simple piece of software to administer"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Starlake loads the data using an embedded Spark engine. Please note that this mode does not require setting up a Spark cluster, it run out of the box in the starlake docker image."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"For some datawarehouses like BigQuery, Starlake can make use of the datawarehouse load API to load the data.\nThis is the fastest way to load the data but comes at the expense of limited features."})}),"\n",(0,r.jsx)(n.p,{children:"The table below list the features supported by each mode, the one that meet your requirements depend on the quality of your source and on the audit level you wish to have:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Import from any source"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"CSV"}),"\n",(0,r.jsx)(n.li,{children:"CSV with multichar separator"}),"\n",(0,r.jsx)(n.li,{children:"JSON Lines"}),"\n",(0,r.jsx)(n.li,{children:"JSON Array"}),"\n",(0,r.jsx)(n.li,{children:"XML"}),"\n",(0,r.jsx)(n.li,{children:"POSITION"}),"\n",(0,r.jsx)(n.li,{children:"Parquet"}),"\n",(0,r.jsx)(n.li,{children:"Avro"}),"\n",(0,r.jsx)(n.li,{children:"Kafka"}),"\n",(0,r.jsx)(n.li,{children:"Any JDBC database"}),"\n",(0,r.jsx)(n.li,{children:"Any Spark Source"}),"\n",(0,r.jsx)(n.li,{children:"Any char encoding including chinese, arabic, celtic ..."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Transform on load"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"rename fields"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"add new field (scripted fields)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Apply SQL transform on any field"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Validate type"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Validate pattern (semantic types)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ignore some fields"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"remove fields after transformation"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"parse date and time fields in any format"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"keep filename in target table for traceability"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Partition target table"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Append Mode"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Overwrite Mode"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Merge Mode (SCD2, Remove duplicates, overwrite by key / partition ...)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run Pre or Post Load SQL scripts"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Report Data quality using expectations"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Save to any sink"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Parquet"}),"\n",(0,r.jsx)(n.li,{children:"Delta Lake"}),"\n",(0,r.jsx)(n.li,{children:"Databricks"}),"\n",(0,r.jsx)(n.li,{children:"Google BigQuery"}),"\n",(0,r.jsx)(n.li,{children:"Amazon Redshift"}),"\n",(0,r.jsx)(n.li,{children:"Snowflake"}),"\n",(0,r.jsx)(n.li,{children:"Apache Hive"}),"\n",(0,r.jsx)(n.li,{children:"Any JDBC database"}),"\n",(0,r.jsx)(n.li,{children:"Any Spark Sink"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Secure your tables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Apply ACL"}),"\n",(0,r.jsx)(n.li,{children:"Apply RLS"}),"\n",(0,r.jsx)(n.li,{children:"Apply Tags"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Audit / Error Handling Levels"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"File level"}),"\n",(0,r.jsx)(n.li,{children:"Column level reporting"}),"\n",(0,r.jsx)(n.li,{children:"Produce replay file"}),"\n",(0,r.jsx)(n.li,{children:"Handle unlimited number of errors"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"transform",children:"Transform"}),"\n",(0,r.jsx)(n.p,{children:"Simply write standard SQL et describe how you want the result to be stored in a YAML description file.\nThe major benefits Starlake bring to your Data transformation jobs are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Write transformations in regular SQL as SELECT statements only,\nStarlake will convert them to INSERT INTO, MERGE INTO or UPDATE statements depending on the write strategy you choose."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"orchestrate",children:"Orchestrate"}),"\n",(0,r.jsx)(n.p,{children:"No more need to write complex ETL scripts, just write your SQL and YAML configuration files and let Starlake do the rest on your favorite scheduler."}),"\n",(0,r.jsx)(n.p,{children:"Starlake provides a simple yet powerful way to orchestrate your data pipeline.\nDependencies between tasks are inferred from SQL statements and YAML configuration files.\nStarlake will generate a Directed Acyclic Graph (DAG) of your data pipeline and execute in the right order\nthe tasks that are ready to run through your own Airflow or Dagster scheduler."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},99753:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/workflow-4c42599b0de7f282b5121082daf9df19.png"},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var r=i(96540);const t={},a=r.createContext(t);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);