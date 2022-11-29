<template>
  
   <div> 
     <label for="name">Name </label>
     <input type="text" id="name" placeholder="your name" v-model="formValues.name">
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
body {
  background-color: bisque;
}
</style>
