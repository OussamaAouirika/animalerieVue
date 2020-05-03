

<template>

  
  <div id="Listing">

  <h1>Liste des Animaux </h1>  
        <div v-for= "animal in animals">
         
         <table class="table table-bordered" style="text-align:center;">
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
                    <tbody style="text-align:center;">
                       <tr>
                            <td>
                                {{animal.nom}}
                            </td>
                            <td>
                                {{animal.age}}
                            </td>
                             <td>
                                {{animal.poids}}
                            </td>
                            <td>
                                {{animal.nomregne}}
                            </td>
                            <td>
                                {{animal.provenance}}
                            </td>
                            <td>
                                {{animal.espace}}
                            </td>
                            <td>
                                {{animal.login}}
                            </td>
                        </tr>
                    </tbody>
        </table>
         </div>
         
  </div>
</template>


<script> 
import axios from 'axios';
export default {
  name: 'listing',
  data () {
    return {
      animals:[],
      url: 'http://localhost:8080/api/animals'
    }
  },

  methods: {
    get_animals() {
      axios
        .get('http://localhost:8080/api/animals')
        .then( response=> { 
            this.animals = response.data.animals;
            console.log(this.animals);
        })
        .catch((error) => {
            console.log(error);
        })
    }
  },
  mounted() {
        this.get_animals();
  }
}
</script>


<style>
#listing {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}

@media (min-width: 800px ) {
    
    .table table-bordered{
        display: flex;
        color: white;
        list-style-type: none;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.1em;
        font-family: 'Oswald', cursive;
        padding-right: 10px;
        margin-bottom: 1.5px;
    }

  
  

    .table table-bordered {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "item1 item2 item3 item4 item5 item6";
        justify-items: center;
        padding-top: 30px;
        padding-bottom: 45px;
    }

   
  }

  @media (min-width: 1050px ) and (max-width: 1240px){
   .table table-bordered{
        display: flex;
        color: white;
        list-style-type: none;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.1em;
        font-family: 'Oswald', cursive;
        padding-right: 10px;
        margin-bottom: 1.5px;
    }

  
  

    .table table-bordered {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "item1 item2 item3 item4 item5 item6";
        justify-items: center;
        padding-top: 30px;
        padding-bottom: 45px;
    }
  }

  @media (min-width: 800px ) and (max-width: 1050px){
    .table table-bordered{
        display: flex;
        color: white;
        list-style-type: none;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.1em;
        font-family: 'Oswald', cursive;
        padding-right: 10px;
        margin-bottom: 1.5px;
    }

  
  

    .table table-bordered {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "item1 item2 item3 item4 item5 item6";
        justify-items: center;
        padding-top: 30px;
        padding-bottom: 45px;
    }
  }


</style>