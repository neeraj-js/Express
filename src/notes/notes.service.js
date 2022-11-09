// const notes=require('../data/nodes-data')
const knexInstance=require('../database/connection')

const getNote=async(noteId)=>{
    const result= await knexInstance('notes').select('*'); // select('*').where('id',noteId)
    console.log(result)
    return result.find((note)=>note.id===noteId);}

module.exports = {
    getNote,
}