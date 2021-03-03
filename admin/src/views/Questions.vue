<template>
    <v-container>
        <v-row>
            <v-form>
                <v-text-field label="Question" v-model="questionText">
                </v-text-field>
                <v-btn color="success" @click="submitItem">Add question</v-btn>
            </v-form>
        </v-row>
        <v-row>
    <v-simple-table>
      <thead>
          <tr>
              <th class="text-left">
                  Question
              </th>
              <th>
                  Delete
              </th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="question in questionsArray" :key="question.id">
              <td> {{question.question}} </td>
              <v-icon @click="deleteItem(question.id)">fa-trash</v-icon>
          </tr>
      </tbody>
  </v-simple-table>
        </v-row>
  
  </v-container>
</template>

<script>
export default {
    data() {
        return {
            questionsArray: [
        {
            "id": "fdde0250-2251-474e-831e-f974f328b6f8",
            "question": "Placeholder question?"
        },
        {
            "id": "53f10a02-7742-4ee2-8fe4-1784248454df",
            "question": "Another placeholder question?"
        }
        ],
        questionText: ""
        }
    },
    methods: {
        getQuestions() {
            let URL = ""
            URL = "https://topkerst.icheered.nl/api/admin/question"
            //URL = "http://localhost:8009/admin/question"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.questionsArray = data
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        deleteItem(id){
            console.log(id)

            let URL = ""
            URL = "https://topkerst.icheered.nl/api/admin/question?questionID="+id
            //URL = "http://localhost:8009/admin/question?questionID="+id
            fetch(URL, {method: 'DELETE'})
            .then((response) => response.json())
            .then((data) => {
                this.getQuestions()
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        addItem(question) {
            console.log("Adding: " + question)
            //"http://localhost:8009/admin/question?question=Is%20this%20a%20test%20question%3F"
            var url = new URL("https://topkerst.icheered.nl/api/admin/question")
            //var url = new URL("http://localhost:8009/admin/question")
            url.searchParams.set('question', question)
            console.log(url)
            
            fetch(url, {method: 'POST'})
            .then((response) => response.json())
            .then((data) => {
                this.getQuestions()
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        submitItem(){
            console.log(this.questionText)
            this.addItem(this.questionText)
            this.questionText = ""
        }
    },
    mounted() {
        this.getQuestions()
    },
}
</script>

<style>

</style>