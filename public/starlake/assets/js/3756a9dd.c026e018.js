"use strict";(self.webpackChunkstarlake=self.webpackChunkstarlake||[]).push([[8642],{27444:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(74848),a=t(28453);const s={},o="Python Transforms",i={id:"guides/transform/python",title:"Python Transforms",description:"In addition to SQL transforms, you may run Python transforms in your pipeline.",source:"@site/docs/0300-guides/300-transform/120-python.mdx",sourceDirName:"0300-guides/300-transform",slug:"/guides/transform/python",permalink:"/starlake/docs/guides/transform/python",draft:!1,unlisted:!1,editUrl:"https://github.com/starlake-ai/starlake/edit/master/docs/docs/0300-guides/300-transform/120-python.mdx",tags:[],version:"current",sidebarPosition:120,frontMatter:{},sidebar:"starlakeSidebar",previous:{title:"SQL Transforms",permalink:"/starlake/docs/guides/transform/sql"},next:{title:"Export",permalink:"/starlake/docs/guides/transform/export"}},d={},c=[];function m(n){const e={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"python-transforms",children:"Python Transforms"})}),"\n",(0,r.jsx)(e.p,{children:"In addition to SQL transforms, you may run Python transforms in your pipeline.\nPython transforms are defined by a Python function that takes a DataFrame as input and returns a DataFrame as output.\nThe function is then registered as a transform in the pipeline."}),"\n",(0,r.jsxs)(e.p,{children:["Exactly like the SQL transform, you can define a python transform by creating a python file and adding it\nto the ",(0,r.jsx)(e.code,{children:"metadata/transform/<domain>"})," directory."]}),"\n",(0,r.jsx)(e.p,{children:"You can also define a YAML configuration file for the python script using the exact same format as the SQL transform."}),"\n",(0,r.jsxs)(e.p,{children:["Arguments specified in the command line through the ",(0,r.jsx)(e.code,{children:"--options"})," flag will be passed to the python function as keyword arguments:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n$ starlake transform --name <domain>.<transform_name> --options key1=value1,key2=value2\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"will be passed as keyword arguments to the python function:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"\n<transform-name>.py --key1 value1 --key2 value2\n\n"})}),"\n",(0,r.jsx)(e.p,{children:"The dataframe returned by the python function will be saved as the output table of the transform."}),"\n",(0,r.jsx)(e.admonition,{type:"note",children:(0,r.jsxs)(e.p,{children:["Before returning the dataframe, the function must create a temporary view with the name ",(0,r.jsx)(e.code,{children:"SL_THIS"})," so that the dataframe can be saved as a table."]})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'\nimport sys\nfrom random import random\nfrom operator import add\n\nfrom pyspark.sql import SparkSession\n\nif __name__ == "__main__":\n    """\n        Usage: pi [partitions]\n    """\n    spark = SparkSession \\\n        .builder \\\n        .getOrCreate()\n\n    partitions = 2\n    n = 100000 * partitions\n\n    def f(_: int) -> float:\n        x = random() * 2 - 1\n        y = random() * 2 - 1\n        return 1 if x ** 2 + y ** 2 <= 1 else 0\n\n    count = spark.sparkContext.parallelize(range(1, n + 1), partitions).map(f).reduce(add)\n    result = "Pi is roughly %f" % (4.0 * count / n)\n    df = spark.createDataFrame([[result]])\n    df.createOrReplaceTempView("SL_THIS")\n\n'})})]})}function l(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>i});var r=t(96540);const a={},s=r.createContext(a);function o(n){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);