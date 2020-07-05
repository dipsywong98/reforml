(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"0nTE":function(e,n,t){"use strict";t.r(n),t.d(n,"title",(function(){return a})),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return r}));t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("5hJT"),t("mXGw");var l=t("/FXl");var a="object - Provided Fields",i={},s={title:a,_frontmatter:i};function r(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(l.b)("wrapper",Object.assign({},s,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"object"},"Object"),Object(l.b)("p",null,"A field that can edit a set of sub-field"),Object(l.b)("h2",{id:"schema"},"Schema"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-yml"}),"<fieldName in value>:\n  type: object\n  label: string? # fieldName to display\n  defaultVal: any? # default value\n  helperText: string? # text to help user to input\n  disabled: boolean? # disable the input, default false\n  fields: Fields\n")),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"() => {\n  const [value, setValue] = useState({})\n  const fields = useMemo(() => jsyaml.load(`\n  myField:\n    type: object\n    label: my field\n    helperText: help\n    fields:\n      foo:\n        type: text\n        label: Foo\n  `), [])\n  return (\n    <div>\n      <BaseForm fields={fields} value={value} onChange={setValue}/>\n      value:\n      <pre>{JSON.stringify(value, null, 2)}</pre>\n    </div>\n  )\n}\n")))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-provided-fields-object-mdx-43b4125e480a8c91edba.js.map