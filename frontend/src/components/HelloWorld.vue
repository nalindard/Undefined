<script setup>
import {reactive} from 'vue'
import {Greet} from '../../wailsjs/go/main/App'

const data = reactive({
  name: "",
  resultText: "Please enter your name below 👇",
})

function greet() {
  Greet(data.name).then(result => {
    data.resultText = result
  })
}

function cls(){
  window.runtime.Quit()
}
function min(){
  window.runtime.Show()
}
function hid(){
  window.runtime.Hide()
}

function maximiz(){
  window.runtime.WindowMaximise()
}
function unMaximiz(){
  window.runtime.WindowUnmaximise()
}
function minimiz(){
  window.runtime.WindowMinimise()
}
function unMinimiz(){
  window.runtime.WindowUnminimise()
}
function fulls(){
  window.runtime.WindowFullscreen()
}
function unful(){
  window.runtime.WindowUnfullscreen()
}
function center(){
  window.runtime.WindowCenter()
}
function toggle_max(){
  window.runtime.WindowToggleMaximise()  
}

</script>

<template>
  <main>
    <div id="result" class="result">{{ data.resultText }}</div>
    <div id="input" class="input-box">
      <input id="name" v-model="data.name" autocomplete="off" class="input" type="text"/>
      <div id="x"></div>
      <button class="btn" @click="greet">Greet</button>
      <button class="btn" @click="min">Show</button>
      <button class="btn" @click="hid">Hide</button>
      <button class="btn" @click="cls">Close</button>

      <button class="btn" @click="maximiz">maximiz</button>
      <button class="btn" @click="unMaximiz">unMaximiz</button>
      <button class="btn" @click="minimiz">minimiz</button>
      <button class="btn" @click="unMinimiz">unMinimiz</button>
      <button class="btn" @click="fulls">fulls</button>
      <button class="btn" @click="unful">unful</button>
      <button class="btn" @click="toggle_max">toggle_max</button>
      <button class="btn" @click="center">center</button>
    </div>
  </main>
</template>

<style scoped>
  #x{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .btn{
    padding: 7px 12px;
    font-size: 12px;
    background-color: purple;
  }
.result {
  height: 20px;
  line-height: 20px;
  margin: 1.5rem auto;
}

.input-box .btn {
  width: 60px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  border: none;
  margin: 0 0 0 20px;
  padding: 0 8px;
  cursor: pointer;
}

.input-box .btn:hover {
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  color: #333333;
}

.input-box .input {
  border: none;
  border-radius: 3px;
  outline: none;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background-color: rgba(240, 240, 240, 1);
  -webkit-font-smoothing: antialiased;
}

.input-box .input:hover {
  border: none;
  background-color: rgba(255, 255, 255, 1);
}

.input-box .input:focus {
  border: none;
  background-color: rgba(255, 255, 255, 1);
}
</style>
