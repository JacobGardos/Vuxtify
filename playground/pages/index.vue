<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn color="primary">Click Me</v-btn>
        <v-btn>Click Me</v-btn>

        <pre>{{ $vuetify.theme.name }}</pre>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Directive Test</h1>
      </v-col>
      <v-col cols="12">
        <div v-ripple class="text-center elevation-2 pa-12 text-h5">HTML element with v-ripple</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useNuxtApp, useVDisplay } from "#imports";
const { height } = useVDisplay();
const { $vuetify } = useNuxtApp();
</script>
