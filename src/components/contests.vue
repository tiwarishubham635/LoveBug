<template>
<b-tabs content-class="mt-3" class="my-tabs">
    <b-tab title="Registered Contests" active>
      <div class="contests-container scrollbar" id="style-3">
    <b-container>
        <b-row class="contests-row" cols="1" cols-sm="1" cols-md="2" cols-lg="4" align-h="center">
            <b-col v-for="contest in $store.state.user.contests" :key="contest._id">
              <!-- <p>{{contest.start_time}}{{contest.end_time}}{{contest.participants.length}}</p> -->
                 <b-card
    :title=contest.name
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2">
    <b-card-text>
       Start Time :{{contest.start_time}}<br/>
       End Time :{{contest.end_time}}<br/>
       No of participants :{{contest.participants.length}}

    </b-card-text>

    <b-button href="#" variant="primary">See more info</b-button>
  </b-card>
            </b-col>        
        </b-row>
    </b-container>
   
</div>
    </b-tab>
    <b-tab title="Running" @click="getrunning">
      <b-container>
         <b-row>
        <b-col v-for="(run,index) in runningcontests" :key="run._id">
          <b-card
    :title=run.name
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Start time: {{runningcontests[index].start_time}}<br/>
      End time: {{runningcontests[index].end_time}}
    </b-card-text>

    <router-link to="./running" class="start-link">Start Solving</router-link>
  </b-card>
        </b-col>
      </b-row>
      </b-container>
         
    </b-tab>
  </b-tabs>

    
</template>
<script>

export default({
 components:{
 },
 data(){
   return{
     contests:{

     },
     runningcontests:[]
   }
 },
 methods:{
  getrunning(){
    this.runningcontests.length=0;
    for (var index = 0; index < this.contests.length; index++) { 
      var mydate=new Date(this.contests[index].start_time);
      console.log(mydate.getTime());
      const nowdate=new Date();
      console.log(nowdate.getTime());
      if(nowdate.getTime()>=mydate.getTime()){
         this.runningcontests.push(this.contests[index]);

      }
     
    //   console.log(mydate.getTime());
    //   console.log(nowdate.getTime());
    // console.log(this.contests[index].start_time); 
} 
  }
 },
  created(){
   console.log(this.$store.state.user.contests);
   this.contests=this.$store.state.user.contests;
 }
})
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
  max-height: 85vh;
  max-width: 100vw;
	background: #F5F5F5;
	overflow-y: scroll;
  margin-top: 1rem;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
}
.contests-row{
    margin-top:2rem;
}
.my-tabs{
  overflow:hidden;
}
.start-link{
  text-decoration: none;
}
</style>