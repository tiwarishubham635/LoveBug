<template>
<div class="my-ide">

       <div class="scrollbar" id="style-3">
   <div class="my">
 
        <label for="lang">Choose language : </label>
        <select name="" id="lang" v-model="selected" required>
        <option value="cpp" selected>C++</option>
        <option value="java">Java</option>
        <option value="python">Python</option>
    </select>
    </div>
     
    <div data-pym-src="https://www.jdoodle.com/embed/v0/36IZ?rw=1&arg=0" v-show="selected==='cpp'" id="cpp"></div>
    <div data-pym-src="https://www.jdoodle.com/embed/v0/36JE?rw=1&arg=0" v-show="selected==='java'" id="java"></div>
    <div data-pym-src="https://www.jdoodle.com/embed/v0/36JF?rw=1&arg=0" v-show="selected==='python'" id="python"></div>
    
  <b-button v-if="$route.fullPath!='/ide'" id="show-btn" @click="$bvModal.show('bv-modal-example')" variant="primary">Submit</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <template #modal-title>
      Paste your <code>code</code> here
    </template>
    <div class="d-block text-center">
     <b-form-textarea
      id="textarea"
      v-model="file"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example');submitwait();">OK</b-button>
  </b-modal>

    <!-- <p>{{selected}} {{file}}</p> -->
    </div>
 
</div>
   
</template>

<script>
import {mapState} from 'vuex' // imp
export default {
  name:"ide",
    data(){
        return {
        selected:"",
        file:""
        }
    },
    methods:
    {
     submitwait() {
    setTimeout(() => alert("Congratulations ! Your code is Accepted"), 3000);
  }
    },
  updated() {
    var scripts = [
      "https://www.jdoodle.com/assets/jdoodle-pym.min.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
  
    //  document.querySelector("#app > div > div > div > div.embed-brand-area.level").innerText="";
    });
  },
  computed:{
    ...mapState(['user']) // imp
  }
}
</script>
<style scoped>
#style-3::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

#style-3::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

#style-3::-webkit-scrollbar-thumb
{
	background-color: #000000;
}
.scrollbar
{
  margin:0 auto;
  max-height: 36rem;
  max-width: 52rem;
	background: #F5F5F5;
	overflow-y: scroll;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

</style>
