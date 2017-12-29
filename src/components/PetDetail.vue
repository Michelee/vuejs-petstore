<template>
	<div>
		<h1>Find Pet</h1>
	    <customInput type="number" id="pet" label="Pet Number" v-model="pet"></customInput>
	    <button @click.prevent="getPet">Buscar</button>
	    
	    <div v-if="isPet">
  			<h3>Results: </h3>
  			<objectDetail title="Id" :id="id"></objectDetail>
  			<objectDetail title="Category" :value="category"></objectDetail>
  			<objectDetail title="Name" :value="name"></objectDetail>
        <imageList title="Picture" :items="pictures"></imageList>
        <tagList title="Tags" :items="tags"></tagList>
  			<objectDetail title="Status" :value="status"></objectDetail>
	    </div>
	</div>
</template>

<script>
import getPetDetails from '../api/pets/index.js';

export default {
  data () {
    return {
      isPet: false,
      id: 0,
      category: '',
      name: '',
      pictures:'',
      tags: '',
      status: '',
      pet: ''
    }
  },
  methods: {
    getPet(){
      const self = this
      var url = 'https://virtserver.swaggerhub.com/robinsound/PetShopExersice/1.0.0/pet/' + this.pet;

      getPetDetails(url).then(function (data) {
        self.id = data.id;
        self.category = data.category.id + ' / ' + data.category.name;
        self.name = data.name;
        self.pictures = data.photoUrls;
        self.tags = data.tags;
        self.status = data.status;
        self.isPet = true;
      });
    }
  }
}
</script>

<style></style>