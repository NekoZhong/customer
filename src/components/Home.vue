<template>
  <div>
    <div class="side" >
    <Slide  class="side__bar"></Slide>
  </div>
    <Content  class="ide__contents"></Content>
  </div>
  
</template>

<script>
import Slide from './Slide'
import Content from './Content'

export default {
  components:{
      Slide,
      Content

  }
}
</script>
  
<style scoped>

</style>
