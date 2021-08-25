import React from 'react'

export default function Order(props) {
  const {order} = props
  return (
    <div className='order'>
        <p>{order.customer}</p>
        <p>{order.price}</p>
        <p>{order.address}</p>
    </div>
  )
}
