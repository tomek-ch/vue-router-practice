<template>
  <form @submit="handleSubmit">
    <label>
      Title:
      <input v-model="title" />
    </label>
    <label>
      Body:
      <textarea v-model="body" />
    </label>
    <button :disabled="!this.title || !this.body">
      Add
    </button>
  </form>
</template>

<script>
export default {
  name: 'NewPost',
  emits: ['add-post'],
  data() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const { body, title } = this;
      this.$emit('add-post', { body, title });
    },
  },
};
</script>
