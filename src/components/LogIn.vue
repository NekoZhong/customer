<!--  -->
<template>
  <div class="container form-regist">
		<form id="regist-form"  autocomplete="off" method="get">
			<div class="form-group">
			  <label class="control-label" for="inputEmail">邮箱：</label>
			  <input type="text" class="form-control" placeholder="Email">
			</div>
			
			<div class="form-group">
			  <label class="control-label" for="inputPassword">密码：</label>
			  <input type="password" class="form-control" placeholder="Password">
			</div>
			<div class="form-group">
					<router-link to="/" type="submit" class="btn btn-primary">
						<i class="glyphicon glyphicon-ok"></i> 登录</router-link>
				</div>
		</form>
	</div>
</template>

<script>
export default {
  data () {
    return {
    };
  }
}
</script>
<style>

</style>
