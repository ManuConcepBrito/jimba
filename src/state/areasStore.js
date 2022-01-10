import {makeAutoObservable, observable, action} from 'mobx';
import {AREAS} from "../static/Areas";


class AreasStore {
    areas = AREAS;
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