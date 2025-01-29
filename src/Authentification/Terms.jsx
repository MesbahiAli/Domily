import { Navbar } from "flowbite-react";
import logo from "../img/logo.png";
import Footer from "../Client/Components/Footer";


const Terms = () => {

    return (

        <div>
      <Navbar fluid className="fixed top-0 z-50 w-full shadow-md">
        <Navbar.Brand href="">
          <img src={logo} className="mr-3 h-6 sm:h-14" alt="Flowbite React Logo" />
        </Navbar.Brand>
      </Navbar>

            <div className="w-2/3 p-10 mt-20 mx-auto flex flex-col font-mono">
                <h1 className="text-3xl font-semibold">Termes & Conditions</h1>
                <h2 className="text-xl font-medium my-3">Lisez les conditions générales de DOMILY.</h2>
                <hr class="w-full h-1 mx-auto my-4 bg-orange-400 rounded dark:bg-gray-700" />
                <h2 className="text-2xl text-red-800 font-semibold my-3">Section 1 – Introduction</h2>
                <p>
                    Bienvenue sur DOMILY, une application web de services à domicile opérant dans la ville de Meknès. En utilisant notre plateforme, vous acceptez les termes et conditions décrits ci-dessous. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
                </p>
                <h2 className="text-2xl text-red-800 font-semibold my-3">Section 2 – Collecte et utilisation des données</h2>
                <h3 className="text-xl text-red-800 font-semibold mb-3">1. Données collectées</h3>
                <p>
                    Nous collectons les informations suivantes pour assurer le bon fonctionnement de notre plateforme : <br />
                    - Données personnelles : nom, prénom, adresse e-mail, numéro de téléphone, adresse. <br />
                    - Données de navigation : adresse IP, type de navigateur, temps passé sur la plateforme.
                </p>
                <h3 className="text-xl text-red-800 font-semibold my-3">2. Utilisation des données</h3>
                <p>
                    Les données collectées sont utilisées pour : <br />
                    - Fournir les services demandés. <br />
                    - Améliorer l'expérience utilisateur. <br />
                    - Communiquer avec les utilisateurs pour le support ou les mises à jour. <br />
                    - Respecter les obligations légales.
                </p>
                <h3 className="text-xl text-red-800 font-semibold my-3">3. Protection des données</h3>
                <p>
                    Nous nous engageons à protéger vos données personnelles en utilisant des mesures techniques et organisationnelles appropriées, telles que : <br />
                    - Le chiffrement des données sensibles. <br />
                    - L'accès restreint aux données uniquement aux employés autorisés. <br />
                    - La mise en place de pare-feu et de systèmes anti-intrusion.
                </p>

                <h3 className="text-xl text-red-800 font-semibold my-3">4. Droits des utilisateurs</h3>
                <p>
                    Conformément aux lois en vigueur, vous disposez des droits suivants : <br />
                    - Droit d'accès : consulter les données que nous détenons sur vous. <br />
                    - Droit de rectification : corriger ou mettre à jour vos informations. <br />
                    - Droit de suppression : demander la suppression de vos données, sauf si leur conservation est requise par la loi. <br />
                    - Droit d'opposition : refuser l'utilisation de vos données à des fins spécifiques, comme le marketing. <br />
                    Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail suivante : support@domily.com.
                </p>
                <h3 className="text-xl text-red-800 font-semibold my-3">5. Responsabilités des utilisateurs</h3>
                <p>
                    En utilisant notre plateforme, vous vous engagez à : <br />
                    - Fournir des informations exactes et à jour. <br />
                    - Utiliser nos services de manière légale et respectueuse. <br />
                    - Ne pas tenter d'accéder aux données d'autres utilisateurs ou de compromettre la sécurité de la plateforme.
                </p>

                <h3 className="text-xl text-red-800 font-semibold my-3">6. Modifications des termes et conditions</h3>
                <p>
                    DOMILY se réserve le droit de modifier ces termes et conditions à tout moment. Toute modification sera communiquée via notre plateforme ou par e-mail. En continuant à utiliser nos services après la mise à jour, vous acceptez les nouvelles conditions.
                </p>
                <h3 className="text-xl text-red-800 font-semibold my-3">7. Contact</h3>
                <p>
                    Pour toute question ou préoccupation concernant ces termes et conditions, veuillez nous écrire à l'adresse suivante : support@domily.com <br />
                    Merci d'utiliser DOMILY pour vos besoins en services à domicile à Meknès.
                </p>
            </div>
            <Footer />
        </div>
    )

}

export default Terms;
