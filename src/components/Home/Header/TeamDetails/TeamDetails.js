import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import './TeamDetails.css'


const useStyles = makeStyles((theme) => ({
    root: {
      height: 180,
    },
    container: {
      display: 'flex',
    },
    paper: {
      margin: theme.spacing(1),
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
  }));

const TeamDetails = () => {

    const {teamId} = useParams();

    const [teams, setTeams] = useState({})
    console.log(teams)

    const {strDescriptionEN, strTeamJersey, strStadium, strTeam} = teams;

    // Get Method to Bring Specific teams using postId
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
        .then(res => res.json())
        .then(data => setTeams(data.teams[0]))
    }, [])

    return (
        <Container>
            <div className="team-details">  
                <img style={{display: 'block', marginLeft:'auto', marginRight:'auto', width: '40%'}} src={strTeamJersey} alt=""/>                  
                <h1 style={{textAlign:'center'}}>{strTeam}</h1>
                <p style={{textAlign:'center'}}><b>Home Venue: </b><em>{strStadium}</em></p>
                <p style={{textAlign: 'justify'}}>{strDescriptionEN}</p>
            </div>
        </Container>
    );
};

export default TeamDetails;