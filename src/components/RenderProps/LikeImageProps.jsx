import React from "react";
import CommonProps from './CommonProps';

export default function likeImageProps(){
    return(
        <CommonProps>
            {/* this is a children */}

            {
                /* this is a function*/
                ({like, handleLike}) => (
                    <button onClick={handleLike}>Like Image{like}</button>
                )
            }
        </CommonProps>
    )
}

