import React from 'react'

// const Header = () => {   // crated a component
//     return <h1>I am header </h1>
// }

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keywords: ""
        }
    }
    inputChange = function(event) {
        // console.log(event.target.value);
        // this.setState({
        //     keywords: event.target.value
        // })
        this.props.filterNews(event.target.value);
    }
    render() {
        //inline styles object.. 
        const styles = {
            header: {
                background: '#eeefad'
            },
            logo: {
                color: '#fff',
                textAlign: 'center'
            }
        }
        return(
            <header className = "header-cont" style = {styles.header}>
                <div style = {styles.logo}>Logo</div>
                <input onChange = {this.inputChange.bind(this)}/>
                <div>{this.state.keywords}</div>
            </header>
        )
    }
}
        
export default Header