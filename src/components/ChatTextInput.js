import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import {auth} from '../firestore/firestore'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db} from '../firestore/firestore.js'



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm : {
        display: "flex",
        justifyContent: "center",
        width: "95%",
        margin: `${theme.spacing(0)} auto`
    },
    wrapText  : {
        width: "100%"
    },
    button: {
        //margin: theme.spacing(1),
    },
  })
);


export const TextInput = () => {
    const classes = useStyles();
    const [formValue, setFormValue] = useState('');
    const messageRef = collection(db, 'messages')
    const handleMessageSubmit = async(e) => {
        e.preventDefault()
        const {uid} = auth.currentUser
        console.log(uid)
        console.log(formValue)
        const messageDocRef = await addDoc(collection(db, 'messages'), {
            text: formValue,
            createdAt: serverTimestamp(),
            uid
        })
        setFormValue('')
    }
    return (
        <>
            <form className={classes.wrapForm} onSubmit={handleMessageSubmit} noValidate autoComplete="off">
            <TextField
                id="standard-text"
                label="Type a message"
                className={classes.wrapText}
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                //margin="normal"
            />
            <Button type="submit" variant="contained" color="primary"  className={classes.button}>
                <SendIcon />
            </Button>
            </form>
        </>
    )
}



