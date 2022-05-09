import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Feedback() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //router.go(1)
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div className="404">
      <h1>Ooooops...</h1>
      <h2>Cette page n'hexiste pas</h2>
      <p className="return">
        Retourner vers la page home{" "}
        <Link href="/">
          <a>Accueil</a>
        </Link>{" "}
      </p>
    </div>
  );
}
