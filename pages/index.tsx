import type { NextPage } from 'next'
import type { ScriptProps } from "next/script"
import Head from 'next/head'
import MainLayout from '../app/Home/layout'
import Landing from '../PageComponents/Landing'


const Home: NextPage = () => {
  
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Head>
        <title>Abbas Ali Dalal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <main className={londrinaShadow.className}> */}
      <div className="h-full w-full">
        <div className="scroll-smooth h-full w-full">
          <MainLayout >
            <Landing/>
          </MainLayout>
        </div>
      </div>
      {/* </main> */}
    </div>
  )
}

export default Home
