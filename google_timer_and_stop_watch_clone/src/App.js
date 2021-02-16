import React, {useState} from 'react';
import './App.css';
import {Button, Grid} from '@material-ui/core';
// stopwatch icon
import TimerIcon from '@material-ui/icons/Timer';
// time icon
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

// components import
import Timer from './components/Timer.jsx';
import Stopwatch from './components/Stopwatch.jsx';

function App() {
    //default timer view set to true (timer is default)
    const [isTimerView, setIsTimer] = useState(true);
    const [isStopwatchView, setIsStopwatch] = useState(false);
    const [isMouseHoverOnTimer, setIsMouseHoverOnTimer] = useState(false);
    const [isMouseHoverOnStopwatch, setIsMouseHoverOnStopwatch] = useState(false);
    return (
        <div
            style={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                padding: 20
            }}>
            <div className='watchCointainer'>
                <Grid
                    className="watchCointainer__headers"
                    container="container"
                    alignItems="center"
                    justify="space-around">
                    {/* timer */}
                    <Grid
                        className="watchCointainer__headers__timer"
                        item="item"
                        xs={12}
                        sm={6}
                        style={{
                            fontSize: 13,
                            color: isTimerView
                                ? '#1a73e8'
                                : isMouseHoverOnTimer
                                    ? '#000'
                                    : '#6b6a6a',
                            fontWeight: 300,
                            padding: 14,
                            cursor: isTimerView && 'default',
                            borderBottom: isTimerView && '2px solid #1a73e8'
                        }}
                        onClick={() => {
                            setIsTimer(true);
                            setIsStopwatch(false);
                        }}
                        onMouseOver={() => setIsMouseHoverOnTimer(true)}
                        onMouseLeave={() => setIsMouseHoverOnTimer(false)}>
                        <div>
                            <HourglassEmptyIcon
                                style={{
                                    fontSize: 13,
                                    marginBottom: -2,
                                    paddingRight: 5
                                }}/> {`timer`.toUpperCase()}
                        </div>
                    </Grid>
                    {/* stopwatch */}
                    <Grid
                        item="item"
                        className="watchCointainer__headers__stopwatch"
                        xs={12}
                        sm={6}
                        style={{
                            fontSize: 13,
                            color: isStopwatchView
                                ? '#1a73e8'
                                : isMouseHoverOnStopwatch
                                    ? '#000'
                                    : '#6b6a6a',
                            fontWeight: 300,
                            padding: 14,
                            cursor: isStopwatchView && 'default',
                            borderBottom: isStopwatchView && '2px solid #1a73e8'
                        }}
                        onClick={() => {
                            setIsTimer(false);
                            setIsStopwatch(true);
                        }}
                        onMouseOver={() => setIsMouseHoverOnStopwatch(true)}
                        onMouseLeave={() => setIsMouseHoverOnStopwatch(false)}>
                        <TimerIcon
                            style={{
                                fontSize: 13,
                                marginBottom: -2,
                                paddingRight: 5
                            }}/> {`stopwatch`.toUpperCase()}
                    </Grid>
                    {/* timer and stopwatch components render based on condition */}
                   
                </Grid>
                <Grid className='watchCointainer__View'>
                    {
                      isTimerView && <Timer />
                    }
                    {
                      isStopwatchView && <Stopwatch />
                    }
                </Grid>
                {/* **************************** footer **************************** */}
                <Grid
                    className="watchCointainer__footer"
                    container="container"
                    justify='flex-start'>
                    <Grid item="item" sm={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{
                                background: '#1a73e8',
                                marginRight: 5,
                                height: 25,
                                fontSize: 11,
                                fontWeight: 'bold',
                                paddingBottom: 0
                            }}>start</Button>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            style={{
                                color: '#1a73e8',
                                marginLeft: 5,
                                height: 25,
                                fontSize: 11,
                                fontWeight: 'bold',
                                paddingBottom: 0
                            }}>reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default App;
