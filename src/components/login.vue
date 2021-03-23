<template>
  <div class="login-container">
      <div class="login-div">
        <div class="grid">
					<figure class="effect-dexter">
						<img src="https://www.myclickmagazine.com/wp-content/uploads/2016/12/black-and-white-photo-of-couple-laughing-by-Sonia-Bourdon.jpg" alt="img19"/>
						<figcaption>
							<h2>&lt;LOVE <span>BUG/&gt;</span></h2>
              <h5>WHERE CODE MEETS LOVE</h5>
							<p><b-button variant="primary" class="login-button" @click="login">LOGIN</b-button></p>
						</figcaption>			
					</figure>
          
				</div>
         
           <!-- <a href="#" class="testbutton"><i class="fab fa-google"></i>&nbsp;&nbsp;&nbsp;Sign-in with Google</a> -->
      </div>
     
    </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
export default({
  name:"login",
  methods: {
    async login(){
        var provider = new firebase.auth.GoogleAuthProvider();
        console.log('provider');
        const {user} =await  firebase.auth().signInWithPopup(provider)
        const {data} = await axios.post('/api/participants',{uid:user.uid,data:user})
        console.log(data)
        this.$store.commit("adduser",data.participant)
    }
  },
})
</script>

<style scoped lang="scss">
.login-container{
    height: 100vh;
    width:100vw;
    background-image: linear-gradient(
        to right bottom,
        rgba(#2ebf91, 0.45),
        rgba(#8360c3, 0.45)),
        url("https://wallpapercave.com/wp/I2JCo6Y.jpg");
        background-position: center;
    background-size: cover;
}
.testbutton {
    text-decoration: none;
  font-family: verdana;
  font-weight: bold;
  color: #000000 !important;
  font-size: 18px;
  text-shadow: 1px 1px 0px #7CACDE;
  box-shadow: 1px 1px 1px #BEE2F9;
  padding: 10px 25px;
  border-radius: 10px;
  border: 2px solid #A327A3;
  background: #63B8EE;
  background: linear-gradient(to top, #63B8EE, #468CCF);
}
.testbutton:hover {
  background: #468CCF;
  background: linear-gradient(to top, #468CCF, #63B8EE);
}
.my-photo{
    height: 23rem;
    width: 100%;
    border-radius: 5px;
    border:solid 1px black;
}
.login-button{
  display: block;
  margin: 1rem auto;
}
figure.effect-dexter {
	background: -webkit-linear-gradient(top, rgba(37,141,200,1) 0%, rgba(104,60,19,1) 100%);
	background: linear-gradient(to bottom, rgba(37,141,200,1) 0%,rgba(104,60,19,1) 100%); 
}

figure.effect-dexter img {
	-webkit-transition: opacity 0.35s;
	transition: opacity 0.35s;
}

figure.effect-dexter:hover img {
	opacity: 0.4;
}

figure.effect-dexter figcaption::after {
	position: absolute;
	right: 30px;
	bottom: 30px;
	left: 30px;
	height: -webkit-calc(50% - 30px);
	height: calc(50% - 30px);
	border: 7px solid #fff;
	content: '';
	-webkit-transition: -webkit-transform 0.35s;
	transition: transform 0.35s;
	-webkit-transform: translate3d(0,-100%,0);
	transform: translate3d(0,-100%,0);
}

figure.effect-dexter:hover figcaption::after {
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}

figure.effect-dexter figcaption {
	padding: 3em;
	text-align: left;
}

figure.effect-dexter p {
	position: absolute;
	right: 60px;
	bottom: 60px;
	left: 60px;
	opacity: 0;
	-webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
	transition: opacity 0.35s, transform 0.35s;
	-webkit-transform: translate3d(0,-100px,0);
	transform: translate3d(0,-100px,0);
}

figure.effect-dexter:hover p {
	opacity: 1;
	-webkit-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);
}
.grid {
	position: absolute;
	top:50%;
  left:50%;
  transform:translate(-50%,-50%);
	padding: 1em 0 4em;
	max-width: 1000px;
	list-style: none;
	text-align: center;
}

/* Common style */
.grid figure {
	position: relative;
	float: left;
	overflow: hidden;
	margin: 10px 1%;
  height:20rem;
  width:30rem;
	background: #3085a3;
	text-align: center;
	cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius:3px;
}

.grid figure img {
	position: relative;
	display: block;
	min-height: 100%;
	max-width: 100%;
	opacity: 0.8;
}

.grid figure figcaption {
	padding: 2em;
	color: #fff;
	text-transform: uppercase;
	font-size: 1.25em;
  text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.grid figure figcaption::before,
.grid figure figcaption::after {
	pointer-events: none;
}

.grid figure figcaption,
.grid figure figcaption > a {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

/* Anchor will cover the whole item by default */
/* For some effects it will show as a button */
.grid figure figcaption > a {
	z-index: 1000;
	text-indent: 200%;
	white-space: nowrap;
	font-size: 0;
	opacity: 0;
}

.grid figure h2 {
	word-spacing: -0.15em;
	font-weight: 300;
}

.grid figure h2 span {
	font-weight: 800;
}

.grid figure h2,
.grid figure p {
	margin: 0;
}

.grid figure p {
	letter-spacing: 1px;
	font-size: 68.5%;
}
</style>