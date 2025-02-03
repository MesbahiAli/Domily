import Admin_Nav from "./Components/Admin_Nav";
import Bgadmin from "/src/img/bg-admin.png";
import Users from "./Components/Users";
import Logo from "/src/img/logo-sm.png";
import Providertips from "/src/img/providertips.png";
import Providerask from "/src/img/providerask.png";
import { Link } from "react-router-dom";
import Carousel from "./Components/Carousel";
import Rotation from "./Components/Rotation";

const Aindex = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <Admin_Nav />

                <div className="flex items-center justify-left p-16 mt-16 rounded-3xl"
                    style={{
                        backgroundImage: `url(${Bgadmin})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="pb-28 pt-32 w-2/3">
                        <div className="flex items-center justify-right pb-8">
                            <img src={Logo} alt="" className="h-28" />
                        </div>
                        <div className="place-self-center justify-left">
                            <h1 className="mb-4 text-4xl text-white font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:gray-800">
                                Bienvenue sur votre interface d'<span className="text-orange-500">administration</span>
                            </h1>
                            <p className="mb-8 font-normal text-gray-500 text-xl dark:text-gray-400">
                                Gérez efficacement les services, les utilisateurs et les intervenants de la plateforme.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center py-10 bg-gray-50">
                    <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Gérer les comptes <span class="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-blue-600">utilisateurs</span></h1>
                    <Rotation />
                </div>

            </div>
        </>
    );
};

export default Aindex;
