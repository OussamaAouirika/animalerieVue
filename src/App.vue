<template>
  <div id="app">
     
    <div class="conteneur-flex">
      <div class="header">
        <!-- <a href="https://www.w3schools.com/" tabindex="2">W3Schools</a>
        <a href="http://www.google.com/" tabindex="1">Google</a>
        <a href="http://www.microsoft.com/" tabindex="3">Microsoft</a> -->
        <a href=""
          ><img id="logo" src="./img/candriam.png" alt="logo of candriam"
        /></a>
        <div aria-label="Menu" style="display: inherit;" role="navigation">
          <img id="barmenu" src="./img/barmenu.svg" alt="bar de menu" />
        </div>
        <nav>
          <div class="navstrong">
            <li>
              <router-link to="/home">ACCUEIL</router-link>
            </li>
            <li>
              <router-link to="/listing">LISTE DES ANIMAUX</router-link>
            </li>
            <li>
              <router-link to="/add">INSCRIRE UN ANIMAL</router-link>
            </li>
            <li>
              <router-link to="/about">ABOUT US</router-link>
            </li>    
          </div>
          <li>
            <div class="search" aria-label="Search">
              <input type="text" name="x" placeholder="Search" />
              <img src="./img/search.png" alt="search logo" />
            </div>
          </li>
          <li>
            <a href="#" class="button button1">FRONTEND</a>
          </li>
          <li>
            <a href="#" class="button button2">BACKEND</a>
          </li>
        </nav>
        
      </div>
      <div id="overlay"></div>
        <div class="main-image">
            <h1>Les animaux du monde</h1>
        </div>
      <router-view></router-view>
    </div>
      <footer>
            <p>lesanimauxdumonde@ <span class="footer-white">gmail.com</span></p>
            <div class="logos">
                <a href="#"><img src="./img/facebook.png" alt="Facebook logo"></a>
                <a href="#"><img src="./img/twitter.png" alt="Twitter logo"></a>
                <a href="#"><img src="./img/instagram.png" alt="Instagram logo"></a>
                <a href="#"><img src="./img/youtube.png" alt="Youtube logo"></a>
            </div>
  </footer>
  </div>

</template>
<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/css?family=PT+Sans');
@import url('https://fonts.googleapis.com/css?family=Oswald');
@import url('https://fonts.googleapis.com/css?family=Passion+One');

* {
    box-sizing: border-box;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
    z-index: 10;
}

*:last-child {
    margin-bottom: 0;
}

body {
    font-size: 16px;
    font-family: 'PT Sans', sans-serif;
}

.header {
    position: relative;
    display:flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 12px;
    position: relative;
    z-index: 100;
    background-color: white;
}

.header nav {
    display: none;
}

#logo {
    height: 25px;
    margin-left: 5px;
    margin-top: 1px;
}

#barmenu {
    margin-right: 30px;
}

a {
    text-decoration: none;
    color: inherit;
}

#m-dropdown {
    position: relative;
}

#dropdown {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-row-gap: 0px;
    grid-column-gap: 0px;
    justify-items: center;
    position: absolute;
    width: 100%;
    top: 57px;
}

#dropdown li {
    display: inline-block;
    width: 100%;
    margin: 20px 0 ;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1em;
}

.dropdown-menu {
    background-color: rgb(39, 39, 39);
    color:white;
}

.hidden {
    position: absolute;
    width: 100%;
    top: 97px;
    opacity: 0;
}

.expanded {
    opacity: 1;
    transition: opacity 0.5s linear;
}

#overlay {
    position: fixed;
    top: 0;
    left: -100%;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.911);
    z-index: 20;
    opacity: 0;
    transition: opacity 0.5s;
}

#overlay.onscreen {
    left:0;
    opacity: 1;
}

.absolute {
    position: absolute;
    z-index: 30;
    width:100%;
}

.sub-header {
    display: flex;
    justify-content: center;
    z-index: 40;
}

.sub-header a {
    width: 50%;
    display: flex;
    justify-content: center;
    font-weight: bold;
    color: white;
    padding: 20px 0;
    font-size: 0.95em;
    font-family: 'Source Sans Pro', sans-serif;
}

#investe {
    background-color: tomato;
}

#foire {
    background-color: #ffc643;
}

.main-image {
    background-image: url(./img/wallpaper.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 320px;
    position: relative;
    margin-bottom: 17px;
}

.main-image h1 {
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
    font-family: OpenSansRegular, Helvetica, Arial, sans-serif;
    font-size: 32px;
    position: absolute;
    bottom: 30;
    left: 20;
}

.main {
    background-color:#f6f5f2;
    padding-bottom: 45px;
}

.wrapper {
    margin: 0 auto;
    width: 320px;
}

.title {
    padding-top: 30px;
}

.main h2 {
    font-weight: bolder;
    text-transform: uppercase;
    text-align: center;
    font-size: x-large;
    color: rgb(32, 20, 99);
    font-family: OpenSansRegular, Helvetica, Arial, sans-serif;
}

.main .title:before {
    background: rgba(80,55,55,0.15);
    content: "";
    display: block;
    height: 6px;
    margin: 0 auto 15;
    width: 100px;
}

.main .title:after {
    background: rgba(80,55,55,0.15);
    content: "";
    display: block;
    height: 6px;
    margin: 15 auto 35;
    width: 190px;
}

.main h3 {
    font-size: 1.2em;
    font-weight: lighter;
    text-align: center;
    color: rgba(9, 2, 17, 0.938);
}

.grid-container {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "item1 item2"
    "item3 item4"
    "item5 item6";
    grid-row-gap: 25px;
    grid-column-gap: 45px;
    justify-items: center;
}

.grid-container h4 {
    text-align: center;
    text-transform: uppercase;
    margin-top: 10px;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 1.2em;
}

.grid-container img {
    border-radius: 50px;
}

.felins {
    color: #b71234;
}

.rongeurs {
    color: #d55c19;
}

.canides {
    color: #00675a;
}

.poissons {
    color: #53284f;
}

.reptiles {
    color: #55601c;
}

.oiseaux {
    color: #006983;
}

.maestro {
    color: #b71234;
}

.mastercard {
    color: #00675a;
}

.visa {
    color: #d55c19;
}

.paypal {
    color: #006983;
}
.tel {
    color: #53284f;
}
.adresse {
    color: #55601c;
}

footer {
    background: rgb(43, 43, 43);
    text-transform: uppercase;
    font-weight: bold;
    color: #474747;
    text-align: center;
    display: flex;
    justify-content: space-between;
}

footer p {
    margin-left: 30px;
}

.logos {
    margin-right: 30px; 
}

footer p, .logos {
    padding: 40px 0 25px 0;
    font-size: 1.1em;

}

.footer-white {
    color: white;
}

.logos img {
    height: auto;
    width: 25px;
    margin: 0 5px;
}

@media (min-width: 800px ) {
    #barmenu {
        display: none;
    }

    #logo {
        position: absolute;
        top: 0;
        left: 0;
        width: auto;
        height: 60px;
        background-color: rgba(255, 255, 255, 0.938);
        padding: 10 0;
        border: rgb(36, 36, 36) 1px solid;
    }

    .header {
        background-color: rgb(37, 37, 37);
    }

    #m-dropdown {
        display: none;
    }

    .search img {
        height: auto;
        width: 15px;
        position: relative;
        right: 25px;
        top: 3px;
    }

    .search {
        margin-right: -19px;
    }

    .search input {
        box-shadow: none;
        border-color: rgb(88, 88, 88);
        border-radius: 3px;
        height: 30px;
        line-height: 1;
        border: 1px solid #ccc;
        padding-left: 9px;
    }

    .header {
        justify-content: flex-end;
    }

    .header nav {
        display: flex;
        color: white;
        list-style-type: none;
        align-items: center;
        text-transform: uppercase;
        font-size: 1.1em;
    }

    .header nav li {
        margin: 0 15px 0 0;
    }

    .navstrong {
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

    .navstrong li {
        padding: 5px 10px;
        margin: 0 0px 0 0 !important;
        transition: all 0.25s ease-in-out;
    }

    .navweak {
        color: grey;
        transition: background-color 0.3s;
        padding: 5px 10px;
        border-radius: 7px;
        transition: all 0.25s ease-in-out;
    }

    .button {
        padding: 10px 12px;
        border-radius: 7px;
        font-weight: bolder;
        transition: all 0.25s ease-in-out;
    }

    .button1 {
        background-color: #d55c19ed;
    }

    .button2 {
        background-color: #e98300;
    }

    .button:hover {
        background-color: rgb(49, 49, 49);
    }

    .navweak:hover {
        color: white;
        background-color: rgb(49, 49, 49);
    }

    .navstrong li:hover {
        background-color: white;
        color: rgb(124, 124, 255);
    }

    .main-image {
        background-position: center;
    }

    .main-image h1 {
        font-size: 3.5em;
        left: 40px;
        padding-right: 20px;
    }

    .wrapper {
        width: 1200px;
    }

    .title {
        font-size: 1.1em;
    }

    .highlight {
        font-family: 'Franklin Gothic Medium', Helvetica, sans-serif;
        font-size: 1.5em !important;
    }

    .grid-container {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "item1 item2 item3 item4 item5 item6";
        justify-items: center;
        padding-top: 30px;
        padding-bottom: 45px;
    }

    .grid-container a {
        text-align: center;
    }

    .grid-container h4 {
        font-size: 2em;
    }
  }

  @media (min-width: 1050px ) and (max-width: 1240px){
    .wrapper {
        width: 800px;
    }

    .grid-container h4 {
        font-size: 1.3em;
    }

    .grid-container {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "item1 item2 item3"
        "item4 item5 item6"
        "item7 item8 item9 item10";
        grid-row-gap: 35px;
        grid-column-gap: 0;
    }
  }

  @media (min-width: 800px ) and (max-width: 1050px){
    .wrapper {
        width: 800px;
    }
    
    .header nav li {
        margin: 0 8px 0 0;
        font-size: 0.7em !important;
    } 

    .navstrong {
        padding-right: 5px;
    }

    .navstrong li {
        padding: 5px 6px;
    }

    .search input {
        width: 70%;
    }

    .search {
        margin-right: -52px;
    }

    .grid-container {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
        "item1 item2 item3"
        "item4 item5 item6";
        grid-row-gap: 35px;
        grid-column-gap: 0;
    }

    .grid-container h4 {
        font-size: 1.3em;
    }
  }




  
  @media (max-width: 800px ){
    .grid-contact-container {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
        "item1"
        "item2";
        grid-template-rows: auto;
        justify-items: center;
    }
    .grid-contact-container img {
        width: 200px;
        height: auto;
        margin-bottom: 25px;
    }

    .grid-contact-container .form {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    input {
        font-size: 1.1em;
    }
}

@media (min-width: 801px ){
    .grid-contact-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
        "item1 item2";
        grid-template-rows: auto;
        justify-items: center;
    }
    .grid-contact-container img {
        width: 300px;
        height: auto;
    }
    .grid-contact-container .form {
        width: 80%;
        margin: 0 auto;
        text-align: center;
    }
}



.grid-contact-container .form input, .grid-contact-container .form select {
    margin: 8px 0;
    width: 100%;
    background-color: rgb(223, 223, 223);
    border-style: none;
    border-radius: 10px;
    line-height: 2em;
    padding-left: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    color: rgb(66, 66, 66);
    resize: none;
    outline: none;
    transition: all 0.15s ease-in-out;
}

.grid-contact-container .form input:focus, .grid-contact-container .form select:focus {
    background-color: rgb(30, 191, 202);
}


#submit {
    width: 50%;
    font-size: 1em;
    padding: 8px 20px 10px 20px;
    background-color: #40a12f;
    color: white;
    font-weight: bolder;
    border-radius: 10px;
    text-transform: uppercase;
    border-style: none;
    font-family: 'Source Sans Pro', sans-serif;
    transition: all 0.20s ease-in-out;
    margin-top: 20px;
}

#submit:hover {
    background-color: rgb(74, 69, 80);
}
 .label {
  color: white;
  padding: 0.2px;
}

.nom {
  background-color: #4caf50;
}
.age {
  background-color: rgb(76, 83, 175);
}
.poids {
  background-color: rgb(209, 28, 28);
}
.regne {
  background-color: rgb(12, 20, 95);
}
.proprietaire {
  background-color: rgb(6, 48, 13);
}
select {
  width: 20%;
  padding: 5px 5px;
  border: 2px solid #41097c;
  border-radius: 2px;
  background-color: #f1f1f1;
}

 /* #app {
  background: url(Background.jpg) no-repeat center top ;
   background-size: cover;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

#myHeader {
  font-size: 48px;
  text-shadow: -1px -1px #9df, 1px 1px #49d, -3px 0 4px #000;
  font-family: "Segoe print", Arial, Helvetica, sans-serif;
  color: #6bf;
  padding: 24px 32px 32px 32px;
  font-weight: lighter;
  -moz-box-shadow: 2px 2px 6px #888;
  -webkit-box-shadow: 2px 2px 6px #888;
  box-shadow: 2px 2px 6px #888;
  text-align: center;
  display: inline;
  line-height: 150px;
}  */
</style>
