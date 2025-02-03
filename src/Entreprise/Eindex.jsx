import providerbg from "/src/img/bg-entreprise.png";
import Category from "../Entreprise/Components/Category";
import Logo from "/src/img/logo-sm.png";
import Entreprise from "/src/img/entreprise.png";
import Entreprise2 from "/src/img/entreprise2.png";
import { Link } from "react-router-dom";
import Footer from "../Client/Components/Footer";
import Entreprise_Nav from "./Components/Entreprise_Nav";

const Eindex = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <Entreprise_Nav />

                <div className="flex items-center justify-center mt-16"
                    style={{
                        backgroundImage: `url(${providerbg})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="pb-28 pt-32">
                        <div className="flex items-center justify-center pb-8">
                            <img src={Logo} alt="" className="h-28" />
                        </div>
                        <div className="place-self-center w-2/3 text-center">
                            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:gray-800">
                                Simplifiez votre quotidien avec nos services pour <span className="text-orange-500">entreprises</span>
                            </h1>
                            <p className="mb-8 font-normal text-gray-500 text-xl dark:text-gray-400">
                                Des solutions sur mesure pour vos collaborateurs et espaces.                            </p>
                        </div>
                    </div>
                </div>



                <div class="flex flex-row justify-center w-full p-4 bg-white border border-gray-100 shadow-sm dark:bg-gray-700 dark:border-gray-600">
                    <div class="flex flex-row mr-6">
                        <a href="" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
                            <img src={Logo} class="h-14 w-auto" alt="Flowbite Logo" />
                        </a>
                        <p class="flex items-center text-md font-normal text-gray-500 dark:text-gray-400">Cliquez sur le bouton ci-dessous pour lancer une offre et commencer à proposer vos services.</p>
                    </div>

                    <Link to="/createservice" className="py-2 px-3 flex items-center bg-orange-500 font-semibold text-base text-white hover:text-white rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-yellow-300 dark:bg-orange-500 dark:hover:bg-orange-400 focus:outline-none dark:focus:ring-yellow-800">Lancer un service
                    </Link>
                </div>



                <div className="bg-gray-50">
                    <Category />
                </div>

                <div className="flex items-center justify-center" >
                    <div className="flex flex-row py-14">

                        <div className="hidden lg:mt-0 lg:flex m-8 items-center justify-center p-4">
                            <img src={Entreprise} alt="Provider" className="h-96" />
                        </div>

                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:gray-800">
                                Pourquoi choisir nos<span className="text-orange-500"> services</span> ?
                            </h1>

                            <ul role="list" class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p class="text-base font-medium mb-2 leading-tight text-gray-900 dark:text-white">Gain de temps et meilleure productivité</p>
                                        <p class="text-base font-light leading-tight text-gray-900 dark:text-white">
                                            Libérez-vous des tâches secondaires pour vous concentrer sur votre activité principale.
                                        </p>
                                    </div>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p class="text-base font-medium mb-2 leading-tight text-gray-900 dark:text-white">Flexibilité et personnalisation</p>
                                        <p class="text-base font-light leading-tight text-gray-900 dark:text-white">
                                            Des prestations adaptées à vos besoins spécifiques, à la fréquence souhaitée.
                                        </p>
                                    </div>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p class="text-base font-medium mb-2 leading-tight text-gray-900 dark:text-white">Expertise et fiabilité</p>
                                        <p class="text-base font-light leading-tight text-gray-900 dark:text-white">
                                            Des intervenants qualifiés, formés pour répondre aux exigences professionnelles.
                                        </p>
                                    </div>
                                </li>
                                <li class="flex space-x-3">
                                    <svg class="flex-shrink-0 w-5 h-5 text-blue-800 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    <div>
                                        <p class="text-base font-medium mb-2 leading-tight text-gray-900 dark:text-white">Gestion administrative simplifiée</p>
                                        <p class="text-base font-light leading-tight text-gray-900 dark:text-white">
                                            Facturation claire et transparente, sans contraintes supplémentaires.
                                        </p>
                                    </div>
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
                            <img src={Entreprise2} alt="Provider" className="h-96" />
                        </div>

                    </div>
                </div>
                <Footer />

            </div>
        </>
    );
};

export default Eindex;
