import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

export interface Product{
    id:number,
    title:string,
    description:string,
    category:string,
    price:number,
    rating:number,
    tags:string[],
    brand:string,
}

const ProductsList = (props: Props) => {
    const [products, setProducts] = useState<Product[]>([])
    const navigate = useNavigate()
    const fetchProducts = async()=>{
        const endpoint = "https://dummyjson.com/products"
        const res = await fetch(endpoint)
        
        if(!res.ok){
            console.error("Failed to fetch data")
        }
        const data = await res.json()
        const products = data.products
        setProducts(products)
    }

    const handleClick =(id:number)=>{
        navigate(`/products/${id}`)
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <main>
        <h2 className='text-2xl font-bold'>
            Products List:
        </h2>

        <div>
            <ul>
                {products.length >0 && products.map((prod)=>(
                    <li 
                        key ={prod.id}
                        onClick={()=>handleClick(prod.id)}
                    >
                        {prod.title}
                        </li>
                ))}
            </ul>
        </div>

    </main>
  )
}

export default ProductsList