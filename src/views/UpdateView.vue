<template>
  <main>
    <card :title="'UPDATE USER'" @backhome="goToCreateUser"/>
  </main>
</template>

<script>
import Card from "../components/Card.vue";
export default (await import("vue")).defineComponent({
  components: {
    Card,
  },
  methods: {
    goToCreateUser() {
      this.$router.push({ name: "home" });
    },
  },
});
</script>
