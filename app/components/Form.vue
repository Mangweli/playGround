<template>
  <v-form>
    <br>
    <h2>Form</h2>
    <br>
    <v-text-field v-if = "id" v-model="id" label="Id"></v-text-field>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-text-field v-model="password" label="Password"></v-text-field>
    <v-btn @click="submit({id, name, email, password })"> {{ id ? 'Edit' : 'Submit' }}</v-btn>
  </v-form>
</template>

<script>
export default {
  data: {
    id: {
      get() {
        return this.$store.state.user.id;
      },
      set(value) {
        this.$store.commit('user/storeID', value);
      }
    },
    name: {
      get() {
        return this.$store.state.user.name;
      },
      set(value) {
        this.$store.commit('user/storeName', value);
      }
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit('user/storeEmail', value);
      }
    },
    password: {
      get() {
        return this.$store.state.user.password;
      },
      set(value) {
        this.$store.commit('user/storePassword', value);
      }
    }
  },
  methods: {
    async submit(user) {
      if(user.id) {
        await this.$axios.put(`http:localhost:8888/users/${user.id}`, user);
      }else {
        await this.$axios.post(`http://localhost:8888/users/`, user);
      }
      this.resetForm();
    },
    resetForm() {
      this.$store.commit('user/storeID', 0);
      this.$store.commit('user/storeName', '');
      this.$store.commit('user/storeEmail', '');
      this.$store.commit('user/storePassword', '');
    }
  }
}
</script>

<style>

</style>