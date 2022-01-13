 // Vue.config.devtools = process.env.NODE_ENV === 'development';

 // window.onload=function(){
 	 $(document).ready(function(){

  

 	 
 	 	
var swiper;	 	
var header = {
  "content-type": "application/json",
  "Authorization": "Bearer " + "token"
}

        	var baseUrl ='http://106.15.61.160:8020';
        	// var baseUrl ='http://localhost:8020';
        	// 创建实例时设置配置的默认值
var instance = axios.create({
  baseURL: baseUrl
});
instance.defaults.headers = header;
  var app = new Vue({
  el: '#app',
  data: {
     show:true,
      contentIndex:0,
	  contentList:[{title:"hhh"},{title:"aaa"}],
	  jobList:[{
		  title:"结构工程师",
		  price:"7000 - 12000 ",
		  tags:["本科及以上","2年工作经验","深圳"],
		  part:"所属部门：产品开发部",
		  bgsrc:"assets/img/pc/ic01_pc_joinus.png"
	  },{
		 title:"电子雕刻师",
		 price:"7000 - 12000 ",
		 tags:["本科及以上","2年工作经验","深圳"],
		 part:"所属部门：产品研发部",
		  bgsrc:"assets/img/pc/ic02_pc_joinus.png"
		 
	  },{
		title:"平面设计师助理",
		price:"3500 - 5000 ",
		tags:["中专及以上","应届毕业生","深圳"],
		part:"所属部门：创意设计部" ,
		  bgsrc:"assets/img/pc/ic03_pc_joinus.png"
	  },{
		title:"知识产权管理专员",
		price:"6000 - 10000 ",
		tags:["本科及以上","2年工作经验","深圳"],
		part:"所属部门：商务部"  ,
		  bgsrc:"assets/img/pc/ic04_pc_joinus.png"
	  }]
  
     },
     methods:{
     choose:function (id) {
         var ele = document.getElementById("app");
         app.contentIndex=id
		 console.log("id",id)

     
   },
   scroll:function () {
	     
         var contentIndex=app.contentIndex
		 contentIndex=contentIndex+1
		 if(contentIndex>2){
			 contentIndex=0
		 }
         app.contentIndex=contentIndex
   		 swiper.slideTo(contentIndex)
   
     
   },
   scrollToIndex:function (index) {
   	     
       
   		
         app.contentIndex=index
   		 swiper.slideTo(index)
   
     
   }
 

     }, mounted () {
var that=this
     swiper=new Swiper('.swiper-container',{
		autoplay:true,
		speed:3000,
		direction : 'vertical',
		
		  onSlideChangeEnd: function(swiper){
		
		           //(swiper.activeIndex-1+i)%(i))
	             var num=(swiper.activeIndex+3)%(3)
		         // alert(num); //切换结束时，告诉我现在是第几个slide
				 app.contentIndex=num
		
		       },

		
		
	})
        },updated () {
  
    

  
}
     
 
  })

instance.post('/question/getPageList', 
   {
      
    }
  )
  .then(function (response) {
    console.log(response.data);
   
   
   
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  



})

// 在实例已创建后修改默认值



         
 


 
	
