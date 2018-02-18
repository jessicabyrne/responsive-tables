import React from 'react'
import Table from './components/Table'
import Selector from './components/Selector'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {TableArray} from "./components/TableArray";


const App = () =>
  (
    <div>
      <div>
        <div>
          <Table x={5} y={5} id={'1'}/>
        </div>
        <br/>
      </div>
      <div>


        <MuiThemeProvider>
          <TableArray/>
          <Selector/>
        </MuiThemeProvider>
      </div>
    </div>)

export default App