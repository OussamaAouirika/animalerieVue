<template>
  <div id="Add">
    <div class="main">
      <div class="title">
        <h2>Inscrire Nouvel Animal</h2>
      </div>
      <div class="grid-contact-container">
        <img class="item1" src="./img/animal.jpg" alt="animal add pic" />
        <div class="form">
          <div class="form-group">
            <label class="control-label col-sm-2" for="nom">Nom Animal</label>
            <div class="col-sm-10">
              <input
                type="text"
                v-model="newAnimal.nom"
                class="form-control"
                name="nom"
                id="nom"
                placeholder="Entrez nom Animal"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="age">Age Animal</label>
            <div class="col-sm-10">
              <input
                type="text"
                v-model="newAnimal.age"
                class="form-control"
                name="age"
                id="age"
                placeholder="Entrez l'age de l'animal"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="control-label col-sm-2" for="poids"
              >Poids Animal</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                v-model="newAnimal.poids"
                class="form-control"
                name="poids"
                id="poids"
                placeholder="Entrez le poids de l'animal"
              />
            </div>
          </div>
          <div class="form-group">
            <label>Regne Animal</label>

            <div class="col-sm-10">
              <select
                v-validate="regne"
                v-model="newAnimal.regne"
                class="form-control"
              >
                <option
                  v-for="regne in regnes"
                  v-bind:value="'' + regne.idRegne"
                  >{{ regne.nomregne }}</option
                >
              </select>
            </div>
          </div>
          <div class="form-group">
            <label>Propriétaire Animal</label>

            <div class="col-sm-10">
              <select
                v-validate="user"
                v-model="newAnimal.proprietaire"
                class="form-control"
              >
                <option v-for="user in users" v-bind:value="'' + user.idUser">{{
                  user.login
                }}</option>
              </select>
            </div>
          </div>
          <button id="submit" v-on:click="postAnimal">AJOUTER</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Add",
  data() {
    return {
      regnes: [],
      users: [],
      animals: [],
      //url: 'http://localhost:8080/api/animals',
      newAnimal: {
        nom: "none",
        age: 0,
        poids: 0,
        regne: 0,
        proprietaire: 0
      }
    };
  },

  methods: {
    get_animals() {
      axios
        .get("http://localhost:8080/api/animals")
        .then(response => {
          console.log(this.animals);
        })
        .catch(error => {
          console.log(error);
        });
    },
    get_regnes() {
      axios
        .get("http://localhost:8080/api/regnes")
        .then(response => {
          console.log("DANS METHODE DES REGNES");
          this.regnes = response.data.regnes;
          console.log(this.regnes);
        })
        .catch(error => {
          console.log(error);
        });
    },
    get_users() {
      axios
        .get("http://localhost:8080/api/users")
        .then(response => {
          this.users = response.data.users;
          console.log(this.users);
        })
        .catch(error => {
          console.log(error);
        });
    },
    postAnimal() {
      console.log("DANS METHODE POST APRES CLICK");
      axios
        .post("http://localhost:8080/api/animals", this.newAnimal)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "listing" });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.get_animals();
    this.get_regnes();
    this.get_users();
  }
};
</script>

<style>
/* #add {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5bff33;
  margin-top: 60px;
}  */
</style>
