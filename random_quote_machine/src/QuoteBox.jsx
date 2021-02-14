import {Card, Typography, Button, Avatar} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import FormatQuoteRoundedIcon from '@material-ui/icons/FormatQuoteRounded';

const QuoteBox = (props) => {
    const getRandomQuote=()=>{
        console.log('randomQoute')
    }
    const {quote, data, randomColor} = props;
    return (
        <div className='QuoteBox__container'>
            <Card className='QuoteBox__container__card'>
                <div>
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
                        style={{
                            display: 'flex',
                            background: `#${randomColor}`,
                            justifyContent: 'center'
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
        </div>
    )
}
export default QuoteBox;