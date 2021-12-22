// import React, {useState, useEffect} from "react";
// import 'firebase/firestore'
// import 'firebase/auth'
// import {db} from '../firestore/firestore.js'
// import { collection, query, onSnapshot } from "firebase/firestore";
//
// import ChatMessage from './ChatMessage'
// import {useCollectionData} from "react-firebase-hooks/firestore";

// export default function ChatDetail() {
//     const [messages, setMessages] = useState([])
//     useEffect(() => {
//         const q = query(collection(db, 'messages'))
//         const messagesSnap = onSnapshot(q, (querySnapshot) => {
//             const messages = querySnapshot.docs.map(doc => doc.data())
//             setMessages(messages)
//         })
//     }, [])
//
//     return (
//         <div>
//             {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg.text}/>)}
//         </div>
//     )
// }

import React, {useState, useEffect} from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "./ChatTextInput.js";
import { MessageLeft, MessageRight } from "./ChatMessage";
import {auth, db} from '../firestore/firestore.js'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import ChatMessage from './ChatMessage'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "scroll",
      height: "calc( 100% - 80px )"
    }
  })
);

export default function ChatDetail() {
    const classes = useStyles();
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createdAt'))
        const messagesSnap = onSnapshot(q, (querySnapshot) => {
            const messages = querySnapshot.docs.map(doc => doc.data())
            setMessages(messages)
        })
    }, [])

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} zDepth={2}>
        <Paper id="style-1" className={classes.messagesBody}>
            {
                messages && messages.map((msg, i) => (
                        msg.uid === auth.currentUser.uid
                            ? (<MessageRight key={i} message={msg.text}/> )
                            : (<MessageLeft key={i} message={msg.text}/>)
                    ))
            }
            </Paper>
        <TextInput />
      </Paper>
    </div>
  );
}
