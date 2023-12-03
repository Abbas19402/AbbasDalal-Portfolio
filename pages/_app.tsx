import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Store from '../redux/Store'
import { Rajdhani } from '@next/font/google'

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: '400'
})

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(Store);
  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <main className={`${rajdhani.className}`}>
            <Component {...pageProps} />
          </main>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
