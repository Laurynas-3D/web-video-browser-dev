import Vue from 'vue';
import App from './App';


// Old way to define Vue instance
/*
new Vue({
    render: function(createElement){
        return createElement(App);
    }
});
*/

// Vue instance shortened, same thing as above
/*
new Vue({
    render: function(h){
        return h(App);
    }
});
*/

// Two ways of Specify element render to application, does same thing..
/*
new Vue({
    el:'#app'
    render: h => h(App)
    
});

new Vue({
    render: h => h(App)
}).$mount('#app');
*/


// Vue instance shortened with arrow function 
new Vue({
    render: h => h(App)
}).$mount('#app');