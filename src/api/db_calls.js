// Database Calls
import {getDoc, doc} from "firebase/firestore";
import {db} from "../firestore/firestore";

export default async function getAssetByUID(carUuid) {
    return getDoc(doc(db, "cars", carUuid))
}