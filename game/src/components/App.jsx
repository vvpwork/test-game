import React from 'react'

// component
import SelectGameMode from './formSatting/SelectGameMode'

// style
const App = () =>{
    return <>
           <SelectGameMode  arr= {[{name:'ease'}, {name:'hard'}, {name:'norm'}]}/>
    </>
}

export default App;