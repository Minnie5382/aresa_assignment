<template>
  <div class="menu">
    <a v-for="m in 3" :key="m">Home</a>
  </div>

  <div class="black-bg" v-if="모달창열렸니 == true" >
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <div v-for="(원룸, i) in 원룸들" :key="i">
    <img :src="원룸.image" class = "image">
    <h4 >{{ 원룸.title }}</h4>
    <p>{{ 원룸.price }} 원</p>
  </div>
</template>

<script>
import data from './oneroom'
export default {
  name: 'App',
  data() {
    return {
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0, 0, 0],
      price : [50, 60, 70],
      products : ['역삼동원룸', '천호동원룸','마포구원룸'],
      menus:['Home','Products','About']

    }
  },
  methods : {
  
  },
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img.image {
  width : 50%;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
}

.menu a {
  padding: 10px;
}
</style>
