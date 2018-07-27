import React from 'react'
import NewsListItem from "./news_list_item.js"

const newsList = (props) => {
    
    const newsItems = props.news.map((item)=>{
        return (
            <NewsListItem item = {item} key = {item.id}/>
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