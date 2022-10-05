<script setup>
import { ref } from 'vue'

const todo = ref('')


const emit = defineEmits(['register-todo'])

const register = () => {
    emit('register-todo', todo.value)
    todo.value = ''
}
  
</script>

<template>
    <div>
      <label for="todo" class="leading-7 text-3xl text-gray-600">todolist</label>
      <input type="text" v-model="todo" id="todo" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-5">
      <button type="button" @click="register" class="mb-10 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10">登録</button>
    </div>
</template>