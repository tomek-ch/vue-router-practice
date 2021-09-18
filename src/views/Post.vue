<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: ['posts'],
  data() {
    return {
      post: this.posts.find(({ id }) => id === Number(this.$route.params.id)),
    };
  },
};
</script>
