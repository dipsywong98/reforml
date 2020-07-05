(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{iQ0A:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",(function(){return l})),a.d(n,"default",(function(){return s}));a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("5hJT"),a("mXGw");var t=a("/FXl");var l={},r={_frontmatter:l};function s(e){var n=e.components,a=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(t.b)("wrapper",Object.assign({},r,a,{components:n,mdxType:"MDXLayout"}),Object(t.b)("h1",{id:"getting-started"},"Getting Started"),Object(t.b)("h2",{id:"install"},"Install"),Object(t.b)("p",null,"First install the core reforml library"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"npm i reforml\n")),Object(t.b)("h2",{id:"use-reforml-in-json-form"},"Use Reforml in JSON Form"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import {BaseForm} from 'reforml'  // simplest form element\nimport 'reforml/dist/index.css'   // default styling\n")),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),"() => {\n  const [value, setValue] = useState({})\n  const fields = useMemo(() => jsyaml.load(`\n  myField:\n    type: text\n    label: my first reforml field\n  `), [])\n  return (\n    <div>\n      <BaseForm fields={fields} value={value} onChange={setValue}/>\n      value:\n      <pre>{JSON.stringify(value, null, 2)}</pre>\n    </div>\n  )\n}\n")),Object(t.b)("h2",{id:"use-reforml-with-yaml-string"},"Use Reforml with YAML string"),Object(t.b)("p",null,"Just install some YAML parser such as ",Object(t.b)("inlineCode",{parentName:"p"},"js-yaml"),". You can install that by"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"npm i js-yaml\n")),Object(t.b)("p",null,"and then"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"  import {BaseForm} from 'reforml'  // simplest form element\n  import 'reforml/dist/index.css'   // default styling\n  import jsyaml from 'js-yaml'      // yaml parser\n")),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx",metastring:"live=true",live:"true"}),'() => {\n  const [value, setValue] = useState({})\n  const fields = useMemo(() => jsyaml.load(`\n  myField:\n    type: text\n    label: my second reforml field\n    helperText: Use the react hook "useMemo" so it only parse the yaml once\n  `), [])\n  return (\n    <div>\n      <BaseForm fields={fields} value={value} onChange={setValue}/>\n      value:\n      <pre>{JSON.stringify(value, null, 2)}</pre>\n    </div>\n  )\n}\n')),Object(t.b)("h2",{id:"use-yaml-webpack-loader"},"Use YAML Webpack loader"),Object(t.b)("p",null,"Install a yaml webpack loader, such as ",Object(t.b)("inlineCode",{parentName:"p"},"js-yaml-loader")),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"npm i -D js-yaml-loader\n")),Object(t.b)("p",null,"In your webpack config,"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"// webpack.config.js\nmodule: {\n  rules: [{\n    test: /\\.ya?ml$/,\n    use: 'js-yaml-loader',\n  }]\n}\n")),Object(t.b)("p",null,"Or if you are using Create React App that the webpack config is encapsulated, you can"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"npm i -D react-app-rewired react-app-rewire-yaml\n")),Object(t.b)("p",null,"then in ",Object(t.b)("inlineCode",{parentName:"p"},"package.json"),", change the ",Object(t.b)("inlineCode",{parentName:"p"},'"start": "react-script start"')," to ",Object(t.b)("inlineCode",{parentName:"p"},'"start": "react-app-rewired start"'),"."),Object(t.b)("p",null,"At root create a new file ",Object(t.b)("inlineCode",{parentName:"p"},"config-overrides.js")),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"const rewireYAML = require('react-app-rewire-yaml');\nmodule.exports = function override(config, env) {\n  if (!config.plugins) {\n    config.plugins = [];\n  }\n  config = rewireYAML(config, env)\n  return config\n}\n")),Object(t.b)("p",null,"Then you can simply import the yaml file"),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),"import fields from './my-fields.yaml'\n")),Object(t.b)("p",null,"If you are using TypeScript you may need a declaration file ",Object(t.b)("inlineCode",{parentName:"p"},"./my-fields.yaml.d.ts")),Object(t.b)("pre",null,Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { Fields } from 'reforml'\n\ndeclare module '**/*.reforml.yaml' {\n  const fields: Fields\n  export default fields\n}\n")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-mdx-a4a82b3802cc2a05395c.js.map