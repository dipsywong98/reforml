# reforml

> react form defined by yaml

[![NPM](https://img.shields.io/npm/v/reforml.svg)](https://www.npmjs.com/package/reforml) 
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![size](https://img.shields.io/bundlephobia/minzip/reforml)
![gh-action](https://img.shields.io/github/workflow/status/dipsywong98/reforml/test)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/7ff5651226774b5aa0efa6e76aca29e7)](https://www.codacy.com/manual/dipsywong98/reforml?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dipsywong98/reforml&amp;utm_campaign=Badge_Grade)
![coverage](https://img.shields.io/codecov/c/github/dipsywong98/reforml)
![dependencies](https://img.shields.io/david/dipsywong98/reforml)

## Install

```bash
npm i reforml
```

## Usage

[https://dipsywong98.github.io/reforml/](https://dipsywong98.github.io/reforml/)

```jsx
import {BaseForm} from 'reforml'
import React, {useState, useMemo} from 'react'

export default () => {
  const [value, setValue] = useState({})
  const fields = useMemo(() => ({
    myField: {
      type: 'text',
      label: 'my field'
    }
  }), [])
  return (
    <BaseForm fields={fields} value={value} onChange={setValue}/>
  )
}
```

## Development

```shell script
yarn # install dependencies to all packages
yarn start # start the build watcher for reforml
yarn example # start the example
yarn docs # start the development server of documentation
```

## License

MIT © [dipsywong98](https://github.com/dipsywong98)
