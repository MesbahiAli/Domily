import Navbar from "../Components/Nav";
import Cindex from "../Client/Cindex";
import { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import logosm from "../img/logo-sm.png";
import google from "../img/google icon.png";
import background from "../img/bg-icon.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(login(credentials));
        if (!result.error) {
            navigate('/Cindex');
        }
    };

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
                                Vous n'avez pas de compte ? <a onClick={() => navigate('/register')} className="font-semibold hover:underline text-orange-600 cursor-auto" >S'inscrire</a>
                            </h2>
                        </div>

                        <div className="flex p-8 flex-col col-span-3 items-center justify-center rounded bg-gray-50 dark:bg-gray-800 w-full">
                            <div className="px-20">
                                <h1 className="text-center text-xl font-semibold my-6">Connectez-vous rapidement avec votre numéro de téléphone ou e-mail</h1>
                                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                                <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="email1" value="Numéro de téléphone ou e-mail" />
                                        </div>
                                        <TextInput
                                            id="email"
                                            type="email"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="password1" value="Mot de passe" />
                                        </div>
                                        <TextInput
                                            id="password"
                                            type="password"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <Button type="submit" className="bg-orange-500 hover:bg-orange-900" disabled={loading}
                                    >                                    {loading ? 'Connexion...' : 'Se connecter'}
                                    </Button>
                                </form>

                                <div className="inline-flex items-center justify-center w-full">
                                    <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
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




