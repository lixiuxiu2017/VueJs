// 创建一个Vue实例，其中el属性代表要渲染的元素，data属性代表绑定的数据,methods属性代表绑定的方法
// el  data  methods  名字都是固定的
var app = new Vue({
    el: "#app",
    data: {
       message: "Hello Vuejs!"
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split("").reverse().join("");
        }
    }
});