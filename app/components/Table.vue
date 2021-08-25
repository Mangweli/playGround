<template>
  <v-data-table
    :headers="headers"
    :items="users"
  >
    <template v-slot:[`item.edit`] = "{ item }">
      <v-btn color="success" @click="editItem(item)"> Edit</v-btn>
    </template>
    <template v-slot:[`item.delete`] = "{ item }"> 
      <v-btn color = "warning" @click="deleteItem(item.id)"> Delete></v-btn>
    </template>
  </v-data-table>

</template>

<script>
export default {
   data () {
      return {
        headers: [
          {
            align: 'start',
            sortable: true,
            value: 'name',
          },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Password', value: 'password' },
          { text: 'Edit', value: 'edit' },
          { text: 'Delete', value: 'delete' },
        ],
      }
    },
    computed: {
      users() {
        return this.$store.state.users.data;
      }
    },
    async fetch() {
      this.$store.commit("users/storeData", (await this.$axios.get('http://localhost:8888/users')).data)
    },
    methods: {
      async deleteItem(id) {
        await this.$axios.delete(`https://localhost:8888/users/${id}`);
        this.$store.commit("users/storeData", (await this.$axios.get('https://localhost:8888/users')).data)
      },
      async editItem(user) {
        this.$store.commit("user/storeID", user.id);
        this.$store.commit("user/storeName", user.name);
        this.$store.commit("user/storeEmail", user.email);
        this.$store.commit("user/storePassword", user.password);
      }
    }
}
</script>

<style>

</style>