import { Component } from "react"
import Movie from './Movie'

const movies = [
  {
    title: "The Fellowship of the Ring",
    hours: 2,
    min: 58
  },
  {
    title: "The Two Towers",
    hours: 2,
    min: 59
  },{
    title: "The Return of the King",
    hours: 3,
    min: 21
  }
]

export default class App extends Component {
  
  render() {
    const movieComponents = movies.map((movie, index) => {
      return (
        <Movie
          key={`Movie-list-${index}`} 
          title={movie.title} 
          hours={movie.hours} 
          min={movie.min} 
        />
      )
    })
    return (
      <>
        {movieComponents}
      </>
    )
  }
}