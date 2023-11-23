import type { NextPage } from 'next'
import { useState , useEffect , useRef } from 'react'
import { useDispatch } from 'react-redux'
import Head from 'next/head'

import MainLayout from '../app/Home/layout'
import Landing from '../PageComponents/Landing'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();
  
  console.log(router);
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Head>
        <title>Abbas Ali Dalal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <div className="h-full w-full">
        <div className={`scroll-smooth h-full w-full`}>
          <MainLayout >
            <Landing/>
          </MainLayout>
        </div>
      </div>
    </div>
  )
}

export default Home
