<template>
  <v-container grid-list-xs>
      <v-col>
        <v-row align="center" justify="center">
            <h1 class="text-center display-2">{{quote}}</h1>
        </v-row>
        <v-row class="py-3">
            <v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
        </v-row>
        <v-row>
            <v-spacer></v-spacer>
        <v-col>
            <p class="text-right">Ik ben</p>
        </v-col>
        <v-col  class="pt-1" align="left" justify="left">
            <v-menu open-on-hover offset-y transition="slide-y-transition">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    required="true"
                    >
                    {{name}}
                    <v-icon right>fa-angle-down</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                    v-for="(item, index) in people"
                    :key="index"
                    link
                    @click="name = item"
                    >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-col>
        <v-spacer></v-spacer>

        </v-row>

        <v-row class="pt-0 pb-5">
            <v-spacer></v-spacer>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-divider></v-divider>
            <v-spacer></v-spacer>
        </v-row>
        <v-row  align="center" justify="center" class="pt-5 pb-3">
            <h1 class="text-center pb-5">Mijn ranking</h1>
        </v-row>

    <v-row align="center" justify="center">
    <v-sheet>
    <v-simple-table >
      <template v-slot:default>
        
        <tbody align="center" justify="center">
            <draggable
            :list="items"
            >
            <tr
            v-for="(item, index) in items"
            :key="item.id"
            >
            <v-col>
            <v-row>
                <td class="customsize pl-5 pr-5 text-center">{{ index+1 }}</td>

                <td class="customsize pl-5 pr-5" width="200px">{{ item.title }}
                    
                </td>
                <v-col class="py-0">
                <td class="pl-5" right >
                    <v-icon
                        large
                        center
                    >
                        mdi-arrow-all
                    </v-icon>
                </td>
                </v-col>
            </v-row>
                
                <v-row >
                    <v-divider></v-divider>
                </v-row>
                </v-col>
            </tr>
            </draggable>
        </tbody>
        
      </template>
    </v-simple-table>
    </v-sheet>
    </v-row>
    <v-row align="center" justify="center"  class="pt-8">
        <v-btn disabled x-large @click="onKlaarClick" v-if="name === 'Select name'">
            <h1>Verstuur!</h1>
        </v-btn>
        <v-btn color="success" x-large @click="onKlaarClick" v-else>
            <h1>Verstuur!</h1>
        </v-btn>
    </v-row>

    </v-col>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";

export default {
    components: {
        "draggable": draggable
    },
    data() {
        return {
            quote: "Placeholder question?",
            people: ["Naam1",
                "Naam2",
                "Naam3"],
            name: "Select name",
            items: [
                { id: 1, title: "Naam1" },
                { id: 2, title: "Naam2" },
                { id: 3, title: "Naam3" }
            ]
        }
    },
    methods: {
        printlist() {
            for(var i = 0; i < this.items.length; i++){
                console.log(this.items[i].title)
            }
            console.log("----")
        },
        onUpdate(){
            this.$emit('updated', this.list);
            console.log("Updated")
            for(var i = 0; i < this.items.length; i++){
                console.log(this.items[i].title)
            }
        },
        onKlaarClick() {
            console.log("Submitted")
            var personal_order = {
                owner: this.name,
                order: this.items
            }
            
            var postURL = 'http://localhost:8009/results?result=%7B%22owner%22%3A%22'
            postURL += personal_order.owner
            postURL += '%22%2C%22order%22%3A%5B%7B%22'
            for(var i = 0; i < personal_order.order.length; i++) {
                postURL += 'id%22%3A'+personal_order.order[i].id+'%2C%22title%22%3A%22'+personal_order.order[i].title
                if(i == personal_order.order.length - 1){
                    postURL += "%22%7D%5D%7D"
                }
                else{
                    postURL += '%22%7D%2C%7B%22'
                }
            }
            
            console.log("Personal Order")
            console.log(JSON.stringify(personal_order))
            console.log("postURL:")
            console.log(postURL)
            console.log(typeof output)

            fetch(postURL, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors'
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });

            this.goToWaitforresults()
        },
        goToWaitforresults(){
            this.$router.push('/waitforresults', () => {});
        },
        setNames(data) {
            this.people = data
        },
        setItems(data) {
            this.items = data
        },
        setQuestion(data) {
            this.quote = data
        }
    },
    mounted() {
        // Get list of people
        let URL = "http://127.0.0.1:8009/people"
        fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            if(data){
            this.setNames(data)
            var peoplelist = []
            for(var i = 0; i < data.length; i++) {
                peoplelist.push(
                    {"id": i + 1, "title": data[i]}
                )
            this.setItems(peoplelist)
            }
            }
        })
        .catch(function(error) {
            console.log(error);
        });

        //Get Question
        let qURL = "http://127.0.0.1:8009/question"
        fetch(qURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            
            this.setQuestion(data)
            
        })
        .catch(function(error) {
            console.log(error);
        });

    }
}
</script>

<style scoped>
.customsize {
    font-size: 25px;
};
</style>