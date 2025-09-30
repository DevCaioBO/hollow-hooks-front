import { useContext } from "react"
import HollowKnightContext from "../context/HollowKnightContext"

export const useHollowKnightContext=()=>{
    return useContext(HollowKnightContext)
}