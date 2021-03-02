import React from 'react';
import './Teams.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const Teams = (props) => {
    const classes = useStyles();

    // Using Sports API
    const {idTeam, strDescriptionEN, strTeam} = props.team;

    
    // Using Covid API
    // const {country, updated, active, countryInfo} = props.team;

    // Using Sports API
    const history = useHistory();
    const seeMoreButton = () => {
        history.push(`/teams/${idTeam}`)
    }

    // Using Covid API
    // const history = useHistory();
    // const seeMoreButton = () => {
    //     history.push(`/countries/${country}`)
    // }
    return (
        <div className="teams">           
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {/* Using Sports API */}
                            {strTeam}

                            {/* Using Covid API  */}
                            {/* {country} */}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {/* Using Sports API */}
                            {strDescriptionEN.slice(0,70)+"..."}

                            {/* Using Covid API */}
                            {/* {active} */} 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {/* Using Sports API */}
                        <Button onClick={seeMoreButton} size="small" color="primary">
                        See Details
                        </Button>

                        {/* Using Covid API */}
                        {/* <Button onClick={seeMoreButton} size="small" color="primary">
                        See Details
                        </Button> */}
                    </CardActions>
                </Card>
        </div>
    );
};

export default Teams;