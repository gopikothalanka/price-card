import React from 'react'
import './PriceCard.css'
import './App.css'
function PriceCard(props) {
  return (
      <div className={props.plan} key={props.id}>
        <h1 className="price " >{props.price}</h1>
        <h2 className="plan" >{props.plan} </h2>
        <ul className="List">
          <li className="item1">{props.moneyBack}</li>
          <li className="item2">{props.storage} </li>
          <li className="item1">{props.node} </li>
          <li className="item2">{props.database} </li>
          <li className="item1">{props.domain} </li>
          <li className="item2">{props.free} </li>
          <li className="item1">{props.others} </li>
        </ul>
        <div className="Button"><a className="link" href="www.google.co.in" alt="signup" traget="_blank" >Sign Up</a></div>
        
      </div>
   
  )
}

export default PriceCard
