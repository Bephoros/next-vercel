import Link from "next/link"
import { MainLayout } from "../../components/layouts/MainLayout"


const Pricing = () => {
  return (
    <MainLayout>
      <h1>Pricing</h1>

      <h1 className={'title'}>
        <Link href="/about">Estamos en el pricing</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/pricing/index.js</code>
      </p>
    </MainLayout>
  )
}

export default Pricing