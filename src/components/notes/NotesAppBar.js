import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { startSaveNote, startUploading } from '../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = ( e ) => {
        const file = e.target.files[0];
        if( file ){
            dispatch(startUploading( file ));
        }
    }

    return (
        <div className="notes__appbar">
            <span>11 de Agosto de 2021</span>

            <input type="file"
            id='fileSelector'
            name='file'
            style={{display:'none'}} 
            onChange={ handleFileChange }/>

            <div>
                <button className="btn"
                onClick={ handlePictureClick }>
                    Picture
                </button>

                <button className="btn"
                onClick={ handleSave }>
                    Save
                </button>
            </div>
        </div>
    )
}
