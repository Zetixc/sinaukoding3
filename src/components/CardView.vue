<template>
  <div class="card">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <div class="data-pervalue d-flex justify-content-start align-items-center">
        <label class="label-input" for="name"> Name</label>
        <div class="data-value">: {{ name }}</div>
      </div>

      <div class="data-pervalue d-flex justify-content-start align-items-center">
        <label class="label-input" for="name"> Email</label>
        <div class="data-value">: {{ email }}</div>
      </div>

      <div class="data-pervalue d-flex justify-content-start align-items-center">
        <label class="label-input" for="name"> Gender</label>
        <div class="data-value">: {{ gender }}</div>
      </div>

      <div class="data-pervalue d-flex justify-content-start align-items-center">
        <label class="label-input" for="name"> Status</label>
        <div class="data-value">: {{ status }}</div>
      </div>
    </div>
    <div class="card-footer d-flex">
      <button class="back" @click="back">BACK</button>
    </div>
  </div>
</template>

<script>
import axiosInstances from "../apis/server";
export default (await import("vue")).defineComponent({
  props: {
    title: String,
    name: String,
    email: String,
    gender: String,
    status: String,
  },
  methods: {
    back() {
      this.$emit("backhome");
    },

  },
});
</script>

<style scoped>
.card {
  width: 475px;
  background: #f2eae1;
  border-radius: 20px;
  margin: 75px auto;
  border: none;
}

.card-header {
  border: none;
  background: #f2eae1;
  border-radius: 20px !important;
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  color: black;
  margin: 24px auto;
}

.card-body {
  padding: 0px 30px;
}

.label-input {
  width: 100%;
}

.data-value {
  width: 100%;
}

.input-component {
  height: 50px;
  width: 100%;
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 10px 15px;
}

.card-footer {
  border: none;
  background: #f2eae1;
  border-radius: 20px !important;
  padding: 67px 30px 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: white;
}

.back {
  height: 44px;
  width: 100%;
  background: #b8b8b8;
  border-radius: 4px;
  border: none;
  color: white;
  margin-right: 10px;
}

.submit {
  height: 44px;
  width: 100%;
  background: #feaf00;
  border: none;
}

.data-pervalue {
  margin: 40px 0px;
}
</style>
