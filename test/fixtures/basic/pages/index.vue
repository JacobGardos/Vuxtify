<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Theme Name {{ theme.name }}</h1>
      </v-col>
      <v-col cols="12">
        <v-btn id="primary-btn" color="primary">Primary Btn</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useVTheme } from "#imports";
const theme = useVTheme();
</script>
