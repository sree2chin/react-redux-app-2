import React from 'react'
// here it goes to nodemodules and look for foleder react and include the function React. 
import ReactDOM from 'react-dom'

const App = () => {   // crated a component
    return <h1>Hello world </h1>
}
             // what we want to output, where we want to output
ReactDOM.render(<App/>, document.querySelector('#root'));