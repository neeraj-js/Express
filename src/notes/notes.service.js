const notes=require('../data/nodes-data')

const getNote=(noteId)=>{
    return notes.find((note)=>note.id===noteId);}

module.exports= {
    getNote,
}