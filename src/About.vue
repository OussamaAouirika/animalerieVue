<template>
   <div id="About">
    <div class="main" role="main content">
            <div class="wrapper">
                <div class="title">
                    <h2>A propos de nous</h2>
                </div>
                <h3 class="highlight">
                    <strong>Le monde des Animaux</strong> vous permettra de trouver l'essentiel pour l'entretien et
                    <strong> le bien-être de votre animal. </strong> <br>Prendre soin de votre animal est notre priorité !<br>
                    La société <i>Le Monde des Animaux</i> a confié le système de paiement du site à un prestataire spécialisé dans la sécurisation 
                    des paiements en ligne. <br>Nous vous garantissons la totale confidentialité de vos informations bancaires, 
                    sécurisées par le protocole SSL<br>
                    <i>Réglementation générale de la protection des données (RGPD) :</i><br>
                    Nous vous informons que les données personnelles de nos clients seront traitées en conformité avec les <br>principes de transparence, 
                    de limitation de la finalité, de minimisation de données, <br>d’exactitude, d’intégrité et confidentialité<br>

                </h3>
                <div class="grid-container" role="tablist">
                        <a href="#" class="item1 maestro">
                            <img src="./img/itema.jpg" alt="Maestro">
                            <h4>Maestro</h4>
                        </a>
                        <a href="#" class="item2 mastercard" alt="Mastercard">
                            <img src="./img/itemb.jpg">
                            <h4>Mastercard</h4>
                        </a>
                        <a href="#" class="item3 visa" alt="Visa">
                            <img src="./img/itemc.jpg">
                            <h4>Visa</h4>
                        </a>
                        <a href="#" class="item4 paypal" alt="Paypal">
                            <img src="./img/itemd.jpg">
                            <h4>Paypal</h4>
                        </a>
                        <a href="#" class="item5 tel" alt="Téléphone">
                            <img src="./img/iteme.jpg">
                            <h4>02.234.56.78</h4>
                        </a>
                        <a href="#" class="item6 adresse" alt="Adresse">
                            <img src="./img/itemf.jpg">
                            <h4>Rue des animaux 44</h4>
                        </a>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
name: "About",
  data() {
    return {
      msg: "Welcome to Your About App"
    };
  }
}
</script>

<style>
#About{
    background-color: blue;
}
</style>