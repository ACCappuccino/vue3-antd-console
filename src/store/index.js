/*
 * @Author: Mocha
 * @Date: 2022-07-25 15:04:59
 * @LastEditors:
 * @LastEditTime: 2022-07-25 15:15:31
 * @Description:
 */
import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";

import user from "./modules/user";

export default createStore({
    modules: {
        user,
    },
    // 配置插件
    plugins: [
        createPersistedstate({
            key: "work_management_pc",
            // 指定需要存储的模块
            paths: ["user"],
        }),
    ],
});
