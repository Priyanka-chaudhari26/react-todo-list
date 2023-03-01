import React from "react";
import "../Components/ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from 'react-flip-move';
function ListItems(props) {
    const items = props.items;
    const listitems = items.map((item) =>{
        return (
            
            <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text} />
                    <span>
                    <FontAwesomeIcon className="faicons" title="Edit ToDo" icon="pencil" 
                    onClick={ 
                        (e)=> {props.setUpdate(e.target.value, item.key)}
                    }/>

                    <FontAwesomeIcon className="faicons" title="Delete ToDo" icon="trash" 
                    onClick={ ()=> props.deleteItem(item.key)
                    }
                    />
                    
                    </span>
                </p>
            </div>
            
        );
    });
   

  return (
    <div>
    <FlipMove duration={500}
  delay={10}
  easing={'cubic-bezier(0.25, 0.5, 0.75, 1)'}
  staggerDurationBy={30}
  staggerDelayBy={10}>
     {listitems}
     </FlipMove>
     </div>
  )
}

export default ListItems