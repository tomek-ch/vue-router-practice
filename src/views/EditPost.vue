<template>
  <PostForm
    v-if="post"
    btnLabel="Update"
    @submit="edit"
    :initial="post"
  />
  <NotFound v-else/>
</template>

<script>
import PostForm from '../components/PostForm';
import NotFound from './NotFound';
import post from '../utils/post';

export default {
  name: 'EditPost',
  emits: ['edit-post'],
  props: ['posts'],
  components: { PostForm, NotFound },
  computed: { post },
  methods: {
    edit(data) {
      this.$emit('edit-post', this.post.id, data);
    },
  },
};
</script>
