import Navbar from "../Components/Nav";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import logosm from "../img/logo-sm.png";
import google from "../img/google icon.png";
import background from "../img/bg-icon.jpg";


const Login = () => {
    return (
      
<>
<Navbar />
<div className="p-4 w-full fixed top-3">
    <div className="mt-14">
        <div className="grid grid-cols-5 gap-4 mb-4 h-screen">
            <div
                className="flex flex-col col-span-2 p-3 items-center justify-center rounded dark:bg-gray-800 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${background})` }}>
                <span className="h-auto w-20">
                    <img src={logosm} alt="" />
                </span>
                <h1 className="text-center font-bold text-lg py-4">
                    Connectez-vous à votre compte
                </h1>
                <h2>
                    Vous n'avez pas de compte ? <a href="" className="font-semibold hover:underline text-orange-600">S'inscrire</a>
                </h2>
            </div>

            <div className="flex p-8 flex-col col-span-3 items-center justify-center rounded bg-gray-50 dark:bg-gray-800 w-full">
                <div className="px-20">
                    <h1 className="text-center text-xl font-semibold my-6">Connectez-vous rapidement avec votre numéro de téléphone ou e-mail</h1>
                    <form className="flex flex-col gap-4 w-full">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Numéro de téléphone ou e-mail" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Mot de passe" />
                            </div>
                            <TextInput id="password1" type="password" required />
                        </div>
                        <Button type="submit" className="bg-orange-500 hover:bg-orange-900">Se connecter</Button>
                    </form>

                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                    </div>

                    <div className="flex flex-col w-full items-center justify-center">
                        <img src={google} alt="" className="h-auto w-20 hover:w-24" />
                        <Button type="submit" className="bg-gray-100 border-orange-500 font-semibold hover:text-white text-orange-500 w-full my-3">Continuer en tant qu'entreprise</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</>
    )
};

export default Login;




