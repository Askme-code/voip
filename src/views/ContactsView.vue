<template>
    <v-container>
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
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const contacts = ref([
    { id: 1, name: 'John Doe', number: '1234567890' },
    { id: 2, name: 'Jane Smith', number: '0987654321' }
  ]);
  
  const call = (number) => {
    console.log(`Calling ${number}`);
  };
  </script>
  