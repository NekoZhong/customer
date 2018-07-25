<!--  -->
<template>
  <div  class="container">
      <div class="page-header">
        <h1>编辑用户</h1>
      </div>
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      
    <form v-on:submit="updateUsers">
        <div class="form-group">
            <label for="name">姓名</label>
            <input id ="name" type="text" class="form-control" placeholder="name" v-model="users.name">
        </div>
        <div class="form-group">
            <label for="age">年龄</label>
            <input id ="age" type="text" class="form-control" placeholder="age" v-model="users.age">
        </div>
        <div class="form-group">
            <label for="sex">性别</label>
            <input id="sex" type="text" class="form-control" placeholder="sex" v-model="users.sex">
        </div>
        <div class="form-group">
            <label for="email">邮箱</label>
            <input id="email" type="email" class="form-control" placeholder="email" v-model="users.email">
        </div>
        <center><button type="submit" class="btn btn-primary ">确认</button></center>
        </form>
  </div>
</template>

<script>
import Alert from './Alert'

export default {
  data () {
    return {
        users:{},
        alert:''
    }
  },
  methods:{
      fecthUsers(id){
        this.$axios.get("http://localhost:3000/users/"+id)
          .then((response)=>{
              this.users=response.data;
          })
      },
      updateUsers(e){
          if(!this.users.name || !this.users.age || !this.users.sex || !this.users.email){
               this.alert='请添加对应信息!';      
          }else{
              let updateUsers = {
  				name:this.users.name,
  				age:this.users.age,
  				sex:this.users.sex,
  				email:this.users.email
              }
              
              this.$axios.put("http://localhost:3000/users/"+this.$route.params.id,updateUsers)
  				.then((response)=>{
  					this.$router.push({path:"/",query:{alert:"用户信息添加成功!"}});
  				})
            
  		    e.preventDefault();

          }    
  		    e.preventDefault();
                        
      }
      
  },
   components:{
      Alert

  },
  created(){
      this.fecthUsers(this.$route.params.id)
  }

}

</script>
<style  scoped>
.btn{
    margin:0 auto;
}
</style>