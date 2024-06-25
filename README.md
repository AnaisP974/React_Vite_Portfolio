# Créer son portfolio avec React

## Étape 1

On créé un projet vite avec React + TypeScript

`pnpm create vite` ou `npm create vite@latest`

## Étape 2

On initialise le tracking git

`git init`, puis `git add .` et `git commit -m "Initial commit"`

Sur VSCode, on peut directement pusher le projet sur GitHub. Rappel, sur VSCode vous pouvez utiliser l'interface "Source control" (Contrôle de source) pour gérer vos commits sans passer par le terminal.

## Étape 3

On install TailwindCSS, voir la documentation :

https://tailwindcss.com/docs/

`npm install -D tailwindcss`

puis

`npx tailwindcss init` et ajouter les extension `.jsx` `.ts` et `.tsx` dans le fichier `tailwind.config.js`

Créer un fichier `src/input.css` et ajouter le code suivant :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Ensuite, ajouter une commande à `package.json` pour générer et mettre en place la compilation automatique en live :

```json
"scripts": {
    "tailwind": "npx tailwindcss -i ./src/input.css -o ./src/styles.css --watch
"
}
```

## Étape 4

Mittre en place les librairies et package nécessaires :

## REACT ROUTER DOM
- `react-router-dom` est taillé pour la navigation dans une interface react . Il permet de gérer les routes et les navigations.
documantation : https://reactrouter.com/en/main/start/tutorial;

Mise en place minimale : 

```bash
pnpm install react-router-dom
# ou
# npm install react-router-dom
```

On se rend dans le fichier `main.tsx`et on y ajoute les éléments suivants :

L'importantion de `createBrowserRouter` et `RouterProvider` :

```tsx
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
```

Création du routeur. Rappel, le routeur est un système qui a pour objectif la gestion des accès à une application au travers des URLs.

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/skills",
    element: <div>Skills</div>,
  },
  {
    path: "/contact",
    element: <div>Contact</div>,
  },
]);
```

Suite à cela, nous pouvons créer et ajouter des liens avec le composant `NavLink` ou `Link` :

```tsx
<NavLink to="/">Accueil</NavLink>
```