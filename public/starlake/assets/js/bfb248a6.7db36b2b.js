"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[3394],{42543:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=n(74848),d=n(28453);const r={},o="Tutorial",s={id:"guides/load/tutorial",title:"Tutorial",description:"Load and validate, in one shot or incrementally, JSON, XML and CSV files into your datawarehouse using different write strategies.",source:"@site/docs/0300-guides/200-load/100-tutorial.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/tutorial",permalink:"/starlake/docs/guides/load/tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/200-load/100-tutorial.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Load",permalink:"/starlake/docs/category/load"},next:{title:"Autoload",permalink:"/starlake/docs/guides/load/autoload"}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Autoload",id:"autoload",level:2},{value:"Query your datawarehouse",id:"query-your-datawarehouse",level:2},{value:"Manual load",id:"manual-load",level:2},{value:"Infer schema",id:"infer-schema",level:3},{value:"Stage before loading",id:"stage-before-loading",level:3},{value:"Load data into your datawarehouse",id:"load-data-into-your-datawarehouse",level:3},{value:"Query your loaded files in your datawarehouse",id:"query-your-loaded-files-in-your-datawarehouse",level:2}];function h(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.header,{children:(0,t.jsx)(a.h1,{id:"tutorial",children:"Tutorial"})}),"\n",(0,t.jsx)(a.p,{children:"Load and validate, in one shot or incrementally, JSON, XML and CSV files into your datawarehouse using different write strategies."}),"\n",(0,t.jsx)(a.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(a.p,{children:["If you skipped the extract step above, copy the folder and its files present in ",(0,t.jsx)(a.code,{children:"$SL_ROOT/sample-data/"})," to the ",(0,t.jsx)(a.code,{children:"$SL_ROOT/incoming/"})," folder."]}),"\n",(0,t.jsxs)(a.p,{children:["The folder name ",(0,t.jsx)(a.code,{children:"starbake"})," will be translated in to a schema name (dataset in BigQuery) in the datawarehouse."]}),"\n",(0,t.jsx)(a.p,{children:"The files in the folder will be loaded into tables in the schema. Files will be loaded into tables with the same name in the schema.\nTables suffixed by a date/time will be loaded incrementally."}),"\n",(0,t.jsx)(a.h2,{id:"autoload",children:"Autoload"}),"\n",(0,t.jsx)(a.p,{children:"The autoload command is used to load the files in the default incoming folder into the datawarehouse."}),"\n",(0,t.jsx)(a.p,{children:"The autoload command will:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"detect the file type based on its extension and content"}),"\n",(0,t.jsx)(a.li,{children:"infer the schema of the target table"}),"\n",(0,t.jsx)(a.li,{children:"stage the files"}),"\n",(0,t.jsx)(a.li,{children:"load the files into the target tables"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"Clean the metadata/load folder from any schema you generated previously and run the following command to autoload the files located the incoming folder."}),"\n",(0,t.jsx)(a.admonition,{type:"warning",children:(0,t.jsx)(a.p,{children:"autoload will stop short of inferring the schema if the schema file already exists in the metadata/load folder."})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"starlake autoload\n"})}),"\n",(0,t.jsxs)(a.admonition,{type:"note",children:[(0,t.jsx)(a.p,{children:"Starlake looks at files present in the $SL_ROOT/datasets/incoming folder."}),(0,t.jsx)(a.p,{children:"The default incoming folder may be changed by setting the SL_INCOMING environment variable."})]}),"\n",(0,t.jsx)(a.p,{children:"Once loaded, files are moved to the $SL_ROOT/datasets/archive folder if the SL_ARCHIVE environment variable is set to true (default).\nYou can replay them by moving them back to the incoming folder."}),"\n",(0,t.jsx)(a.h2,{id:"query-your-datawarehouse",children:"Query your datawarehouse"}),"\n",(0,t.jsx)(a.p,{children:"That's it you have loaded the data into your datawarehouse and just need to query it.\nTo query your database, open de DuckDB shell by running the following command:"}),"\n",(0,t.jsx)(a.admonition,{type:"note",children:(0,t.jsxs)(a.p,{children:["Install ",(0,t.jsx)(a.a,{href:"https://duckdb.org/docs/installation/",children:"duckdb"})," if you haven't done it yet."]})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'$ cd $SL_ROOT\n$ duckdb datasets/duckdb.db\nv0.10.0 20b1486d11\nEnter ".help" for usage hints.\n'})}),"\n",(0,t.jsx)(a.p,{children:"You can now query your datawarehouse using SQL."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"D show;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 database \u2502  schema  \u2502      name       \u2502     column_names     \u2502                                           column_types                                            \u2502 temporary \u2502\n\u2502 varchar  \u2502 varchar  \u2502     varchar     \u2502      varchar[]       \u2502                                             varchar[]                                             \u2502  boolean  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 duckdb   \u2502 audit    \u2502 audit           \u2502 [JOBID, PATHS, DOM\u2026  \u2502 [VARCHAR, VARCHAR, VARCHAR, VARCHAR, BOOLEAN, BIGINT, BIGINT, BIGINT, TIMESTAMP, INTEGER, VARCH\u2026  \u2502 false     \u2502\n\u2502 duckdb   \u2502 audit    \u2502 rejected        \u2502 [JOBID, TIMESTAMP,\u2026  \u2502 [VARCHAR, TIMESTAMP, VARCHAR, VARCHAR, VARCHAR, VARCHAR]                                          \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order           \u2502 [customer_id, orde\u2026  \u2502 [BIGINT, BIGINT, VARCHAR, TIMESTAMP]                                                              \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order_line      \u2502 [order_id, product\u2026  \u2502 [BIGINT, BIGINT, BIGINT, DOUBLE]                                                                  \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 product         \u2502 [category, cost, d\u2026  \u2502 [VARCHAR, DOUBLE, VARCHAR, VARCHAR, DOUBLE, BIGINT]                                               \u2502 false     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nD select * from starbake.order limit 5;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 customer_id \u2502 order_id \u2502  status   \u2502        timestamp        \u2502\n\u2502    int64    \u2502  int64   \u2502  varchar  \u2502        timestamp        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502           6 \u2502        1 \u2502 Cancelled \u2502 2024-02-05 22:19:15.454 \u2502\n\u2502          23 \u2502        2 \u2502 Delivered \u2502 2024-01-02 11:44:37.59  \u2502\n\u2502          20 \u2502        3 \u2502 Delivered \u2502 2024-02-10 23:10:30.685 \u2502\n\u2502           6 \u2502        4 \u2502 Delivered \u2502 2024-01-17 19:31:22.917 \u2502\n\u2502          17 \u2502        5 \u2502 Pending   \u2502 2024-01-19 01:26:06.674 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,t.jsxs)(a.p,{children:["To exit the DuckDB shell, type ",(0,t.jsx)(a.code,{children:".quit"})," and press Enter."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"D .quit\n$\n"})}),"\n",(0,t.jsx)(a.h2,{id:"manual-load",children:"Manual load"}),"\n",(0,t.jsx)(a.p,{children:"The autoload command above is a shortcut to the infer-schema, stage and load commands below."}),"\n",(0,t.jsx)(a.h3,{id:"infer-schema",children:"Infer schema"}),"\n",(0,t.jsx)(a.p,{children:"This is done by running the following command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"starlake infer-schema --input-path incoming/starbake --clean\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Your metadata ",(0,t.jsx)(a.code,{children:"load"})," folder should now contain the folder ",(0,t.jsx)(a.code,{children:"starbake"})," with following files:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"products.sl.yml"}),"\n",(0,t.jsx)(a.li,{children:"orders.sl.yml"}),"\n",(0,t.jsx)(a.li,{children:"order_lines.yml"}),"\n",(0,t.jsx)(a.li,{children:"_config.sl.yml"}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"The \xecnfer-schema` command has created a schema file for each of the files in the incoming folder trying to detect the schema of the files.\nThese schema files are used to load the data into the datawarehouse."}),"\n",(0,t.jsx)(a.p,{children:"In a real life scenario, you may want to review the schema files and adjust them to your needs."}),"\n",(0,t.jsx)(a.h3,{id:"stage-before-loading",children:"Stage before loading"}),"\n",(0,t.jsx)(a.p,{children:"starlake can stage the files before loading them into the datawarehouse.\nThis is useful when your files arrive in a different folder from the one where they are loaded into the datawarehouse."}),"\n",(0,t.jsx)(a.p,{children:"To move the incoming files to the stage folder. Run the following command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"starlake stage\n"})}),"\n",(0,t.jsx)(a.h3,{id:"load-data-into-your-datawarehouse",children:"Load data into your datawarehouse"}),"\n",(0,t.jsxs)(a.p,{children:["Run the following command to load the files in the incoming folder.\nSince we are target the DuckDB datawarehouse, we need to set the SL_ENV variable to ",(0,t.jsx)(a.code,{children:"DUCKDB"})," to activate the env.DUCKDB.sl.yml configuration file."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"\nSL_ENV=DUCKDB starlake load\n\n"})}),"\n",(0,t.jsx)(a.h2,{id:"query-your-loaded-files-in-your-datawarehouse",children:"Query your loaded files in your datawarehouse"}),"\n",(0,t.jsx)(a.p,{children:"That's it you have loaded the data into your datawarehouse and just need to query it.\nTo query your database, you can use the following command:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'$ cd $SL_ROOT\n$ duckdb datasets/duckdb.db\nv0.10.0 20b1486d11\nEnter ".help" for usage hints.\nD show;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 database \u2502  schema  \u2502      name       \u2502     column_names     \u2502                                           column_types                                            \u2502 temporary \u2502\n\u2502 varchar  \u2502 varchar  \u2502     varchar     \u2502      varchar[]       \u2502                                             varchar[]                                             \u2502  boolean  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 duckdb   \u2502 audit    \u2502 audit           \u2502 [JOBID, PATHS, DOM\u2026  \u2502 [VARCHAR, VARCHAR, VARCHAR, VARCHAR, BOOLEAN, BIGINT, BIGINT, BIGINT, TIMESTAMP, INTEGER, VARCH\u2026  \u2502 false     \u2502\n\u2502 duckdb   \u2502 audit    \u2502 rejected        \u2502 [JOBID, TIMESTAMP,\u2026  \u2502 [VARCHAR, TIMESTAMP, VARCHAR, VARCHAR, VARCHAR, VARCHAR]                                          \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order           \u2502 [customer_id, orde\u2026  \u2502 [BIGINT, BIGINT, VARCHAR, TIMESTAMP]                                                              \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order_line      \u2502 [order_id, product\u2026  \u2502 [BIGINT, BIGINT, BIGINT, DOUBLE]                                                                  \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 product         \u2502 [category, cost, d\u2026  \u2502 [VARCHAR, DOUBLE, VARCHAR, VARCHAR, DOUBLE, BIGINT]                                               \u2502 false     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nD select * from starbake.order limit 5;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 customer_id \u2502 order_id \u2502  status   \u2502        timestamp        \u2502\n\u2502    int64    \u2502  int64   \u2502  varchar  \u2502        timestamp        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502           6 \u2502        1 \u2502 Cancelled \u2502 2024-02-05 22:19:15.454 \u2502\n\u2502          23 \u2502        2 \u2502 Delivered \u2502 2024-01-02 11:44:37.59  \u2502\n\u2502          20 \u2502        3 \u2502 Delivered \u2502 2024-02-10 23:10:30.685 \u2502\n\u2502           6 \u2502        4 \u2502 Delivered \u2502 2024-01-17 19:31:22.917 \u2502\n\u2502          17 \u2502        5 \u2502 Pending   \u2502 2024-01-19 01:26:06.674 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nD .quit\n$\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Our raw files have been loaded into the datawarehouse and we can now start to ",(0,t.jsx)(a.a,{href:"../transform/tutorial",children:"transform our data to build insights"}),"."]})]})}function c(e={}){const{wrapper:a}={...(0,d.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>s});var t=n(96540);const d={},r=t.createContext(d);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);