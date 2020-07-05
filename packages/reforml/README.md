# reforml

> react form defined by yaml

[![NPM](https://img.shields.io/npm/v/reforml.svg)](https://www.npmjs.com/package/reforml) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i reforml
```

## Usage

https://dipsywong98.github.io/reforml/

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

## License

MIT © [dipsywong98](https://github.com/dipsywong98)
