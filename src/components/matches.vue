<template>
    <div class="matches-container scrollbar" id="style-3">
      <b-container>
          <b-row cols="1" cols-sm="1" cols-md="2" cols-lg="4">
              <b-col v-for="match in matches" :key="match._id">
                    <b-card
    :title=match.name
    img-src="https://poetsandquants.com/wp-content/uploads/sites/5/2019/05/beautiful-blur-blurred-background-733872.jpg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Email : {{match.email}}<br/>
      Phone number : {{match.phone}}
    </b-card-text>

    <b-button href="#" variant="primary">Chat with him/her</b-button>
  </b-card>
              </b-col>
              
          </b-row>
      </b-container>
    </div>
</template>
<script>

export default({
  data() {
    return{
      matches:{}
    }
  },
})
</script>

<style scoped>
.matches-container{
    padding:2rem;
}
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
  max-height: 91vh;
  max-width: 100vw;
	background: #F5F5F5;
	overflow-y: scroll;
  margin-top: 1rem;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}
</style>
<script>

//import axios from 'axios'
export default {
   created(){
   //  const matches = this.$store.state.user
    console.log("matches array :",this.$store.state.user.matches);
    this.matches=this.$store.state.user.matches;
  },
  computed:{
  
  }
}
</script>