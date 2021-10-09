import { db } from "../components/firebase/firebase-config"


export const loadNotes = async (uid) => {
   const noteSanp = await db.collection(`${ uid }/journal/notes`).get();

   const notes = [];

   noteSanp.forEach( snapHijo => {
    notes.push({
        id: snapHijo.id,
        ...snapHijo.data()
    })
 })

   return notes;
}