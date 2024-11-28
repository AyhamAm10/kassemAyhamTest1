import React from 'react'
import { useSelector } from 'react-redux';
import CartSlider from '../component/homePage/CartSlider';
import { Link } from 'react-router-dom';

const SubProducts:React.FC = () => {

    const product = useSelector(
        (state: any) => state.productDetailsSlice
      );

  return (
    <div className='px-3 sm:px-5 md:px-10 lg:px-20 py-5' >
        <h1 className='text-lg sm:text-xl md:text-3xl lg:text-4xl py-2 sm:py-4 md:py-6'>Suggested Products</h1>
        <div>
            {product.productDetailsState.sub_products && 
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8 py-5'>
                {
                   product.productDetailsState.sub_products.map((item:any)=>(
                    <Link to={`/product/${item.id}`}>
                        <CartSlider data={item}  />
                    </Link>
                   )) 
                }
              
            </div>
            }
        </div>
    </div>
  )
}

export default SubProducts