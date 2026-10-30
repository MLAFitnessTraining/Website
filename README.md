# MLA Fitness Training

Site vitrine statique de l'association MLA Fitness Training, à Montfort-l'Amaury. Le site présente l'objet de l'association, le Cross Training, le Run&Cross (départ du 13 place de Nickenich puis sortie en forêt avec des exercices de Cross Training tous les 2 km), son horaire du vendredi de 12 h 15 à 13 h 30, les tarifs annuels et les coordonnées de l'association. Les séances ont lieu au 13 place de Nickenich, 78490 Montfort-l'Amaury. La devise « Cours à ton rythme, accélère si tu peux, marche s'il le faut… Mais on termine ensemble » est propre au Run&Cross.

## Fichiers

- `index.html` : contenu et structure du site.
- `confidentialite.html` : informations sur les données personnelles.
- `sitemap.xml` et `robots.txt` : aide à l’exploration et au référencement du site public.
- `styles.css` : styles adaptatifs pour mobile et ordinateur.
- `script.js` : navigation mobile et année du copyright.
- `assets/logo-rectangle.png` : logo de l'association.
- `.github/workflows/pages.yml` : déploiement automatique sur GitHub Pages.

## Déploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` publie le site à chaque mise à jour de la branche `main`.

Dans les paramètres du dépôt, choisir **Settings > Pages > Build and deployment > GitHub Actions**, puis vérifier l'exécution du workflow dans l'onglet **Actions**.

Les horaires, tarifs et coordonnées affichés sont ceux du flyer et des informations associatives fournis. Le siège social et le lieu des séances sont indiqués séparément. Vérifier que les horaires et tarifs sont toujours à jour avant chaque saison.

Le site ne charge pas de traceur ni de ressource graphique ou typographique tierce à l’ouverture. Avant publication, l’association doit vérifier l’exactitude de sa dénomination statutaire et de son adresse, les modalités de conservation des journaux techniques de GitHub Pages, et appliquer les durées de conservation indiquées dans `confidentialite.html`.