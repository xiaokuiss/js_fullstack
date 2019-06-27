<template>
  <div class="wrapper">
    <div class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li> <router-link to="/home">首页</router-link> </li>
          <li> <router-link to="/time-entries">计划列表</router-link> </li>
        </ul>
      </div>
    </div>
    <div class="container">
      <div class="col-sm-3">
        <v-sidebar></v-sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/sidebar'
export default {
  name: 'App',
  components: {
    'v-sidebar': sidebar
  }
}
</script>


