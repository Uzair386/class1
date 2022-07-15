import React from 'react'
import "./Card.css"

export default function Card({data,i}) {
    return (
        <div style={{width:200,marginLeft:i==0?0:10}}>
            <div className="card">
                <img src="https://via.placeholder.com/300.png/09f/fff" alt="Avatar" width={"100%"} />
                <div className="container">
                    <h4><b>{data.name}</b></h4>
                    <p>{data.des}</p>
                </div>
            </div>
        </div>
    )
}
