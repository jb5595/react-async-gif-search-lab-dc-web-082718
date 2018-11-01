import React from "react"
import GifList from "../components/GifList"
import GifSearch from "../components/GifSearch"

class GifListContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchTerm: "",
      gifs: []
    }
  }
  updateSearchTerm = (e) =>{
    this.setState({
      searchTerm: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    let url = `http://api.giphy.com/v1/gifs/search?q=${this.state.searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`
    fetch(url)
    .then(response => response.json())
    .then(resp => this.setState({
      gifs:resp.data.slice(0,3).map(data =>data.images.original.url)
    }))
  }

  render(){
    return(
      <div>
        <GifSearch handleSubmit = {this.handleSubmit} updateSearchTerm = {this.updateSearchTerm}/>
        <GifList gifs = {this.state.gifs}/>
      </div>
    )
  }

}


export default GifListContainer
