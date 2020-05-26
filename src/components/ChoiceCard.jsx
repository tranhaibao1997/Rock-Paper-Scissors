import React from 'react'

function ChoiceCard(props)
{


return (
<div className={`choice-card ${props.winner}`}>
<h1>{props.title}</h1>
<img src={props.imgUrl} alt={props.title}/>
<h3>{props.winner}</h3>
</div>
    
)
}
export default ChoiceCard