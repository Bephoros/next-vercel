import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
        <Link href="/">Estamos en el contact</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
