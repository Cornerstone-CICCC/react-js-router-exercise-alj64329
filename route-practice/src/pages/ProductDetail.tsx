import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from './ProductsList'


type RouterParams = {
    id:string
}

const ProductDetail = () => {
    const params=useParams<RouterParams>()
    const [prodDetail, setProdDetail] = useState<Product|null>(null)


    const fetchProduct = async()=>{
        const endpoint = `https://dummyjson.com/products/${params.id}`
        const res = await fetch(endpoint)
        
        if(!res.ok){
            console.error("Failed to fetch data")
        }
        const data = await res.json()

        setProdDetail(data)
    }

    useEffect(()=>{
        fetchProduct()
    },[])
    
    if(!prodDetail) return null

  return (
    <div className='p-5 flex flex-col gap-4'>
        <div>{prodDetail.title} - {prodDetail.brand}</div>
        <div>Price: {prodDetail.price}</div>
        <div>
            Description:
            <div>
                {prodDetail.description}
            </div>
        </div>
    </div>
  )
}

export default ProductDetail