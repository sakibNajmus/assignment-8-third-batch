import React, { useEffect, useState } from 'react';
import './Home.css'
import { Grid, Container } from '@material-ui/core';
import Teams from '../Teams/Teams';

const Home = () => {
    // Sports API
    const [teams, setTeams] = useState([]);

    // Covid API
    // const [cases, setCases] = useState([])

    
    // Dog API
    // const [breeds, setBreeds] = useState([])

    // Using Sports API
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])

    // Using Covid API
    // useEffect(() => {
    //     fetch('https://disease.sh/v3/covid-19/countries')
    //     .then(res => res.json())
    //     .then(data => setCases(data))
    // }, [])

    // Using Dog API
    // useEffect(() => {
    //     fetch('https://dog.ceo/api/breeds/list')
    //     .then(res => res.json())
    //     .then(data => setBreeds(data.message))
    // }, [])

    return (
        <div className="all-post">
            <Container>
            <h1 style={{textAlign: 'center'}}>All Teams in English Premier League</h1>
            <Grid container spacing={3}>
            <Grid item xs>
                {/* Using Sports API */}
                {
                    teams.map(team => <Teams key={team.idTeam} team ={team}></Teams>)
                }

                {/* Using Covid API */}
                {/* {
                    cases.map(team => <Teams key={team.countryInfo._id} team ={team}></Teams>)
                } */}

                {/* Using Dog API */}
                {/* {
                    breeds.map(team => <Teams team ={team}></Teams>)
                } */}
            </Grid>            
            </Grid>
            </Container>
        </div>
    );
};

export default Home;