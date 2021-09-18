<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <router-link :to="`/post/${post.id}`">
        {{ post.title }}
      </router-link>
      <button @click="$emit('delete-post', post.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: ['posts'],
  emits: ['delete-post'],
};
</script>
