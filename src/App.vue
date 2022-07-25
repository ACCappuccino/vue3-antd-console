<!--
 * @Author: Mocha
 * @Date: 2022-07-25 11:48:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-25 16:00:51
 * @Description: 
-->

<template>
    <a-button type="primary">Primary Button</a-button>
    <div>{{ profile }}</div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { useStore, mapState } from "vuex";
import { computed } from "vue";
export default {
    data: function () {
        return {};
    },
    setup() {
        const store = useStore();
        console.log(store);
        return {
            profile: computed(() => store.state.user.profile.token),
        };
    },
};
</script>
