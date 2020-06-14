import React, { useState } from 'react'

import { Fields, BaseForm } from 'reforml'

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
      <BaseForm onChange={setValue} fields={fields} value={value}/>
    </div>
  )
}

export default App
