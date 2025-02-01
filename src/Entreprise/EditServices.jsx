import { useState } from "react";
import Entreprise_Nav from './Components/Entreprise_Nav';
import { Label, Select } from "flowbite-react";

const EditServices = () => {
  const [showDocumentInput, setShowDocumentInput] = useState(false);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (
      selectedCategory === "Soutien Scolaire et Coaching" ||
      selectedCategory === "Services pour Enfants"
    ) {
      setShowDocumentInput(true);
    } else {
      setShowDocumentInput(false);
    }
  };

  return (
    <>
      <Entreprise_Nav />
      <div className="flex items-center justify-center mt-20 p-4 bg-gray-50">
        <div className="w-2/3 bg-white rounded-xl p-8">
        <h1 className="text-4xl mb-8 text-center font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Modifier le <span class="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">service</span></h1>
            <form>
              {}
              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="Catégories" value="Catégories*" />
                </div>
                <Select id="Catégories" required onChange={handleCategoryChange}>
                  <option>Services Ménagers</option>
                  <option>Services de Bricolage</option>
                  <option>Soutien Scolaire et Coaching</option>
                  <option>Services de Jardinage</option>
                  <option>Services de Bien-Être</option>
                  <option>Services pour Enfants</option>
                  <option>Services pour Personnes Âgées</option>
                  <option>Services Technologiques</option>
                  <option>Transport et Livraison</option>
                  <option>Services Animaliers</option>
                </Select>
              </div>

              {}
              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="Services" value="Services*" />
                </div>
                <Select id="Services" required>
                  <option>Service</option>
                  <option>Services Ménagers</option>
                  <option>Services de Bricolage</option>
                  <option>Soutien Scolaire et Coaching</option>
                  <option>Services de Jardinage</option>
                  <option>Services de Bien-Être</option>
                  <option>Services pour Enfants</option>
                  <option>Services pour Personnes Âgées</option>
                  <option>Services Technologiques</option>
                  <option>Transport et Livraison</option>
                  <option>Services Animaliers</option>
                </Select>
              </div>

              {}
              {showDocumentInput && (
                <div className="w-full mb-4">
                  <div className="mb-2 block">
                    <Label htmlFor="document" value="Veuillez insérer un document (CV, certificat, etc.)*" />
                  </div>
                  <input
                    type="file"
                    id="document"
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"                    required
                  />
                </div>
              )}

              {}
              <p className="text-gray-600 my-4">Adresse principale de l'annonce</p>

              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="secteur" value="Secteur*" />
                </div>
                <Select id="secteur" required>
                  <option>Meknes</option>
                  <option>Ancienne Medina</option>
                  <option>Belle vue</option>
                  <option>Berrima</option>
                  <option>Bourj Moulay Omar</option>
                  <option>Dar Kebira</option>
                  <option>El Bassatine</option>
                  <option>El Mechouar Stinia</option>
                  <option>Hamria</option>
                  <option>Hay Salam</option>
                </Select>
              </div>


              <h2 className="text-xl font-bold mb-4">Information de l'annonce</h2>
              <p className="text-gray-600 mb-6">Ajouter plus de détails sur votre annonce pour un maximum de visbilité</p>

              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label value="Descriptif de l'annonce*" />
                </div>
                <div className="relative">
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Écrivez vos pensées ici..."></textarea>
                </div>
              </div>


              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label value="Prix(DH)*" />
                </div>
                <div className="relative">
                  <input type="number" id="number-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="100" required />
                </div>
              </div>

              <button type="button" class="focus:outline-none w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900">Enregistrer</button>

            </form>


          </div>



</div>



    </>
  );
};

export default EditServices;
