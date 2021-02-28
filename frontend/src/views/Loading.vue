<template>
  <v-container class="fill-height">
      <v-row>
        <h1 class="text-center display-3">Wait for the next question</h1>
      </v-row>
      <v-row align="center" justify="center">
        <v-progress-circular size="64" indeterminate></v-progress-circular>
      </v-row>
      <v-row align="center" justify="center">
        <v-btn color="success" to="selecting">Go To Selecting</v-btn>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            getQuestionReadyInterval: ""
        }
    },
    methods: {
    goToSelecting() {
        this.$router.push('/selecting', () => {});
    },
    getQuestionReady() {
      let URL = "https://topkerst.icheered.nl/api/question/ready"
      fetch(URL, {mode: 'no-cors'})
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data){
          console.log("Is ready!")
          clearInterval(this.getQuestionReadyInterval)
          this.goToSelecting()
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    } 
  },
  mounted() {
    this.getQuestionReadyInterval =  setInterval(() => {
        this.getQuestionReady()}, 1000)
    }
}
</script>

<style>

</style>