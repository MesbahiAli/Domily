
import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { Profiler, useState } from "react";
import { HiEnvelope } from "react-icons/hi2";

export function Edit_Provider() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => setIsOpen(false);

    return (
        <>
            <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => setIsOpen(true)}>
                Modifier
            </button>

            <Drawer open={isOpen} onClose={handleClose} className="mt-16">
                <h1 className="mt-4 text-2xl font-bold text-orange-500">Modification</h1>
                <Drawer.Items>
                    <form action="#">
                        <div className="mb-3 mt-3">
                            <Label htmlFor="nom" className=" mb-2 block text-orange-600 text-left font-semibold text-xl">
                                Nom
                            </Label>
                            <TextInput id="nom" name="nom" placeholder="nom" type="text" />
                        </div>

                        <div className="mb-3 mt-3">
                            <Label htmlFor="prénom" className=" mb-2 block text-orange-600 text-left font-semibold text-xl">
                                Prénom
                            </Label>
                            <TextInput id="prénom" name="prénom" placeholder="prénom" type="text" />
                        </div>

                        <div className="mb-3 mt-3">
                            <Label htmlFor="prénom" className=" mb-2 block text-orange-600 text-left font-semibold text-xl">
                                Age
                            </Label>
                            <TextInput id="prénom" name="prénom" placeholder="prénom" type="number" />
                        </div>

                        <div className="mb-3 mt-3">
                            <Label htmlFor="sexe" className=" mb-2 block text-orange-600 text-left font-semibold text-xl">
                                Sexe
                            </Label>
                            <select id="sexe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Sexe</option>
                                <option value="Ma">Male</option>
                                <option value="Fe">Femele</option>
                            </select>
                        </div>

                        <div className="mb-3 mt-3">
                            <Label htmlFor="email" className=" mb-2 block text-orange-600 text-left font-semibold text-xl">
                                Email
                            </Label>
                            <TextInput id="email" name="email" placeholder="exemple@gmail.com" type="email" />
                        </div>

                        <div className="mb-3 mt-3">
                            <Label htmlFor="tel" className=" mb-2 block text-orange-600 text-left font-semibold text-xl">
                                Numéro de téléphone
                            </Label>
                            <TextInput id="tel" name="tel" placeholder="+212" type="tel" />
                        </div>

                        <div className="mb-3 mt-3">
                            <Label htmlFor="description" className=" mb-2 block text-orange-600 text-left font-semibold text-xl">
                                A propos
                            </Label>
                            <Textarea id="description" name="description" placeholder="A propos..."></Textarea>
                        </div>

                        <div className="mb-3">
                            <Button type="submit" className="w-full bg-orange-500 font-semibold">
                                Enregister
                            </Button>
                        </div>
                    </form>
                </Drawer.Items>
            </Drawer>
        </>
    );
}
