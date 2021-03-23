<template>
<div>
    <!-- <b-button variant="danger" style="margin-top:1rem;" @click="verifyadd" v-show="verifyshow==true">
        Verify address
    </b-button> -->
    <div v-show="verifyaddress===true">
        <b-card no-body class="basicapi-container">
    <b-tabs content-class="mt-3">
    <b-tab title="Problem" active>
        <b-row class="my-row" sm="1" md="2" lg="2">
    <b-col cols="6">
    <div @click="convert" class="my-div scrollbar" id="style-3">
         <select name="" id="lang" v-model="selected" required>
        <option value="first" selected>Detect cycle in undirected graph</option>
        <option value="second">0/1 knapsack</option>
        <option value="third">Matrix chain multiplication</option>
    </select>
     <p v-if="selected=='first'">
         <pre>
        Given an undirected graph, how to check if there is a cycle in the graph? 
Example, 

Input: n = 4, e = 4 
Output: Yes 
Explanation: 
0 1, 1 2, 2 3, 0 2 
         </pre>
     </p>
     <p v-if="selected=='second'">
         <pre>
Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item or don’t pick it (0-1 property).
         </pre>
     </p>
     <p v-if="selected=='third'">
         <pre>
Given a sequence of matrices, find the most efficient way to multiply these matrices together. The problem is not actually to perform the multiplications, but merely to decide in which order to perform the multiplications.
We have many options to multiply a chain of matrices because matrix multiplication is associative. In other words, no matter how we parenthesize the product, the result will be the same. For example, if we had four matrices A, B, C, and D, we would have: 

(ABC)D = (AB)(CD) = A(BCD) = ....
However, the order in which we parenthesize the product affects the number of simple arithmetic operations needed to compute the product, or the efficiency. For example, suppose A is a 10 × 30 matrix, B is a 30 × 5 matrix, and C is a 5 × 60 matrix. Then,  

(AB)C = (10×30×5) + (10×5×60) = 1500 + 3000 = 4500 operations
A(BC) = (30×5×60) + (10×30×60) = 9000 + 18000 = 27000 operations.
Clearly the first parenthesization requires less number of operations.
Given an array p[] which represents the chain of matrices such that the ith matrix Ai is of dimension p[i-1] x p[i]. We need to write a function MatrixChainOrder() that should return the minimum number of multiplications needed to multiply the chain. 

Input: p[] = {40, 20, 30, 10, 30}   
Output: 26000  
There are 4 matrices of dimensions 40x20, 20x30, 30x10 and 10x30.
Let the input 4 matrices be A, B, C and D.  The minimum number of 
multiplications are obtained by putting parenthesis in following way
(A(BC))D --> 20*30*10 + 40*20*10 + 40*10*30

Input: p[] = {10, 20, 30, 40, 30} 
Output: 30000 
There are 4 matrices of dimensions 10x20, 20x30, 30x40 and 40x30. 
Let the input 4 matrices be A, B, C and D.  The minimum number of 
multiplications are obtained by putting parenthesis in following way
((AB)C)D --> 10*20*30 + 10*30*40 + 10*40*30

Input: p[] = {10, 20, 30}  
Output: 6000  
There are only two matrices of dimensions 10x20 and 20x30. So there 
is only one way to multiply the matrices, cost of which is 10*20*30
         </pre>
     </p>
    </div>
    </b-col>
    <b-col cols="6">
        <ide>
        </ide>
    </b-col>
  </b-row>
    </b-tab>
  </b-tabs>
</b-card>
    </div>
    
</div>

 
</template>

<script>
// import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios,axios);
import ide from"@/components/ide.vue"
export default({
    name:"running",
    data(){
        return{
            toggle:false,
            verifyaddress:true,
            selected:"",
            
        }
    },
    components:{
        ide
    },
    methods:{
      convert(){
          var messagetoSend = this.text.replace(/\n/g, "<br />");
          this.text=messagetoSend;
          this.toggle=true;
      },
      verifyadd(){
          this.verifyaddress=true;
          this.verifyshow=false;
      }
    }
    // mounted(){
    //     Vue.axios.get('http://e4730b32.problems.sphere-engine.com/api/v4/problems/53?access_token=062af3477a340e34e83db6fa29390601')
    //     .then((resp)=>{
    //         console.log(resp)
    //     })
    // }
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
    max-height: 36rem;
    max-width: 80rem;
	background: #F5F5F5;
	overflow-y: scroll;
    padding:1rem;
    margin-top: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.my-row{
    width:100vw;
}
.basicapi-container{
    margin:0.5rem;
    
}
pre{
    white-space: pre-wrap;
}
</style>
