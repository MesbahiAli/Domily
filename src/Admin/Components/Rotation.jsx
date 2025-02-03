import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";


function Rotation() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="/src/img/rb_10.png"
          title="Gérer les Clients"
          description="Modifier les données des clients et consulter leur historique de services."
          button1Text="Accéder"
          button1Link="../gestionclient"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="/src/img/eprofile.png"
          title="Gérer les Entreprises"
          description="Modifier les informations des entreprises partenaires et gérer leurs comptes."
          button1Text="Accéder"
          button1Link="../gestionentreprise"
        />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen="/src/img/rb_20.png"
          title="Gérer les Prestataires"
          description="Mettre à jour les profils des prestataires et suivre leurs services."
          button1Text="Accéder"
          button1Link="../gestionprovider"
        />
      )
    }
  ];

  return (
    <div className="w-1/3">
      <Carousel
        cards={cards}
        height="500px"
        width="100%"
        margin="0 auto"
        offset={200}
        showArrows={false}
      />
    </div>
  );
}

export default Rotation;
