<template>
   <div class="container">
    <div class="task">
      <!-- title -->
      <div class="title">
        <h1>To Do List</h1>
      </div>
      <!-- form -->
      <div class="form">
        <input type="text" placeholder="New Task" />
        <button><font-awesome-icon :icon="['fas', 'plus']" /></button>
      </div>
      <!-- task lists -->
      <div class="taskItems">
        <ul>
          <li>
            <button>Learn Vue JS</button>
            <button><font-awesome-icon :icon="['far', 'trash-alt']" />
</button>
          </li>
          <li>
            <button>Watch netflix</button>
            <button><font-awesome-icon :icon="['far', 'trash-alt']" />
</button>
          </li>
        </ul>
      </div>
      <!-- buttons -->
      <div class="clearBtns">
        <button>Clear completed</button>
        <button>Clear all</button>
      </div>
      <!-- pending task -->
      <div class="pendingTasks">
        <span>Pending Tasks: </span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "TodoTask",
  };
</script>