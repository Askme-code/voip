<template>
    <v-card>
      <v-card-title>Contacts</v-card-title>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="contact in contacts" :key="contact.id">
            <v-list-item-content>
              <v-list-item-title>{{ contact.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ contact.number }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click="call(contact.number)">Call</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    contacts: Array
  });
  
  const call = (number) => {
    console.log(`Calling ${number}`);
  };
  </script>
  