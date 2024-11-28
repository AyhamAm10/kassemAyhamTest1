import React, { Dispatch } from 'react'


type prop = {
    color: string,
    options?: any[],
    setPrice: Dispatch<any>
}
const SelectPayment:React.FC<prop> = ({color , options , setPrice}) => {
  const handleSelect = (id:string)=>{
    const filterOptions = options?.filter((item)=>{
     return item.id == id
    })

    if(filterOptions)
    setPrice(filterOptions[0])
  }
  return (
    <select  onChange={(e)=>handleSelect(e.target.value)} style={{background: "transparent" , border: `solid ${color} 1px` , color}}  className='w-full text-center z-30 text-white rounded-md px-4 py-3 px border bg-'>
      <option value="" >How Many Product</option>
      {
        options?.map((item:any )=>(
          <option key={item.id} value={item.id}> {item.product_count} product </option>
        ))
      }
    </select>
  )
}

export default SelectPayment