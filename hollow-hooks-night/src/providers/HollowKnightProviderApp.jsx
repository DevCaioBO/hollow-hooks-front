import { HollowKnightProvider } from "../context/HollowKnightContext"

export const HollowKnightProviderApp=({children})=>{
    return(
        <HollowKnightProvider>
            {children}
        </HollowKnightProvider>
    )
}