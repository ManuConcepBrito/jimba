import React, {useState, useEffect} from "react";
import 'firebase/firestore'
import 'firebase/auth'
import {db} from '../firestore/firestore.js'
import { collection, query, where, onSnapshot, getDocs } from "firebase/firestore";

import ChatMessage from './ChatMessage'
import {useCollectionData} from "react-firebase-hooks/firestore";

export default function ChatDetail() {
    const [messages, setMessages] = useState([])
    useEffect(() => {
        const q = query(collection(db, 'messages'))
        const messagesSnap = onSnapshot(q, (querySnapshot) => {
            const messages = querySnapshot.docs.map(doc => doc.data())
            setMessages(messages)
        })
    }, [])

    return (
        <div>
            {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg.text}/>)}
        </div>
    )
}