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
            news: JSON,
            filtered: JSON
        }
    }
    filterNews(keyword) {
        // console.log("keyword: ", keyword);
        var filteredList = this.state.news.filter((item)=>{
            return item.title.toLowerCase().includes(keyword.trim().toLowerCase());
        })
        this.setState({
            filtered: filteredList
        })
    }

    render(){
        return(
            <div>
                <Header filterNews = {this.filterNews.bind(this)}/>
                <NewsList news = {this.state.filtered}/>
            </div>
        )
    }
}
             // what we want to output, where we want to output
ReactDOM.render(<App/>, document.querySelector('#root'));