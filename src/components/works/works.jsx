import React, { Component } from 'react';
import Work from "./work.jsx";

class Works extends Component {
  constructor(props) {
   super(props);
   this.state = {
     workTitle: "",
   };
  }
  render() {
    const workList = [
      {
        name: 'foltana',
        image: 'foltana'
      },
      {
        name: 'foltana',
        image: 'foltana'
      },
      {
        name: 'foltana',
        image: 'foltana'
      },
      {
        name: 'foltana',
        image: 'foltana'
      }
    ]
    return (
      <div className="myWorks">
        <h2 className="flex flex-center"><span>Works</span></h2>
        <ul className="flex flex-wrap">
          {workList.map((workItem) => {
            return (
              <Work
                name = {workItem.name}
                image = {workItem.image}
              />
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Works ;
