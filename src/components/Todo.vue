<script setup>
import { inject } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

defineProps({
  msg: String
})

const todoList = inject('todoList')
// const _register = inject('register')いらなかった

const register = (todo) => {
    // _register(todo)
    todoList.value.push(todo)
}

const deleteTodo = (index) => {
    todoList.value.splice(index, 1)
}

</script>

<template>
    <div>
        <!-- <router-link to="/first">firstPage</router-link><br>
        <router-link to="/second">次のページ</router-link><br> -->
        <p class="text-7xl mb-5">{{ msg }}</p>
        <TodoForm 
        @register-todo="register"
        />

        <TodoList 
        :todoList="todoList"
        @delete-todo="deleteTodo"
        />
        <div v-if="todoList.length === 0">
            <p>todoListを登録してください</p>
        </div>
    </div>
</template>


<style scoped>

</style>