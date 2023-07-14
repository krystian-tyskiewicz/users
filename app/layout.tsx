import type { Metadata } from 'next'

import StyledComponentsRegistry from './lib/registry'
import Provider from './redux/Provider'

export const metadata: Metadata = {
  title: 'Users',
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body>
      <Provider>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </Provider>
    </body>
  </html>
)

export default RootLayout
