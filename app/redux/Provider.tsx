'use client'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'

const Provider = (props: React.PropsWithChildren) => {
  return <ReduxProvider store={store}>{props.children}</ReduxProvider>
}

export default Provider
