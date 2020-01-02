import React from 'react'
import { connect } from 'react-redux';
// import { login } from '../actions/login';
// import Leaguepick from '../components/leaguepick';
// import UserProfile from '../components/UserProfile'
// import { Redirect } from 'react-router-dom'

class NbaNews extends React.Component {

    state = {
        articles: []
    }
    

 componentDidMount() {
     fetch('https://newsapi.org/v2/everything?domains=nba.com&apiKey=f44ccf725ca9471596da059a5defc2fc')
     .then(resp => resp.json())
     .then(resp => this.cleanArticles(resp.articles))
 }

 cleanArticles(array) {
     let new_articles = array.filter(article => article.content != null)
    //  debugger
     new_articles.forEach(article => {
         let indexOfArticle = new_articles.indexOf(article)
         let new_content = article.content.split('[+')[0]
        //  debugger
         new_articles[indexOfArticle].content = new_content
     })
    //  debugger
    this.setState({articles: new_articles})
 }
  openArticle = (event) => {
    window.open(event.target.id, "_blank");
  }
//  generateSlides = () => {
//    debugger
//    this.state.articles.map(article => {
//      return (
//       <div className="carousel-item">
//       <img className="d-block w-100" src={article.urlToImage} alt="Second slide" />
//       <div className="carousel-caption d-none d-md-block">
//     <h5>{article.title}</h5>
//     <p>{article.content} <button className = 'btn btn-primary'>Read More</button></p>
//   </div>
//     </div>
//      )
//    } )
//  }

render() {
    return(
            <div className="NBA-news-container"><h1 className="infrared">NEWS</h1>{this.state.articles.length === 0 ? <div>No news</div> : <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    {this.state.articles.slice(1).map(article => <li data-target="#carouselExampleIndicators" data-slide-to={this.state.articles.indexOf(article).toString()}></li>)}
    {/* <li data-target="#carouselExampleIndicators" data-slide-to={this.state.articles.indexOf(article).toString()}></li> */}
    
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={this.state.articles[0].urlToImage} alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5 className="sergio">{this.state.articles[0].title}</h5>
    <p className="sergio">{this.state.articles[0].content} <button id={this.state.articles[0].url} onClick={this.openArticle} className='btn btn-primary'>Read More</button></p>
  </div>
    </div>
    {this.state.articles.slice(1).map(article => {
     return (
      <div className="carousel-item">
      <img className="d-block w-100" src={article.urlToImage} alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5 className="sergio">{article.title}</h5>
    <p className="sergio">{article.content} <button id={article.url} onClick={this.openArticle} className='btn btn-primary'>Read More</button></p>
  </div>
     </div>)})}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>}</div>
    )
}

}
// const mapStateToProps = state => {
//     return {
//         currentUser: state.login.currentUser
//     } 
// }
export default connect(null, null)(NbaNews)