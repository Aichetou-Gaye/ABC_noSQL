const surveyModule = require('./surveyModule')
const employeModule = require('./employeModule')
const answerModule = require('./answerModule')
const questionModule = require('./questionModule')


async function main() {
    //Employes

    /*const addEmploye = await employeModule.addEmploye(1, "Aichetou Gaye", "Prise en contact")
    const addEmploye2 = await employeModule.addEmploye(2, "Thillo Seme", "Inscription de donnée")
    const addEmploye4 = await employeModule.addEmploye(3, "Fatima Cissé", "Prise de decision")
    console.log("Added successfully")

    const upEmploye = await employeModule.updateEmploye(3, 'Fatima Sall', 'Mangement projet')
    console.log(upEmploye)

    const delEmploye = await employeModule.delEmploye(4)
    console.log(`${delEmploye} is deleted`)
    const listEmployes = await employeModule.listEmployes()
    console.log(listEmployes)*/

    //Surveys

    /*const addSurvey = await surveyModule.addSurvey(1, "Enquete 001", "Enquete de mentalité", "2024-11-09", 2)
    const addSurvey2 = await surveyModule.addSurvey(2, "Enquete 002", "Enquete de moralité", "2024-10-09", 3)
    const addSurvey4 = await surveyModule.addSurvey(4, "Enquete 004", "Enquete de pull-up", "2024-09-09", 3)
    console.log("Added successfully")

    const upSurvey = await surveyModule.updateSurvey(3, 'Enquête 003', 'Enquête de satisfaction', '2024-07-25', 1)
    console.log(upSurvey)

    const delSurvey = await surveyModule.delSurvey(4)
    console.log(`${delSurvey} is deleted`)
    const listSurvey = await surveyModule.listSurveys()
    console.log(listSurvey)*/

    //Questions

    const addQuestion = await questionModule.addQuestion(7, "Seriez-vous pret a apporter votre aide ?", "boolean", 2)
    const addQuestion2 = await questionModule.addQuestion(8, "Que voulez vous comme amélioration ?", "multiplechoice", 4)
    const addQuestion4 = await questionModule.addQuestion(9, "Qu'est ce manque le plus selon vous?", "singlechoice", 5)
    console.log("Added successfully")

    const upQuestion = await questionModule.updateQuestion(9, "Quelle est le principal secteur actif", 'singlechoice', 3)
    console.log(upQuestion)

    const delQuestion = await questionModule.delQuestion(9)
    console.log(`${delQuestion} is deleted`)
    const listQuestion = await questionModule.listQuestions()
    console.log(listQuestion)

    //Answers

    const addAnswer = await answerModule.addAnswer(6, ['Oui', 'Non'], 7)
    const addAnswer2 = await answerModule.addAnswer(7, ["Plus d'options de produits",
      'Meilleure tarification',
      'Service plus rapide',
      'Amélioration du support client'], 8)
    const addAnswer4 = await answerModule.addAnswer(9, ['Qualité du service',
      'Rapidité du service',
      'Support client',
      'Tarification'], 3)
    console.log("Added successfully")

    const upAnswer = await answerModule.updateAnswer(9, ['Qualité du service',
        'Rapidité du service',
        'Support client',
        'Tarification'], 4)
    console.log(upAnswer)

    const delAnswer = await answerModule.delAnswer(4)
    console.log(`${delAnswer} is deleted`)
    const listAnswer = await answerModule.listAnswers()
    console.log(listAnswer)
    
}

main()