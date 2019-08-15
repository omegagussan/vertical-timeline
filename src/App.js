import React from 'react';
import './App.css';
import TimelineContainer from "./components/TimelineContainer";

class App extends React.Component{

  render(){
    const header_text = "blog history";
    const timelineData = [
      {
        text: 'Wrote my first blog post ever on Medium',
        date: 'March 03 2017',
        category: {
          tag: 'medium',
          color: '#018f69'
        },
        link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Read more'
        }
      },
      {
        text: 'Wrote my 2nd blog post ever on Medium',
        date: 'March 09 2017',
        category: {
          tag: 'medium',
          color: '#698f01'
        },
        link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Read more'
        }
      },
      {
        text: 'Wrote my 3rd blog post ever on Medium',
        date: 'April 09 2017',
        category: {
          tag: 'medium',
          color: '#8f6901'
        },
        link: {
          url:
              'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
          text: 'Read more'
        }
      }
      // Another object with data
    ];

    return (
        <div className="App" style={{width: "1200px"}}>
          <h1>Event timeline for {header_text}</h1>
          <h3>Nulla tortor libero, congue eu ligula sit amet, accumsan sollicitudin elit. Cras a orci elit. Maecenas sed aliquam odio. Cras nec tortor urna. In sed consectetur justo, accumsan interdum purus. Cras vitae lectus ac quam rhoncus iaculis. Pellentesque in congue enim.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales velit a mauris vestibulum maximus. Curabitur aliquet laoreet nulla ac lobortis. Curabitur ut nunc a magna commodo convallis. Nam at ligula ultrices nisl posuere pretium nec vel dolor. Duis non vestibulum dui, non euismod leo. Sed dictum congue odio eu placerat. Donec porttitor a ipsum consequat pharetra. Sed nec blandit erat. Quisque ut euismod lacus. Pellentesque risus eros, finibus sit amet sem quis, euismod convallis lacus. Quisque non orci mollis orci elementum congue et at justo. Integer magna justo, molestie sed imperdiet ac, commodo eu sapien. Cras vestibulum tristique tristique. Pellentesque feugiat tincidunt risus non commodo.
          </p>
            <TimelineContainer data={timelineData}/>
        </div>
    );
  }

}

export default App;
