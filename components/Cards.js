import Image from "next/image";

export default function Cards({ info }) {
  console.log(info.imageSrc, "text");
  return (
    <div className="cards-component">
      <div className="cards-container">
        <div className="intro-container">
          <Image
            src={info.imageSrc}
            alt="image du professionnel guyanais"
            loading="lazy"
            layout="fixed"
            width={112}
            height={115}
          />
          <div className="container-name">
            <h2>{info.name}</h2>
            <h3>{info.Job}</h3>
            <div className="container-vote">
              <h4>
                {info.Vote} <span>⭐</span> {info.top ? true : " Top Artisan"}
              </h4>
            </div>
          </div>
        </div>

        <div className="container-services">
          <p>Services :</p>
          <ul>
            {info.Services.map((services) => {
              return <li key={services}>{services}</li>;
            })}
          </ul>
        </div>
        <div className="container-contact">
          <div className="container-city">
            <Image
              src="/map-marker-radius-outline.svg"
              alt="icon qui représente le lieu de l'artisan guyanais"
              loading="lazy"
              layout="fixed"
              width={24}
              height={24}
            />
            <h5>{info.City}</h5>
          </div>
          <button className="btn-contact">
            <a href={info.Phone} target="_blank" rel="noopener noreferrer">
              <Image
                src="/whatsapp.svg"
                alt="icon whatzapp des artisans"
                loading="lazy"
                layout="fixed"
                width={24}
                height={24}
              />
              Contactez
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
