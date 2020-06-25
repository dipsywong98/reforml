import React, { useState } from 'react'

import { BaseForm, Fields } from 'reforml'

const App = () => {
  const [value, setValue] = useState({})
  const fields: Fields = {
    myTextField: {
      type: 'text',
      helperText: 'help',
      default: 'hello world'
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
      <BaseForm onChange={setValue} fields={fields} value={value}/>
    </div>
  )
}

export default App
