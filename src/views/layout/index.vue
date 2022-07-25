<template>
    <a-layout>
        <a-layout-sider
            v-model:collapsed="collapsed"
            :trigger="null"
            collapsible
        >
            <div class="logo" />
            <a-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="inline"
                :open-keys="openKeys"
                @openChange="onOpenChange"
            >
                <a-sub-menu key="sub1" title="子菜单">
                    <a-menu-item key="1" @click="handerClick">
                        <user-outlined />
                        <span>nav 1</span>
                    </a-menu-item>
                    <a-menu-item key="2">
                        <video-camera-outlined />
                        <span>nav 2</span>
                    </a-menu-item>
                    <a-menu-item key="3">
                        <upload-outlined />
                        <span>nav 3</span>
                    </a-menu-item>
                </a-sub-menu>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0 24px">
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined
                    v-else
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <img src="" alt="" style="width: 30px; height: 30px" />
                <span>momo.zxy</span>
            </a-layout-header>
            <a-layout-content style="margin: 0">
                <BreadcrumbTitle title="我与公司共成长" :routeArry="[]" />
                <div :style="{ padding: '24px', background: '#fff' }">
                    xxx
                    <router-view />
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons-vue";
import BreadcrumbTitle from "@/components/BreadcrumbTitle.vue";
import { defineComponent, reactive, ref, toRefs } from "vue";
export default defineComponent({
    name: "Layout",
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        BreadcrumbTitle,
    },

    setup() {
        const state = reactive({
            openKeys: ["sub1"],
        });

        const onOpenChange = (openKeys) => {
            console.log(openKeys);
        };
        const handerClick = () => {
            console.log(111);
        };
        return {
            handerClick,
            ...toRefs(state),
            onOpenChange,
            selectedKeys: ref(["1"]),
            collapsed: ref(false),
        };
    },
});
</script>
<style lang="less" scoped>
// .logo {
//   height: 64px;
//   background-color: #f0f2f5;
// }
// .ant-layout-sider {
//   height: 100vh;
// }
// #components-layout-demo-custom-trigger .trigger {
//   font-size: 18px;
//   line-height: 64px;
//   padding: 0 24px;
//   cursor: pointer;
//   transition: color 0.3s;
// }

// #components-layout-demo-custom-trigger .trigger:hover {
//   color: #1890ff;
// }

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>
