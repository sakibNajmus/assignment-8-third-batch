import React, { useEffect, useState } from 'react';
import './Home.css'
import { Grid, Container } from '@material-ui/core';
import Teams from '../Teams/Teams';

const Home = () => {
    const [teams, setTeams] = useState([]);
    // console.log(teams)

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])

    return (
        <div className="all-post">
            <Container>
            <h1 style={{textAlign: 'center'}}>All Teams in English Premier League</h1>
            <Grid container spacing={3}>
            <Grid item xs>
                {
                    teams.map(team => <Teams key={team.idTeam} team ={team}></Teams>)
                }
            </Grid>            
            </Grid>
            </Container>
        </div>
    );
};

export default Home;