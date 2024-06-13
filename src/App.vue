<template>
   <div>
    <ul>
      <TodoTask />
    </ul>
  </div>
</template>

<script>

  import TodoTask from "./components/TodoTask"
 export default {
  name: "App",
  components: {
  TodoTask,
  },

  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Learn Vue JS",
          completed: true,
        },
        {
          id: 2,
          title: "Watch netflix",
          completed: true,
        },
        {
          id: 3,
          title: "Go shopping",
          completed: false,
        },
        {
          id: 4,
          title: "Learn guitar",
          completed: false,
        },
        {
          id: 5,
          title: "Send email",
          completed: false,
        },
      ],
    };
  },
};


</script>