import Layout from "../components/Layout";
import Typewriter from "typewriter-effect";
import Form from "../components/Form";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Home({ artisans }) {
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
          {/* <button className="btn-hero">Enregistrer un artisans</button>
          <button className="btn-hero-2">Notez le travail d'un artisan</button> */}
        </div>
        <Form artisans={artisans} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await supabase.from("Artisans").select("*").order("id");

  return {
    props: {
      artisans: data,
    },
  };
}
