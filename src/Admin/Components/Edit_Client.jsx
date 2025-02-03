import { Button, Drawer, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export function Edit_Client({ client, onUpdateClient, onClose }) {
    const [formData, setFormData] = useState({
        id: client.id,
        nom: client.nom,
        prenom: client.prenom,
        email: client.email,
        phone: client.phone,
        secteur: client.secteur,
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
        onUpdateClient(formData); // Pass the updated client data to the parent
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
                        <Label htmlFor="secteur" className="mb-2 block text-orange-600 text-left font-semibold text-xl">
                            Secteur
                        </Label>
                        <TextInput
                            id="secteur"
                            name="secteur"
                            value={formData.secteur}
                            onChange={handleChange}
                            placeholder="Secteur"
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