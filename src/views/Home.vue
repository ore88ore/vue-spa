<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12">
        <h1>Home</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-btn class="ma-2" outlined color="indigo" @click.stop="getCookie"
        >Get Cookie</v-btn
      >
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class Home extends Vue {
  getCookie() {
    axios
      .get("/cookies")
      .then((response: any) => {
        console.log("getCookie response: ", response);
        alert("getCookie success!");
      })
      .catch((error: any) => {
        console.log("getCookie error: ", error);
      });
  }
}
</script>
