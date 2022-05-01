import Layout from "../components/Layout";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <Layout page="Artisans Guyanais">
      <div className="home">
        <div className="hero-title">
          <h1 className="title">
            Trouvez votre artisant de proximité pour un service de{" "}
            <Typewriter
              options={{
                strings: [
                  "Déménagement",
                  "Construction",
                  "Ménage",
                  "Peinture",
                  "Plomberie",
                  "Electricité",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="caption">
            Trouvez les meilleurs artisans de saint laurent du maroni pour votre
            besoin.
          </p>
          <button className="btn-hero">Ajouter un artisans</button>
          <button className="btn-hero-2">Evaluer un artisan</button>
        </div>
      </div>
    </Layout>
  );
}
