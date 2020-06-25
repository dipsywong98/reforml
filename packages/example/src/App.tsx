import React, { FunctionComponent, useState } from 'react'

import { BaseForm, Fields } from 'reforml'

const App: FunctionComponent = () => {
  const [value, setValue] = useState({})
  const fields: Fields = {
    myTextField: {
      type: 'text',
      label: 'my label',
      helperText: 'help',
      defaultVal: 'hello world'
    },
    myNumberField: {
      type: 'number',
      helperText: 'help2'
    },
    mySelectField: {
      type: 'select',
      helperText: 'help',
      options: {
        label1: 1,
        label2: 2
      }
    }
  }
  return (
    <div>
      <code>
        <pre>
          {JSON.stringify(value, null, 2)}
        </pre>
      </code>
      <BaseForm onChange={setValue} fields={fields} value={value}/>
    </div>
  )
}

export default App
