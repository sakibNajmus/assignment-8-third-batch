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
    // console.log(props)
    const {idTeam, strDescriptionEN, strTeam} = props.team;

    const history = useHistory();
    const seeMoreButton = () => {
        history.push(`/teams/${idTeam}`)
    }
    return (
        <div className="teams">           
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {strTeam}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {strDescriptionEN.slice(0,70)+"..."}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={seeMoreButton} size="small" color="primary">
                        See Details
                        </Button>
                    </CardActions>
                </Card>
        </div>
    );
};

export default Teams;