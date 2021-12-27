import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { List } from '@mui/material';
import Header from "./Header";
import Button from "@material-ui/core/Button";

export default function InspectionPart(props) {
    const { parts } = props

  return (
    <Box sx={{ width:'100%', height: '100%'}}>

      <List
        sx={{ height: 812, width: 375 }}
        subheader={<div />}
      >
    <Header header={props.header}
                screenTitle={props.screenTitle}
                screenDescription={props.screenDescription}
                progress={0}/>
          {
        parts.map((part) => (
          <ListItem key={part.id} component="div">
            <ListItemButton>
              <Button style={{width: "60vw", height: "7.5vh"}} variant="outlined" size="large">{part.name}</Button>
            </ListItemButton>
          </ListItem>
          ))
      }
      </List>
    </Box>
  );
}