import {Card, Typography, Button, Avatar} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

const QuoteBox = (props) => {
    const getRandomQuote=()=>{
        // call the parent method
        props.generateRandomQuote();
    }
    const {quote, randomColor} = props;
    return (
        <div className='QuoteBox__container'>
            <Card className='QuoteBox__container__card'>
                <div style={{transition:'all 1s'}}>
                    <Typography
                        component='h2'
                        variant='h5'
                        align='center'
                        style={{
                            color: `#${randomColor}`,
                            
                        }}>
                            {/* <div style={{display:'flex', alignItems:'flex-start'}}> */}
                                <FormatQuoteRoundedIcon style={{marginBottom:'-10px',color:`#${randomColor}`, fontSize:'3rem',transform:`rotate(180deg)`}}/>
                                {quote.text}
                            {/* </div> */}
                    </Typography>
                    {/* author name */}
                    <p style={{ textAlign:'right',color: `#${randomColor}`}}>- {quote.author?quote.author:'Unknown'}</p>
                </div>
                <div>
                    <Avatar
                        variant='rounded'
                        onClick={()=>window.open(`https://twitter.com/intent/tweet`)}
                        style={{
                            display: 'flex',
                            background: `#${randomColor}`,
                            justifyContent: 'center',
                            cursor:'pointer'
                        }}>
                        <TwitterIcon />
                    </Avatar>

                    <Button
                        onClick={()=>getRandomQuote()}
                        style={{
                            background: randomColor.length>5?`#${randomColor}`:'#bbbbbb',
                            color: '#fff'
                        }}>
                        New quote
                    </Button>
                </div>
            </Card>
            <div style={{textAlign:'center',color:'#fff', marginTop:20, fontWeight:400}}>
                by Srikanth<span style={{color:'red', fontWeight:'bold'}}>4c</span>
            </div>
        </div>
    )
}
export default QuoteBox;