<template>
  <div id="Home">
     
     <div class="main" role="main content">
            <div class="wrapper">
                <div class="title">
                    <h2>Notre mission et notre savoir-faire</h2>
                </div>
                <h3 class="highlight">
                    <strong>Le monde des Animaux</strong> est une entreprise familialle créée en 1999 à Bruxelles ,
                    <strong> Oussama Aouirika </strong> en est le Président Directeur
                    Général.<br>
                    Avec plus de 20 années d’expérience, il <i>est passioné d'animaux</i> et a investi toute sa fortune
                    dans son entreprise pour le bien-être de nos petits compagnons.<br>
                    La société dispose de centres de gestion à <i><strong>Bruxelles, à Paris, aux USA et à Nairobi</strong></i> et
                    est présente dans plusieurs régions du monde à haut potentiel telles que l'Afrique, l'Asie orientale ou encore l'
                    Amérique latine.<br>
                    Au Monde des Animaux, on propose aux clients des <em>adoptions</em> : chaque client peut adopté un ou plusieurs animaux
                    , nos animaux sont vaccinés et dressés à l'avance et les nouveaux clients recevront des réductions pour le puçage de leur nouvel ami .<br>
                    C’est plus de 500 collaborateurs à travers le monde qui travaillent ensemble pour satisfaire les besoins de leurs clients.<br>
                </h3>
                <div class="grid-container" role="tablist">
                        <a href="#" class="item1 felins">
                            <img src="./img/item1.jpg" alt="Félins">
                            <h4>Félins</h4>
                        </a>
                        <a href="#" class="item2 rongeurs" alt="Rongeurs">
                            <img src="./img/item2.jpg">
                            <h4>Rongeurs</h4>
                        </a>
                        <a href="#" class="item3 canides" alt="Canidés">
                            <img src="./img/item3.jpg">
                            <h4>Canidés</h4>
                        </a>
                        <a href="#" class="item4 poissons" alt="Poissons">
                            <img src="./img/item4.jpg">
                            <h4>Poissons</h4>
                        </a>
                        <a href="#" class="item5 reptiles" alt="Réptiles">
                            <img src="./img/item5.jpg">
                            <h4>Réptiles</h4>
                        </a>
                        <a href="#" class="item6 oiseaux" alt="Oiseaux">
                            <img src="./img/item6.jpg">
                            <h4>Oiseaux</h4>
                        </a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
name: "Home",
  data() {
    return {
      msg: "Welcome to Your Home App"
    };
  }
}
</script>

<style>
#Home{
    background-color:brown;
}
</style>