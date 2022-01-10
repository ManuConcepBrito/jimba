import { collection, getDocs } from 'firebase/firestore';
import { makeAutoObservable, runInAction } from 'mobx';
import { db } from '../firestore/firestore';

const carCollectionRef = collection(db, 'cars');
const getAssets = async () => {
    const data = await getDocs(carCollectionRef);
    return data.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
}

class AssetStore {
  assets = [];

  constructor() {
      makeAutoObservable(this);
      this.loadAssets();
  }

  get assetList() {
      return this.assets;
  }

  getAssetById(id) {
    const asset = this.assets.find(asset => asset.id === id)
    return asset;
  }

  async loadAssets() {
    const result = await getAssets();
    runInAction(() => {
      this.assets = result;
    })
  }
}


export default AssetStore;
