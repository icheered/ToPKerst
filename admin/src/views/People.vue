<template>
<v-container>
    <v-row>
        <v-form>
                <v-text-field label="Name" v-model="nameText">
                </v-text-field>
                <v-btn color="success" @click="submitItem">Add Person</v-btn>
            </v-form>
    </v-row>
    <v-row>
        <v-simple-table>
      <thead>
          <tr>
              <th class="text-left">
                  People
              </th>
              <th>
                  Delete
              </th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="person in peopleArray" :key="person.id">
              <td> {{person.name}} </td>
              <v-icon @click="deleteItem(person.id)">fa-trash</v-icon>
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
            peopleArray: [
                {
                    id: "placeholderID",
                    name: "Place"
                },
                {
                    id: "placeholderID2",
                    name: "Holder"
                },
            ],
            nameText: ""
        }
    },
    methods: {
        getPeople() {
            let URL = ""
            URL = "https://topkerst.icheered.nl/api/admin/name"
            //URL = "http://localhost:8009/admin/name"
            fetch(URL)
            .then((response) => response.json())
            .then((data) => {

                console.log(data)
                this.peopleArray = data
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        deleteItem(id){
            console.log(id)
            let URL = ""
            URL = "https://topkerst.icheered.nl/api/admin/name?nameID="+id
            //URL = "http://localhost:8009/admin/name?nameID="+id
            fetch(URL, {method: 'DELETE'})
            .then((response) => response.json())
            .then((data) => {
                this.getPeople()
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        addItem(name) {
            console.log("Adding: " + name)

            let URL = ""
            //URL = "http://localhost:8009/admin/name?name="+name
            URL = "https://topkerst.icheered.nl/api/admin/name?name="+name
            fetch(URL, {method: 'POST'})
            .then((response) => response.json())
            .then((data) => {
                this.getPeople()
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        submitItem(){
            console.log(this.nameText)
            this.addItem(this.nameText)
            this.nameText = ""
        }
    },
    mounted() {
        this.getPeople()
    }

}
</script>

<style>

</style>