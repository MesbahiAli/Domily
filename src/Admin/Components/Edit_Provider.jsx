import { Button, Drawer, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";

export function Edit_Provider({ provider, onUpdateProvider, onClose }) {
    const [formData, setFormData] = useState({
        id: provider.id,
        nom: provider.nom,
        prenom: provider.prenom,
        email: provider.email,
        phone: provider.phone,
        about: provider.about || "",
        sexe: provider.sexe || "Ma", // Default to Male if not provided
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateProvider(formData); // Pass the updated provider data to the parent
    };

    return (
        <Drawer open={true} onClose={onClose} className="mt-16">
            <h1 className="mt-4 text-2xl font-bold text-orange-500">Modification</h1>
            <Drawer.Items>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <Label htmlFor="nom" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Nom
                        </Label>
                        <TextInput
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Nom"
                            type="text"
                        />
                    </div>

                    <div className="mb-3 mt-3">
                        <Label htmlFor="prenom" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Prénom
                        </Label>
                        <TextInput
                            id="prenom"
                            name="prenom"
                            value={formData.prenom}
                            onChange={handleChange}
                            placeholder="Prénom"
                            type="text"
                        />
                    </div>

                    <div className="mb-3 mt-3">
                        <Label htmlFor="email" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Email
                        </Label>
                        <TextInput
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="exemple@gmail.com"
                            type="email"
                        />
                    </div>

                    <div className="mb-3 mt-3">
                        <Label htmlFor="phone" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Numéro de téléphone
                        </Label>
                        <TextInput
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+212"
                            type="tel"
                        />
                    </div>

                    <div className="mb-3 mt-3">
                        <Label htmlFor="sexe" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Sexe
                        </Label>
                        <select
                            id="sexe"
                            name="sexe"
                            value={formData.sexe}
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="Ma">Male</option>
                            <option value="Fe">Female</option>
                        </select>
                    </div>

                    <div className="mb-3 mt-3">
                        <Label htmlFor="description" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            A propos
                        </Label>
                        <Textarea
                            id="about"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            placeholder="A propos..."
                        />
                    </div>

                    <div className="mb-3">
                        <Button type="submit" className="w-full bg-orange-500 font-semibold">
                            Enregistrer
                        </Button>
                    </div>
                </form>
            </Drawer.Items>
        </Drawer>
    );
}
