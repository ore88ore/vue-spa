<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12">
        <h1>Analytics</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-btn class="ma-2" outlined color="indigo" @click.stop="clickAction1"
        >Action1</v-btn
      >
      <v-btn class="ma-2" outlined color="indigo" @click.stop="clickAction2"
        >Action2</v-btn
      >
    </v-row>
  </v-container>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/camelcase */
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Analytics extends Vue {
  clickAction1() {
    this.$gtag.event("click", {
      event_category: "button_click",
      event_label: "action1ボタン"
    });
  }

  clickAction2() {
    this.$gtag.event("click", {
      event_category: "button_click",
      event_label: "action2ボタン"
    });
  }
}
</script>
