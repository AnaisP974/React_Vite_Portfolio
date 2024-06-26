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

### React Router DOM

`react-router-dom` est taillé pour la navigation dans un interface React. Il permet de gérer les routes et les redirections.

Mise en place minimal :

```bash
pnpm install react-router-dom
# ou
# npm install react-router-dom
```

On se rend dans le fichier `main.tsx`et on y ajoute les éléments suivants :

L'importation de `createBrowserRouter` et `RouterProvider` :

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

Il faut ensuite mettre à disposition le routeur dans l'application avec la classe RouterProvider. Notez que le composant prend une prop `router` qui est le routeur lui-même :

```tsx
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
);
```

Suite à cela, nous pouvons créer et ajouter des liens avec le composant `NavLink` ou `Link` :

```tsx
<NavLink to="/">Accueil</NavLink>
```

### Animate.css

Animate.css est une librairie CSS qui permet de créer des animations facilement. Son installation est simple :

```bash
pnpm i animate.css --save
```

Pour l'utiliser, il suffit d'ajouter d'abor la className "animate__animated" à l'élément que vous souhaitez animer. Ensuite, ajoutez la classe de l'animation que vous souhaitez utiliser. Par exemple, pour un effet de bounce :

```tsx
<div className="animate__animated animate__bounce">Skills</div>
```

La liste des animation disponible [ici](https://animate.style/)

## Étape 5

Organisation du projet : 

src/
  components/
    Nav.tsx
  pages/
    Home.tsx
    Skills.tsx
    Contact.tsx
  main.tsx
  input.css
  styles.css


  ## Étape 6