<template>
<div class="container">
  <h1 id="t1">Welcome Please Press the Button</h1>
  <div class="top-one">
    <div class="show-num">
      <p class="p1"><i class="fas fa-sort-numeric-down" /> Your Number : {{ num }} <i class="far fa-star" /> </p>
    </div>
    <div class="box-btn">
      <button @click="ranNum" class="btn">Gen!</button>
    </div>
  </div>
  <div class="topic-title">
    <h1 class="t2">TOPIC TITLE</h1>
    <h1 class="t2"> {{ title }} </h1>
  </div>
  <div class="comment">
    <div class="box-loop" v-for="post of posts2" :key="post.name.email">
      <p class="in-div"><i class="far fa-user fa" /> : {{ post.name }}</p>
      <p class="in-div"><i class="far fa-envelope fa" /> : {{ post.email }}</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import VueSwal from 'vue-swal';

export default {
  data() {
    return {
      num: 0,
      posts: [],
      title: '',
      posts2: [],
      error: [],
    }
  },
  methods: {
    async ranNum() {
      try {
        this.num = (Math.floor((Math.random() * 100) + 1));
        swal("Thank You !! for play")
        let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.num}`)
        this.posts = response.data
        this.title = this.posts.title
        response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.num}/comments`)
        this.posts2 = response.data
      } catch (e) {
        this.error = e
        // console.log(this.error)
      }
    }
  }
};
</script>


<style scoped>
  .container {
    display         : flex;
    flex-direction  : column;
    justify-content : center;
    align-items     : center;
    height          : 100%;
    /* min-height      : 100vh; */
  }

  .box-loop {
    margin-bottom   : 20px;
    background-color: bisque;
    max-width       : 100%;
    height          : 80px;
    padding         : 15px 15px;
  }

  #t1 {
    font-size       : 1.4rem;
  }

  .t2 {
    font-size       : 1.2rem;
  }

  .top-one {
    display         : flex;
    justify-content : center;
    align-items     : center;
    min-width       : 100%;
    height          : 100px;
    background-color: aquamarine;
  }

  .show-num {
    display         : flex;
    justify-content : center;
    width           : 60%;
  }

  .box-btn {
    display         : flex;
    justify-content : center;
    width           : 40%;
  }

  .btn {
    background-color    : transparent;
    font-weight         : bold;
    border-radius       : 20px;
    color               : black;
    border              : 2px solid black;
    height              : 40px;
    width               : 80px;
    font-size           : 1.2rem;
    outline             : none;
  }

  .fa {
    font-size         : 1.2em;
    color             : black;
    font-weight       : bold;
  }

  .btn:hover {
    background-color  : yellow;
  }

  .comment {
    margin-top        : 20px;
    display           : flex;
    flex-direction    : column;
    justify-content   : center;
    font-size         : 1.3rem;
  }

  .topic-title {
    margin-top        : 20px;
    /* line-height: 1.6; */
  }

  .topic-title {
    text-align        : center;
  }

  .in-div {
    font-size         : 1.1rem;
  }
  .p1 {
    font-size         : 1.0em;
    font-weight       : bold;
  }

  @media only screen and (max-width:768px) {
    .top-one {
      min-width       : 100%;
    }
    .p1 {
      font-size       : 1.3rem;
    }
    #t1 {
      font-size       : 1.2rem;
    }
    .t2 {
      font-size       : 1.2rem;
    }
    .box-loop {
      max-width       : 100%;
      padding         : 12px 10px;
    }
    .comment {
      max-width       : 90%
    }
  }

  @media only screen and (max-width: 400px) {
    .top-one {
      width           : 100%;
    }
    #t1 {
      font-size       : 1.2rem;
    }
    .t2 {
      font-size       : 0.9rem;
    }
    .p1 {
      font-size       : 1.2em;
    }
    .btn {
      border-radius   : 20px;
      color           : black;
      border          : 1px solid black;
      height          : 40px;
      width           : 70px;
      font-size       : 1rem;
    }
    .comment {
      margin-top      : 20px;
      line-height     : 1.5;
    }
    .topic-title {
      margin-top      : 20px;
      line-height     : 1.6;
    }
    .box-loop {
      max-width       : 100%;
      margin          : 0 0 10px 0;
      padding         : 10px 10px ;
    }
    .in-div {
      font-size       : 0.9rem;
    }
  }
</style>
