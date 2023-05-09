<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn color="primary">Click Me</v-btn>
        <v-btn>Click Me</v-btn>

        <pre>{{ $vuetify.theme.name }}</pre>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useNuxtApp, useVDisplay } from "#imports";
const { height } = useVDisplay();
const { $vuetify } = useNuxtApp();
</script>
