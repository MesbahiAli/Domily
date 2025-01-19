import Provider_Nav from "./Components/Provider_Nav";
import { Label, Select } from "flowbite-react";
import LocationInput from "./Components/Localisation";

const Service = () => {
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
            <form action="">

              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="Catégories" value="Catégories*" />
                </div>
                <Select id="Catégories" required>
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

              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label htmlFor="Sous catégories" value="Sous Catégories*" />
                </div>
                <Select id="Sous catégories" required>
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



              <h2 className="text-xl font-bold mb-4">Votre Adresse</h2>
              <p className="text-gray-600 mb-6">Adresse principale de l'annonce</p>

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



              <h2 className="text-xl font-bold mb-4">Vos coordonnées</h2>
              <p className="text-gray-600 mb-6">Les clients peuvent vous contacter directement sur votre numéro de téléphone.</p>

              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label value="Numéro de téléphone*" />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                      <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                    </svg>
                  </div>
                  <input type="text" id="phone-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="+212" required />
                </div>
              </div>


              <h2 className="text-xl font-bold mb-4">Information de l'annonce</h2>
              <p className="text-gray-600 mb-6">Ajouter plus de détails sur votre annonce pour un maximum de visbilité</p>
              
              <div className="w-full mb-4">
                <div className="mb-2 block">
                  <Label value="Titre de l'annonce*" />
                </div>
                <div className="relative">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Services de Jardinage" required />
                </div>
              </div>

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



            </form>


            <div className="w-full">
              <div className="mb-2 block">
                <Label value="Localisation*" />
              </div>
              <LocationInput />
            </div>
          </div>





          <div className="col-span-2 bg-white rounded-xl p-6 shadow-md">
            <div className="flex flex-row items-center justify-center pb-3">

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="text-orange-500 h-10 mr-3" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
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
