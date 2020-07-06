import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import AppBar from '../appbar'
import './style.css'

export default function Page (props){
    const{
        goTo,
        currentItem,
    } = props;
    return (
        <Fragment>
            <CssBaseline/>
            <AppBar/>
            <div className="details-page">
                <Paper 
                    elevation={1}
                    className="paper-container"
                >
                    {
                        currentItem ?
                            <Fragment>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {currentItem.title}
                                </Typography>
                                <div 
                                    className="item-image"
                                    style={{
                                        backgroundImage : `url(${currentItem.image})`
                                    }}
                                />
                                <Typography gutterBottom component="p" className="content">
                                    {currentItem.content}
                                </Typography>
                            </Fragment>
                        : <CircularProgress className="item-loader"></CircularProgress>
                    }
                    <Button color="primary" onClick={()=>goTo(`/results`)}>
                        Regresar
                    </Button>
                </Paper>
            </div>
        </Fragment>
        
    );
}