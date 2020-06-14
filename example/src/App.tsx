import React, { useState } from 'react'

import { BaseForm, ExampleComponent } from 'reforml'
import 'reforml/dist/index.css'
import { Fields } from '../../src/type'

const App = () => {
  const [value, setValue] = useState({})
  const fields: Fields = {
    myTextField: {
      type: 'text',
      helperText: 'help',
      default: 'hello world'
    }
  }
  return (
    <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <BaseForm onChange={setValue} fields={fields} value={value}/>
    </div>
  )
}

export default App
