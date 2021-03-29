import React from "react";
import "./note-list.scss";

import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { Button } from "@material-ui/core";


export default function NoteList({savedNote}) {

    // console.log(savedNote, 'NOTE LIST')
    //   const createNoteList = () => {
    // return <div>{savedNote.noteTitle}</div>
//       if (savedNote !== undefined){


    //           return (
    //               <div className="notes">
    //       <div className="notes__title"></div>
    //       <div className="notes__description">e.description</div>
    //       <div className="delete-button__wrapper">
    //         <Button>
    //           <DeleteForeverIcon className="delete-button" />
    //         </Button>
    //       </div>
    //     </div>
    //   );
    // });
    
// } ;

  

  return (
    <div className="notes__wrapper">
        {savedNote.map(elem =>

      <div className="notes" key={elem.id}>
        <div className="notes__title">{elem.noteTitle}</div>
        <div className="notes__description">{elem.noteDescription}</div>
        <div className="delete-button__wrapper">
          <Button>
            <DeleteForeverIcon className="delete-button" />
          </Button>
        </div>
      </div>)}
      </div>
    
  );
}
