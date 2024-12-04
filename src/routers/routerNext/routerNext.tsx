'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import router from 'next/router'
 
export default function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const showNavBar = router.pathname !== '/Login'; 
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
  }, [pathname, searchParams])
 
  return '...'
}