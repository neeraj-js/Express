const { getNote } = require("./notes.service");

const read = (req,res,next)=>{
    const noteId=Number(req.params.noteId);
    const foundNote=getNote(noteId)
    res.json({data: foundNote});
}
module.exports={ read }