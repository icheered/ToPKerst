<template>
  <v-container>
      <v-row>
          <v-col>
              <v-row align="center" justify="center">
                  <h1>Question stuff</h1>
              </v-row>
              <v-row align="center" justify="center">
                  <h3>{{questionText}}</h3>
              </v-row>
              <v-row align="center" justify="center">
                  <v-btn color="success" @click="getNextQuestion" x-large>Get next Question</v-btn>
              </v-row>
          </v-col>
      </v-row>
      <v-row class="py-3">
          <v-col>
              <v-row align="center" justify="center">
                <h1>Question ready stuff</h1>
              </v-row>
              <v-row align="center" justify="center">
                  <h3>{{questionReadyState}}</h3> 
              </v-row>
              <v-row align="center" justify="center">
                  <v-btn color="success" class="ma-2" @click="postQuestionReady" x-large>Question Ready</v-btn>
                  <v-btn color="warning" class="ma-2" @click="postQuestionUnready" small>Question Unready</v-btn>
              </v-row>
          </v-col>
      </v-row>
      <v-row class="py-3">
          <v-col>
              <v-row align="center" justify="center">
                  <h1>Result stuff</h1>
              </v-row>
              <v-row align="center" justify="center">
                  <h3>{{resultsReadyState}}</h3>
              </v-row>
              <v-row align="center" justify="center">
                  <v-btn color="success" class="ma-2" @click="postResultsReady" small>Set Results Ready</v-btn>
                  <v-btn color="warning" class="ma-2" @click="postResultsUnready" small>Set Results UnReady</v-btn>
              </v-row>
              <v-row align="center" justify="center"> 
                  <v-btn color="primary" @click="calculateResults" small>Calculate results</v-btn>
              </v-row>
          </v-col>
      </v-row>
      <v-row class="py-3">
          <v-col>
              <v-row align="center" justify="center">
                  <h1>GoToLoading state stuff</h1>
              </v-row>
              <v-row align="center" justify="center">
                  <h3>{{goToLoadingState}}</h3> 
              </v-row>
              <v-row align="center" justify="center">
                  <v-btn color="success" class="ma-2" @click="postGoToLoadingReady" x-large>GoToLoading Ready</v-btn>
                  <v-btn color="warning" class="ma-2" @click="postGoToLoadingUnready" small>GoToLoading Unready</v-btn>
              </v-row>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            getDataInterval: "",
            questionText: "questionText",
            questionReadyState: "questionReadyState",
            goToLoadingState: "goToLoadingState",
            resultsReadyState: "resultsReadyState"
        }
    },
    methods: {
        setQuestionText(data) {
            this.questionText = data
        },
        setquestionReadyState(data) {
            this.questionReadyState = data
        },
        setgoToLoadingState(data) {
            this.goToLoadingState = data
        },
        setresultsReadyState(data) {
            this.resultsReadyState = data
        },
        getNextQuestion(){
            // Get new question
            let URL = ""
            URL = "http://localhost:8009/admin/question/getnew"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        postQuestionReady() {
            // Set question is ready
            let URL = ""
            URL = "http://localhost:8009/admin/question/setready?ready=true"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        postQuestionUnready() {
            // Set question is NOT ready
            let URL = ""
            URL = "http://localhost:8009/admin/question/setready?ready=false"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        postResultsReady() {
            // Set results is ready
            let URL = ""
            URL = "http://localhost:8009/admin/results/setready?ready=true"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        postResultsUnready() {
            // Set results is NOT ready
            let URL = ""
            URL = "http://localhost:8009/admin/results/setready?ready=false"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
            });

        },
        calculateResults() {
            // Set results is NOT ready
            let URL = ""
            URL = "http://localhost:8009/admin/results/calculate"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        postGoToLoadingReady() {
            // Set GoToloading is ready
            let URL = ""
            URL = "http://localhost:8009/admin/question/setnextready?ready=true"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
            });

        },
        postGoToLoadingUnready() {
            // Set GoToloading is NOT ready
            let URL = ""
            URL = "http://localhost:8009/admin/question/setnextready?ready=true"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        getData(){
            // Get question text
            let URL = ""
            URL = "http://127.0.0.1:8009/question"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                this.setQuestionText(data)
            })
            .catch(function(error) {
                console.log(error);
            });

            // Get question ready state
            URL = "http://127.0.0.1:8009/question/ready"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                this.setquestionReadyState(data)
            })
            .catch(function(error) {
                console.log(error);
            });

            // Get resultsReady State
            URL = "http://127.0.0.1:8009/results/ready"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                this.setresultsReadyState(data)
            })
            .catch(function(error) {
                console.log(error);
            });

            // Get goToLoading State
            URL = "http://127.0.0.1:8009/question/nextquestion"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                this.setgoToLoadingState(data)
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    },
    mounted() {
        this.getDataInterval = setInterval(() => {
        this.getData()}, 1000)
    }
}
</script>

<style>

</style>