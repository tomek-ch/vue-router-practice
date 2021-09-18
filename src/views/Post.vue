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
import post from '../utils/post';

export default {
  name: 'PostList',
  props: ['posts'],
  components: { NotFound },
  computed: { post },
};
</script>

<style scoped>
h1 {
  word-break: break-all;
}
</style>
