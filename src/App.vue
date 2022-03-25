<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import { getList } from './service/service';
export default {
    data(){
        return {
            list: []
        };
    },
    mounted(){
        this.getListEvent();
    },
    methods: {
        // 获取列表
        getListEvent(){
            getList((res) => {
                this.list = res;
            });
        }
    }
};
</script>
