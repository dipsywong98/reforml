(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6Grv":function(e,n,l){"use strict";l.r(n),l.d(n,"title",(function(){return t})),l.d(n,"_frontmatter",(function(){return o})),l.d(n,"default",(function(){return i}));l("W1QL"),l("K/PF"),l("t91x"),l("75LO"),l("5hJT"),l("mXGw");var a=l("/FXl");var t="select - Provided Fields",o={},s={title:t,_frontmatter:o};function i(e){var n=e.components,l=function(e,n){if(null==e)return{};var l,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)l=o[a],n.indexOf(l)>=0||(t[l]=e[l]);return t}(e,["components"]);return Object(a.b)("wrapper",Object.assign({},s,l,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"select"},"Select"),Object(a.b)("p",null,"Select one value from list of options, where options can be a list of value, label to value map, or list of any object"),Object(a.b)("h2",{id:"schema"},"Schema"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-yml"}),"<fieldName in value>:\n  type: select\n  label: string? # fieldName to display\n  defaultVal: any? # default value\n  helperText: string? # text to help user to input\n  disabled: boolean? # disable the input, default false\n  options: Options # options can be a list of value, label to value map, or list of any object\n  # the path or key name to get option value inside an option object\n  valueKey: DigKey?\n  # the path or key name to get label to display inside an option object\n  labelKey: DigKey?\n")),Object(a.b)("h2",{id:"example---list-of-value"},"Example - list of value"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"() => {\n  const [value, setValue] = useState({})\n  const fields = useMemo(() => jsyaml.load(`\n  myField:\n    type: select\n    label: my field\n    helperText: help\n    placeholder: Please select\n    options:\n      - value1\n      - value2\n      - value3\n  `), [])\n  return (\n    <div>\n      <BaseForm fields={fields} value={value} onChange={setValue}/>\n      value:\n      <pre>{JSON.stringify(value, null, 2)}</pre>\n    </div>\n  )\n}\n")),Object(a.b)("h2",{id:"example---label-to-value-map"},"Example - label to value map"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"() => {\n  const [value, setValue] = useState({})\n  const fields = useMemo(() => jsyaml.load(`\n  myField:\n    type: select\n    label: my field\n    helperText: help\n    placeholder: Please select\n    options:\n      label1: value1\n      label2: value2\n      label3: value3\n  `), [])\n  return (\n    <div>\n      <BaseForm fields={fields} value={value} onChange={setValue}/>\n      value:\n      <pre>{JSON.stringify(value, null, 2)}</pre>\n    </div>\n  )\n}\n")),Object(a.b)("h2",{id:"example---list-of-object"},"Example - list of object"),Object(a.b)("p",null,"If you did not specify ",Object(a.b)("inlineCode",{parentName:"p"},"valueKey")," or ",Object(a.b)("inlineCode",{parentName:"p"},"labelKey"),", reforml will first try to search for ",Object(a.b)("inlineCode",{parentName:"p"},"value")," key or ",Object(a.b)("inlineCode",{parentName:"p"},"label")," key in the option.\nIf reforml cannot find the specific value, it will just use the object as the value, while stringify the object as the label"),Object(a.b)("h3",{id:"specify-a-value-and-a-label-in-each-option"},"Specify a value and a label in each option"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"() => {\n  const [value, setValue] = useState({})\n  const fields = useMemo(() => jsyaml.load(`\n  myField:\n    type: select\n    label: my field\n    helperText: help\n    placeholder: Please select\n    options:\n      - value: value1\n        label: label1\n      - value: value2\n        label: label2\n      - value: value3\n        label: label3\n  `), [])\n  return (\n    <div>\n      <BaseForm fields={fields} value={value} onChange={setValue}/>\n      value:\n      <pre>{JSON.stringify(value, null, 2)}</pre>\n    </div>\n  )\n}\n")),Object(a.b)("h3",{id:"specify-valuekey-and-labelkey-to-search-inside-each-option"},"Specify valueKey and labelKey to search inside each option"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"() => {\n  const [value, setValue] = useState({})\n  const fields = useMemo(() => jsyaml.load(`\n  myField:\n    type: select\n    label: my field\n    helperText: help\n    placeholder: Please select\n    options:\n      - key1: value1\n        key2:\n          key3: label1\n      - key1: value2\n        key2:\n          key3: label2\n      - key1: value3\n        key2:\n          key3: label3\n    valueKey: key1\n    labelKey:\n      - key2\n      - key3\n  `), [])\n  return (\n    <div>\n      <BaseForm fields={fields} value={value} onChange={setValue}/>\n      value:\n      <pre>{JSON.stringify(value, null, 2)}</pre>\n    </div>\n  )\n}\n")),Object(a.b)("h2",{id:"use-your-own"},"Use Your own"),Object(a.b)("p",null,"Use ",Object(a.b)("inlineCode",{parentName:"p"},"useProcessOptionsMemo<unknown>(options, { labelKey, valueKey })")," hook to process the options into array of value label pairs, e.g."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// input\nuseProcessOptionsMemo({label1: 'value1', label2: 'value2'})\n// will give\n[{\n  value: 'value1',\n  label: 'label1'\n},{\n  value: 'value2',\n  label: 'label2'\n}]\n")),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),"import {\n  Fields,\n  OptionsFieldComponent,\n  FieldPropTypes,\n  ReformlProvider,\n  BaseForm,\n  useProcessOptionsMemo\n} from 'reforml'\nimport React, { FunctionComponent, useState } from 'react'\nimport PropTypes from 'prop-types'\n\nconst MySelect: OptionsFieldComponent<unknown> = ({\n  helperText,\n  onChange,\n  value,\n  label,\n  defaultVal,\n  options,\n  labelKey,\n  valueKey,\n  ...props\n}) => {\n  const valueLabel = useProcessOptionsMemo<unknown>(options, { labelKey, valueKey })\n  const handleChange = ({ target: { value } }: { target: { value: string } }): void => {\n    onChange?.(valueLabel[Number.parseInt(value)]?.value)\n  }\n  return (\n    <div>\n      <div>{label}:\n        <select className='form-control' onChange={handleChange} {...props}>\n          <option value=\"\" selected={value === undefined}>{props.placeholder}</option>\n          {valueLabel.map(({ label }, index) => (\n            <option key={label} value={index} selected={value === valueLabel[index].value}>{label}</option>\n          ))}\n        </select>\n      </div>\n      <div>{helperText}</div>\n    </div>\n  )\n}\n\nMySelect.propTypes = {\n  ...FieldPropTypes,\n  value: PropTypes.string\n}\n\nconst TextPage: FunctionComponent = () => {\n  const [value, setValue] = useState({})\n  console.log(value)\n  const fields: Fields = {\n    myField: {\n      type: 'select',\n      options: [{\n        key1: 'value1',\n        key2: {\n          key3: 'label1'\n        }\n      }]\n    }\n  }\n  return (\n    <ReformlProvider fieldComponents={{ select: MySelect }}>\n      <BaseForm fields={fields} onChange={setValue} value={value}/>\n    </ReformlProvider>\n  )\n}\n\nexport default TextPage\n")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-provided-fields-select-mdx-c28eb70f1425612d4a71.js.map