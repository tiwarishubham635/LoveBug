<template>
<b-card no-body class="basicapi-container">
    <b-tabs content-class="mt-3">
    <b-tab title="Problem" active>
        <b-row class="my-row" sm="1" md="2" lg="2">
    <b-col cols="6">
    <div @click="convert" class="my-div scrollbar" id="style-3">
     <p v-html="text"></p>
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
 
</template>

<script>
// import Vue from 'vue';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(VueAxios,axios);
import ide from"@/components/ide.vue"
export default({
    name:"basicapi",
    data(){
        return{
            text:"<p>The&nbsp;computer science teacher who has been teaching Johnny for many years has a big difficulty with source codes which she has to check. It is very hard for her to evaluate manually all those source codes in order to find real or imaginary similarities. Therefore she asked her the most talented pupil Johnny for help. After some analysis Johnny came to the conclusion that the first task is to remove form the source codes numerous comments which are irrelevant from the viewpoint of the evaluation of the codes similarities.</p>\r\n\r\n<p>Comments in source codes written in C/C++ have two possible forms:</p>\r\n\r\n<pre>\r\n/* this is comment\r\n       this is still comment */\r\nor \r\n          // this is comment till the end of the line\r\n</pre>\r\n\r\n<p>Johnny&rsquo;s task is to write a program which will remove all comments from the correct source code (no larger than 50 kB) given as an input and written in C/C++. The rest of the source code should be print out without any changes.</p>\r\n\r\n<h3>Example 1</h3>\r\n\r\n<p><strong>Input:</strong></p>\r\n\r\n<table align=\"center\" border=\"0\" cellspacing=\"2\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#ffffff\">\r\n\t\t\t<pre>\r\n#define R(p) rand()%(&#39;9&#39;-(p)+1)+(p) // makrodefinition\r\n#define P(p) putc((p),stdout)\r\n#define PP(p) P(R(p)) // nested makrodefinition\r\n\r\n#include &lt;iostream&gt;\r\n#include &lt;cstdlib&gt;\r\n\r\n#include &lt;cstdio&gt;\r\n\r\nusing namespace std;\r\n\r\n/* function generating number sequence */\r\nvoid gen(int x) \r\n{\r\n\tif (x) PP(&#39;1&#39;); else PP(&#39;0&#39;);\r\n\tfor(;x;x--) PP(&#39;0&#39;);\r\n}\r\n\r\nint main()\r\n{\r\n\tint a, d, n;\r\n\tcin &gt;&gt; a; srand(a); /* generator init\r\n        liczb pseudolosowych /* */\r\n\tcin &gt;&gt; d; cin &gt;&gt; n; cout &lt;&lt; n &lt;&lt; endl;\r\n\tfor(;n;n--)\r\n\t{\r\n\t\tgen(rand()%d);  P(&#39; &#39;);\r\n\t\tgen(rand()%d);  P(&#39;\\n&#39;);\r\n\t}\r\n\treturn 0;\r\n}</pre>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p><strong>Output:</strong></p>\r\n\r\n<table align=\"center\" border=\"0\" cellspacing=\"2\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#ffffff\">\r\n\t\t\t<pre>\r\n#define R(p) rand()%(&#39;9&#39;-(p)+1)+(p)\r\n#define P(p) putc((p),stdout)\r\n#define PP(p) P(R(p))\r\n\r\n#include &lt;iostream&gt;\r\n#include &lt;cstdlib&gt;\r\n\r\n#include &lt;cstdio&gt;\r\n\r\nusing namespace std;\r\n\r\n\r\nvoid gen(int x)\r\n{\r\n        if (x) PP(&#39;1&#39;); else PP(&#39;0&#39;);\r\n        for(;x;x--) PP(&#39;0&#39;);\r\n}\r\n\r\nint main()\r\n{\r\n        int a, d, n;\r\n        cin &gt;&gt; a; srand(a);\r\n        cin &gt;&gt; d; cin &gt;&gt; n; cout &lt;&lt; n &lt;&lt; endl;\r\n        for(;n;n--)\r\n        {\r\n                gen(rand()%d);  P(&#39; &#39;);\r\n                gen(rand()%d);  P(&#39;\\n&#39;);\r\n        }\r\n        return 0;\r\n}\r\n</pre>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<h3>Example 2</h3>\r\n\r\n<p><strong>Input:</strong></p>\r\n\r\n<table align=\"center\" border=\"0\" cellspacing=\"2\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#ffffff\">\r\n\t\t\t<pre>\r\n#include &lt;stdio.h&gt;\r\n#include &lt;stdlib.h&gt;\r\n\r\ntypedef struct _road{\r\n    int cost;//,Id;\r\n    int from,to;\r\n    struct _road *next;\r\n}road;\r\n\r\nint readInt(void);\r\ninline int roadcmp(const void *a,const void *b){\r\n    return ((road*)a)-&gt;cost-((road*)b)-&gt;cost;\r\n};\r\n\r\ninline void swap(road *a,road *b){\r\n/* swap two variables */\r\n    road tmp=*a;\r\n    *a=*b;\r\n    *b=tmp;\r\n};\r\n/* Heapify, BuildHeap, HeapSort - sorting functions using \r\n    the order defined by function compare\r\n    should be executed by HeapSort */\r\nvoid Heapify(road *A,int n, int i);\r\nvoid BuildHeap(road *A,int n);\r\nvoid HeapSort(road *A,int n);\r\n\r\nint city[10000]; // is it in tree\r\nint main(){} /* this is the end...*/</pre>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p><strong>Output:</strong></p>\r\n\r\n<table align=\"center\" border=\"0\" cellspacing=\"2\">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td style=\"background-color:#ffffff\">\r\n\t\t\t<pre>\r\n#include &lt;stdio.h&gt;\r\n#include &lt;stdlib.h&gt;\r\n\r\ntypedef struct _road{\r\n    int cost;\r\n    int from,to;\r\n    struct _road *next;\r\n}road;\r\n\r\nint readInt(void);\r\ninline int roadcmp(const void *a,const void *b){\r\n    return ((road*)a)-&gt;cost-((road*)b)-&gt;cost;\r\n};\r\n\r\ninline void swap(road *a,road *b){\r\n\r\n    road tmp=*a;\r\n    *a=*b;\r\n    *b=tmp;\r\n};\r\n\r\nvoid Heapify(road *A,int n, int i);\r\nvoid BuildHeap(road *A,int n);\r\nvoid HeapSort(road *A,int n);\r\n\r\nint city[10000];\r\nint main(){}\r\n</pre>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>",
            toggle:false
            
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
</style>
