import { createContext, useState } from "react"


const HollowKnightContext = createContext()

export const HollowKnightProvider =({children})=>{
    const [isSuper,setIsSuper] = useState(false)

    return(
        <HollowKnightContext.Provider value={{isSuper,setIsSuper}}>
                {children}
        </HollowKnightContext.Provider>
    )
}

export default HollowKnightContext