import React from "react"

const GifSearch =(props) =>{
    return(
      <div className = "GifSearch">
          <form onSubmit = {props.handleSubmit}>
            <label htmlFor = "searchTerm">Enter a Search Term</label>
            <input type = "text" name = "searchTerm" onChange = {props.updateSearchTerm}/>
            <input type = "submit" className = "btn btn-success"/>
          </form>
      </div>
    )

}

export default GifSearch
