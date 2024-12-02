'use client'

import { NavigationToHome } from "@/routers/navegation";

export default function ButtonHome(){

    return(
        <>
            <div>
            <button className="btn bnt-neutral" onClick={NavigationToHome}>Home</button>
            </div>
        </>
    )
}