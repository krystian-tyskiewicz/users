import { Layout } from '@/app/components'

type Props = {
  children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => (
  <Layout>{children}</Layout>
)

export default HomeLayout
