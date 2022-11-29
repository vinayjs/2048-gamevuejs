<template>
  
   <div class="main-container"> 
    <h1>2048</h1>
   </div>
</template>

<script>
export default {
 data() {
   return {
     formValues: {
       name: '',
       profileSummary: '',
       country: '',
       jobLocation: [],
       remoteWork: false,
       skillSet:[],
       yearsOfExp:''
     }
   }
 },
 methods:{
   submitForm(event) {
     event.preventDefault()
     console.log('Form values', this.formValues)
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  background-color:white;
  width: 20%;

}
</style>