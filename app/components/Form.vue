<template>
  <v-form>
    <v-text-field v-if = "id" v-model="id" label="Id"></v-text-field>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="password" label="Password"></v-text-field>
    <v-btn @click="submit({id, name, email, password })"> {{ id ? 'Edit' : 'Submit' }}</v-btn>
  </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>