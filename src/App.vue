<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/images">
          <v-list-item-action>
            <v-icon>mdi-image</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Images</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/analytics">
          <v-list-item-action>
            <v-icon>mdi-google-analytics</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Analytics</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  drawer = null;
}
</script>
