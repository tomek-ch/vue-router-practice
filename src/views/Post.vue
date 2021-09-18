<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
  </div>
  <div v-else>
    <NotFound/>
  </div>
</template>

<script>
import NotFound from './NotFound';

export default {
  name: 'PostList',
  props: ['posts'],
  components: { NotFound },
  computed: {
    post() {
      return this.posts.find(({ id }) => id === Number(this.$route.params.id))
    },
  },
};
</script>

<style scoped>
h1 {
  word-break: break-all;
}
</style>
