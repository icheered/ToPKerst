<template>
  <v-container class="fill-height">
      <v-row align="center" justify="center">
        <h1 class="text-center display-3">Wait for results...</h1>
      </v-row>
      <v-row align="center" justify="center">
        <v-progress-circular size="64" indeterminate></v-progress-circular>
      </v-row>
      <v-row>
        <v-col>
          <v-row align="center" justify="center" class="pb-2">
            <h2>Vlugge mensen</h2>
          </v-row>
          <v-row align="center" justify="center" class="pa-0">
            <v-sheet 
                v-for="(name) in people_that_are_ready"
                :key="name"
                class="pa-0">
                <v-btn :color="mycolor" class="mx-1" @click="generator">{{name}}</v-btn>
                </v-sheet>
          </v-row>
        </v-col>
      </v-row>
      
      <!-- <v-row align="center" justify="center">
        <v-btn color="success" to="results">(Go To Results)</v-btn>
      </v-row> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      people_that_are_ready: [],
      waitingInterval: "",
      mycolor: "primary"
    }
  },
  methods: {
    setData(data) {
      this.people_that_are_ready = data
    },
    generator: function(){
      var colors = [
        "red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange"
      ]
      var shades = [
        "lighten", "darken", "accent"
      ]
      var levels = [
        1, 2, 3, 4
      ]
      var randomColor = Math.floor(Math.random()*colors.length);
      var randomShade = Math.floor(Math.random()*shades.length);
      var randomLevel = Math.floor(Math.random()*levels.length);

      this.mycolor = "" + colors[randomColor] + " " + shades[randomShade] + "-" + levels[randomLevel] + ""
    },
    goToResults(data){
      if(data.status){
        console.log("Done!")
        clearInterval(this.waitingInterval)
        this.$router.push('/results', () => {});
      }
      else {
        this.setData(data.people)
      }
      
    },
    getDoneWaiting() {
      let URL = "https://topkerst.icheered.nl/api/results/ready"
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.goToResults(data)
      })
      .catch(function(error) {
        console.log(error);
      });
    } 
  },
  mounted() {
    this.waitingInterval = setInterval(() => {
        this.getDoneWaiting()}, 1000)
  }
  

}
</script>

<style>

</style>