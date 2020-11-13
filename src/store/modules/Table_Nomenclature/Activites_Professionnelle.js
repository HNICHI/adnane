import axios from "axios";

const state = {
  activites: [],
};
const getters = {
  allActivites: state => state.activites,

};
const actions = {
  // Get All:
  async getActivites({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/StdTables/listeActivitesFilieresSecteurs");
    // response
    commit("setActivites", response.data);
  },

};

const mutations = {
  setActivites: (state, activites) => (state.activites = activites),




};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

