<template>
  <div>
    <fetcher-header
        title="LV3 eiei"
        uri-path="/"
        bg-color="bg-blue"
      ></fetcher-header>
    <button @click="erlol">eiei</button>
    <button @click="fectOn">Show</button>
    <br>
      <p v-if="loading">Loading...</p>
      <!-- <div v-show="show"> -->
        <blank :id="errmess" :id1="errorNum" :show2="show2"></blank>
      <!-- </div> -->
      <!-- <div v-show="show3"> -->
        <correct :num="lengthpo" :show4="show4"></correct>
      <!-- </div> -->
      <ul type="1">
        <li v-for="post of posts" :key="post.name.id" v-if="show3">
          {{ post.name }}
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
import blank from '@/components/blank.vue'
import FetcherHeader from '@/components/FetcherHeader'
import correct from '@/components/correct.vue'
import VueSwal from 'vue-swal';

export default {
  components: {
    blank,
    correct,
    FetcherHeader,
  },
  data() {
    return {
      posts: [],
      errors: {},
      loading: false,
      error: '',
      errorNum: 0,
      show: false,
      show2: false,
      errmess: '',
      lengthpo: 0,
      show3: false,
      show4: false,
    }
  },
  methods: {
    async fectOn() {
      try{
        this.posts = []
        this.show2 = false;
        this.loading = true
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users `)
        this.loading = false
        this.posts = response.data
        // alert(`you have data ${this.posts.length}`)
        // swal(" OK !",`you have ${this.posts.length} data`)
        this.lengthpo = this.posts.length
        this.show3 = true
        this.show4 = true
        console.log(this.posts)
        } catch(e){
          console.log(e)
        }
    },
    async erlol() {
      try {
        this.show3 = false;
        this.show4 = false
        this.loading = true
        let response = await axios.get(`https://reqres.in/api/unknown/23`)
        this.posts = response.data
        // console.log(this.posts)
      } catch(e){
        this.errors = {}
        this.loading = false
        this.errors = e
        // console.log(typeof(this.errors))
        console.log(this.errors)
        this.error = this.errors.response.statusText
        this.errorNum = this.errors.response.status
        this.errmess = this.errors.message
        // console.log(typeof(this.errorNum))
        // console.log(typeof(this.error))
        // swal(`Error ! `,`${this.errmess}`)
        this.show = true
        this.show2 = true
    }
  },
  }
}
</script>

<style scoped>

</style>
