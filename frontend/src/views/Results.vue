<template>
  <v-container grid-list-xs>
      <h1 class="display-3 text-center pb-10">Results</h1>
    <v-simple-table class="px-5">
    <template v-slot:default>
    
    <tbody align="center" justify="center">
        <tr
        v-for="(item, index) in items"
        :key="item.id"
        >
        <v-col>
            <v-row>
                <td class="customsize pl-5 pr-5 text-center">
                    {{ index+1 }}
                </td>

                <td class="customsize pl-5 pr-5" width="200px">
                    {{ item.title }}
                </td>
            </v-row>
                
            <v-row >
                <v-divider></v-divider>
            </v-row>
        </v-col>
        </tr>
    </tbody>    
    </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { id: 1, title: "Temp1" },
                { id: 2, title: "Temp2" },
                { id: 3, title: "Temp3" },
            ],
            waitingInterval: ""
        }
    },
    methods: {
        setData(data){
          this.items = data
        },
    getResults() {
      let URL = "https://topkerst.icheered.nl/api/results"
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        var resultlist = []
        for(var i = 0; i < data.length; i++) {
              resultlist.push(
                  {"id": i + 1, "title": data[i]}
              )
        }
        this.setData(resultlist)
        
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    getQuestionReady() {
      let URL = "https://topkerst.icheered.nl/api/question/nextquestion"
      fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if(data){
          console.log("Is ready!")
          this.goToLoading()
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    goToLoading() {
        clearInterval(this.waitingInterval)
        this.$router.push('/', () => {});
    }, 
    },
    mounted(){
        this.getResults()
        this.waitingInterval = setInterval(() => {
            this.getQuestionReady()}, 1000)
        }
}
</script>

<style scoped>
.customsize {
    font-size: 35px;
};
</style>