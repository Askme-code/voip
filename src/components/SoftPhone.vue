<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>
              <v-text-field v-model="displayName" label="Display Name" />
              <v-text-field v-model="server" label="SIP Server URL" />
              <v-text-field v-model="password" label="Password" type="password" />
            </v-card-title>
            <v-card-actions>
              <v-btn @click="connect">Connect</v-btn>
              <v-btn @click="disconnect">Disconnect</v-btn>
            </v-card-actions>
          </v-card>
          
          <v-card>
            <v-card-title>Dialer</v-card-title>
            <v-text-field v-model="dialedNumber" label="Dial Number" />
            <v-btn @click="call">Call</v-btn>
            <v-btn @click="hangup">Hangup</v-btn>
          </v-card>
  
          <v-card>
            <v-card-title>Call History</v-card-title>
            <call-history :history="callHistory" />
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card>
            <v-card-title>Contacts</v-card-title>
            <contacts :contacts="contacts" />
          </v-card>
        </v-col>
      </v-row>
      
      <audio id="remoteAudio" autoplay></audio>
      <video id="remoteVideo" autoplay></video>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { UserAgent, SimpleUser } from 'sip.js';
  import CallHistory from './CallHistory.vue';
  import Contacts from './Contacts.vue';
  
  const displayName = ref('');
  const server = ref('wss://your-sip-server/ws');
  const password = ref('');
  const dialedNumber = ref('');
  const callHistory = ref([]);
  const contacts = ref([
    { id: 1, name: 'John Doe', number: '1234567890' },
    { id: 2, name: 'Jane Smith', number: '0987654321' }
  ]);
  
  let simpleUser = null;
  
  const connect = async () => {
    try {
      const userAgent = new UserAgent({
        uri: `sip:${displayName.value}@your-sip-server`,
        transportOptions: {
          server: server.value,
        },
        authorizationUsername: displayName.value,
        authorizationPassword: password.value,
        logLevel: 'debug',
      });
  
      simpleUser = new SimpleUser(userAgent);
  
      simpleUser.on('invite', (invitation) => {
        invitation.accept();
        document.getElementById('remoteAudio').srcObject = invitation.session.remoteMedia.streams[0];
      });
  
      simpleUser.on('callEnded', (call) => {
        callHistory.value.push({ number: call.remoteIdentity.uri.toString(), status: 'Ended' });
      });
  
      await simpleUser.connect();
    } catch (error) {
      console.error('Connection failed:', error);
    }
  };
  
  const call = async () => {
    try {
      await simpleUser.call(`sip:${dialedNumber.value}@your-sip-server`);
      callHistory.value.push({ number: dialedNumber.value, status: 'Started' });
    } catch (error) {
      console.error('Call failed:', error);
    }
  };
  
  const hangup = async () => {
    try {
      await simpleUser.hangup();
    } catch (error) {
      console.error('Hangup failed:', error);
    }
  };
  
  const disconnect = async () => {
    try {
      await simpleUser.disconnect();
    } catch (error) {
      console.error('Disconnect failed:', error);
    }
  };
  </script>
  