import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '../Layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Abbas Ali Dalal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen min-w-screen">
        <MainLayout>
            <span className="text-xl hover:underline drop-shadow-lg transition-all hover:scale-110 duration-500 hover:cursor-pointer ">Abbas Ali Dalal</span>
        </MainLayout>
      </div>
    </div>
  )
}

export default Home
