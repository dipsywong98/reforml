(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5Q/g":function(e,n,l){"use strict";l.r(n),l.d(n,"_frontmatter",(function(){return a})),l.d(n,"default",(function(){return i}));l("W1QL"),l("K/PF"),l("t91x"),l("75LO"),l("5hJT"),l("mXGw");var t=l("/FXl");var a={},o={_frontmatter:a};function i(e){var n=e.components,l=function(e,n){if(null==e)return{};var l,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)l=o[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,["components"]);return Object(t.b)("wrapper",Object.assign({},o,l,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"reduce-fields"},"Reduce Fields"),Object(t.b)("p",null,"When the form value changed, you can alter the fields accordingly using the reduceFields function that comes along with the parameters in the onChangeHandler of form,\nwhere reduceField is a function that accepts a closure that map old fields into new fields"),Object(t.b)("h2",{id:"example---copy-the-text-field-value-to-label"},"Example - copy the text field value to label"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"() => {\n  const [value, setValue] = useState({})\n  const handleChange = (newValue, {reduceFields}) => {\n    reduceFields((oldFields) => {\n      if(newValue.copyField.length) {\n        oldFields.copyField.label = newValue.copyField\n      } else {\n        oldFields.copyField.label = 'Input some value'\n      }\n      return oldFields\n    })\n    setValue(newValue)\n  }\n  const fields = useMemo(() => jsyaml.load(`\n  copyField:\n    type: text\n    label: Input some value\n    helperText: this will copy the value to label\n    placeholder: label value\n  `), [])\n  return (\n    <div>\n      <BaseForm fields={fields} value={value} onChange={handleChange}/>\n      value:\n      <pre>{JSON.stringify(value, null, 2)}</pre>\n    </div>\n  )\n}\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-reduce-fields-mdx-f94943bf6d3d139cc35c.js.map