import { useState } from "react";
import Provider_Nav from "./Components/Entreprise_Nav";
import { Label, Select } from "flowbite-react";

const Service = () => {
  const [showDocumentInput, setShowDocumentInput] = useState(false);
  const [formData, setFormData] = useState({
    category_id: "",
    name: "",
    description: "",
    price: "",
  });

  const [services, setServices] = useState([]); // State to store services for the selected category

  // Define categories and their corresponding services
  const categories = [
    {
      id: "1",
      name: "Services Ménagers",
      services: [
        "Nettoyage général des espaces",
        "Lavage des vitres et des tapis",
        "Organisation et rangement des pièces",
        "Courses et approvisionnement",
        "Préparation de repas à domicile",
        "Nettoyage après un événement ou un déménagement",
        "Entretien des appareils électroménagers",
        "Dépoussiérage approfondi",
        "Entretien des textiles (rideaux, tapis, matelas)",
      ],
    },
    {
      id: "2",
      name: "Services de Bricolage",
      services: [
        "Travaux de menuiserie et réparations en bois",
        "Petits travaux de soudure",
        "Pose et réparation de structures en aluminium",
        "Assemblage et montage de meubles",
        "Installation de luminaires et d’équipements électriques",
        "Peinture intérieure et petits travaux de rénovation",
        "Installation de tringles à rideaux, étagères ou cadres",
        "Plomberie",
      ],
    },
    {
      id: "3",
      name: "Services de Jardinage",
      services: [
        "Taille des haies et élagage",
        "Plantation et entretien des fleurs et arbustes",
        "Nettoyage et désherbage des espaces verts",
        "Création et entretien de potagers",
        "Aménagement paysager sur mesure",
        "Installation de systèmes d’arrosage automatique",
        "Décoration extérieure pour événements",
      ],
    },
    {
      id: "4",
      name: "Services de Bien-Être",
      services: [
        "Massages relaxants à domicile",
        "Soins capillaires et coiffures",
        "Maquillage pour événements ou quotidien",
        "Manucure et pédicure",
        "Hijama (ventousothérapie traditionnelle)",
        "Séances de yoga ou relaxation guidée",
      ],
    },
    {
      id: "5",
      name: "Services pour Enfants",
      services: [
        "Garde d’enfants à domicile",
        "Soutien scolaire et aide aux devoirs",
        "Organisation d’activités éducatives et ludiques",
        "Animation d’anniversaires et d’ateliers créatifs",
        "Cours d’initiation en musique, dessin ou langues",
      ],
    },
    {
      id: "6",
      name: "Services pour Personnes Âgées",
      services: [
        "Assistance pour les repas, les courses et le ménage",
        "Compagnie et conversation",
        "Accompagnement pour rendez-vous médicaux",
        "Aide aux démarches administratives simples",
        "Organisation d’activités adaptées pour le bien-être",
      ],
    },
    {
      id: "7",
      name: "Services Technologiques",
      services: [
        "Réparation d’ordinateurs, smartphones et tablettes",
        "Installation de télévisions, Wi-Fi et équipements électroniques",
        "Assistance informatique à distance",
        "Maintenance et installation de climatiseurs",
        "Configuration d’objets connectés",
        "Formation de base en informatique pour débutants",
      ],
    },
    {
      id: "8",
      name: "Transport et Livraison",
      services: [
        "Déménagement avec emballage et transport sécurisé",
        "Transport de colis, meubles ou biens fragiles",
        "Livraison de courses ou achats spécifiques",
        "Location de véhicule avec chauffeur pour petits trajets",
      ],
    },
    {
      id: "9",
      name: "Services Animaliers",
      services: [
        "Promenade régulière pour chiens",
        "Garde d’animaux à domicile ou en pension",
        "Toilettage complet pour animaux de compagnie",
        "Éducation canine et conseils en comportement",
        "Nutrition et soins spécifiques pour animaux",
      ],
    },
    {
      id: "10",
      name: "Soutien Scolaire et Coaching",
      services: [
        "Cours particuliers (musique, langues, matières scolaires)",
        "Coaching sportif et remise en forme",
        "Développement personnel et gestion du stress",
        "Ateliers de méthodologie et préparation aux examens",
        "Soutien scolaire pour enfants en difficulté",
      ],
    },
  ];

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({ ...formData, category_id: selectedCategory });

    // Update services based on the selected category
    const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory);
    setServices(selectedCategoryData ? selectedCategoryData.services : []);

    // Show document input for specific categories
    if (selectedCategory === "10" || selectedCategory === "5") {
      setShowDocumentInput(true);
    } else {
      setShowDocumentInput(false);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, document: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data as JSON
    const data = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price), // Ensure price is a number
      provider_id: localStorage.getItem("userId"), // Hardcoded provider_id
      category_id: parseInt(formData.category_id, 10), // Ensure category_id is a number
    };

    console.log("Request data:", data);

    try {
      // Send POST request to the backend API
      const response = await fetch("http://localhost:8081/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the Content-Type to JSON
        },
        body: JSON.stringify(data), // Convert the data to JSON
      });

      // Log the response for debugging
      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Response data:", result);

      if (!response.ok) {
        throw new Error("Failed to submit service");
      }

      // Optionally, reset the form after successful submission
      setFormData({
        category_id: "",
        name: "",
        description: "",
        price: "",
      });
      setShowDocumentInput(false);
      alert("Service submitted successfully!");
    } catch (error) {
      console.error("Error submitting service:", error);
      alert("Failed to submit service. Please try again.");
    }
  };

  return (
    <>
      <Provider_Nav />
      <div className="flex items-center justify-center mt-20 p-4 bg-gray-50">
        <div className="grid grid-cols-7 gap-4 w-4/5">
          <div className="col-span-5 bg-white p-8 shadow-md rounded-xl">
            <h2 className="text-xl font-bold mb-4">Qu'annoncez-vous aujourd'hui ?</h2>
            <p className="text-gray-600 mb-6">
              Grâce à ces informations, les acheteurs peuvent trouver votre annonce plus facilement.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="Catégories" value="Catégories*" />
                </div>
                <Select id="Catégories" required onChange={handleCategoryChange}>
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Services*" />
                </div>
                <Select
                  id="name"
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  required
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionnez un service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </Select>
              </div>

              {showDocumentInput && (
                <div className="w-full mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="document" value="Veuillez insérer un document (CV, certificat, etc.)*" />
                  </div>
                  <input
                    type="file"
                    id="document"
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    onChange={handleFileChange}
                  />
                </div>
              )}

              <h2 className="text-xl font-bold mb-4">Information de l'annonce</h2>
              <p className="text-gray-600 mb-6">Ajouter plus de détails sur votre annonce pour un maximum de visibilité</p>

              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label value="Descriptif de l'annonce*" />
                </div>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Écrivez vos pensées ici..."
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label value="Prix(DH)*" />
                </div>
                <input
                  type="number"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="100"
                  required
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="focus:outline-none w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900"
              >
                Publier
              </button>
            </form>
          </div>

          <div className="col-span-2 bg-white rounded-xl p-6 shadow-md">
            <div className="flex flex-row items-center justify-center pb-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="text-orange-500 h-10 mr-3" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              <h1 className="text-lg font-semibold text-center my-3">
                Comment définir mon annonce
              </h1>
            </div>
            <div className="p-4 bg-blue-100 text-blue-700 rounded-xl">
              <p>
                Choisir la bonne catégorie lors de l'insertion d'une annonce peut aider à augmenter
                la visibilité, la pertinence et l'efficacité, et éviter tout potentiel refus.
                <br />
                Il est important d'inclure une adresse postale claire et précise pour que les clients potentiels puissent facilement vous trouver.
                <br />
                Assurez-vous d'inclure un numéro de téléphone auquel les clients potentiels peuvent vous joindre.
                <br />
                Gardez vos coordonnées à jour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;