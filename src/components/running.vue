<template>
<div>
    <b-button variant="danger" style="margin-top:1rem;" @click="verifyadd" v-show="!verifyaddress">
        Verify address
    </b-button>
    <div v-show="verifyaddress===true">
        <b-card no-body class="basicapi-container">
    <b-tabs content-class="mt-3">
    <b-tab title="Problem" active>
        <b-row class="my-row" sm="1" md="2" lg="2">
    <b-col cols="6">
    <div @click="convert" class="my-div scrollbar" id="style-3">
       <select name="" id="lang" v-model="selected" required>
        <option value="easy" selected>Easy</option>
        <option value="medium">Medium</option>
        <option value="difficult">Difficult</option>
    </select>
     <p v-if="selected==='easy'">
         <pre>
Max and Mex
time limit per test1 second
memory limit per test256 megabytes
inputstandard input
outputstandard output
You are given a multiset S initially consisting of n distinct non-negative integers. A multiset is a set, that can contain some elements multiple times.

You will perform the following operation k times:

Add the element ⌈a+b2⌉ (rounded up) into S, where a=mex(S) and b=max(S). If this number is already in the set, it is added again.
Here max of a multiset denotes the maximum integer in the multiset, and mex of a multiset denotes the smallest non-negative integer that is not present in the multiset. For example:

mex({1,4,0,2})=3;
mex({2,5,1})=0.
Your task is to calculate the number of distinct elements in S after k operations will be done.

Input
The input consists of multiple test cases. The first line contains a single integer t (1≤t≤100) — the number of test cases. The description of the test cases follows.

The first line of each test case contains two integers n, k (1≤n≤105, 0≤k≤109) — the initial size of the multiset S and how many operations you need to perform.

The second line of each test case contains n distinct integers a1,a2,…,an (0≤ai≤109) — the numbers in the initial multiset.

It is guaranteed that the sum of n over all test cases does not exceed 105.

Output
For each test case, print the number of distinct elements in S after k operations will be done.

Example
inputCopy
5
4 1
0 1 3 4
3 1
0 1 4
3 0
0 1 4
3 2
0 1 2
3 2
1 2 3
outputCopy
4
4
3
5
3
Note
In the first test case, S={0,1,3,4}, a=mex(S)=2, b=max(S)=4, ⌈a+b2⌉=3. So 3 is added into S, and S becomes {0,1,3,3,4}. The answer is 4.

In the second test case, S={0,1,4}, a=mex(S)=2, b=max(S)=4, ⌈a+b2⌉=3. So 3 is added into S, and S becomes {0,1,3,4}. The answer is 4.
         </pre>
         


     </p>
     <p v-if="selected==='medium'">
         <pre>
Berland Crossword
time limit per test2 seconds
memory limit per test256 megabytes
inputstandard input
outputstandard output
Berland crossword is a puzzle that is solved on a square grid with n rows and n columns. Initially all the cells are white.

To solve the puzzle one has to color some cells on the border of the grid black in such a way that:

exactly U cells in the top row are black;
exactly R cells in the rightmost column are black;
exactly D cells in the bottom row are black;
exactly L cells in the leftmost column are black.
Note that you can color zero cells black and leave every cell white.

Your task is to check if there exists a solution to the given puzzle.

Input
The first line contains a single integer t (1≤t≤1000) — the number of testcases.

Then the descriptions of t testcases follow.

The only line of each testcase contains 5 integers n,U,R,D,L (2≤n≤100; 0≤U,R,D,L≤n).

Output
For each testcase print "YES" if the solution exists and "NO" otherwise.

You may print every letter in any case you want (so, for example, the strings yEs, yes, Yes and YES are all recognized as positive answer).

Example
inputCopy
4
5 2 5 3 1
3 0 0 0 0
4 4 1 4 0
2 1 1 1 1
outputCopy
YES
YES
NO
YES
         </pre>
     </p>
     <p v-if="selected==='difficult'">
         <pre>
1D Sokoban
time limit per test2 seconds
memory limit per test256 megabytes
inputstandard input
outputstandard output
You are playing a game similar to Sokoban on an infinite number line. The game is discrete, so you only consider integer positions on the line.

You start on a position 0. There are n boxes, the i-th box is on a position ai. All positions of the boxes are distinct. There are also m special positions, the j-th position is bj. All the special positions are also distinct.

In one move you can go one position to the left or to the right. If there is a box in the direction of your move, then you push the box to the next position in that direction. If the next position is taken by another box, then that box is also pushed to the next position, and so on. You cant go through the boxes. You cant pull the boxes towards you.

You are allowed to perform any number of moves (possibly, zero). Your goal is to place as many boxes on special positions as possible. Note that some boxes can be initially placed on special positions.

Input
The first line contains a single integer t (1≤t≤1000) — the number of testcases.

Then descriptions of t testcases follow.

The first line of each testcase contains two integers n and m (1≤n,m≤2⋅105) — the number of boxes and the number of special positions, respectively.

The second line of each testcase contains n distinct integers in the increasing order a1,a2,…,an (−109&lt;=a1&lt;a2&lt;⋯&lt;an&lt;109; ai≠0) — the initial positions of the boxes.

The third line of each testcase contains m distinct integers in the increasing order b1,b2,…,bm (−109&lt;b1&lt;b2&lt;⋯&lt;bm&lt;109; bi≠0) — the special positions.

The sum of n over all testcases doesnt exceed 2⋅105. The sum of m over all testcases doesnt exceed 2⋅105.

Output
For each testcase print a single integer — the maximum number of boxes that can be placed on special positions.

Example
inputCopy
5
5 6
-1 1 5 11 15
-4 -3 -2 6 7 15
2 2
-1 1
-1000000000 1000000000
2 2
-1000000000 1000000000
-1 1
3 5
-1 1 2
-2 -1 1 2 5
2 1
1 2
10
outputCopy
4
2
0
3
1
Note
In the first testcase you can go 5 to the right: the box on position 1 gets pushed to position 6 and the box on position 5 gets pushed to position 7. Then you can go 6 to the left to end up on position −1 and push a box to −2. At the end, the boxes are on positions [−2,6,7,11,15], respectively. Among them positions [−2,6,7,15] are special, thus, the answer is 4.

In the second testcase you can push the box from −1 to −109, then the box from 1 to 109 and obtain the answer 2.

The third testcase showcases that you are not allowed to pull the boxes, thus, you cant bring them closer to special positions.

In the fourth testcase all the boxes are already on special positions, so you can do nothing and still obtain the answer 3.

In the fifth testcase there are fewer special positions than boxes. You can move either 8 or 9 to the right to have some box on position  10.
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
    <b-tab title="Leaderboard"><p>I'm the Leaderboard</p></b-tab>
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
import {mapState} from 'vuex' // imp
import axios from 'axios'
export default({
    name:"running",
    data(){
        return{
            text:"<p>The&nbsp;computer science teacher who has been teaching Johnny for many years has a big difficulty with source codes which she has to check. It is very hard for her to evaluate manually all those source codes in order to find real or imaginary similarities. Therefore she asked her the most talented pupil Johnny for help. After some analysis Johnny came to the conclusion that the first task is to remove form the source codes numerous comments which are irrelevant from the viewpoint of the evaluation of the codes similarities.</p>\r\n\r\n<p>Comments in source codes written in C/C++ have two possible forms:</p>\r\n\r\n<pre>\r\n/* this is comment\r\n       this is still comment */\r\nor \r\n          // this is comment till the end of the line\r\n</pre>\r\n\r\n<p>Johnny&rsquo;s task is to write a program which will remove all comments from the correct source code (no larger than 50 kB) given as an input and written in C/C++. The rest of the source code should be print out without any changes.</p>\r\n\r\n<h3>Example 1</h3>\r\n\r\n<p><strong>Input:</strong></p>\r\n\r\n<table align=\"center\" border=\"0\" cellspacing=\"2\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#ffffff\">\r\n\t\t\t<pre>\r\n#define R(p) rand()%(&#39;9&#39;-(p)+1)+(p) // makrodefinition\r\n#define P(p) putc((p),stdout)\r\n#define PP(p) P(R(p)) // nested makrodefinition\r\n\r\n#include &lt;iostream&gt;\r\n#include &lt;cstdlib&gt;\r\n\r\n#include &lt;cstdio&gt;\r\n\r\nusing namespace std;\r\n\r\n/* function generating number sequence */\r\nvoid gen(int x) \r\n{\r\n\tif (x) PP(&#39;1&#39;); else PP(&#39;0&#39;);\r\n\tfor(;x;x--) PP(&#39;0&#39;);\r\n}\r\n\r\nint main()\r\n{\r\n\tint a, d, n;\r\n\tcin &gt;&gt; a; srand(a); /* generator init\r\n        liczb pseudolosowych /* */\r\n\tcin &gt;&gt; d; cin &gt;&gt; n; cout &lt;&lt; n &lt;&lt; endl;\r\n\tfor(;n;n--)\r\n\t{\r\n\t\tgen(rand()%d);  P(&#39; &#39;);\r\n\t\tgen(rand()%d);  P(&#39;\\n&#39;);\r\n\t}\r\n\treturn 0;\r\n}</pre>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p><strong>Output:</strong></p>\r\n\r\n<table align=\"center\" border=\"0\" cellspacing=\"2\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#ffffff\">\r\n\t\t\t<pre>\r\n#define R(p) rand()%(&#39;9&#39;-(p)+1)+(p)\r\n#define P(p) putc((p),stdout)\r\n#define PP(p) P(R(p))\r\n\r\n#include &lt;iostream&gt;\r\n#include &lt;cstdlib&gt;\r\n\r\n#include &lt;cstdio&gt;\r\n\r\nusing namespace std;\r\n\r\n\r\nvoid gen(int x)\r\n{\r\n        if (x) PP(&#39;1&#39;); else PP(&#39;0&#39;);\r\n        for(;x;x--) PP(&#39;0&#39;);\r\n}\r\n\r\nint main()\r\n{\r\n        int a, d, n;\r\n        cin &gt;&gt; a; srand(a);\r\n        cin &gt;&gt; d; cin &gt;&gt; n; cout &lt;&lt; n &lt;&lt; endl;\r\n        for(;n;n--)\r\n        {\r\n                gen(rand()%d);  P(&#39; &#39;);\r\n                gen(rand()%d);  P(&#39;\\n&#39;);\r\n        }\r\n        return 0;\r\n}\r\n</pre>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<h3>Example 2</h3>\r\n\r\n<p><strong>Input:</strong></p>\r\n\r\n<table align=\"center\" border=\"0\" cellspacing=\"2\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#ffffff\">\r\n\t\t\t<pre>\r\n#include &lt;stdio.h&gt;\r\n#include &lt;stdlib.h&gt;\r\n\r\ntypedef struct _road{\r\n    int cost;//,Id;\r\n    int from,to;\r\n    struct _road *next;\r\n}road;\r\n\r\nint readInt(void);\r\ninline int roadcmp(const void *a,const void *b){\r\n    return ((road*)a)-&gt;cost-((road*)b)-&gt;cost;\r\n};\r\n\r\ninline void swap(road *a,road *b){\r\n/* swap two variables */\r\n    road tmp=*a;\r\n    *a=*b;\r\n    *b=tmp;\r\n};\r\n/* Heapify, BuildHeap, HeapSort - sorting functions using \r\n    the order defined by function compare\r\n    should be executed by HeapSort */\r\nvoid Heapify(road *A,int n, int i);\r\nvoid BuildHeap(road *A,int n);\r\nvoid HeapSort(road *A,int n);\r\n\r\nint city[10000]; // is it in tree\r\nint main(){} /* this is the end...*/</pre>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p><strong>Output:</strong></p>\r\n\r\n<table align=\"center\" border=\"0\" cellspacing=\"2\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#ffffff\">\r\n\t\t\t<pre>\r\n#include &lt;stdio.h&gt;\r\n#include &lt;stdlib.h&gt;\r\n\r\ntypedef struct _road{\r\n    int cost;\r\n    int from,to;\r\n    struct _road *next;\r\n}road;\r\n\r\nint readInt(void);\r\ninline int roadcmp(const void *a,const void *b){\r\n    return ((road*)a)-&gt;cost-((road*)b)-&gt;cost;\r\n};\r\n\r\ninline void swap(road *a,road *b){\r\n\r\n    road tmp=*a;\r\n    *a=*b;\r\n    *b=tmp;\r\n};\r\n\r\nvoid Heapify(road *A,int n, int i);\r\nvoid BuildHeap(road *A,int n);\r\nvoid HeapSort(road *A,int n);\r\n\r\nint city[10000];\r\nint main(){}\r\n</pre>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>",
            toggle:false,
            verifyaddress:false,
            easyprob:"i am easy",
            mediumprob:"i am medium",
            difficultprob:"i am difficult",
            selected:""
            
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
    //   async verifyadd(){
    //     //   verifying address
    //         const {data} = await axios.post('/api/participants/verify',{id:this.$store.state.user._id})
    //         console.log(data)
    //         if(data.verified){
                
    //             this.$store.commit("adduser",data.participant)
    //             console.log("verified")
    //         }
    //         else {
    //             console.log("not verified")
    //         }
    //       this.verifyaddress=true;
    //   }
    verifyadd(){
        this.verifyaddress=true;
    }
    },
    async created(){
    console.log(this.$store.state.curr_location)
    const {data} = await axios.get('/api/questions/',{params:{loc_id:this.$store.state.curr_location}})
    console.log(data)
    console.log("These are the questions of the 'current location' ",data.questions)
  },
  computed:{
    ...mapState(['user']) // imp
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
    overflow-x:scroll;
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
