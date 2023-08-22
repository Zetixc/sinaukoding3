<template>
  <div class="card">
    <h5 class="card-header">{{ title }}</h5>
    <div class="card-body">
      <label class="label-input" for="name">
        Name
        <input type="text" class="name input-component" placeholder="Enter your name" v-model="user.name" />
      </label>
      <label class="label-input mt-4" for="name">
        Email Address
        <input type="email" class="name input-component" placeholder="Enter your email" v-model="user.email" />
      </label>
      <label class="label-input mt-4" for="name">
        Gender
        <select v-model="user.gender" class="name input-component" name="Gender" id="Gender">
          <option value="" disabled>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label class="label-input mt-4" for="name">
        Status
        <select v-model="user.status" class="name input-component" name="Status" id="Gender">
          <option value="" disabled>Select Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
    </div>
    <div class="card-footer d-flex">
      <button class="back" @click="back">BACK</button>
      <button class="submit" @click="submit">SUBMIT</button>
    </div>
  </div>
</template>

<script>
import axiosInstances from "../apis/server";

export default (await import("vue")).defineComponent({
  props: {
    title: String,
  },
  data: function () {
    return {
      user: {
        name: "",
        email: "",
        gender: "",
        status: "",
      },
      path: " ",
    };
  },
  mounted() {
    this.path = this.$route.name;
    if (this.path === "update-user") {
      this.getData();
    } 
  },
  methods: {
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
    submit() {
      if (this.path === "update-user") {
        this.updateData();
      } else {
        this.postData();
      }
    },
    postData() {
      axiosInstances({
        url: "/public/v2/users",
        method: "post",
        data: this.user,
      })
        .then((res) => {
          alert(res.data.name + " success create");
        })
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    },
    updateData() {
      axiosInstances({
        url: "/public/v2/users/" + this.$route.query.id,
        method: "put",
        data: this.user,
      })
        .then((res) => {
          alert(res.name + " update create");
          this.$route.push("/");
        })
        .catch((err) => {
          alert(err);
        });
    },
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
  margin: 0px 0px 10px 0px;
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
</style>
