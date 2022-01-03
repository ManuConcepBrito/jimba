import axios from "axios";

export function getAPIConfig(user, url, method, data) {
    let config = {
            method: method,
            url: url,
            headers: {
                'project-id': process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                'user-name': user.email,
                'user-secret': user.uid,
                'Content-Type': 'application/json'
            },
        }
    if (method !== "get") {
        config.data = data
    }
    return config
}

export async function getChatByTitle(title, chatConfig) {
    let chat
    let response
    try {
        response = await axios(chatConfig);
    } catch(err) {
        console.error(err)
    }
    chat = response.data.filter(item => {
        return item.title === title
    })
    // Chat doesn't exist, then create
    if (typeof chat !== "undefined") {
        console.log(`Chat with title ${title} not found, creating one...`)
        chatConfig = {
            ...chatConfig,
            method: 'post',
            url: 'https://api.chatengine.io/chats/',
            data: {
                title: title,
                is_direct_chat: false
            }
        }
        chat = await axios(chatConfig)
        console.log(chat)
        chat = chat.data
    }
    return chat.id
}