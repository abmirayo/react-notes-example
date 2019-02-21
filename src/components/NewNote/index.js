import React, { useState } from 'react'
import * as actionsNotes from "../../actions/notes";
import { connect } from "react-redux";

const NewNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState('')

  const enviarFormulario = (event) => {
    event.preventDefault()
    addNote(noteText)
    setNoteText('')
  }

  return <form onSubmit={enviarFormulario}>
    <textarea required value={noteText} onChange={(event) => setNoteText(event.target.value)} placeholder={"Escribe aqui la nota"}/>
    <input type="submit" value={"Add note"}/>
  </form>
}

const mapDispatchToProps = dispatch => ({
  addNote: (text) => dispatch(actionsNotes.addNote(text))
})


export default connect(null, mapDispatchToProps)(NewNote)
