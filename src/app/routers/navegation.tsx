'use client'; 
import { redirect } from 'next/navigation'

export const NavigationToCatalogo = () => {
    return(
      redirect('/catalogo')
    )
    
    }

    export const NavigationToHome = () => {
        return(
          redirect('/')
        )
        
        }

