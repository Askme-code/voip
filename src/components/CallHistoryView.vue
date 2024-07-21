<template>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="(entry, index) in history" :key="index">
          <v-list-item-content>
            <v-list-item-title>{{ entry.number }}</v-list-item-title>
            <v-list-item-subtitle>{{ entry.status }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    history: Array
  });
  </script>
  