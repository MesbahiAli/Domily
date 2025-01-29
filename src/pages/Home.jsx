import Nav from "../Components/Nav";
import Services from "../img/services.png";
import { useNavigate } from 'react-router-dom';
import { Carousel } from "flowbite-react";
import logo from "../img/logo-sm.png";
import service from "../img/service.png";

const Home = () => { 
  return (
    <>
      <Nav />

      

      <main className="pt-20 w-full justify-center">
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Vos services à domicile, en toute simplicité.
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                DOMILY est une plateforme innovante qui connecte les utilisateurs avec des professionnels qualifiés pour répondre à tous leurs besoins à domicile. Que vous cherchiez un artisan, un jardinier, un ménage professionnel, ou tout autre service, DOMILY est là pour vous accompagner.
              </p>
              <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                {[
                  { label: "Admin", href: "" },
                  { label: "Client", href: "" },
                  { label: "Fournisseur", href: "" },
                  { label: "Entreprise", href: "" },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white bg-orange-500 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 hover:text-orange-500 focus:ring-4 focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src={service} alt="" className="w-full" />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 dark:bg-gray-800">
          <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
            {[
              {
                heading: "Notre mission est simple",
                content:
                  "Connecter les utilisateurs avec des experts qualifiés tout en offrant une expérience rapide, sécurisée et conviviale.",
                listItems: [
                  "Services de qualité",
                  "Facilité d'utilisation",
                  "Flux de travail simplifié",
                  "Sécurité ",
                  "Support dédié",
                ],
              }].map(({ heading, content, listItems }, index) => (
                <div key={index} className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                  {index % 2 === 0 && <img src={Services} alt="Services" className="w-full mb-4 rounded-lg lg:mb-0" />}

                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                      {heading}
                    </h2>
                    <p className="mb-8 font-light lg:text-xl">{content}</p>
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                      {listItems.map((item) => (
                        <li key={item} className="flex space-x-3">
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-purple-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section className=" bg-orange-50">
          <div className="mx-auto pl-4">
            {[
              {
                heading: "Notre mission est simple",
                content:
                  "connecter les utilisateurs avec des experts qualifiés tout en offrant une expérience rapide, sécurisée et conviviale.",
                listItems: [
                  "Services de qualité",
                  "Facilité d'utilisation",
                  "Flux de travail simplifié",
                  "Sécurité ",
                  "Support dédié",
                ],
              }].map(({ heading, content, listItems }, index) => (
                <div key={index} className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                  {index % 2 !== 0 && <img src={Services} alt="Services" className="w-full mb-4 rounded-lg lg:mb-0" />}
                  <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                      {heading}
                    </h2>
                    <p className="mb-8 font-light lg:text-xl">{content}</p>
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                      {listItems.map((item) => (
                        <li key={item} className="flex space-x-3">
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-orange-500 dark:text-purple-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </section>


        <div className="h-56 sm:h-64 px-72 xl:h-80 2xl:h-96">
          <Carousel pauseOnHover>
            <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
            <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
          </Carousel>
        </div>


        <section class="bg-gray-50 dark:bg-gray-800">
          <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
            <figure class="max-w-screen-md mx-auto">
              <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
              </svg>
              <blockquote>
                <p class="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"DOMILY est tout simplement génial. Il propose de nombreux composants prédéfinis et des pages adaptées à chaque utilisateur, allant de l'écran de connexion à un tableau de bord interactif. Un choix parfait pour votre solution de services à domicile."</p>
              </blockquote>
              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <img src="" alt="" />
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="mr-3 font-medium text-gray-900 dark:text-white">Anas</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Étudiant</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>



      </main>
    </>
  )
};

export default Home;