<template>
  <div> <!-- This div makes sure the appbar is the minimum height it needs to be-->
    <v-app-bar>
      <!-- <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer" color="primary">
          Menu
        </v-btn>
      </span> -->

      <v-toolbar-items>

      <!-- Use a forloop to display each button-->
        <v-btn text
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          {{ item.title }}
        </v-btn>

      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list dense>
        <v-list-item 
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        > <!-- List of buttons-->

          <v-list-item-icon> <!-- Nested property of v-list-item-->
            <v-icon small>fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content> <!-- This nested property can be used to make lists in lists -->
            <v-list-item-title>{{ item.title }}</v-list-item-title> <!-- Show the title of the item-->
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
  export default {
    data() {
        return {
          drawer: false,  // Whether to show the drop-up? menu
          items: [
            { title: 'Home', link: '/' },
            { title: 'People', link: 'people' },
            { title: 'Questions', link: 'questions' }
          ]
        }
      }
  }
</script>
