<!--  -->
<template>
  <div>
      <div class="col-sm-9  col-md-10  main">
        <div class="page-header">
          <h1>用户信息管理</h1>
        </div>
          <form class="form-inline">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="search……" v-model="filterInput">
            </div>
            <button type="submit" class="btn btn-primary">搜索</button>
          </form>


          <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>年龄</th>
                  <th>性别</th>
                  <th>邮箱</th>
                  <router-link to="/add" class="btn btn-primary">添加</router-link>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in filterBy(users,filterInput)">
                  <td>{{user.name}}</td>
                  <td>{{user.age}}</td>
                  <td>{{user.sex}}</td>
                  <td>{{user.email}}</td>
                  <router-link v-bind:to="'./edit/'+user.id" class="btn btn-default leftbtn">编辑</router-link>
                  <button class="btn btn-danger" v-on:click="deleteUsers(user.id)">删除</button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
        users:[],
        alert:'',
        filterInput:''
    };
  },
  methods:{
    fetchUsers(){
      this.$axios.get('http://localhost:3000/users')
      .then((response)=> {
          this.users = response.data;
      })
    },
    deleteUsers(id){
      console.log(id);
      this.$axios.delete('http://localhost:3000/users/'+id)
    },
    filterBy(users,filterInput){
     return users.filter(function(user){
       return user.name.match(filterInput);
      })
    }
},
  created(){
    this.fetchUsers();
  },
  updated(){
    this.fetchUsers();
  }
}

</script>
<style  scoped>
.leftbtn{
  margin-right: 6px;
}
</style>