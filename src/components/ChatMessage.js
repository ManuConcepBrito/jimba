import React from "react";
import {auth} from '../firestore/firestore'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange } from "@material-ui/core/colors";


export default function ChatMessage(props) {
    const {message, uid} = props;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

    return (
        <div className={`message ${messageClass}`}>
            <p>{message}</p>
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    messageRow: {
      display: "flex"
    },
    messageRowRight: {
      display: "flex",
      justifyContent: "flex-end"
    },
    messageGray: {
      position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#efeff0",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #efeff0",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #efeff0",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #efeff0",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px"
      }
    },
    messageLightBlue: {
      position: "relative",
      marginRight: "20px",
      marginBottom: "10px",
      padding: "10px",
      backgroundColor: "#d4f0f3",
      width: "60%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #d4f0f3",
      borderRadius: "10px",
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #d4f0f3",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        right: "-15px"
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #d4f0f3",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        right: "-17px"
      }
    },

    messageContent: {
      padding: 0,
      margin: 0
    },
    messageTimeStampRight: {
      position: "absolute",
      fontSize: ".85em",
      fontWeight: "300",
      marginTop: "10px",
      bottom: "-3px",
      right: "5px"
    },

    blue: {
      color:"#42a5f5",
      backgroundColor: "#42a5f5",
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    avatarNothing: {
      color: "transparent",
      backgroundColor: "transparent",
      width: theme.spacing(4),
      height: theme.spacing(4)
    },
    displayName: {
      marginLeft: "20px"
    }
  })
);


export const MessageLeft = (props) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "FINN";
  const classes = useStyles();
  return (
    <>
      <div className={classes.messageRow}>
        <Avatar
          alt={displayName}
          className={classes.blue}
          src={photoURL}
        ></Avatar>
        <div>
          <div className={classes.displayName}>{displayName}</div>
          <div className={classes.messageGray}>
            <div>
              <p className={classes.messageContent}>{message}</p>
            </div>
            <div className={classes.messageTimeStampRight}>{timestamp}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const MessageRight = (props) => {
  const classes = useStyles();
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div className={classes.messageRowRight}>
      <div className={classes.messageLightBlue}>
        <p className={classes.messageContent}>{message}</p>
        <div className={classes.messageTimeStampRight}>{timestamp}</div>
      </div>
    </div>
  );
};