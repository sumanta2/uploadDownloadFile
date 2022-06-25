import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "../../src/styles/SkeletonComp.css"

const SkeletonComp = () => {
  return (
    <div className='main' >
      <div className="myFlex">
      <Skeleton className='round'/>
        <Skeleton count={2} className='small'/>
      </div>
      <Skeleton count={2} />
    </div>
  )
}

export default SkeletonComp