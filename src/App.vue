<script setup>
import { ref, onMounted, computed, watch } from "vue";

const todos = ref([]);
const name = ref("");
const input_content = ref("");
const input_category = ref(null);

const todos_asc = computed(() => {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  return [...todos.value].sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
} )

const addTodo = () => {
  if (input_content.value.trim() == "" || input_category.value === null) {
    return;
  }
  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    createdAt: new Date().getTime(),
    done: false,
  });
  input_content.value = "";
}

const removeTodo = todo => {
  todos.value = todos.value.filter(t => t!== todo);
}

watch(todos, (newValue) => {
  localStorage.setItem("todos", JSON.stringify(newValue));
}, {deep:true});
watch(name, (newValue) => {
  localStorage.setItem("name", newValue);
});

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
})
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">
        what's up <input type="text" placeholder="name here " v-model="name" />
      </h2>
    </section>

    <section class="create-todo">
      <form @submit.prevent="addTodo">
        <h4>What's on your todo list</h4>
        <input
          type="text"
          v-model="input_content"
          placeholder="e.g. content here"
        />
        <h4>Pick a category</h4>
        <div class="options">
          <label>
            <input
              type="radio"
              name="category"
              value="business"
              v-model="input_category"
            />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input
              type="radio"
              name="category"
              value="personal"
              v-model="input_category"
            />
            <span class="bubble personal"></span>
              <div>Personal</div>
          </label>
        </div>
        <input type="submit" value="Add todo" />
      </form>
    </section>
    <section class="todo-list">
			<h3>TODO LIST</h3>
			<div class="list" id="todo-list">

				<div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`" :key="todo.createdAt">
					<label>
						<input type="checkbox" v-model="todo.done" />
						<span :class="`bubble ${
							todo.category}`"></span>
					</label>

					<div class="todo-content">
						<input type="text" v-model="todo.content" />
					</div>

					<div class="actions">
						<button class="delete" @click="removeTodo(todo)">Delete</button>
					</div>
				</div>

			</div>
		</section>

  </main>
</template>
