const surveyModule = require("./surveyModule");
const employeModule = require("./employeModule");
const answerModule = require("./answerModule");
const questionModule = require("./questionModule");

async function main() {
  try {
    //Employes
    const addEmploye = await employeModule.addEmploye(
      7,
      "Aichetou Gaye",
      "Prise en contact"
    );
    const addEmploye2 = await employeModule.addEmploye(
      8,
      "Thillo Seme",
      "Inscription de donnée"
    );
    const addEmploye4 = await employeModule.addEmploye(
      6,
      "Fatima Cissé",
      "Prise de decision"
    );
    console.log("Added successfully");

    const upEmploye = await employeModule.updateEmploye(
      6,
      "Fatima Sall",
      "Mangement projet"
    );
    console.log("Updated successfully");

    const deleteEmploye = await employeModule.deleteEmploye(1);
    console.log(`Deleted Successfully`);
    const listEmployes = await employeModule.listEmployes();
    console.log(listEmployes);

    //Surveys

    const addSurvey = await surveyModule.addSurvey(
      1,
      "Enquete 001",
      "Enquete de mentalité",
      "2024-11-09",
      2
    );
    const addSurvey2 = await surveyModule.addSurvey(
      2,
      "Enquete 002",
      "Enquete de moralité",
      "2024-10-09",
      3
    );
    const addSurvey4 = await surveyModule.addSurvey(
      4,
      "Enquete 004",
      "Enquete de pull-up",
      "2024-09-09",
      3
    );
    console.log("Added successfully");

    const upSurvey = await surveyModule.updateSurvey(
      3,
      "Enquête 003",
      "Enquête de satisfaction",
      "2024-07-25",
      1
    );
    console.log("Updated successfully");

    const deleteSurvey = await surveyModule.deleteSurvey(14);
    console.log(`Deleted Successfully`);
    const listSurvey = await surveyModule.listSurveys();
    console.log(listSurvey);

    //Questions

    const addQuestion = await questionModule.addQuestion(
      6,
      "Seriez-vous pret a apporter votre aide ?",
      "boolean",
      2
    );
    const addQuestion2 = await questionModule.addQuestion(
      8,
      "Que voulez vous comme amélioration ?",
      "multiplechoice",
      4
    );
    const addQuestion4 = await questionModule.addQuestion(
      9,
      "Qu'est ce manque le plus selon vous?",
      "singlechoice",
      5
    );
    console.log("Added successfully");

    const upQuestion = await questionModule.updateQuestion(
      9,
      "Quelle est le principal secteur actif",
      "singlechoice",
      3
    );
    console.log("Updated successfully");

    const deleteQuestion = await questionModule.deleteQuestion(9);
    console.log(`Deleted Successfully`);
    const listQuestion = await questionModule.listQuestions();
    console.log(listQuestion);

    //Answers

    const addAnswer = await answerModule.addAnswer(6, ["Oui", "Non"], 7);
    const addAnswer2 = await answerModule.addAnswer(
      7,
      [
        "Plus d'options de produits",
        "Meilleure tarification",
        "Service plus rapide",
        "Amélioration du support client",
      ],
      8
    );
    const addAnswer4 = await answerModule.addAnswer(
      9,
      [
        "Qualité du service",
        "Rapidité du service",
        "Support client",
        "Tarification",
      ],
      3
    );
    console.log("Added successfully");

    const upAnswer = await answerModule.updateAnswer(
      9,
      [
        "Qualité du service",
        "Rapidité du service",
        "Support client",
        "Tarification",
      ],
      4
    );
    console.log("Updated successfully");

    const deleteAnswer = await answerModule.deleteAnswer(4);
    console.log(`Deleted Successfully`);
    const listAnswer = await answerModule.listAnswers();
    console.log(listAnswer);

  } catch (error) {
    console.log(error.message);
  }
}

main();
