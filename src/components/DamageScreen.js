import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import {List} from '@mui/material';
import Header from './Header'
import {AREAS} from "../static/Areas";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';


class DamageScreen extends React.Component {
    state = {
        // indicate if the check has been done already
        areas_done: {
            'exterior': false,
            'interior': false,
            'windows': false,
            'tires': false,
            'technicalDefect': false,
            'spareParts': false
        }

    }
    // Revision part is finished, set to true
    handleChange = input => e => {
        this.setState({[input]: true})
    }

    render() {
        const {areas_done} = this.state
        return (
            <Box sx={{width: '100%', height: '100%'}}>
                <Header header="Inbound Check"
                        screenTitle="Damage Overview"
                        screenDescription="Please click on the different inbound check steps to complete them"
                        progress={0}/>
                <List
                    sx={{height: 812, width: 375}}
                    subheader={<div/>}
                >
                    {
                        AREAS.map((area) => (
                            <ListItem key={area.id} component="div">
                                <ListItemButton component={Link} to={area.route}>
                                    <Button style={{width: "60vw", height: "7.5vh"}} variant="outlined" size="large"
                                            disabled={areas_done[`${area.name}`]}>{area.name}</Button>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        );
    }

}

export default DamageScreen;