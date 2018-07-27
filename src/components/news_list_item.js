import React from 'react'

const newsListItem = (props) => {
    return (
        <div key = {props.item.id}>
            <h2>{props.item.title}</h2>
            <div>{props.item.feed}</div>
        </div>
    )
}

export default newsListItem