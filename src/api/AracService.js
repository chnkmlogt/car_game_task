import axios from "axios";

class AracService {
  constructor() {
    this.araclar = [];
    this.retrieveAraclar();
  }
  async retrieveAraclar() {
    axios.get(`http://localhost:3004/araclar`).then(res => {
      this.araclar = res.data;
    });
  }
}
export default AracService;
