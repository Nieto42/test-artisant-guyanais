import Layout from "../components/Layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout page="À propos">
      <div className="about">
        <div className="container-text">
          <h1 className="Title">A propos du site Artisans Guyanais</h1>
          <Image
            src={"/Logo artisan guyanais.svg"}
            alt="Logo Artisant Guyanais"
            Layout="responsive"
            width={62}
            height={62}
          />
          <p>
            Le site a été entièrement développé en Guyane par la société Primo
            studio. Dans le but est de subvenir aux besoins de la population en
            leur proposant des solutions digitales et intuitif.
          </p>

          <p className="quote">
            Pour les entrepreneurs l'objectif est de gagner en visibilité et
            mettre en avant le savoir-faire en Guyane pour les Guyanais
          </p>
        </div>
      </div>
    </Layout>
  );
}
