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
      {{ btnLabel }}
    </button>
  </form>
</template>

<script>
export default {
  name: 'PostForm',
  emits: ['add-post'],
  props: ['btnLabel', 'initial', 'onSubmit'],
  data() {
    return {
      title: this.initial?.title || '',
      body: this.initial?.body || '',
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const { title, body } = this;
      this.onSubmit({ title, body });
    },
  },
};
</script>
