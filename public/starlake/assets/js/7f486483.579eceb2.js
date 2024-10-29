"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[9977],{1786:(I,g,i)=>{i.r(g),i.d(g,{assets:()=>n,contentTitle:()=>C,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>A});var e=i(74848),t=i(28453);const s={},C="Tutorial",r={id:"guides/transform/tutorial",title:"Tutorial",description:"Use SELECT statements to create insights from the data in the database.",source:"@site/docs/0300-guides/300-transform/100-tutorial.mdx",sourceDirName:"0300-guides/300-transform",slug:"/guides/transform/tutorial",permalink:"/starlake/docs/guides/transform/tutorial",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/300-transform/100-tutorial.mdx",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Transform",permalink:"/starlake/docs/category/transform"},next:{title:"Customize the Transform",permalink:"/starlake/docs/guides/transform/config"}},n={},A=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"The insights",id:"the-insights",level:2},{value:"The SELECT statements",id:"the-select-statements",level:2},{value:"Run the transform",id:"run-the-transform",level:2}];function a(I){const g={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...I.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(g.header,{children:(0,e.jsx)(g.h1,{id:"tutorial",children:"Tutorial"})}),"\n",(0,e.jsx)(g.p,{children:"Use SELECT statements to create insights from the data in the database."}),"\n",(0,e.jsx)(g.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,e.jsxs)(g.p,{children:["Make sure you run the ",(0,e.jsx)(g.a,{href:"../load/tutorial",children:"Load step"})," first to get the data in the database."]}),"\n",(0,e.jsx)(g.h2,{id:"the-insights",children:"The insights"}),"\n",(0,e.jsx)(g.p,{children:"In this tutorial, we will create 3 insights:"}),"\n",(0,e.jsxs)(g.ul,{children:["\n",(0,e.jsx)(g.li,{children:"revenue_summary: to get the total revenue per order"}),"\n",(0,e.jsx)(g.li,{children:"product_summary: to get per product and order, the total revenue, the number of units sold and the profit"}),"\n",(0,e.jsx)(g.li,{children:"order_summary: to get per order, the total revenue, the profit and the number of items sold"}),"\n"]}),"\n",(0,e.jsx)(g.p,{children:"This requires us to build the insights in the following order:"}),"\n",(0,e.jsxs)(g.ol,{children:["\n",(0,e.jsx)(g.li,{children:"revenue_summary and product_summary"}),"\n",(0,e.jsx)(g.li,{children:"order_summary"}),"\n"]}),"\n",(0,e.jsx)(g.p,{children:(0,e.jsx)(g.img,{src:i(4294).A+"",width:"430",height:"575"})}),"\n",(0,e.jsx)(g.h2,{id:"the-select-statements",children:"The SELECT statements"}),"\n",(0,e.jsxs)(g.p,{children:["We will store these insights in the ",(0,e.jsx)(g.code,{children:"kpi"})," schema. We need to write one SQL query per insight as shown below:"]}),"\n",(0,e.jsx)("br",{}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-sql",metastring:'title="metadata/transform/kpi/revenue_summary.sql"',children:"SELECT\n    o.order_id,\n    o.timestamp AS order_date,\n    SUM(ol.quantity * ol.sale_price) AS total_revenue\nFROM\n    starbake.order o\n    JOIN starbake.order_line ol ON o.order_id = ol.order_id\nGROUP BY\n    o.order_id, o.timestamp\n"})}),"\n",(0,e.jsx)("br",{}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-sql",metastring:'title="metadata/transform/kpi/product_summary.sql"',children:"SELECT\n    p.product_id,\n    p.name AS product_name,\n    SUM(ol.quantity) AS total_units_sold,\n    (SUM(ol.sale_price) - Sum(ol.quantity * p.cost)) AS profit,\n    o.order_id,\n    o.timestamp AS order_date\nFROM\n    starbake.product p\n        JOIN starbake.order_line ol ON p.product_id = ol.product_id\n        JOIN starbake.order o ON ol.order_id = o.order_id\nGROUP BY\n    p.product_id,\n    o.order_id, p.name, o.timestamp\n\n"})}),"\n",(0,e.jsx)("br",{}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-sql",metastring:'title="metadata/transform/kpi/order_summary.sql"',children:"SELECT\n    ps.order_id,\n    ps.order_date,\n    rs.total_revenue,\n    ps.profit,\n    ps.total_units_sold\nFROM\n    kpi.product_summary ps\n        JOIN kpi.revenue_summary rs ON ps.order_id = rs.order_id\n\n"})}),"\n",(0,e.jsxs)(g.p,{children:["Storing the sql files in the ",(0,e.jsx)(g.code,{children:"kpi"})," directory instructs starlake to store the insights in the ",(0,e.jsx)(g.code,{children:"kpi"})," schema."]}),"\n",(0,e.jsx)(g.p,{children:"Your metadata/transform directory should look like this:"}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-plaintext",children:"metadata/transform\n\u2514\u2500\u2500 kpi\n    \u251c\u2500\u2500 order_summary.sql\n    \u251c\u2500\u2500 product_summary.sql\n    \u2514\u2500\u2500 revenue_summary.sql\n"})}),"\n",(0,e.jsx)(g.h2,{id:"run-the-transform",children:"Run the transform"}),"\n",(0,e.jsx)(g.p,{children:"before running our transform, let's see in what order we should run them by running the following command:"}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-bash",children:"starlake lineage  --task kpi.order_summary --print\n"})}),"\n",(0,e.jsx)(g.p,{children:"This should produce a acyclic graph showing the order in which the insights should be run. The output should look like this:"}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-plaintext",children:"kpi.order_summary\n  kpi.product_summary\n    starbake.product\n    starbake.order_line\n    starbake.order\n  kpi.revenue_summary\n    starbake.order\n    starbake.order_line\n"})}),"\n",(0,e.jsxs)(g.p,{children:["If you installed the ",(0,e.jsx)(g.a,{href:"../../install#graph-visualization",children:"GraphViz tool"}),", you can produce the same graph in svg or png format using the following command:"]}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-bash",children:"\nstarlake lineage --task kpi.order_summary --svg --output lineage.svg\n"})}),"\n",(0,e.jsx)(g.p,{children:(0,e.jsx)(g.img,{src:i(7568).A+"",width:"1292",height:"344"})}),"\n",(0,e.jsxs)(g.p,{children:["To build our top level insight, we can run the following command using the ",(0,e.jsx)(g.code,{children:"recursive"})," flag, this instructs starlake to run the insights in the correct order:"]}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-bash",children:"starlake transform --recursive --name kpi.order_summary\n"})}),"\n",(0,e.jsx)(g.p,{children:"Our database should now contain the following tables and data (amounts and dates may differ here):"}),"\n",(0,e.jsx)(g.pre,{children:(0,e.jsx)(g.code,{className:"language-plaintext",children:'$ duckdb $SL_ROOT/datasets/duckdb.db\nv0.10.0 20b1486d11\nEnter ".help" for usage hints.\nD show;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 database \u2502  schema  \u2502      name       \u2502     column_names     \u2502                                           column_types                                            \u2502 temporary \u2502\n\u2502 varchar  \u2502 varchar  \u2502     varchar     \u2502      varchar[]       \u2502                                             varchar[]                                             \u2502  boolean  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 duckdb   \u2502 audit    \u2502 audit           \u2502 [JOBID, PATHS, DOM\u2026  \u2502 [VARCHAR, VARCHAR, VARCHAR, VARCHAR, BOOLEAN, BIGINT, BIGINT, BIGINT, TIMESTAMP, INTEGER, VARCH\u2026  \u2502 false     \u2502\n\u2502 duckdb   \u2502 audit    \u2502 rejected        \u2502 [JOBID, TIMESTAMP,\u2026  \u2502 [VARCHAR, TIMESTAMP, VARCHAR, VARCHAR, VARCHAR, VARCHAR]                                          \u2502 false     \u2502\n\u2502 duckdb   \u2502 kpi      \u2502 order_summary   \u2502 [order_id, order_d\u2026  \u2502 [BIGINT, TIMESTAMP, DOUBLE, DOUBLE, HUGEINT]                                                      \u2502 false     \u2502\n\u2502 duckdb   \u2502 kpi      \u2502 product_summary \u2502 [product_id, produ\u2026  \u2502 [BIGINT, VARCHAR, HUGEINT, DOUBLE, BIGINT, TIMESTAMP]                                             \u2502 false     \u2502\n\u2502 duckdb   \u2502 kpi      \u2502 revenue_summary \u2502 [order_id, order_d\u2026  \u2502 [BIGINT, TIMESTAMP, DOUBLE]                                                                       \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order           \u2502 [customer_id, orde\u2026  \u2502 [BIGINT, BIGINT, VARCHAR, TIMESTAMP]                                                              \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 order_line      \u2502 [order_id, product\u2026  \u2502 [BIGINT, BIGINT, BIGINT, DOUBLE]                                                                  \u2502 false     \u2502\n\u2502 duckdb   \u2502 starbake \u2502 product         \u2502 [category, cost, d\u2026  \u2502 [VARCHAR, DOUBLE, VARCHAR, VARCHAR, DOUBLE, BIGINT]                                               \u2502 false     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nD select * from kpi.order_summary limit 5;\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 order_id \u2502       order_date        \u2502   total_revenue    \u2502       profit        \u2502 total_units_sold \u2502\n\u2502  int64   \u2502        timestamp        \u2502       double       \u2502       double        \u2502      int128      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502       24 \u2502 2024-02-13 07:03:35.94  \u2502           11708.55 \u2502             7609.14 \u2502              405 \u2502\n\u2502       27 \u2502 2024-02-26 01:12:45.282 \u2502            2430.00 \u2502              850.50 \u2502              162 \u2502\n\u2502       44 \u2502 2024-03-01 04:48:42.158 \u2502            2109.24 \u2502             1090.26 \u2502              243 \u2502\n\u2502       46 \u2502 2024-02-10 18:27:05.732 \u2502            3645.00 \u2502             1883.25 \u2502              243 \u2502\n\u2502       56 \u2502 2024-01-30 07:33:08.621 \u2502            6075.00 \u2502             3948.75 \u2502              405 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nD .quit\n'})}),"\n",(0,e.jsx)("br",{}),"\n",(0,e.jsxs)(g.p,{children:["Our insight is now built and stored in the ",(0,e.jsx)(g.code,{children:"kpi"})," schema. We can now run them from inside our orchestrator to schedule them to run at regular intervals."]})]})}function d(I={}){const{wrapper:g}={...(0,t.R)(),...I.components};return g?(0,e.jsx)(g,{...I,children:(0,e.jsx)(a,{...I})}):a(I)}},7568:(I,g,i)=>{i.d(g,{A:()=>e});const e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIKICAgICAgICAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPCEtLSBHZW5lcmF0ZWQgYnkgZ3JhcGh2aXogdmVyc2lvbiA5LjAuMCAoMjAyMzA5MTEuMTgyNykKIC0tPgo8IS0tIFBhZ2VzOiAxIC0tPgo8c3ZnIHdpZHRoPSI5NjlwdCIgaGVpZ2h0PSIyNThwdCIKICAgICB2aWV3Qm94PSIwLjAwIDAuMDAgOTY5LjAwIDI1Ny43NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZyBpZD0iZ3JhcGgwIiBjbGFzcz0iZ3JhcGgiIHRyYW5zZm9ybT0ic2NhbGUoMSAxKSByb3RhdGUoMCkgdHJhbnNsYXRlKDM2IDIyMS43NSkiPgogICAgICAgIDxwb2x5Z29uIGZpbGw9IndoaXRlIiBzdHJva2U9Im5vbmUiIHBvaW50cz0iLTM2LDM2IC0zNiwtMjIxLjc1IDkzMywtMjIxLjc1IDkzMywzNiAtMzYsMzYiLz4KICAgICAgICA8IS0tIHN0YXJiYWtlX3Byb2R1Y3QgLS0+CiAgICAgICAgPGcgaWQ9Im5vZGUxIiBjbGFzcz0ibm9kZSI+CiAgICAgICAgICAgIDx0aXRsZT5zdGFyYmFrZV9wcm9kdWN0PC90aXRsZT4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iIzAwOGIwMCIgc3Ryb2tlPSJub25lIiBwb2ludHM9IjcuNSwtMTQ4IDcuNSwtMTg1Ljc1IDYxLjc1LC0xODUuNzUgNjEuNzUsLTE0OCA3LjUsLTE0OCIvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjcuNSwtMTQ4IDcuNSwtMTg1Ljc1IDYxLjc1LC0xODUuNzUgNjEuNzUsLTE0OCA3LjUsLTE0OCIvPgogICAgICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjE4LjUiIHk9Ii0xNjEuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0id2hpdGUiPlRhYmxlPC90ZXh0PgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjYxLjc1LC0xNDggNjEuNzUsLTE4NS43NSAxOTEuNzUsLTE4NS43NSAxOTEuNzUsLTE0OCA2MS43NSwtMTQ4Ii8+CiAgICAgICAgICAgIDx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNzIuNzUiIHk9Ii0xNjEuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNC4wMCI+c3RhcmJha2UucHJvZHVjdMKgwqA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDwhLS0ga3BpX3Byb2R1Y3Rfc3VtbWFyeSAtLT4KICAgICAgICA8ZyBpZD0ibm9kZTIiIGNsYXNzPSJub2RlIj4KICAgICAgICAgICAgPHRpdGxlPmtwaV9wcm9kdWN0X3N1bW1hcnk8L3RpdGxlPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjMDAwMDhiIiBzdHJva2U9Im5vbmUiIHBvaW50cz0iMzQ1LjEyLC03NCAzNDUuMTIsLTExMS43NSAzOTQuODgsLTExMS43NSAzOTQuODgsLTc0IDM0NS4xMiwtNzQiLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgcG9pbnRzPSIzNDUuMTIsLTc0IDM0NS4xMiwtMTExLjc1IDM5NC44OCwtMTExLjc1IDM5NC44OCwtNzQgMzQ1LjEyLC03NCIvPgogICAgICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjM1Ni4xMiIgeT0iLTg3LjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQuMDAiIGZpbGw9IndoaXRlIj5UYXNrPC90ZXh0PgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjM5NC44OCwtNzQgMzk0Ljg4LC0xMTEuNzUgNTU0Ljg4LC0xMTEuNzUgNTU0Ljg4LC03NCAzOTQuODgsLTc0Ii8+CiAgICAgICAgICAgIDx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNDA1Ljg4IiB5PSItODcuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNC4wMCI+a3BpLnByb2R1Y3Rfc3VtbWFyecKgwqA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDwhLS0gc3RhcmJha2VfcHJvZHVjdCYjNDU7Jmd0O2twaV9wcm9kdWN0X3N1bW1hcnkgLS0+CiAgICAgICAgPGcgaWQ9ImVkZ2UzIiBjbGFzcz0iZWRnZSI+CiAgICAgICAgICAgIDx0aXRsZT5zdGFyYmFrZV9wcm9kdWN0JiM0NTsmZ3Q7a3BpX3Byb2R1Y3Rfc3VtbWFyeTwvdGl0bGU+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0xODkuNDQsLTE0OC4wMUMyMzguMTYsLTEzNy42NiAyOTguNzQsLTEyNC43OSAzNDkuMTEsLTExNC4wOSIvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSJibGFjayIgc3Ryb2tlPSJibGFjayIgcG9pbnRzPSIzNDkuODIsLTExNy41MiAzNTguODcsLTExMi4wMiAzNDguMzYsLTExMC42NyAzNDkuODIsLTExNy41MiIvPgogICAgICAgIDwvZz4KICAgICAgICA8IS0tIGtwaV9vcmRlcl9zdW1tYXJ5IC0tPgogICAgICAgIDxnIGlkPSJub2RlNSIgY2xhc3M9Im5vZGUiPgogICAgICAgICAgICA8dGl0bGU+a3BpX29yZGVyX3N1bW1hcnk8L3RpdGxlPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSIjMDAwMDhiIiBzdHJva2U9Im5vbmUiIHBvaW50cz0iNzAwLjc1LC0zNyA3MDAuNzUsLTc0Ljc1IDc1MC41LC03NC43NSA3NTAuNSwtMzcgNzAwLjc1LC0zNyIvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjcwMC43NSwtMzcgNzAwLjc1LC03NC43NSA3NTAuNSwtNzQuNzUgNzUwLjUsLTM3IDcwMC43NSwtMzciLz4KICAgICAgICAgICAgPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI3MTEuNzUiIHk9Ii01MC40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSJ3aGl0ZSI+VGFzazwvdGV4dD4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgcG9pbnRzPSI3NTAuNSwtMzcgNzUwLjUsLTc0Ljc1IDg5NywtNzQuNzUgODk3LC0zNyA3NTAuNSwtMzciLz4KICAgICAgICAgICAgPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI3NjEuNSIgeT0iLTUwLjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQuMDAiPmtwaS5vcmRlcl9zdW1tYXJ5wqDCoDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPCEtLSBrcGlfcHJvZHVjdF9zdW1tYXJ5JiM0NTsmZ3Q7a3BpX29yZGVyX3N1bW1hcnkgLS0+CiAgICAgICAgPGcgaWQ9ImVkZ2UxIiBjbGFzcz0iZWRnZSI+CiAgICAgICAgICAgIDx0aXRsZT5rcGlfcHJvZHVjdF9zdW1tYXJ5JiM0NTsmZ3Q7a3BpX29yZGVyX3N1bW1hcnk8L3RpdGxlPgogICAgICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBkPSJNNTU0LjYsLTgxLjgyQzU5Ny4yMSwtNzcuMjggNjQ2LjU3LC03Mi4wMSA2ODkuNjUsLTY3LjQyIi8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjY4OS45NiwtNzAuOTEgNjk5LjUzLC02Ni4zNyA2ODkuMjEsLTYzLjk1IDY4OS45NiwtNzAuOTEiLz4KICAgICAgICA8L2c+CiAgICAgICAgPCEtLSBzdGFyYmFrZV9vcmRlcl9saW5lIC0tPgogICAgICAgIDxnIGlkPSJub2RlMyIgY2xhc3M9Im5vZGUiPgogICAgICAgICAgICA8dGl0bGU+c3RhcmJha2Vfb3JkZXJfbGluZTwvdGl0bGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMwMDhiMDAiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIwLDAgMCwtMzcuNzUgNTQuMjUsLTM3Ljc1IDU0LjI1LDAgMCwwIi8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHBvaW50cz0iMCwwIDAsLTM3Ljc1IDU0LjI1LC0zNy43NSA1NC4yNSwwIDAsMCIvPgogICAgICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjExIiB5PSItMTMuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0id2hpdGUiPlRhYmxlPC90ZXh0PgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjU0LjI1LDAgNTQuMjUsLTM3Ljc1IDE5OS4yNSwtMzcuNzUgMTk5LjI1LDAgNTQuMjUsMCIvPgogICAgICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjY1LjI1IiB5PSItMTMuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNC4wMCI+c3RhcmJha2Uub3JkZXJfbGluZcKgwqA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgICAgIDwhLS0gc3RhcmJha2Vfb3JkZXJfbGluZSYjNDU7Jmd0O2twaV9wcm9kdWN0X3N1bW1hcnkgLS0+CiAgICAgICAgPGcgaWQ9ImVkZ2U0IiBjbGFzcz0iZWRnZSI+CiAgICAgICAgICAgIDx0aXRsZT5zdGFyYmFrZV9vcmRlcl9saW5lJiM0NTsmZ3Q7a3BpX3Byb2R1Y3Rfc3VtbWFyeTwvdGl0bGU+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0xODkuNDQsLTM3Ljc0QzIzOC4xNiwtNDguMDkgMjk4Ljc0LC02MC45NiAzNDkuMTEsLTcxLjY2Ii8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjM0OC4zNiwtNzUuMDggMzU4Ljg3LC03My43MyAzNDkuODIsLTY4LjIzIDM0OC4zNiwtNzUuMDgiLz4KICAgICAgICA8L2c+CiAgICAgICAgPCEtLSBrcGlfcmV2ZW51ZV9zdW1tYXJ5IC0tPgogICAgICAgIDxnIGlkPSJub2RlNCIgY2xhc3M9Im5vZGUiPgogICAgICAgICAgICA8dGl0bGU+a3BpX3JldmVudWVfc3VtbWFyeTwvdGl0bGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMwMDAwOGIiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIzNDMuMjUsMCAzNDMuMjUsLTM3Ljc1IDM5MywtMzcuNzUgMzkzLDAgMzQzLjI1LDAiLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgcG9pbnRzPSIzNDMuMjUsMCAzNDMuMjUsLTM3Ljc1IDM5MywtMzcuNzUgMzkzLDAgMzQzLjI1LDAiLz4KICAgICAgICAgICAgPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSIzNTQuMjUiIHk9Ii0xMy40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0LjAwIiBmaWxsPSJ3aGl0ZSI+VGFzazwvdGV4dD4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgcG9pbnRzPSIzOTMsMCAzOTMsLTM3Ljc1IDU1Ni43NSwtMzcuNzUgNTU2Ljc1LDAgMzkzLDAiLz4KICAgICAgICAgICAgPHRleHQgdGV4dC1hbmNob3I9InN0YXJ0IiB4PSI0MDQiIHk9Ii0xMy40NSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0LjAwIj5rcGkucmV2ZW51ZV9zdW1tYXJ5wqDCoDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPCEtLSBzdGFyYmFrZV9vcmRlcl9saW5lJiM0NTsmZ3Q7a3BpX3JldmVudWVfc3VtbWFyeSAtLT4KICAgICAgICA8ZyBpZD0iZWRnZTciIGNsYXNzPSJlZGdlIj4KICAgICAgICAgICAgPHRpdGxlPnN0YXJiYWtlX29yZGVyX2xpbmUmIzQ1OyZndDtrcGlfcmV2ZW51ZV9zdW1tYXJ5PC90aXRsZT4KICAgICAgICAgICAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgZD0iTTE5OS4wNiwtMTguODhDMjQwLjQzLC0xOC44OCAyODguODksLTE4Ljg4IDMzMi4wNiwtMTguODgiLz4KICAgICAgICAgICAgPHBvbHlnb24gZmlsbD0iYmxhY2siIHN0cm9rZT0iYmxhY2siIHBvaW50cz0iMzMxLjk5LC0yMi4zOCAzNDEuOTksLTE4Ljg4IDMzMS45OSwtMTUuMzggMzMxLjk5LC0yMi4zOCIvPgogICAgICAgIDwvZz4KICAgICAgICA8IS0tIGtwaV9yZXZlbnVlX3N1bW1hcnkmIzQ1OyZndDtrcGlfb3JkZXJfc3VtbWFyeSAtLT4KICAgICAgICA8ZyBpZD0iZWRnZTIiIGNsYXNzPSJlZGdlIj4KICAgICAgICAgICAgPHRpdGxlPmtwaV9yZXZlbnVlX3N1bW1hcnkmIzQ1OyZndDtrcGlfb3JkZXJfc3VtbWFyeTwvdGl0bGU+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik01NTYuNDksLTMwLjEzQzU5OC42NiwtMzQuNjMgNjQ3LjIsLTM5LjggNjg5LjY1LC00NC4zMyIvPgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSJibGFjayIgc3Ryb2tlPSJibGFjayIgcG9pbnRzPSI2ODkuMDUsLTQ3Ljc5IDY5OS4zNywtNDUuMzcgNjg5Ljc5LC00MC44MyA2ODkuMDUsLTQ3Ljc5Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDwhLS0gc3RhcmJha2Vfb3JkZXIgLS0+CiAgICAgICAgPGcgaWQ9Im5vZGU2IiBjbGFzcz0ibm9kZSI+CiAgICAgICAgICAgIDx0aXRsZT5zdGFyYmFrZV9vcmRlcjwvdGl0bGU+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9IiMwMDhiMDAiIHN0cm9rZT0ibm9uZSIgcG9pbnRzPSIxNC4yNSwtNzQgMTQuMjUsLTExMS43NSA2OC41LC0xMTEuNzUgNjguNSwtNzQgMTQuMjUsLTc0Ii8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIHBvaW50cz0iMTQuMjUsLTc0IDE0LjI1LC0xMTEuNzUgNjguNSwtMTExLjc1IDY4LjUsLTc0IDE0LjI1LC03NCIvPgogICAgICAgICAgICA8dGV4dCB0ZXh0LWFuY2hvcj0ic3RhcnQiIHg9IjI1LjI1IiB5PSItODcuNDUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNC4wMCIgZmlsbD0id2hpdGUiPlRhYmxlPC90ZXh0PgogICAgICAgICAgICA8cG9seWdvbiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjY4LjUsLTc0IDY4LjUsLTExMS43NSAxODUsLTExMS43NSAxODUsLTc0IDY4LjUsLTc0Ii8+CiAgICAgICAgICAgIDx0ZXh0IHRleHQtYW5jaG9yPSJzdGFydCIgeD0iNzkuNSIgeT0iLTg3LjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQuMDAiPnN0YXJiYWtlLm9yZGVywqDCoDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPCEtLSBzdGFyYmFrZV9vcmRlciYjNDU7Jmd0O2twaV9wcm9kdWN0X3N1bW1hcnkgLS0+CiAgICAgICAgPGcgaWQ9ImVkZ2U1IiBjbGFzcz0iZWRnZSI+CiAgICAgICAgICAgIDx0aXRsZT5zdGFyYmFrZV9vcmRlciYjNDU7Jmd0O2twaV9wcm9kdWN0X3N1bW1hcnk8L3RpdGxlPgogICAgICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBkPSJNMTg0Ljk2LC05Mi44OEMyMjkuNywtOTIuODggMjg1LjM0LC05Mi44OCAzMzMuOTgsLTkyLjg4Ii8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjMzMy43LC05Ni4zOCAzNDMuNywtOTIuODggMzMzLjcsLTg5LjM4IDMzMy43LC05Ni4zOCIvPgogICAgICAgIDwvZz4KICAgICAgICA8IS0tIHN0YXJiYWtlX29yZGVyJiM0NTsmZ3Q7a3BpX3JldmVudWVfc3VtbWFyeSAtLT4KICAgICAgICA8ZyBpZD0iZWRnZTYiIGNsYXNzPSJlZGdlIj4KICAgICAgICAgICAgPHRpdGxlPnN0YXJiYWtlX29yZGVyJiM0NTsmZ3Q7a3BpX3JldmVudWVfc3VtbWFyeTwvdGl0bGU+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iYmxhY2siIGQ9Ik0xODQuOTYsLTc0Ljk2QzIzNC4zOSwtNjQuNDYgMjk3LjEyLC01MS4xNCAzNDkuMDMsLTQwLjExIi8+CiAgICAgICAgICAgIDxwb2x5Z29uIGZpbGw9ImJsYWNrIiBzdHJva2U9ImJsYWNrIiBwb2ludHM9IjM0OS43NCwtNDMuNTQgMzU4LjgsLTM4LjA0IDM0OC4yOSwtMzYuNjkgMzQ5Ljc0LC00My41NCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="},4294:(I,g,i)=>{i.d(g,{A:()=>e});const e=i.p+"assets/images/starbake-transform-5137eb20d9a0234225442e386a4baff0.png"},28453:(I,g,i)=>{i.d(g,{R:()=>C,x:()=>r});var e=i(96540);const t={},s=e.createContext(t);function C(I){const g=e.useContext(s);return e.useMemo((function(){return"function"==typeof I?I(g):{...g,...I}}),[g,I])}function r(I){let g;return g=I.disableParentContext?"function"==typeof I.components?I.components(t):I.components||t:C(I.components),e.createElement(s.Provider,{value:g},I.children)}}}]);