
import React from 'react'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../components/ProductCardSkeleton'
import { useProductApi } from '../hooks/productsHook'
import Filter from '../components/Filter'

const Shop = () => {

  const {isPending,error,displayProds,filterProds} = useProductApi()

  if(error){
    return <div className='text-red-500 text-center mt-10'>Error fetching products: {error.message}</div>
  }
  return (
    <div className="min-h-screen bg-zinc-950 p-8 rounded-3xl">
      <Filter filterProds={filterProds}/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isPending
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : displayProds?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  )
}

export default Shop