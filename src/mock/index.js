import Mock from 'mockjs';

import list from './data/list';

// 获取列表数据
Mock.mock('/get/list', 'post', list);

export default Mock;