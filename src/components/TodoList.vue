<script setup>

const emit = defineEmits(['delete-todo'])

const deleteTodo = (index) => {
    emit('delete-todo', index)
}

defineProps({
  todoList: Array
})
</script>
<template>
    <div>
        <ul v-for="(todo, index) in todoList" :key="index">
            <div class="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
                <div class="flex flex-col justify-between flex-1 py-4">
                    <div>
                        <a href="#" class="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1">
                            {{ todo }}
                        </a>
                    </div>
                </div>

                <div class="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
                    <div class="flex flex-col items-start gap-2">
                        <router-link :to="`/${index}`" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">編集</router-link>
                    </div>
                    <div class="flex flex-col items-start gap-2">
                        <button @click="deleteTodo(index)" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">削除</button>
                    </div>
                </div>
            </div>
        </ul>
    </div>
</template>