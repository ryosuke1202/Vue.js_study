<script setup>
import { ref, inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const todoList = inject('todoList')
const route = useRoute()
const router = useRouter()
const id = route.params.id
const value = todoList.value
const todo = ref(value[id])


const edit = () => {
    todoList.value[id] = todo.value
    router.push('/')
}

</script>

<template>
  <div>
    <input type="hidden" v-model="value[$route.params.id]">
    <input type="text" v-model="todo" id="todo" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-5">
    <button type="button" @click="edit" class="mb-10 flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10">修正</button>
  </div>
</template>


<style>

</style>