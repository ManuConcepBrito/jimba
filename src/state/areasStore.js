import {observable, action, makeObservable} from 'mobx';
import {TOTAL_AREAS_NUMBER, AREAS} from "../static/Areas";


class AreasStore {
    areas = AREAS;
    area = {};
    part = {};
    progress = 0;

    constructor() {
        makeObservable(this, {
            areas: observable,
            area: observable,
            part: observable,
            progress: observable,
            setSelectedArea: action,
            setSelectedPart: action,
            updateProgress: action,
            setPartAsChecked: action,
        })
    }
    get areasList() {
        return this.areas;
    }
    get getProgress() {
        return this.progress;
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
    updateProgress() {
        this.progress++;
        return Math.floor(this.progress/TOTAL_AREAS_NUMBER);
    }
    setPartAsChecked(areaId, partId) {
        this.areas[areaId].parts[partId].isChecked = true;
    }
}
export default AreasStore;