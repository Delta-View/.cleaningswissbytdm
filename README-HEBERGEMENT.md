# Mise en ligne (FTP)

1. Envoyer TOUT le contenu du dossier `site/` à la racine du domaine (souvent `public_html/` ou `www/`), fichiers cachés compris (`.htaccess`).
2. Vérifier que `index.html`, `css/`, `js/`, `fonts/`, `img/` sont à la racine, pas dans un sous-dossier.
3. Le site est statique : aucun PHP, aucune base de données, aucun cookie, donc pas de bandeau de consentement nécessaire.
4. `.htaccess` redirige vers https://www.cleaningswissbytdm.ch : à retirer si l'hébergeur n'a pas encore de certificat HTTPS.
5. Changer le numéro WhatsApp : remplacer `41763781908` dans `index.html` et `404.html`.
