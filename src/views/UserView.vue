<template>
  <main>
    <card-view :title="'DETAIL USER'" :name="user.name" :email="user.email" :gender="user.gender" :status="user.status" @backhome="goToCreateUser" />
  </main>
</template>

<script>
import CardView from "../components/CardView.vue";
import axiosInstances from "../apis/server";
export default (await import("vue")).defineComponent({
  components: {
    CardView,
  },
  data: function () {
    return {
      user: {
        name: "Faqih",
        email: "faqih@gmail.com",
        status: "active",
        gender: "male",
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    goToCreateUser() {
      this.$router.push({ name: "home" });
    },
    getData() {
      axiosInstances({
        url: "/public/v2/users/" + this.$route.query.id,
        method: "get",
      })
        .then(({ data }) => {
          this.user.name = data.name;
          this.user.email = data.email;
          this.user.gender = data.gender;
          this.user.status = data.status;
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
});
</script>
