import Navbar from "../Components/Nav";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import logosm from "../img/logo-sm.png";
import background from "../img/bg-icon.jpg";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../features/auth/authSlice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(register(userData));
        if (!result.error) {
            navigate('/login');
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
                                Inscrivez-vous 
                            </h1>
                        </div>

                        <div className="flex p-8 flex-col col-span-3 items-center justify-center rounded bg-gray-50 dark:bg-gray-800 w-full">
                            <div className="px-20">
                                <h1 className="text-center text-xl font-semibold my-6">Inscrivez-vous rapidement avec votre e-mail</h1>
                                {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                                <form className="flex flex-col gap-4 w-full " onSubmit={handleSubmit}>
                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="firstName">Nom</Label>
                                        </div>
                                        <TextInput
                                            id="firstName"
                                            type="text"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="lastName">Prénom</Label>
                                        </div>
                                        <TextInput
                                            id="lastName"
                                            type="text"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div>
                                        <div className="mb-2 block">
                                            <Label htmlFor="email">Email</Label>
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
                                            <Label htmlFor="password">Mot de passe</Label>
                                        </div>
                                        <TextInput
                                            id="password"
                                            type="password"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="remember" />
                                        <Label htmlFor="remember">J'accepte <a href="" className="text-orange-500 hover:underline hover:text-orange-800">les conditions d'utilisation</a></Label>
                                    </div>
                                    <Button
                                        type="submit"
                                        className="bg-orange-500 hover:bg-orange-900"
                                        disabled={loading}
                                    >
                                        {loading ? 'Inscription...' : "S'inscrire"}
                                    </Button>
                                </form>

                                <div className="inline-flex items-center justify-center w-full">
                                    <hr className="w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
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
