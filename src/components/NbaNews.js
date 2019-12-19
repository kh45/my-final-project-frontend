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
     debugger
    this.setState({articles: new_articles})
 }

render() {
    return(
            <div className="NBA-news-container"><h1>NEWS</h1>{this.state.articles.length === 0 ? <div>No news</div> : <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={this.state.articles[0].urlToImage} alt="First slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>{this.state.articles[0].title}</h5>
    <p>{this.state.articles[0].content} <button className = 'btn btn-primary'>Read More</button></p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={this.state.articles[1].urlToImage} alt="Second slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>{this.state.articles[1].title}</h5>
    <p>{this.state.articles[1].content} <button className = 'btn btn-primary'>Read More</button></p>
  </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={this.state.articles[2].urlToImage} alt="Third slide" />
      <div className="carousel-caption d-none d-md-block">
    <h5>{this.state.articles[2].title}</h5>
    <p>{this.state.articles[2].content} <button className = 'btn btn-primary'>Read More</button></p>
  </div>
    </div>
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
const mapStateToProps = state => {
    return {
        currentUser: state.login.currentUser
    } 
}
export default connect(mapStateToProps, null)(NbaNews)