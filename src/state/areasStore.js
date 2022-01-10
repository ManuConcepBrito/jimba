import { collection, getDocs } from 'firebase/firestore';
import {makeAutoObservable, runInAction, observable, computed, action} from 'mobx';
import { db } from '../firestore/firestore';
import {AREAS} from "../static/Areas";


class AreasStore {
    areas = [];
    area = {};
    part = {};

    constructor() {
        makeAutoObservable(this, {
            areas: observable,
            area: observable,
            part: observable,
            setSelectedArea: action,
            setSelectedPart: action
        })
    }
    get areasList() {
        this.areas = AREAS
        return this.areas;
    }
    setSelectedArea(id) {
        this.area = this.areas.find(area => area.id === id)
        return this.area;
    }
    setSelectedPart(areaId, partId) {
        const area = this.areas.find(area => area.id === areaId)
        this.part = area.parts.find(part => part.id === partId)
        return this.part;
    }
}
export default AreasStore;