import $http from '../http/http';

// 获取列表数据

export function getList(callback){
    $http.post('/get/list').then((res) => {
        callback && callback(res.data);
    });
}