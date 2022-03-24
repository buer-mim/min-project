module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'indent': ['error', 4],
        'semi': ["error", "always"],
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
        'comma-dangle': [2, 'never'],
        'arrow-spacing': [2, {
            'before': true,
            'after': true
        }],
        // 强制 vue 的组件 name 名必须使用大驼峰
        'vue/name-property-casing': ['error', 'PascalCase'],
        // 强制使用骆驼拼写法命名约定
        'camelcase': [2, {
            'properties': 'always'
        }]
    }
};
