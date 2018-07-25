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
			  <label class="control-label" for="inputPassword2">确认密码：</label>
			  <input type="password" class="form-control" placeholder="Password">
			</div>
      <div class="form-group">
			  <label class="control-label" for="inputPassword2">手机号码：</label>
			  <input type="text" class="form-control" placeholder="Phone number">
			</div>
			<div class="form-group">
					<router-link to="/" type="submit" class="btn btn-primary">
						<i class="glyphicon glyphicon-ok"></i> 注册</router-link>
					<button type="reset" class="btn btn-info">
						<i class="glyphicon glyphicon-star-empty"></i> 重置</button>
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
<style >
</style>