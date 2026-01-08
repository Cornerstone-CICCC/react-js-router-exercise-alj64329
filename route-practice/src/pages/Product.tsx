import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Product = (props: Props) => {
  return (
    <div className='py-4 px-6'>
        <h1>Products Page</h1>
        <Outlet/>
    </div>
  )
}

export default Product