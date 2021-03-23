<template>
    <div>
       <label for="">Enter your email:</label>&nbsp;<input type="text" placeholder="Enter your email" class="email"><br/><br/><br/>
       <label for="">Enter your grievance :</label>&nbsp;<textarea placeholder="Grievances" name="Grievances" id="grievances" cols="30" rows="5"></textarea>
       <br/><b-button variant="primary">Submit</b-button>
    </div>
</template>
<style scoped>
.email{
    display:inline-block;
    margin-top:2rem;
}
#grievances{
    margin-left:1.2rem;
}
</style>