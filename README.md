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

- `react-router-dom` pour la navigation
documantation : https://reactrouter.com/en/main/start/tutorial;
-