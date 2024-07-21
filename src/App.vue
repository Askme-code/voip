<template>
  <v-app>
    <v-container>
      <v-app-bar app>
        <v-toolbar-title>Softphone App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/contacts">Contacts</v-btn>
        <v-btn text to="/settings">Settings</v-btn>
      </v-app-bar>
      <router-view />
    </v-container>
  </v-app>
</template>
