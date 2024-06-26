import { useState } from "react";
import Nav from "../components/nav";
import Project from "../components/Project";
import "../styles.css";

/**
 * Skills = composant pour afficher les compétences, 
 * il s'agit du contenu d'une page complète
 * située sur la route "/skills"
 * @returns tous les projets aillant la techno choisie
 */
function Skills() {
  const [choice, setChoice] = useState("All");

  const listSkills = [
    {
      name: "Symfony",
      image: "https://api.iconify.design/mdi:symfony.svg?color=%23ffffff",
      desc: "Framework PHP for modern and robust web applications",
    },
    {
      name: "Adonis JS",
      image:
        "https://api.iconify.design/tabler:brand-adonis-js.svg?color=%235077d3",
      desc: "Node fullstack Framework for modern and robust web applications",
    },
    {
      name: "React",
      image:
        "https://api.iconify.design/vscode-icons:file-type-reactjs.svg?color=%23d35050",
      desc: "JS library for building UI web applications",
    },
    {
      name: "DevOps",
      image: "https://api.iconify.design/bi:git.svg?color=%23d35050",
      desc: "CI/CD with GitHub Action, VPS mounting and administration",
    },
  ];
  return (
    <>
      <Nav />
      <section className="flex flex-wrap lg:flex-nowrap gap-5">
        <div className="text-center w-full lg:w-1/3 p-8">
          <h1 className="text-3xl m-8">MY SKILLS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            facilis similique libero est quidem ipsa non magnam. Eum, nobis
            numquam, dignissimos perferendis sapiente maxime tempora neque quae
            mollitia odio molestias.
          </p>
          <button 
            data-choice="All" 
            onClick={() => setChoice("All")}
          >
            All
          </button>
        </div>

        <ul className="flex flex-wrap w-full lg:w-2/3">
          {listSkills.map((skill) => (
            <li 
              className="p-8 w-1/2" 
              key={skill.name} 
              data-choice={ skill.name } 
              onClick={() => setChoice(skill.name)} 
            >
              <img src={skill.image} alt={skill.name + " logo"} width={32} className="transition ease-in-out hover:scale-125" />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
              <p className="">{skill.desc}</p>
            </li>
          ))}
        </ul>
      </section>
      <Project prop={choice} />
    </>
  );
}

export default Skills;
