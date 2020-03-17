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
  /* eslint-disable @typescript-eslint/camelcase */

  import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {

  mounted () {
    this.$gtag.pageview({
      page_path: '/',
      page_title: "ホーム画面"
    })
  }

  getCookie() {
    fetch(`${process.env.VUE_APP_API_URL}/cookies`, {
      mode: "cors",
      credentials: "include"
    }).then(() => {
      alert("getCookie success!!!");
    });
  }
}
</script>
