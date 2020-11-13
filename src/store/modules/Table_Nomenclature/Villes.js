import axios from "axios";

const state = {
  villes: [],
};
const getters = {
  allVilles: state => state.villes,

};
const actions = {
  // Get All:
  async getVilles({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listevilles");
    // response
    commit("setVilles", response.data);
  },

  //Add One:
  async addVilles({ commit }, nom_ville) {
    // request
    const response = await axios.post("http://localhost:8000/rsu/StdTables/addVille",nom_ville);
    // let saveVille =response.data.data.attributes;
    // response
    // commit("postVilles", saveVille);
    commit("postVilles", response.data);
  },
};

const mutations = {
  setVilles: (state, villes) => (state.villes = villes),
  // postVilles:(state, ville) => state.villes.unshift(ville),
  postVilles(state, ville){
    let villes =state.villes.concat(ville);
    state.villes=villes;
  }
};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

