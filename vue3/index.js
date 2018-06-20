// 创建一个Vue实例，其中el属性代表要渲染的元素，data属性代表绑定的数据
// el  data  名字都是固定的，后面还会绑定方法，利用methods属性
var app = new Vue({
    el: "#app",
    data: {
        seen: true //由seen变量来控制元素是否显示
    }
});