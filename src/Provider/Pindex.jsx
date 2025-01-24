import Provider_Nav from "./Components/Provider_Nav";
import Provider from "/src/img/provider.png";
import providerbg from "/src/img/providerbg.png";
import Category from "../Client/Components/Category";
import Logo from "/src/img/logo-sm.png";
import Providertips from "/src/img/providertips.png";
import Providerask from "/src/img/providerask.png";
import { Link } from "react-router-dom";
import Footer from "../Client/Components/Footer";

const Pindex = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <Provider_Nav />

                <div className="flex items-center justify-center"
                    style={{
                        backgroundImage: `url(${providerbg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="flex flex-row w-3/4 pt-40">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:gray-800">
                                Bienvenue sur <span className="text-orange-500">DOMILY</span> Cher Prestataire !
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Rejoignez-nous pour offrir des services exceptionnels à nos clients !
                            </p>
                        </div>

                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src={Provider} alt="Provider" />
                        </div>
                    </div>
                </div>



                <div class="flex flex-row mt-8 justify-center w-full p-4 bg-white border border-gray-100 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div class="flex flex-row mr-6">
                        <a href="" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                            <img src={Logo} class="h-14 w-auto" alt="Flowbite Logo" />
                        </a>
                        <p class="flex items-center text-md font-normal text-gray-500 dark:text-gray-400">Cliquez sur le bouton ci-dessous pour lancer une offre et commencer à proposer vos services.</p>
                    </div>
                    
                    <Link to="/service" className="py-2 px-3 flex items-center bg-orange-500 font-semibold text-base text-white hover:text-white rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-yellow-300 dark:bg-orange-500 dark:hover:bg-orange-400 focus:outline-none dark:focus:ring-yellow-800">Lancer une offre
                    </Link>
                </div>



                <div className="bg-gray-50">
                    <Category />
                </div>

                <div className="flex items-center justify-center" >
                    <div className="flex flex-row py-14">

                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex m-8">
                            <img src={Providertips} alt="Provider" className="h-96" />
                        </div>

                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:gray-800">
                                Conseils pour <span className="text-orange-500">réussir</span>
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Pour tirer le meilleur parti de notre plateforme, suivez ces conseils :                            </p>
                            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Fournissez des descriptions détaillées et honnêtes de vos services.</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Utilisez des photos de haute qualité pour mettre en valeur votre travail.</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Répondez rapidement aux demandes des clients pour renforcer la confiance.</span>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="text-base font-medium leading-tight text-gray-900 dark:text-white">Demandez à vos clients satisfaits de laisser des avis pour accroître votre crédibilité.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50">
                    <div className="flex flex-row w-3/4 py-10">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:gray-800">
                                Besoin <span className="text-orange-500">d’aide</span> ?
                            </h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Notre équipe d’assistance est là pour vous accompagner à chaque étape. N’hésitez pas à nous contacter si vous avez des questions ou besoin de conseils.
                            </p>
                            <Link to="/emailus" className="py-2 px-3 bg-orange-500 font-semibold text-base text-white rounded-lg">Contactez-nous</Link>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src={Providerask} alt="Provider" className="h-96" />
                        </div>

                    </div>
                </div>
                <Footer />

            </div>
        </>
    );
};

export default Pindex;
