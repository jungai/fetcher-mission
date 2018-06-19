<template>
  <div>
    <div class="container" v-show="show4">
      <div class="top-box">
        <div class="error">
          <p>Wow !</p>
        </div>
        <div class="chidkwa">
          <button @click="close" class="close">X</button>
        </div>
      </div>
      <div class="bottom-box">
        <p> you have {{ num }} data</p>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  props: {
    num: Number,
    show4: Boolean,
  },
  methods: {
    close() {
      this.show4 = false;
    }
  }
};
</script>

<style scoped>
  .container {
    position: fixed;
    height: 300px;
    width: 300px;
    /* background-color: aquamarine; */
    display: flex;
    flex-direction: column;
    margin: 10% 40%;
    border: 1px solid black;

  }
  .top-box {
    width: 100%;
    height: 50px;
    background-color: greenyellow;
    border: 1px solid black;
    display:flex;
  }
  .error {
    width: 70%;
    /* background-color: blueviolet; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .close {
    background-color: transparent;
    font-weight: bold;
    /* border-radius: 20px; */
    color: black;
    border: 0px;
    height: 35px;
    width: 35px;
    /* margin-top: -30px; */
  }
  .chidkwa {
    width: 30%;
    display: flex;
    justify-content: flex-end;
  }
  .bottom-box {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
