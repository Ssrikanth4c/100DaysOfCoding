import React from 'react'
import './App.css';
import QuoteBox from './QuoteBox.jsx';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      randomQuoteData:'',
      randomQuote:'',
      randomColor: ''
    }
  }
  getQuotes=()=>{
    const url='https://type.fit/api/quotes';
    
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
      // console.log(data)
      let randomNumber= Math.floor(Math.random()*data.length);
      this.setState({randomQuoteData: data, randomQuote:data[randomNumber]});
      // console.log(data[randomNumber])
    });
  }
  getRandomColor=()=>{
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log({randomColor})
    this.setState({randomColor})
  }
  componentWillMount(){
    this.getQuotes();
    this.getRandomColor();
  }
  render(){
    const {randomQuote, randomQuoteData, randomColor} = this.state;
    return (
      <div className="app__container" style={{background:randomColor?`#${randomColor}`:'red'}}>
        {/* quote box */}
        <QuoteBox  data={randomQuoteData} randomColor={randomColor?randomColor:'red'} quote={randomQuote} />
      </div>
    );
  }
}

export default App;
