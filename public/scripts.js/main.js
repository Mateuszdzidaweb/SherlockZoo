Vue.component('task',{

  template: '<li>{{messages}}</li>',


  data(){

    return{
      messages: 'This is message'
    }

  }

})


let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


