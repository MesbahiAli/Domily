import { useState } from "react";
import { Button, Drawer, Label, TextInput } from "flowbite-react";

export function Edit_Entreprise({ entreprise, onUpdateEntreprise, onClose }) {
    const [formData, setFormData] = useState({
        id: entreprise.id,
        nom: entreprise.nom,
        email: entreprise.email,
        phone: entreprise.phone,
        adresse: entreprise.adresse,
        website: entreprise.website,
        nombreEmployes: entreprise.nombreEmployes,
        about: entreprise.about,
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
        onUpdateEntreprise(formData); // Pass the updated entreprise data to the parent
    };

    return (
        <Drawer open={true} onClose={onClose} className="mt-16">
            <h1 className="mt-4 text-2xl font-bold text-orange-500">Modification</h1>
            <Drawer.Items>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mt-3">
                        <Label htmlFor="nom" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Nom de l'entreprise
                        </Label>
                        <TextInput
                            id="nom"
                            name="nom"
                            value={formData.nom}
                            onChange={handleChange}
                            placeholder="Nom de l'entreprise"
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
                        <Label htmlFor="adresse" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Adresse
                        </Label>
                        <TextInput
                            id="adresse"
                            name="adresse"
                            value={formData.adresse}
                            onChange={handleChange}
                            placeholder="Adresse"
                            type="text"
                        />
                    </div>

                    <div className="mb-3 mt-3">
                        <Label htmlFor="website" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Site web
                        </Label>
                        <TextInput
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder="Site web"
                            type="text"
                        />
                    </div>

                    <div className="mb-3 mt-3">
                        <Label htmlFor="nombreEmployes" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Nombre d'employés
                        </Label>
                        <TextInput
                            id="nombreEmployes"
                            name="nombreEmployes"
                            value={formData.nombreEmployes}
                            onChange={handleChange}
                            placeholder="Nombre d'employés"
                            type="number"
                        />
                    </div>

                    <div className="mb-3 mt-3">
                        <Label htmlFor="about" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            A propos
                        </Label>
                        <TextInput
                            id="about"
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            placeholder="A propos"
                            type="text"
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