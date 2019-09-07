import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Patient from './Patient/Patient'
import Radiologist from './Radiologist/Radiologist'

const Router = () => (
  <BrowserRouter>
    <Route path="/" exact component={Patient} />
    <Route path="/radiology" exact component={Radiologist} />
  </BrowserRouter>
)

export default Router
