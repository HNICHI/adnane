<template>
  <div class="wizard">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/Sociétaire_Morale">
            <i class="fa fa-user" aria-hidden="true"></i>
            Personne Morale</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">Modifier</li>
      </ol>
    </nav>
    <form-wizard
      color="#6d7fcc"
      error-color="#d64253"
      @submit="onSubmit"
    >
      <tab-content
        title="Informations"
        icon="fa fa-user"
        :before-change="validateFirstTab"
      >
        <vue-form-generator
          :model="model"
          :schema="firstTabSchema"
          :options="formOptions"
          ref="firstTabForm"
        >
        </vue-form-generator>
      </tab-content>
      <tab-content
        title="Informations Activité"
        icon="fa fa-bar-chart"
        :before-change="validateSecondTab"
      >
        <vue-form-generator
          :model="model"
          :schema="secondTabSchema"
          :options="formOptions"
          ref="secondTabForm"
        >
        </vue-form-generator>
      </tab-content>
      <tab-content
        title="Correspondance"
        icon="fa fa-map-marker"
        :before-change="validateThirdTab"
      >
        <vue-form-generator
          :model="model"
          :schema="thirdTabSchema"
          :options="formOptions"
          ref="thirdTabForm"
        >
        </vue-form-generator>
      </tab-content>
      <tab-content
        title="Piéce d'identité"
        icon="fa fa-id-card-o"
        :before-change="validateFourthTab"
      >
        <vue-form-generator
          :model="model"
          :schema="fourthTabSchema"
          :options="formOptions"
          ref="fourthTabForm"
        >
        </vue-form-generator>
      </tab-content>
      <tab-content title="Last step" icon="fa fa-check-circle">
        <h4>Merci pour remplir la formulaire!</h4>
        <div class="panel-body">
          <!-- <pre v-if="model" v-html="x"></pre> -->
          <pre v-if="model" v-html="prettyJSON(model)"></pre>
          <!-- <i class="fa fa-check" aria-hidden="true"></i> -->
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import VueFormGenerator from "vue-form-generator";
import { mapActions } from "vuex";

export default {
  name: "PostPhysique",
  components: {
    FormWizard,
    TabContent
  },
  data() {
    return {
      x: "La personne physique a été ajoutée avec succès.",
      model: {
        //societaire
        qualite: "",
        nom_client: "",
        prenom_client: "",
        sexe_client: "",
        profession: "",
        reference_document: "",
        date_naissance: "",
        Pays_de_naissance: "",
        is_vip: "",
        // activites
        categorie_vip: "",
        Secteur: "",
        nom_organisme_affiliation: "",
        reference_appartenance: "",
        numero_rc: "",
        tribunale_immatriculation: "",
        // adress
        numero: "",
        libelle_voie: "",
        code_postal: "",
        complement_adresse: "",
        nom_ville: "",
        email: "",
        libelle_pays: "",
        telephone_mobile: "",
        telephone_fix: "",

        // Piece identité:
        type_document: "",
        // reference_document: "",
        date_delivrance: "",
        lieu_delivrance: "",
        date_expiration: ""

        // Province: "",
        // Commune: "",
        // Kiyada: "",
        // Douar: ""
      },
      formOptions: {
        validationErrorClass: "has-error",
        validationSuccessClass: "has-success",
        validateAfterChanged: true
      },
      firstTabSchema: {
        fields: [
          {
            type: "select",
            label: "Qualité",
            model: "Qualité",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["Monsieur", "Madame", "Docteur"],
            styleClasses: "col-md-4"
          },
          {
            type: "input",
            inputType: "text",
            label: "Nom",
            model: "Nom",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
            // placeholder: "Client Name",
            // hint: "Minimum 4 characters",
            min: 4
          },
          {
            type: "input",
            inputType: "text",
            label: "Prénom",
            model: "Prénom",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4",
            min: 4
          },
          {
            type: "select",
            label: "Sexe",
            model: "Sexe",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["H", "F"],
            styleClasses: "col-md-4",
            inputClass: "form-control"
            // groupClass:"custom-select",
          },
          {
            type: "input",
            inputType: "text",
            label: "CIN",
            model: "CIN",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4"
          },
          {
            type: "select",
            label: "Profession",
            model: "Profession",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-4"
          },
          {
            type: "input",
            inputType: "date",
            label: "Date de naissance",
            model: "Date_de_naissance",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4"
          },
          {
            type: "select",
            label: "Pays de naissance",
            model: "Pays_de_naissance",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["Maroc", "Egypte"],
            styleClasses: "col-md-4"
          },
          {
            type: "select",
            label: "VIP",
            model: "VIP",
            required: true,
            values: ["Oui", "Non"],
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4"
          }
        ]
      },
      secondTabSchema: {
        fields: [
          {
            type: "select",
            label: "Catégorie Sociétaire",
            model: "Categorie_Societaire",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["a", "b", "c"],
            styleClasses: "col-md-4"
          },
          // {
          //   type: "select",
          //   label: "Secteur",
          //   model: "Secteur",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   values: ["ze", "az", "ee"],
          //   styleClasses: "col-md-4"
          // },
          // {
          //   type: "select",
          //   label: "Profession",
          //   model: "Profession",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   values: ["v", "b", "n"],
          //   styleClasses: "col-md-4"
          // },
          {
            type: "select",
            label: "Organisme d’appartenance",
            model: "Organisme_dappartenance",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-8"
          },
          {
            type: "input",
            inputType: "text",
            label: "La référence d’appartenance",
            model: "Reference_dappartenance",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "Numéro registre du commerce",
            model: "Numero_registre_commerce",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-6"
          },
          {
            type: "input",
            inputType: "text",
            label: "Tribunal d'immatriculation",
            model: "Tribunal_dimmatriculation",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-12"
          }
        ]
      },
      thirdTabSchema: {
        fields: [
          {
            type: "input",
            inputType: "number",
            label: "Numéro",
            model: "Numero",
            required: true,
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-md-4"
          },
          {
            type: "select",
            label: "Voie",
            model: "Voie",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-4"
          },
          {
            type: "input",
            inputType: "number",
            label: "Code Postale",
            model: "Code_Postale",
            required: true,
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-md-4"
          },
          {
            type: "input",
            inputType: "text",
            label: "Complément adresse",
            model: "Complement_adresse",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-9"
          },
          {
            type: "select",
            label: "Ville",
            model: "Ville",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-3"
          },
          {
            type: "input",
            inputType: "email",
            label: "E-mail",
            model: "Email",
            required: true,
            validator: VueFormGenerator.validators.email,
            styleClasses: "col-md-7"
          },
          {
            type: "select",
            label: "Pays",
            model: "Pays",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-5"
          },
          {
            type: "input",
            inputType: "tel",
            label: "Tél. portable",
            model: "Telephone_portable",
            // required: true,
            placeholder: "123-45-678",
            pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
            // pattern:"!/^[0-9]{9-12}/",
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-6"
          },
          {
            type: "input",
            inputType: "tel",
            label: "Tél.Fixe",
            model: "Telephone_fixe",
            // required: true,
            placeholder: "123-45-678",
            pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}",
            // pattern:"!/^[0-9]{9-12}/",
            validator: VueFormGenerator.validators.number,
            styleClasses: "col-md-6"
          }
          // {
          //   type: "select",
          //   label: "Province",
          //   model: "Province",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   values: ["v", "b", "n"],
          //   styleClasses: "col-md-4"
          // },
          // {
          //   type: "select",
          //   label: "Commune",
          //   model: "Commune",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   values: ["v", "b", "n"],
          //   styleClasses: "col-md-4"
          // },
          // {
          //   type: "input",
          //   inputType: "text",
          //   label: "Kiyada",
          //   model: "Kiyada",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   styleClasses: "col-md-4"
          // },
          // {
          //   type: "input",
          //   inputType: "text",
          //   label: "Douar",
          //   model: "Douar",
          //   required: true,
          //   validator: VueFormGenerator.validators.string,
          //   styleClasses: "col-md-3"
          // },
        ]
      },
      fourthTabSchema: {
        fields: [
          {
            type: "select",
            label: "Type de document",
            model: "Type_document",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-7"
          },
          {
            type: "input",
            inputType: "text",
            label: "Numéro de référence",
            model: "Numero_refrence",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-5"
          },
          {
            type: "input",
            inputType: "date",
            label: "Date de délivrance",
            model: "Date_delivrance",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4"
          },
          {
            type: "select",
            label: "Lieu de délivrance",
            model: "Lieu_delivrance",
            required: true,
            validator: VueFormGenerator.validators.string,
            values: ["v", "b", "n"],
            styleClasses: "col-md-4"
          },

          {
            type: "input",
            inputType: "date",
            label: "Date d’expiration",
            model: "Date_dexpiration",
            required: true,
            validator: VueFormGenerator.validators.string,
            styleClasses: "col-md-4"
          }
        ]
      }
    };
  },
  methods: {
    // spread operator
    ...mapActions(["CreatePersonnePhysique"]),
    onSubmit(e) {
      // stoping load
      e.preventDefault();
      this.CreatePersonnePhysique(this.data);
    },

    // onComplete: function() {
    //   alert("La personne physique a été ajoutée avec succès.!");
    // },
    validateFirstTab: function() {
      return this.$refs.firstTabForm.validate();
    },
    validateSecondTab: function() {
      return this.$refs.secondTabForm.validate();
    },
    validateThirdTab: function() {
      return this.$refs.thirdTabForm.validate();
    },
    validateFourthTab: function() {
      return this.$refs.fourthTabForm.validate();
    },

    prettyJSON: function(json) {
      if (json) {
        json = JSON.stringify(json, undefined, 4);
        json = json
          .replace(/&/g, "&")
          .replace(/</g, "<")
          .replace(/>/g, ">");
        return json.replace(
          // /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          // /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
          function(match) {
            var cls = "number";
            if (/^"/.test(match)) {
              if (/:$/.test(match)) {
                cls = "key";
              } else {
                cls = "string";
              }
            } else if (/true|false/.test(match)) {
              cls = "boolean";
            } else if (/null/.test(match)) {
              cls = "null";
            }
            // return "<span class="" + cls + "">" + match + "</span>";
            return cls;
          }
        );
      }
    }
  }
};
</script>

<style scoped>
</style>
