<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Table_Nomenclatures">
                <img src="https://img.icons8.com/nolan/64/organization.png" />
            Tables Nomenclatures
          </router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Organismes Affiliation</li>
      </ol>
    </nav>

    <div class="table-crud">
      <!-- table select -->
      <div class="row search-select">
        <div class="input-group data-table col-2">
          <select class="custom-select">
            <option value="1" selected>10</option>
            <option value="2">25</option>
            <option value="3">50</option>
            <option value="3">100</option>
          </select>
        </div>
        <!-- Search form -->
        <form class="search form-inline col-md-3">
          <input
            class="form-control w-75"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <i class="fa fa-search" aria-hidden="true"></i>
        </form>
      </div>
      <!-- button ajouter -->
      <div class="form-row form-ajouter">
        <div class="form-group col-md-5">
          <input type="string" class="form-control" />
        </div>
        <div class="button-recherche col-md-3">
          <button type="submit" class="btn btn-default">
            Ajouter
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <!-- Table crud -->
      <div class="table-crud-body row">
        <table class="table table-hover col-md-6 m-auto">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Organismes Affiliation</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody class="crud-body">
            <tr :key="organisme.id_organisme_affiliation" v-for="organisme in allOrganismesAffiliation">
              <th scope="row" class="id-client">
                {{ organisme.id_organisme_affiliation }}
              </th>
              <td>{{ organisme.nom_organisme_affiliation }}</td>
              <td class="actions-btn">
                <!-- <router-link
                  :to="{
                    name: 'organisme',
                    params: { id: organisme.id_organisme }
                  }"
                  class="show-btn"
                >
                  <i class="fa fa-eye" aria-hidden="true"></i>
                </router-link> -->
                <router-link
                  to="#"
                  class="edit-btn"
                >
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </router-link>
                <router-link
                to="#"
                  class="delete-btn"
                >              
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Pagination from "../Layout/Pagination";
export default {
  name: "Organismes_Affiliation",
  components: {
    Pagination
  },
  data() {
    return {};
  },
  methods: {
    // spread operator
    ...mapActions(["getOrganismesAffiliation"])
  },
  computed: {
    ...mapGetters(["allOrganismesAffiliation"])
  },

  //   Load Page:
  created() {
    this.getOrganismesAffiliation();
  }
};
</script>
<style scoped>

</style>
