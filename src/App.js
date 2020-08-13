import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'

import 틈 from "./틈.jpg"

function App() {
  return (
    <div>
    <Image src = {틈} centered />
    <Comments />
    </div>
  );
}

export default App;
