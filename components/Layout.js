import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Layout({ children, page }) {
  return (
    <div className="layout">
      <Head>
        <title>{page}</title>
      </Head>

      <header className="header">
        <Navbar></Navbar>
      </header>

      <main className="children">{children}</main>

      <footer className="footer">
        <Image
          src={"/Logo artisan guyanais.svg"}
          alt="Logo artisant guyanais"
          loading="lazy"
          width={32}
          height={32}
        ></Image>
      </footer>
    </div>
  );
}
