import React, { Component } from 'react';
import Header from './components/header';
import api from './services/api';
import NewsList from './components/news_list';


class App extends Component{
    state = {
      infos:[],
      filter:[]
  }
  async componentDidMount(){
      this.fetchAPI();
  }
 fetchAPI = async () => {
     const info = await api.get('/');
     this.setState({
         infos:info.data
     })
     console.log(this.state.infos)
 }
 
 getKeywords = (event) => {
   let keywords = event.target.value;
   let filter = this.state.infos.filter((item)=>{
     return item.title.indexOf(keywords) > -1
   })
   this.setState({
     filter
   })
 }
  render(){
   console.log(this.state.filter)
    return(
          <>
          <Header input={this.getKeywords}/>
          <NewsList news = {this.state.filter.length === 0 ? this.state.infos:this.state.filter}/>
        </>
    )
  }
}
export default App;


