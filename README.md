# ex2

Les bases de données non relationelles apportent une série d'avantages qui sont soit techniques soit structurels, tout en conservant la possibilité d'établir des relations par clés étrangères lorsque cela est nécéssaire. 

Un de ces avantage et danger incontestable est la souplesse dans les modèles et la possibilité d'intégrer des sous documents dans des documents.

Nous utiliserons dans cet exercice MongoDB, et pour y accéder nous utilisons la bibliothèque de mongoose, qui s'occupe pour nous de rendre abstraits nos modèles.

Pour rendre les modèles utilisables avec typescript (gros gros avantage), nous utilisons typegoose qui nous permet de définir des interfaces qu'on peut utiliser a la fois pour manipuler les objets de la base de donnée mais aussi pour définir les modèles au travers des décorateurs ES2019. Les modèles ne sont donc pas crée avec mongoose pas avec ces interfaces améliorées.

Enfin, aujourd'hui nous avons besoin d'applications web modulaires. React permet de définir des composants et de les manipuler au travers de leur état (state), ou de leur propriétés (props, qui sont héritées). 



# Pour lancer le projet

cd client
npm i
npm run build
cd ../api
npm i
npm run server

Avec un navigateur, aller sur http://localhost:8000


#1 
identifiant : guest
mot de passe : GUEST

Pouvez vous nous expliquer (en commentaire dans login par exemple) comment le login fonctionne exactement ? Celà vous semble-t-il sécurisé ? 


#2
Le login marche, mais bon ... il est un peu à l'ancienne, la page se recharge ! 

Objectif : refaire le même système de login mais sans aucun rechargement de la page.

#3
Nous voulons maintenant ajouter des candidats, autant qu'on veut. Le modèle est déjà prêt, il  s'appelle "UserModel".

Faites un formulaire (dans l'espace privé), dans lequel on entre le nom d'une personne, et avec un bouton "ajouter". Le formulaire doit créer un nouvel utilisateur dans la base de donnée.

#4
Nous voulons maintenant voir la liste des utilisateurs ajoutés.  
Dans "componentDidMount", récupérer la liste des utilisateurs.  
Vous pourrez ensuite les afficher 

#5
Nous voulons maintenant que cette liste se mette à jour automatiquement quand on ajoute un nouvel utilisateur. Qu'on n'ai pas besoin de recharger la page ...

#6
A coté de chaque utilisateur nous voulons un bouton "bloquer". Il faudra que ce bouton change la valeur "bloqued" dans la base de donnée.

Le modèle resemble à ça :
```json
{
    "user": "nom",
    "password": "motDePasse",
    "access" : {
        "bloqued": false
    }
}
```

#7
Quand la liste de candidats s'affiche, le bouton "bloqued" se désactive si la personne est effectivement bloquée.

#8
En temps réel c'est toujours mieux : le bouton "bloqued" se désactive tout seul quand on clique dessus et que la personne a été bloquée avec succès.

#9 
Dans l'accueil de la page privée, afficher "Bienvenue {user}" avec le nom de la personne.