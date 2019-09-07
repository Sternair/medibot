import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Patient from './Patient/Patient'
import Radiologist from './Radiologist/Radiologist'
import Upload from './Upload/Upload'

const Router = () => (
  <BrowserRouter>
    <Route path="/chat" exact component={Patient} />
    <Route path="/radiology" exact component={Radiologist} />
    <Route path="/" exact component={Upload} />
  </BrowserRouter>
)

export default Router
