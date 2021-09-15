import React from "react"
import DisplayNews from '../components/DisplayNews';

class NewsContainer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
          loading: false,
          news: []

        }
      };

    componentDidMount(){
        this.setState({
          loading: true
        })

        fetch('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=G9k66bXLmyMt6vv61ul58QwnTAau9ItH')
            .then(response => response.json())
            .then(data => { 
                this.setState({
                loading: false,
                news : data.results
            })
        })
      }
    render(){
        console.log(this.state.news)
        if(this.state.loading){
            return (
                <div>
                  <h2 id="loading">Loading</h2>
                </div>
            )
        }

        const news = this.state.news.map( (item) => 
            <DisplayNews  
                title={item.title} 
                abstract={item.abstract} 
                link={item.url}
                img={item.multimedia[0].url}
                imgAlt={item.multimedia[0].caption}
                source={item.multimedia[0].copyright}
            />
        )
        return(
            // <div>
            //   {news}
            // </div>
            <div className="grid">
            <div className="flex">
              {news}
            </div>
            <div className="flex weather-container">
              {/* <Weather/> */}
            </div>

          </div>

        );
    }
}
export default NewsContainer