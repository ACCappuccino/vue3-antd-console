<template>
  <div
    style="
      background: #fff;
      padding: 0 0 16px 24px;
      margin: 0 0 16px;
      border-top: 1px solid #f0f2f5;
    "
  >
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>User</a-breadcrumb-item>
      <a-breadcrumb-item>Bill</a-breadcrumb-item>
    </a-breadcrumb>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbTitle',
  props: {
    title: {
      type: String,
      default: ''
    },
    routeArry: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
<style lang='less'  scoped>
</style>
