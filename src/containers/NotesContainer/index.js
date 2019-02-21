import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as actionsNotes from '../../actions/notes'
import Note from "../../components/Note";
import NewNote from "../../components/NewNote";

const NotesContainer = ({ notes, notesFetchLoading, fetchNotes, addNote }) => {
  // Effect when mounting
  useEffect(() => {
    fetchNotes()
  }, [notes.length])

  return <div className="notes-container">
    {notesFetchLoading && <div className="downloading">Cargando</div>}
    {notes.map( note =>
      <Note noteText={note.noteText} key={note._id}/>
    )}
    <NewNote/>
  </div>
}

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(actionsNotes.fetchNotes()),
  addNote: (text) => dispatch(actionsNotes.addNote(text))
})

const mapStateToProps = (state) => ({
  notes: state.notes,
  notesFetchLoading: state.notesFetchLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)
