# Portfolio en React

Bienvenue sur mon portfolio, un projet réalisé avec **React v18.2.0**. Ce site présente mes projets, mes compétences et offre un aperçu de mon travail en tant que développeuse.

## 🌟 Objectif du projet

Créer un portfolio interactif, moderne et responsive permettant de présenter mes réalisations professionnelles et personnelles. Ce portfolio est conçu pour offrir une navigation fluide et intuitive, tout en mettant en valeur mes projets.

## 🚀 Fonctionnalités

- 🖼️ **Présentation des projets** : Une section dédiée à mes réalisations avec des vignettes cliquables menant aux projets en ligne.
- 🎨 **Animations fluides** : Utilisation de **Framer Motion** pour ajouter des transitions élégantes et interactives.
- 🛠️ **Architecture modulaire** : Composants réutilisables pour une maintenance et une évolutivité facilitées.
- 📱 **Responsive Design** : Une interface adaptée aux mobiles, tablettes et ordinateurs.

## 📚 Technologies utilisées

- [React](https://reactjs.org/) (v18.2.0) : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- [React Router](https://reactrouter.com/) (v7.1.1) : Gestion des routes pour la navigation.
- [Framer Motion](https://www.framer.com/motion/) (v11.15.0) : Gestion des animations.
- [React Icons](https://react-icons.github.io/react-icons/) : Pack d'icônes vectorielles.
- [React Transition Group](https://reactcommunity.org/react-transition-group/) (v4.4.5) : Animations des transitions de composants.

## 💽 Arborescence du projet

Voici un aperçu de la structure du projet :

```
portfolio/
│
├── public/
│   ├── index.html      # Point d'entrée principal
│   ├── images/         # Images utilisées pour les projets
│   └── favicon.ico     # Icône du site
│
├── src/
│   ├── components/     # Composants React (Header, Footer, AnimatedRoutes, etc.)
│   ├── styles/         # Feuilles de style CSS globales
│   ├── App.js          # Composant principal
│   ├── index.js        # Point d'entrée React
│   └── assets/         # Ressources supplémentaires (images, icônes, etc.)
│
├── .gitignore          # Fichiers à ignorer par Git
├── package.json        # Dépendances et scripts du projet
└── README.md           # Documentation du projet
```

## 🛠️ Installation et utilisation

### Prérequis

- **Node.js** (v16 ou supérieur)
- **npm** (v8 ou supérieur)

### Étapes

1. Clonez le projet sur votre machine locale :

   ```bash
   git clone https://github.com/audrey-ebrotie/portfolio-react.git
   cd portfolio-react
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez l'application en mode développement :

   ```bash
   npm start
   ```

4. Ouvrez le site dans votre navigateur à l'adresse suivante :

   ```
   http://localhost:3000
   ```

5. Pour générer un build de production :

   ```bash
   npm run build
   ```

6. Pour déployer le site sur GitHub Pages :

   ```bash
   npm run deploy
   ```
