const db = require('./config/database')

const database = db.db("survey_satisfaction")     
const collection = database.collection("employes");

async function addEmploye(employeId, name, role) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({employeId})
        if (findId) {
            throw new Error("Cet identifiant existe déjà")
        }
        const data = {employeId, name, role}
        
        const result = await collection.insertOne(data)
        return result
    }catch(error) { 
        throw error
    } finally {
        await connection.close()
    }
}

async function listEmployes() {
    const connection = await db.connect()
    try {
        const result = await collection.find({}).toArray()
        return result 
    }catch(error) {
        throw error
    } finally {
        await connection.close()
    }
}

async function updateEmploye(employeId, name, role) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({employeId})
        if (!findId) {
            throw new Error("Cet identifiant n'existe pas")
        }
        const idUp = {employeId}
        const data = {$set : {name: name, role : role}}
        const result = await collection.updateOne(idUp, data)
        return result
    }catch(error) { 
        throw error
    } finally {
        await connection.close()
    }
}

async function deleteEmploye(employeId) {
    const connection = await db.connect()
    try {
        const findId = await collection.findOne({employeId})
        if (!findId) {
            throw new Error("Cet identifiant n'existe pas")
        }
        const result = await collection.deleteOne({employeId : employeId})
        return result
    }catch(error) { 
        throw error
    } finally {
        await connection.close()
    }
}

module.exports = {
    addEmploye,
    listEmployes,
    updateEmploye,
    deleteEmploye,
}