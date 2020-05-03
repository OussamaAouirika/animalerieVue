

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Mon animalerie</h1>
    <div class="conteneur-flex">
    <Listing></Listing>
    <Add></Add>
    </div>
  </div>
</template>

<script>
import Listing from './Listing'
import Add from './Add'
export default {
  name: 'app',
  components : {Listing,Add},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
 
}

@media 
only screen and (max-width: 760px),
(min-device-width: 900px) and (max-device-width: 1024px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
	
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
	
	/*
	Label the data
	*/
	td:nth-of-type(1):before { content: "Nom&emsp"; }
	td:nth-of-type(2):before { content: "Age      "; }
	td:nth-of-type(3):before { content: "Poids         "; }
	td:nth-of-type(4):before { content: "Regne         "; }
	td:nth-of-type(5):before { content: "Provenance         "; }
  td:nth-of-type(6):before { content: "Espace        "; }
  td:nth-of-type(7):before { content: "Proprio        "; }
}

table {
border: medium solid #6495ed;
border-collapse: collapse;
width: 70%;
}

th {
font-family: monospace;
border: thin solid #6495ed;
width: 50%;
padding: 5px;
background-color: #D0E3FA;
}
td {
font-family: sans-serif;
border: thin solid #6495ed;
width: 50%;
padding: 5px;
text-align: center;
background-color: #ffffff;
}
caption {
font-family: sans-serif;
}

</style>