import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { activeNote, starDeleting } from '../actions/notes';
import { useForm } from '../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector(state => state.notes);

    const [formValues, handleInputChange, reset] =  useForm( note );
    const { body , title,id } = formValues;
    
    const activeId = useRef( note.id );
    useEffect(() => {
        
        if ( note.id !== activeId.current ){
            reset( note );
            activeId.current = note.id
        }

    }, [ note, reset ])

    useEffect(() => {
        
        dispatch( activeNote(formValues.id, { ...formValues }))

    }, [ formValues , dispatch ]);

    const handleDelte = () => {
        dispatch( starDeleting( id ));
    }

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                <input type="text"
                placeholder="Some awesome title"
                className="notes__title-input"
                autoComplete="off" 
                value={ title }
                onChange={ handleInputChange }
                name="title"/>

                <textarea
                placeholder="What happend today"
                className="notes__textarea"
                value={ body }
                name="body"
                onChange={ handleInputChange }>

                </textarea>

                {
                    ( note.url) 
                    &&
                    (<div className="notes__image">
                    <img src={ note.url } alt="Perro" />
                </div>)
                }
            </div>
            <button class="btn btn-danger"
            onClick={ handleDelte }>Delete</button>
        </div>
    )
}
