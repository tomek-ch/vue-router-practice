<template>
  <PostForm btnLabel="Add" @submit="add"/>
</template>

<script>
import PostForm from '../components/PostForm';

export default {
  name: 'NewPost',
  emits: ['add-post'],
  components: { PostForm },
  methods: {
    add(data) {
      this.$emit('add-post', data);
    },
  },
};
</script>
