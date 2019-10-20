import React from 'react';

const cssPattern = {
    background: 'radial-gradient(circle farthest-side at 0% 50%,#fb1 23.5%,rgba(240,166,17,0) 0)21px 30px, radial-gradient(circle farthest-side at 0% 50%,#B71 24%,rgba(240,166,17,0) 0)19px 30px, linear-gradient(#fb1 14%,rgba(240,166,17,0) 0, rgba(240,166,17,0) 85%,#fb1 0)0 0, linear-gradient(150deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0, linear-gradient(30deg,#fb1 24%,#B71 0,#B71 26%,rgba(240,166,17,0) 0,rgba(240,166,17,0) 74%,#B71 0,#B71 76%,#fb1 0)0 0, linear-gradient(90deg,#B71 2%,#fb1 0,#fb1 98%,#B71 0%)0 0 #fb1',
    backgroundSize: '40px 60px',
    maxWidth: '800px',
    width: '96%'
}

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) =>{
    return (
        <div className="flex items-center flex-column">
            <p className="f3 tc mv5">
                This Magic Brain will detect faces in your pictures! Give it a try.
            </p>
            <div className="flex justify-center pa4 shadow-5 br3" style={ cssPattern }>
                <input placeholder="Enter image URL here..." onChange={ onInputChange } className="f4 pa2 w-70" />
                <button onClick={ onPictureSubmit } className="w-30 grow f4 ph3 pv2 dib white bg-light-purple pointer b--black ">Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm;