<!--  -->
<template>
  <div  class="container">
      <div class="page-header">
        <h1>添加用户</h1>
      </div>
      <Alert v-if="alert" v-bind:message="alert"></Alert>
      
    <form v-on:submit="addUsers">
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
        <center><button type="submit" class="btn btn-primary ">提交</button></center>
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
      addUsers(e){
          if(!this.users.name || !this.users.age || !this.users.sex || !this.users.email){
               this.alert='请添加对应信息!';      
          }else{
              let newUsers = {
  				name:this.users.name,
  				age:this.users.age,
  				sex:this.users.sex,
  				email:this.users.email
              }
              
              this.$axios.post("http://localhost:3000/users",newUsers)
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

  }

}

</script>
<style  scoped>
.btn{
    margin:0 auto;
}
</style>