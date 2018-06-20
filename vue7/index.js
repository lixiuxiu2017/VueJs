// 利用Vue.component定义一个新组件"todo-item"，同时自定义新特性“todo"以及模板
// 注意：自定义组件类似于自定义元素，可以自定义特性，在html页面中当做新标签使用
Vue.component("todo-item",{
    props: ["todo"],
    template: "<li>{{ todo.text }}</li>"
});

// 创建一个Vue实例，其中el属性代表要渲染的元素，data属性代表绑定的数据
var app = new Vue({
    el: "#app",
    data: {
       groceryList:[
           {text: "fruit", id: 0},
           {text: "vegetable", id: 1},
           {text: "animal", id: 2}
       ]
    }
});


