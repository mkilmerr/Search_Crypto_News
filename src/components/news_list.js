import React, { Component } from 'react';


class NewsList extends Component{
   
    render(){
        return(
            <div>
               {
                   this.props.news.map(item => {
                       return(
                           <div className="newsitem "key={item.id}>
                               
                               <img  align="left" src={item.source.favicon}></img>
                               <h2>{item.title}</h2>
                               <p>{item.description} <a href={item.url} target="_blank">Confira na íntegra</a> </p>
                               

                           </div>
                       )
                   })
               } 
            </div>
        )
    }
}

export default NewsList;