/**
 * Interface pour le TypeScript :
 * Nous créeons un nouveau type Project
 * qui décrit les propriétés d'un projet.
 * Cela permettra de définir la structure
 * des données que nous allons utiliser dans notre composant.
 * 
 * Concernant le Props, il s'agit d'une interface
 * qui définit les propriétés et leur types.
*/
interface Project {
    image: string;
    name: string;
    desc: string;
    techno: string[];
}

interface Props {
    prop: string;
}

/**
 * Project:
 * Composant pour afficher la liste des projets
 * sous forme de cartes. avec la prise en charge
 * d'un filter depuis une action dans le composant
 * parent.
 */
export default function Project({ prop }: Props) { // Ici, Props est issue de l'interface Props et on attend un objet de type Props qui contient un attribut prop de type string.
    // Ici on type le tableau de données
    const listProjects: Project[] = [
        {
            image: "https://source.unsplash.com/random/400x400/?chocolate",
            name: "e-commerce Sneakers",
            desc: "E-commerce shop for Sneaker Family, a brand new operator of the best and most seeking sneakers in the world.",
            techno: ["All","Symfony","DevOps"],
        },
        {
            image: "https://source.unsplash.com/random/400x400/?blog",
            name: "Blog Platform",
            desc: "A platform for bloggers to share their thoughts and ideas with the world.",
            techno: ["All","Adonis JS","React"],
        },
        {
            image: "https://source.unsplash.com/random/400x400/?",
            name: "Project Management Tool",
            desc: "A tool for managing projects, tasks, and teams.",
            techno: ["All","Symfony","React"],
        },
        {
            image: "https://source.unsplash.com/random/400x400/?",
            name: "Automated Testing Platform",
            desc: "A platform for automating testing processes in software development.",
            techno: ["All","Adonis JS","DevOps"],
        },
        {
            image: "https://source.unsplash.com/random/400x400/?",
            name: "Healthcare Management System",
            desc: "A system for managing patient records and healthcare services.",
            techno: ["All","Symfony","DevOps"],
        },
        {
            image: "https://source.unsplash.com/random/400x400/?",
            name: "E-learning Platform",
            desc: "A platform for online learning and education.",
            techno: ["All","Adonis JS","React"],
        },
    ]

    // Filtre
    const results = listProjects.filter((project) => project.techno.includes(prop));

    return (
    <>
        <div className="grid grid-cols-3 gap-5 px-5 py-10">
            {
                results.map((p) => ( // Boucle sur les projets filtrés avec .map
                    <div
                    key={ p.name }
                    className="p-3 text-center border rounded-md border-neutral-700">
                        <img src={p.image} alt="" className="mb-3" />
                        <h4 className="text-slate-50">{p.name}</h4>
                        <p className="text-slate-500">{p.desc}</p>
                    </div>
             ))
            }
        </div>
    </>
);
}
