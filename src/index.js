
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import config from '../config';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';



class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('surfboards');
  }

  videoSearch(term){

    const videoSearch = _.debounce((term) =>{this.videoSearch(term)}, 300)

    YTSearch({key: config.API_KEY , term: term}, (videos) =>{
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      });
    });
  }


  render(){
    return (
      <div>
      <p></p>
        <SearchBar onSearchTermChange={(term) => this.videoSearch(term:term)}/>
        <VideoDetail video ={this.state.selectedVideo}/>
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo:selectedVideo})} videos={this.state.videos} />

      </div>
    );
  }

}


ReactDOM.render(<App/>,document.querySelector('.container'));
