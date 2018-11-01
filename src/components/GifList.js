import React from "react"

class GifList extends React.Component{
  render(){
    return(
      <div>
        {this.renderGifs()}
      </div>
    )
  }
  renderGifs(){
    return this.props.gifs.map(gifSrc => <img src = {gifSrc} alt = ""/>)
  }
}

export default GifList
