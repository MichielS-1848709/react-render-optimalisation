import type { AppProps } from 'next/app'
import combineComponents from '../context/helpers/Combiner'
import { ItemSelectionProvider } from '../context/ItemSelectionContext'

const CombinedContext = combineComponents([
  ItemSelectionProvider
])

function MyApp({ Component, pageProps }: AppProps) {
  return <CombinedContext>
    <Component {...pageProps} />
  </CombinedContext>
}

export default MyApp
