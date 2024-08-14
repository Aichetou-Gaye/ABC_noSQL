# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Pour le prise en main correcte de l'application, il est nécessaire d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation 

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone <https://github.com/Aichetou-Gaye/Survey-App.git>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd Survey-App
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```
    ```bash
    npm install mongodb
    ```

## Documentation des fonctions 

### Employes

- **listEmployes()** : Permets de lister touts les employes;
- **addEmploye()** : Permets d'ajouter un nouveau employe et prends en paramètre l'id, le nom et le role;
- **updateEmploye()** : Permets de modifier les données d'un employé et prends en paramètre l'id, le nom et le role;
- **deleteEmploye()** : Permets de supprimer un employé et prends en paramètre l'id;

### Surveys

- **listSurveys()** : Permets de lister toutes les enquêtes;
- **addSurvey()** : Permets d'ajouter une nouvelle enquête et prends en paramètre l'id, le nom et la description, la date de création de l'enquête, l'employe assigné;
- **updateSurvey()** : Permets de modifier les données d'une enquête et prends en paramètre l'id, le nom et la description, la date de création de l'enquête, l'employe assigné;
- **deleteSurvey()** : Permets de supprimer une enquête et prends en paramètre l'id;

### Questions

- **listQuestions()** : Permets de lister toutes les questions;
- **addQuestion()** : Permets d'ajouter une nouvelle question et prends en paramètre l'id, le titre, le type et l'id de l'enquête;
- **updateQuestion()** : Permets de modifier les données d'un employé et prends en paramètre l'id, le titre, le type et l'id de l'enquête;
- **deleteQuestion()** : Permets de supprimer une question et prends en paramètre l'id;

### Answers

- **listAnswers()** : Permets de lister toutes les reponses;
- **addAnswer()** : Permets d'ajouter une nouvelle reponse et prends en paramètre l'id, le titre et l'id de la question;
- **updateAnswer()** : Permets de modifier les données d'une réponse et prends en paramètre l'id, le titre et l'id de la question;
- **deleteAnswer()** : Permets de supprimer une Answer et prends en paramètre l'id;

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```
## Auteur

Aichetou GAYE

