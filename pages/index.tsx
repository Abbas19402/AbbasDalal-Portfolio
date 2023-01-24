import type { NextPage } from 'next'
import { useState , useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import MainLayout from '../app/Home/layout'
import Landing from '../PageComponents/Landing'
import Styles from '../styles/customCursor.module.css'

const Home: NextPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Head>
        <title>Abbas Ali Dalal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-full">
        <div className={`scroll-smooth h-full w-full ${Styles.removeDefaultCursor}`}>
          <MainLayout >
            <motion.div 
              className={`${Styles.cursor}`} 
              variants={cursorVariants}
              animate="default" 
            />
            <Landing/>
          </MainLayout>
        </div>
      </div>
      {/* </main> */}
    </div>
  )
}

export default Home
