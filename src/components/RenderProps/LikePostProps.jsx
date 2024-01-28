import React from "react";
import CommonProps from './CommonProps';

export default function likePostProps(){
    return(
        <CommonProps>
            {/* this is a children */}

            {
                /* this is a function*/
                ({like, handleLike}) => (
                    <button onClick={handleLike}>Like Post{like}</button>
                )
            }
        </CommonProps>
    )
}

