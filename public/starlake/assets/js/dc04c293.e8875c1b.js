"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[23],{24540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(74848),s=n(28453);const i={},o="Expectations",c={id:"guides/load/expectations",title:"Expectations",description:"Expectations allow to test if the resulting table contains the expected data.",source:"@site/docs/0300-guides/200-load/210-expectations.mdx",sourceDirName:"0300-guides/200-load",slug:"/guides/load/expectations",permalink:"/starlake/docs/guides/load/expectations",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/200-load/210-expectations.mdx",tags:[],version:"current",sidebarPosition:210,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"Access control",permalink:"/starlake/docs/guides/load/security"},next:{title:"Orchestration",permalink:"/starlake/docs/guides/load/orchestration"}},r={},l=[{value:"Writing expectation queries",id:"writing-expectation-queries",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"expectations",children:"Expectations"})}),"\n",(0,a.jsx)(t.p,{children:"Expectations allow to test if the resulting table contains the expected data."}),"\n",(0,a.jsxs)(t.p,{children:["They are defined using the ",(0,a.jsx)(t.code,{children:"expectations"})," attribute as follows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-yaml",children:"\ntable:\n    ...\n    attributes:\n       - name: id\n        type: integer\n        ...\n    expectations:\n      - \"is_col_value_not_unique('id') => result(0) == 1\"\n\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"expectations"})," attribute is a list of strings, each string representing an expectation. The expectation is defined as a string with the following format:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"<query_name>(<param>*) => <condition>\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"<query_name>"})," is the name of the expectation to be tested. The available expectations are defined in the ",(0,a.jsx)(t.code,{children:"expectations"})," directory. An query is a SELECT statement run against the target table and the result is used to test the expectation."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"<param>"})," is the parameter to be passed to the expectation. It is a value that can be read as the expected type by the expectation. Parameters are separated by commas."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"<condition>"})," is the condition to be tested. It is a string that can be parsed to a boolean by the expectation and that will be used to test the expectation:"]}),"\n",(0,a.jsx)(t.p,{children:"The following variables are available in the condition:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Variable"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"count"}),(0,a.jsx)(t.td,{children:"Long"}),(0,a.jsx)(t.td,{children:"The number of rows in the result"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"result"}),(0,a.jsx)(t.td,{children:"Seq[Any]"}),(0,a.jsx)(t.td,{children:"The first row in the result as a collection of values (one per column)"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"results"}),(0,a.jsx)(t.td,{children:"Seq[Seq[Any]]"}),(0,a.jsx)(t.td,{children:"The result as a collection of rows, each row as a collection of values (one per column)"})]})]})]}),"\n",(0,a.jsx)(t.h2,{id:"writing-expectation-queries",children:"Writing expectation queries"}),"\n",(0,a.jsx)(t.p,{children:"Expectation queries are mainly jinja macro templates that are used to generate SQL queries."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jinja",children:"{% macro is_col_value_not_unique(col, table='SL_THIS') %}\n    SELECT max(cnt)\n    FROM (SELECT {{ col }}, count(*) as cnt FROM {{ table }}\n    GROUP BY {{ col }}\n    HAVING cnt > 1)\n{% endmacro %}\n\n{% macro is_row_count_to_be_between(min_value, max_value, table_name = 'SL_THIS') -%}\n    select\n        case\n            when count(*) between {{min_value}} and {{max_value}} then 1\n        else\n            0\n        end\n    from {{table_name}}\n{%- endmacro %}\n\n{% macro col_value_count_greater_than(col, table_name='SL_THIS') %}\n    SELECT {{ col }}, count(*) FROM {{ table_name }}\n    GROUP BY {{ col }}\n    HAVING count(*) > {{ count }}\n{% endmacro %}\n\n\n{% macro count_by_value(col, value, table='SL_THIS') %}\n    SELECT count(*)\n    FROM {{ table }}\n    WHERE {{ col }} LIKE '{{ value }}'\n{% endmacro %}\n\n\n{% macro column_occurs(col, times, table='SL_THIS') %}\n    SELECT max(cnt)\n    FROM  (\n        SELECT {{ col }}, count(*) as cnt FROM {{ table }}\n        GROUP BY {{ col }}\n        HAVING cnt == {{ times }}\n    )\n{% endmacro %}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Put the queries in the ",(0,a.jsx)(t.code,{children:"expectations"})," directory and use the ",(0,a.jsx)(t.code,{children:".j2"})," extension.\nYou may organize your queries in subdirectories."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var a=n(96540);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);