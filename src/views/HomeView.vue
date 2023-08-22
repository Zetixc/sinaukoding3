<template>
  <main>
    <div class="row">
      <div class="col-md-3 sidebar">
        <div class="heading-title">
          <div class="detail-sidebar mt-3"></div>
          <h1 class="header-title mt-4">Sinau Coding</h1>
        </div>
        <div class="profile">
          <img class="profile-image" src="../assets/images/profile.svg" alt="profile-picture" />
        </div>
        <div class="detail-user">
          <p class="name-user">Aarif Faqiih</p>
          <p class="type-user">Admin</p>
        </div>
        <div class="sidebar-menu">
          <button class="menu-list">
            <icon-home />
            <p class="m-2">Home</p>
          </button>
        </div>
        <div class="sign-out">
          <button class="btn-sign-out">
            <span class="m-2"> Log out</span>
            <icon-signout />
          </button>
        </div>
      </div>
      <div class="col-md-9 mainside">
        <Navbar />
        <main-content />
      </div>
    </div>
  </main>
</template>

<script>
import IconHome from "../components/icons/IconHome.vue";
import IconSignout from "../components/icons/IconSignout.vue";
import Navbar from "../components/Navbar.vue";
import MainContent from "../components/MainContent.vue";
export default (await import("vue")).defineComponent({
  components: {
    IconHome,
    IconSignout,
    Navbar,
    MainContent,
  },
});
</script>
