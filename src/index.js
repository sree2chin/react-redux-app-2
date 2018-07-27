import React from 'react'
// here it goes to nodemodules and look for foleder react and include the function React. 
import ReactDOM from 'react-dom'

//COMPONENTS
import Header from "./components/header"
import NewsList from "./components/news_list"
import JSON from "./db.json"

// const App = () => {   // crated a component
//     return (
//         <div>
//             <Header/>
//             <h1>Hello world</h1>
//         </div>
//     )
// }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            news: JSON
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList news = {this.state.news}/>
            </div>
        )
    }
}
             // what we want to output, where we want to output
ReactDOM.render(<App/>, document.querySelector('#root'));