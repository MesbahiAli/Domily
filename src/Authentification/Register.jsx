import Navbar from "../Components/Nav";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import logosm from "../img/logo-sm.png";
import google from "../img/google icon.png";
import background from "../img/bg-icon.jpg";


const Register = () => {
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
                        Inscrivez-vous 
                        </h1>
                    </div>

                    <div className="flex p-8 flex-col col-span-3 items-center justify-center rounded bg-gray-50 dark:bg-gray-800 w-full">
                        <div className="px-20">
                            <h1 className="text-center text-xl font-semibold my-6">Inscrivez-vous rapidement avec votre e-mail</h1>
                            <form className="flex flex-col gap-4 w-full">

                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="Nom" value="Nom" />
                                    </div>
                                    <TextInput id="Nom" type="text" placeholder="" required />
                                </div>

                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="Prénom" value="Prénom" />
                                    </div>
                                    <TextInput id="Prénom" type="text" required />
                                </div>

                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="Email" value="Email" />
                                    </div>
                                    <TextInput id="Email" type="email" required />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="password1" value="Mot de passe" />
                                    </div>
                                    <TextInput id="password1" type="password" required />
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">J'accepte <a href="" className="text-orange-500 hover:underline hover:text-orange-800">les conditions d'utilisation</a></Label>
                                </div>
                                <Button type="submit" className="bg-orange-500 hover:bg-orange-900">S'inscrire</Button>
                            </form>

                            <div class="inline-flex items-center justify-center w-full">
                                <hr class="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
                            </div>

                            <Label htmlFor="remember">Vous avez déjà un compte ? <a href="" className="text-orange-500 hover:underline hover:text-orange-800">Connectez-vous </a></Label>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
    )
};

export default Register;