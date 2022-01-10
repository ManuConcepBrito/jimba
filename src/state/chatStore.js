import {auth} from '../firestore/firestore';
import {getChats} from "../api/chatengine_api";
import {makeAutoObservable} from "mobx";

class ChatStore {
    chats = []
    constructor() {
        makeAutoObservable(this);
        this.loadChats();
    }
    async loadChats() {
        this.chats = await getChats(auth.currentUser)
    }
}
export default ChatStore