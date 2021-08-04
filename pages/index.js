import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { useSateContext } from '../components/UI/HBOProvider'
import { useRouter } from 'next/router'
import Login from '../components/UI/Login/Login'

export default function Home() {
  const globalState = useSateContext();
  const router = useRouter();
  useEffect(()=>{
    const loggedIn = false
    if(loggedIn == false){
      router.push('/create')

    }
  }, [])
  return (
    <div>
      <Login/>
    </div>
  )
}
