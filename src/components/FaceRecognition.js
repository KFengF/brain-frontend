import React from 'react';

const style = {
    width: '500px',
    height: 'auto'
}

const FaceRecognition = ({ imgURL, boxes }) => {
    if(imgURL) {
        return(
            <div className="center mt5 relative" style={ style }>
                {
                    boxes.map((box, i) => {
                        const cssStyle = {
                            top: box.top + '%',
                            left: box.left + '%',
                            bottom: box.bottom + '%',
                            right: box.right + '%',
                            boxShadow: '0 0 0 3px #149df2 inset'
                        }
                        return <div key={ i } className="absolute z-1 br3" style={ cssStyle } />
                    })
                }
                <img src={ imgURL } alt="item to recognize" className="w-100 br3 shadow-5" id="inputImg"/>
            </div>
        )
    }else{
        return(<div/>)
    }
}

export default FaceRecognition;