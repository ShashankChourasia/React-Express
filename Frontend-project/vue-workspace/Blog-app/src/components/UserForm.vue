<script setup lang="ts">
import { ref, computed } from "vue";
import FormInput from "../components/FormInput.vue";
import { validate, length, required } from "../validation";
import { NewUser } from "../users";
import { useUsers } from "../stores/users";
import { useModal } from "../composables/modal";

defineProps<{
  error?: string;
}>();

const emit = defineEmits<{
  (event: 'submit', payload: NewUser): void;
}>();

const name = ref('');
const usernameStatus = computed(() => {
  return validate(name.value, [required, length({ min: 5, max: 10 })]);
});

const password = ref('');
const passwordStatus = computed(() => {
  return validate(password.value, [required, length({ min: 10, max: 40 })]);
});

const isInvalid = computed(() => {
  return !usernameStatus.value.valid || !passwordStatus.value.valid;
});

const usersStore = useUsers();
const modal = useModal();

async function handleSubmit() {
  if (isInvalid.value) {
    return;
  }
  const newUser: NewUser = {
    name: name.value,
    password: password.value,
  };
  try {
    emit('submit', newUser);
  } catch (e) {
    console.log('error');
    
  }
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <FormInput name="Username" v-model="name" :status="usernameStatus" type="text" />
    <FormInput
      name="Password"
      v-model="password"
      :status="passwordStatus"
      type="password"
    />
    <div v-if="error" class="is-danger help">
      {{ error }}
    </div>
    <button class="button" :disabled="isInvalid">Submit</button>
  </form>
</template>

<style scoped>
.form {
  background: #fff;
  padding: 30px;
  margin-top: 50px;
}
</style>
