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
        <div className="container-footer">
          <div className="container-logo">
            <Image
              src={"/Logo artisan guyanais.svg"}
              alt="Logo artisant guyanais"
              loading="lazy"
              width={42}
              height={42}
            ></Image>
            <p>Artisans Guyanais</p>
          </div>

          <div className="container-contact">
            <div className="contact-item">
              <Image
                src={"/whatsapp.svg"}
                alt="icon whatzapp rps slm"
                loading="lazy"
                width={24}
                height={24}
              />
              <p className="info">+594 694 22 47 17</p>
            </div>
            <div className="contact-item">
              <Image
                src={"/Mail.svg"}
                alt="icon mail contact rps agriculture"
                loading="lazy"
                width={24}
                height={24}
              />
              <p className="info">contact@primofrances.fr</p>
            </div>
          </div>

          <p className="item-footer">
            Dev avec ♥ par{" "}
            <a
              href="https:primofrances.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Primofrances.fr
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
