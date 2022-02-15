<template lang="">
  <div>
    <h1>User 컴포넌트</h1>
    <p>이름 : {{ name }}</p>
    <button @click="onChange">이름 바꾸기</button>
    <hr />
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: 'kwengwoo',
    };
  },
  methods: {
    onChange: function () {
      this.name === 'kwengwoo'
        ? (this.name = 'park')
        : (this.name = 'kwengwoo');
      console.log(this.name);

      this.$emit('onChange', this.name);
    },
  },
  beforeCreate() {
    this.name;
  },
  created() {
    this.name = '';
  },
  beforeMount() {},
  mounted() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>
<style lang=""></style>

<script>
const User = {};
</script>
