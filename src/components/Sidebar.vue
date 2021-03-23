<template>
    <div class="sidebar-container">
      <div class="top-header">
          <h4 class="top-header-heading">&lt; LOVE BUG /&gt;</h4>
          <a class="places"><i class="fas fa-map-marker-alt"></i></a>
          <p class="coord1">{{coordinates.lat}} : LAT</p>
          <p class="coord2">{{coordinates.lng}} : LNG</p>
              <a class="signout">
          <i class="far fa-bell"></i>
        </a>
        <div class="top-right-div">
<b-dropdown id="dropdown-dropleft" dropleft variant="primary" class="m-2" no-caret>
   <template #button-content>
      <i class="fas fa-user"></i>
    </template>
    <b-dropdown-item href="#">Edit profile</b-dropdown-item>
    <b-dropdown-item href="#" @click="logout">Logout</b-dropdown-item>
  </b-dropdown>
  
        </div>
       
        
      </div>
    <input type="checkbox" class="navigation__checkbox" id="navi-toggle" v-b-toggle.sidebar-backdrop>

            <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon"><i class="fas fa-bars"></i></span>
            </label>
<b-sidebar
      id="sidebar-backdrop"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
      <!-- <div class="px-3 py-2">
        <b-form-group label="Backdrop variant" label-for="backdrop-variant">
          <b-form-select id="backdrop-variant" v-model="variant" :options="variants"></b-form-select>
        </b-form-group>
      </div> -->
       <img :src=$store.state.user.photoURL alt="" class="my-photo">
        <h4>Hello {{$store.state.user.name}}!</h4>
        <div class="side-links d-flex"><router-link to="./dashboard" class="link">&nbsp;&nbsp;Dashboard</router-link><span><i class="fas fa-tachometer-alt"></i></span></div>
        <div class="side-links d-flex"><router-link to="./contests" class="link">&nbsp;&nbsp;Contests</router-link><span><i class="fas fa-compass"></i></span></div>
        <div class="side-links d-flex"><router-link to="./matches" class="link">&nbsp;&nbsp;Matches</router-link><span>&nbsp;<i class="fas fa-people-arrows"></i></span></div>
        <div class="side-links d-flex"><router-link to="./practice" class="link">&nbsp;&nbsp;Practice</router-link><span>&nbsp;<i class="fas fa-pencil-ruler"></i></span></div>
        <div class="side-links d-flex"><router-link to="./ide" class="link">&nbsp;&nbsp;IDE</router-link><span>&nbsp;<i class="fas fa-stroopwafel"></i></span></div>
      <div class="side-links d-flex"><router-link to="./help" class="link">&nbsp;&nbsp;Help and Support</router-link><span>&nbsp;<i class="fas fa-question-circle"></i></span></div> 
    </b-sidebar>
  </div>
</template>
<script>
import firebase from 'firebase'
  export default {
    name:"Sidebar",
    data() {
      return {
        variant: 'dark',
        variants: [
          'transparent',
          'white',
          'light',
          'dark',
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
        ],
        coordinates:{
          lat:0,
          lng:0
        },
        name:"",
        photo:""
      }
    },
    created()
    {
      this.name=this.$store.state.user.name;
      this.photo=this.$store.state.user.photoURL;
       this.$getLocation({})
       .then(coordinates=>{
// Applied to Dogbert's answer:
var a=coordinates.lat;
var b=coordinates.lng;
var truncateda = Math.floor(a * 100) / 100;
var truncatedb = Math.floor(b * 100) / 100;

this.coordinates.lat=truncateda;
this.coordinates.lng=truncatedb;
       })
       .catch(error=>alert(error));
    },
    methods: {
      async logout(){
        await firebase.auth().signOut()
      }
    },
  }
</script>
<style scoped lang="scss">
.side-links{
  padding:0.4rem 1rem;
  text-decoration: none;
  cursor: pointer;
  justify-content: space-between;
  &:hover{
    color:white;
    background-color:#4a47a3;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 3px;
    transition:all 0.8s;
  }
}

.side-links:hover > .link{
  color:white;
}
.link{
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
}
.my-photo{
    height:10rem;
    clip-path: circle(40% at 50% 50%);
}
h4{
    padding:1.5rem;
}
// #my-button{
//     position:absolute;
//     display: none;
//     top:0.5rem;
//     left:2rem;
//     z-index:1000;
// }
// .ham{
//     position:absolute;
//     top:0.4rem;
//     left:2rem;
//     z-index:1000;
//     font-size: 2rem;
//     cursor:pointer;
//     &:active{
//         transform:translateX(20rem);
//         transition:all 1s;
//     }
// }
.navigation {
    &__checkbox {
        display: none;
    }
    &__button {
        background-color: white;
        font-size: 1.7rem;
        height: 2.5rem;
        width: 2.5rem;
        position: absolute;
        top: 0.3rem;
        left: 1rem;
        // border:solid 1.5px black;
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba(black, .1);
        text-align: center;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
}
.top-header{
  height:3rem;
  width:100vw;
  margin-top:0;
  background-color:#4a47a3;
}
.signout,.places{
  color:white;
  margin:1rem;
  font-size: 1.3rem;
  text-decoration:none;
  cursor: pointer;
}
.top-header-heading{
  color:white;
  position: absolute;
  top:-0.8rem;
  left:50%;
  transform:translateX(-50%);
}
.top-right-div{
  margin:0 auto;
  position: absolute;
  top:-0.2rem;
  right:0;
}
.dropdown{
  display: inline-block;
  margin-left:1rem;
  margin-right: 1rem;
}
.signout{
  position: absolute;
  top:-0.45rem;
  right:4rem;
  z-index: 1000;
}
.places{
  position: absolute;
  top:-0.45rem;
  right:12rem;
}
.coord1{
  position:absolute;
  color:white;
  font-size:0.8rem;
  z-index: 1000;
  top:0.3rem;
  right:7.2rem;

}
.coord2{
  position:absolute;
  color:white;
  z-index: 1000;
  top:1.3rem;
  right:7rem;
  font-size:0.8rem;
}
</style>