import React from 'react'

const url = 'https://type.fit/api/quotes';

const Quote = () => {
    const [randomQuote, setRandomQuote] = React.useState(null);
    const [randomColor, setRandomColor] = React.useState('');

    const getQuote = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setRandomQuote(data[Math.floor(Math.random() * data.length)]))
        .catch((error) => console.log(error));
        
        generateRandomColor();
    }

    const generateRandomColor = ()=>{
        const marks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "";
        for(let i=0; i<6; i++){
         hexColor += marks[Math.floor(Math.random()*16)];
        }
        let tempRandomColor =  `#${hexColor}`;
        
        document.body.style.backgroundColor=tempRandomColor;
        setRandomColor(tempRandomColor);
    }

    React.useEffect(() => {
        getQuote();
    }, []);

  return ( 
          randomQuote && (<div id="quote-box">
                            <div id="text" style={{color:randomColor}}>
                                <i className='fa fa-quote-left'></i>
                                <span className='quote-text'>{randomQuote.text}</span>
                            </div>
                            <div id="author" style={{color:randomColor}}>
                                <span className='author-text' >{randomQuote.author}</span>
                            </div>
                            <div className='info-quote'>
                                <button id="new-quote" onClick={getQuote} style={{backgroundColor:randomColor}}>New quote</button>
                                <a id='tweet-quote' href='https://twitter.com/intent/tweet' target='_top' style={{backgroundColor:randomColor}}><i className='fa fa-twitter-square'></i></a>
                            </div>
                        </div>) 
  )
}

export default Quote