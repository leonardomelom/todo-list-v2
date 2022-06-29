import { useState } from 'react'
import { Header } from './components/header'
import { Input } from './components/input'
import {Tasks} from './components/Tasks'

function App() {

  return (
   <div>
    <div className="flex justify-center items-center w-full h-[200px] bg-gray-900">
      <Header/>
    </div>
      <Input/>
      <Tasks/>
    </div>
  )
}

export default App
