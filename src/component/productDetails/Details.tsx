
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';
import Cart from './Cart'
import Info from './Info'

const Details:React.FC<{refetch:(options?: RefetchOptions) => Promise<QueryObserverResult<{
  data: any[];
}, Error>>}> = ({refetch}) => {
  return (
    // grid grid-cols-1 md:grid-cols-2
    <div className=' flex gap-5 flex-col items-center lg:items-start lg:flex-row sm:gap-8 px-3 sm:px-5 md:px-10 min-h-[70vh] mx-auto max-w-[100rem]'>
        <Cart  />
        <Info refetch={refetch}/>
    </div>
  )
}

export default Details