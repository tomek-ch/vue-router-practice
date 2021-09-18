export default function post() {
  return this.posts.find(({ id }) => id === Number(this.$route.params.id));
}
