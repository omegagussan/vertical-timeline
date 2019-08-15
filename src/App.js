import React from 'react';
import './App.css';
import TimelineContainer from "./components/TimelineContainer";

class App extends React.Component{

  render(){
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
        <div className="App">
          <TimelineContainer data={timelineData}/>
        </div>
    );
  }

}

export default App;
