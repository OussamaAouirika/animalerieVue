<template>
  <div id="Listing">
    <body>
      <div class="container" id="tuto">
        <br />

        <div class="panel panel-primary">
          <div class="panel-heading">Listing de nos Animaux</div>
          <table class="table table-fixed">
            <thead>
              <tr>
                <th>Nom de l'animal</th>
                <th>Age de l'animal</th>
                <th>Poids de l'animal (en KG)</th>
                <th>Règne animal</th>
                <th>Provenance animal</th>
                <th>Espace Vital animal</th>
                <th>Nom propriétaire</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="animal in animals">
                <td>
                  {{ animal.nom }}
                </td>
                <td>
                  {{ animal.age }}
                </td>
                <td>
                  {{ animal.poids }}
                </td>
                <td>
                  {{ animal.nomregne }}
                </td>
                <td>
                  {{ animal.provenance }}
                </td>
                <td>
                  {{ animal.espace }}
                </td>
                <td>
                  {{ animal.login }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "listing",
  data() {
    return {
      animals: [],
      url: "http://localhost:8080/api/animals"
    };
  },

  methods: {
    get_animals() {
      axios
        .get("http://localhost:8080/api/animals")
        .then(response => {
          this.animals = response.data.animals;
          console.log(this.animals);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.get_animals();
  }
};
</script>

<style>
table {
  border: 3px solid #6495ed;
  border-collapse: collapse;
  width: 90%;
  margin: auto;
}
thead,
tfoot {
  background-color: #d0e3fa;
  border: 1px solid #6495ed;
}
tbody {
  background-color: #ffffff;
  border: 1px solid #6495ed;
}
th {
  font-family: monospace;
  border: 1px dotted #6495ed;
  padding: 5px;
  background-color: #eff6ff;
  width: 25%;
}
td {
  font-family: sans-serif;
  font-size: 80%;
  border: 1px solid #6495ed;
  padding: 5px;
  text-align: left;
}
caption {
  font-family: sans-serif;
}

@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {
  /* Force table to not be like tables anymore */
  table,
  thead,
  tbody,
  th,
  td,
  tr {
    display: block;
  }

  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  tr {
    border: 3px solid #ccc;
  }

  td {
    /* Behave  like a "row" */
    border: none;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 50%;
  }

  td:before {
    /* Now like a table header */
    position: absolute;
    /* Top/left values mimic padding */
    top: 6px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
  }

  td:nth-of-type(1):before {
    content: "Nom Animal";
    font-weight: bold;
  }
  td:nth-of-type(2):before {
    content: "Age Animal";
    font-weight: bold;
  }
  td:nth-of-type(3):before {
    content: "Poids Animal";
    font-weight: bold;
  }
  td:nth-of-type(4):before {
    content: "Regne Animal";
    font-weight: bold;
  }
  td:nth-of-type(5):before {
    content: "Provenance";
    font-weight: bold;
  }
  td:nth-of-type(6):before {
    content: "Espace Vital";
    font-weight: bold;
  }
  td:nth-of-type(7):before {
    content: "Nom propriétaire";
    font-weight: bold;
  }
}
</style>
