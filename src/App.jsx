import { useState } from 'react'
import ColorList from './Components/ColorList'
import Form from './Components/Form'
import SingleColor from './Components/SingleColor'
import Values from 'values.js'

const App = () => {
  const [colors, setColors] = useState([new Values('#f15025').all(10)])

  return (
    <div>
      <Form />
      <ColorList />
      <SingleColor />
    </div>
  )
}
export default App
