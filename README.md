# ex2

Les bases de données non relationelles apportent une série d'avantages qui sont soit techniques soit structurels, tout en conservant la possibilité d'établir des relations par clés étrangères lorsque cela est nécéssaire. 

Un de ces avantage et danger incontestable est la souplesse dans les modèles et la possibilité d'intégrer des sous documents dans des documents.

Nous utiliserons dans cet exercice MongoDB, et pour y accéder nous utilisons la bibliothèque de mongoose, qui s'occupe pour nous de rendre abstraits nos modèles.

Pour rendre les modèles utilisables avec typescript (gros gros avantage), nous utilisons typegoose qui nous permet de définir des interfaces qu'on peut utiliser a la fois pour manipuler les objets de la base de donnée mais aussi pour définir les modèles au travers des décorateurs ES2019. Les modèles ne sont donc pas crée avec mongoose pas avec ces interfaces améliorées.

Enfin, aujourd'hui nous avons besoin d'applications web modulaires. React permet de définir des composants et de les manipuler au travers de leur état (state), ou de leur propriétés (props, qui sont héritées). 





