import React from 'react'
import { Form, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Team from './pages/Team'
import Contacts from './pages/Contacts'
import Invoices from './pages/Invoices'
import Formm from './pages/Form'

import Calender from './pages/Calender'
import Faq from './pages/Faq'
import Barchart from './pages/Barchart'
import Pie from './pages/Pie'

import LineCart from './pages/Line'
import Geography from './pages/Geography'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />}>
        <Route index element={<Dashboard/>}></Route>
        <Route path="team" element={<Team/>}></Route>
        <Route path="contacts" element={<Contacts/>}></Route>
        <Route path="invoices" element={<Invoices/>}></Route>
        <Route path="form" element={<Formm/>}></Route>
        <Route path="/calender" element={<Calender/>}></Route>
        <Route path="/Faq" element={<Faq/>}></Route>
        <Route path="/barchart" element={<Barchart height={"75vh"}/>}></Route>
        <Route path="/pie" element={<Pie legend={true} arch={true} height={"75vh"}     enableArcLabels={true} />}></Route>
        <Route path="/line" element={<LineCart height={"65vh"}/>}></Route>
        <Route path="/geography" element={<Geography height={"75vh"}/>}></Route>
        

    
        </Route>
      </Routes>
    </div>
  )
}

export default App
