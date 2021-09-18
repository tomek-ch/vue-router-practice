<template>
  <PostForm btnLabel="Update" @submit="edit" :initial="post"/>
</template>

<script>
import PostForm from '../components/PostForm';

export default {
  name: 'EditPost',
  emits: ['edit-post'],
  props: ['posts'],
  components: { PostForm },
  data() {
    return {
      post: this.posts.find(({ id }) => id === Number(this.$route.params.id)),
    }
  },
  methods: {
    edit(data) {
      this.$emit('edit-post', this.post.id, data);
    },
  },
};
</script>
