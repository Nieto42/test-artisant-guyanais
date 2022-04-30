import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout page="À propos">
      <h1 className="Title">A propos</h1>

      <p>
        Le site a été entièrement développé en Guyane par la société Primo
        studio. Dans le but est de subvenir aux besoins de la population en leur
        proposant des solutions digitales et intuitif.
      </p>

      <p className="quote">
        Pour les entrepreneurs l'objectif est de gagner en visibilité et mettre
        en avant le savoir-faire en Guyane pour les Guyanais
      </p>
    </Layout>
  );
}
