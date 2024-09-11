<script lang="ts" setup>
import { ref } from "vue";
import { useModal } from "../composables/modal";
import { useUsers } from "../stores/users";
import { NewUser } from "../users";
import UserForm from "./UserForm.vue"

const usersStore = useUsers()
const modal = useModal()
const error = ref('')

async function handleSignin(newUser: NewUser) {
  await usersStore.login(newUser);
  // location.reload();
  modal.hideModal();
}
</script>

<template>
  <UserForm @submit="handleSignin" />
  <!-- <UserForm @submit="handleSignin" :error="error" /> -->
</template>