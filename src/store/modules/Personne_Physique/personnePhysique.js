import axios from "axios";

const state = {
  personnePhysique: [],
  // findPersonnePhysique:[]
};
const getters = {
  allPersonnePhysique: state => state.personnePhysique,
  findOnePersonnePhysique: state => state.personnePhysique.find(vid => vid.id == this.$route.params.id),

};
const actions = {
  // Get All:
  async fetchPersonnePhysique({ commit }) {
    // request
    const response = await axios.get("http://localhost:8000/rsu/ClientPhysique/getlisteClientsPhysique");
    // response
    // console.log(response.data);
    commit("setPersonnePhysique", response.data);
  },

  // Add One:
  async CreatePersonnePhysique({ commit }, data) {
    const response = await axios.post("http://localhost:8000/rsu/ClientPhysique/addClientPhysique", data);
    commit("NewPersonnePhysique", response.data);
  },

  // Get One:
  async getOnePersonnePhysique({ commit }, id) {
    const response = await axios.get(`http://localhost:8000/rsu/ClientPhysique/selectClientPhysiqueByIdClientPhysique/id_client_physique/${id}`);
    commit("setOnePersonnePhysique", response.data);
  },

  // Delete One :
  async deleteOnePersonnePhysique({ commit }, id) {
    const response = await axios.delete(`http://localhost:8000/rsu/ClientPhysique/selectClientPhysiqueByIdClientPhysique/id_client_physique/${id}`);
    commit("removeOnePersonnePhysique", response.data);
  },


};

const mutations = {
  setPersonnePhysique: (state, personnePhysique) => (state.personnePhysique = personnePhysique),
  NewPersonnePhysique: (state, physique) => state.personnePhysique.unshift(physique),
  removeOnePersonnePhysique: (state, id) => state.personnePhysique = state.PersonnePhysique.filter(getAll => getAll.id !== id),
  setOnePersonnePhysique: (state, personnePhysique) => (state.personnePhysique = personnePhysique),



};

export default {
  // state:state
  state,
  getters,
  actions,
  mutations
};

