import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../appbar';
import './style.css';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
function Page(props) {
    const classes = useStyles();
    const {
        results,
        goTo,
    } = props;

    const isEmpty = results.length === 0;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="results-page">
                {isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    :
                    results.map(item =>
                        <div
                            key={item.id}
                            className="card-container"
                        >
                                <Card
                                    className={classes.root}
                                    onClick={()=> goTo(`/detalle/${item.id}`)}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={item.image}
                                            title={item.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {item.title}
                                            </Typography>
                                            <Typography component="p">
                                                {item.content}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                    </div>)
                }
            </div>
        </Fragment>
    );
}

export default Page;