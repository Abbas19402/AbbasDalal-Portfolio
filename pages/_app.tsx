import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import Store from '../redux/Store'
import { Londrina_Shadow , Zilla_Slab_Highlight , Zilla_Slab } from '@next/font/google'

const londrinaShadow = Londrina_Shadow({
  subsets: ['latin'],
  weight: '400'
})
const zillaSlab = Zilla_Slab({
  subsets: ['latin'],
    weight: '400'
})


function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(Store);
  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <main className={zillaSlab.className}>
            <Component {...pageProps} />
          </main>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
