import React from "react";
import Card from "../components/Card";

const data=[
    {
        name:"John",
        des:"Architect & Engineer"
    },
    {
        name:"Anas",
        des:"Quality Engineer"
    },
    {
        name:"Uzair",
        des:"Doctor and Engineer"
    }
]
function List(){
    return (
        <div style={{display:'flex'}}>
            {data.map((item,i)=>{
                return <Card i={i} data={item}/>
            })}
        </div>
    )
}

export default List