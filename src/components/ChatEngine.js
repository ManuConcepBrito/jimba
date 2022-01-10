import React, {useEffect, useRef} from "react"

import axios from 'axios'
import {ChatEngine} from 'react-chat-engine'


import {useAuth} from "../context/AuthContext";

export default function Chats() {
    const {currentUser} = useAuth()
    const didMountRef = useRef(true)

    async function getFile(url) {
        let response = await fetch(url);
        let data = await response.blob();
        return new File([data], "test.jpg", {type: 'image/jpeg'});
    }

    useEffect(async () => {
        try {
            await axios.get(
                'https://api.chatengine.io/users/me/',
                {
                    headers: {
                        "project-id": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                        "user-name": currentUser.email,
                        "user-secret": currentUser.uid
                    }
                }
            )

        } catch (e) {
            if (didMountRef.current) {
                let formdata = new FormData()
                formdata.append('email', currentUser.email)
                formdata.append('username', currentUser.email)
                formdata.append('secret', currentUser.uid)

                getFile(currentUser.photoURL)
                    .then(avatar => {
                        formdata.append('avatar', avatar, avatar.name)

                        axios.post(
                            'https://api.chatengine.io/users/',
                            formdata,
                            {headers: {"private-key": process.env.REACT_APP_CHAT_ENGINE_PRIVATE_KEY}}
                        )
                            .then(() => console.log('Created user in ChatEngine'))
                            .catch(e => console.log('e', e.response))
                    })
            }
        }


        return () => {
            didMountRef.current = false;
        }

    }, [])

    return (
        <div className='chats-page'>

                <ChatEngine
                    height='calc(100vh - 66px)'
                    projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
                    userName={currentUser.email}
                    userSecret={currentUser.uid}
                />

        </div>
    )
}