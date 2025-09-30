import NightHollowHeader from '../components/NightHollowHeader.jsx'
import NightHollowDisplay from '../components/NightHollowDisplay.jsx'
export default function HollowPage(){
    return(
        <div className='w-full flex justify-center items-center flex-col'>
    <NightHollowHeader/>
    <NightHollowDisplay/>
    </div>
    )
}