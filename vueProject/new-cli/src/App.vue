<template lang="">
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button @click="count++">추가</button>
    <User @onChange="changeName"></User>
    <UserDetail :nameChild="name"></UserDetail>
  </div>
</template>
<script>
import User from './components/User.vue'
import UserDetail from './components/userDetail.vue'
export default {
  components: {
    User,
    UserDetail,
  },
  data() {
    return {
      title: '안녕하세요',
      count: 1,
      name: '',
    }
  },
  methods: {
    changeName(name) {
      console.log(name)

      this.name = name
    },
  },
}
</script>
<style lang=""></style>
