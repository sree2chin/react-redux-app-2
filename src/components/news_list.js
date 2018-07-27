import React from 'react'

const newsList = (props) => {
    
    const newsItems = props.news.map((item)=>{
        return (
            <div key = {item.id}>
                <h2>{item.title}</h2>
                <div>{item.feed}</div>
            </div>
        )
    })
    return (
        <div>
            News list
            {newsItems}
        </div>
    )
}

export default newsList