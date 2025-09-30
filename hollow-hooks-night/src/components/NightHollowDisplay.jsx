import { useEffect, useState } from 'react'
import nightNormal from '../assets/img/hollow_knight_bg.webp'
import nightJump from '../assets/img/night-is-jump.jpg'
import nightDeath from '../assets/img/hollow-death.png'
import nightFly from '../assets/img/white-fly.avif'
import radiance from '../assets/img/radiance.jpg'
import nightAttack from '../assets/img/holow-knight-attack.jpg'
import { useHollowKnightContext } from '../hooks/useHollowKnightContext'
export default function NightHollowDisplay(){

    const [moveToExcute,setMoveToExecute] = useState("")
    const [isRegen,setIsRegen] = useState(false)
    const {isSuper,setIsSuper} = useHollowKnightContext()
    useEffect(()=>{
        setIsRegen(true)
        setTimeout(() => {
            setIsRegen(false)
            setMoveToExecute("")
        }, 2000);
    },[moveToExcute])

    useEffect(()=>{
 setIsSuper(true)
               setTimeout(() => {
            setIsSuper(false)
          
        }, 1200);
       
    },[isRegen])
    return(
    <div className="w-full justify-center flex flex-col py-2 px-4 items-center h-full">
   
            <button className="rounded-full p-1 my-2 justify-center items-center flex h-[50px] w-[50px] font-semibold border-b-4 transition-all border-b-black/50 hover:border-0 text-white bg-black/50" onClick={()=>setMoveToExecute("A")}>A</button>
            <div className="w-full flex justify-between flex-wrap gap-8">
            <button className={`rounded-full p-1 my-2 justify-center items-center flex h-[50px] w-[50px] font-semibold text-white border-b-4 transition-all border-b-black/50 hover:border-0 bg-black/50  `} onClick={()=>setMoveToExecute("X")}>X</button>
            <img src={isSuper?radiance: moveToExcute==="A"?nightJump:moveToExcute==="B"?nightDeath:moveToExcute==="Y"?nightFly:moveToExcute==="X"?nightAttack: nightNormal} alt=""  className={`w-[100px] h-[100px] rounded-full  bg-cover  transition-all ${moveToExcute!=""?"border-4 border-green-400":""} `}/>
                        <button className="rounded-full p-1 my-2 justify-center items-center flex h-[50px] w-[50px] font-semibold text-white bg-black/50 border-b-4 transition-all border-b-black/50 hover:border-0" onClick={()=>setMoveToExecute("Y")}>Y</button>
            </div>
                                    <button className="rounded-full p-1 my-8 justify-center items-center flex h-[50px] w-[50px] font-semibold text-white bg-black/50 border-b-4 transition-all border-b-black/50 hover:border-0" onClick={()=>setMoveToExecute("B")}>B</button>

    </div>
    )
}