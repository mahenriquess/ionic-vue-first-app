<template>
  <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Carregando...'"  page-default-back-link="/memories">
    <h2 
      v-if="!loadedMemory">
        Não foi possivel encontrar uma memória para o id: {{this.memoryId ? this.memoryId : 'Não carregou essa budega de id'}}
    </h2>
    <memory-overview 
      v-else :title="loadedMemory.title" :image="loadedMemory.image" :description="loadedMemory.description">
    </memory-overview>
    <!-- <memory-overview 
      v-else :memory="loadedMemory">
    </memory-overview> -->
  </base-layout>
</template>

<script>

import MemoryOverview from '../components/memories/MemoryOverview.vue';

export default {
  components:{
    MemoryOverview
  },
  data(){
    return {
      memoryId: this.$route.params.id,
    }
  },
  computed: {
    loadedMemory(){
      return this.$store.getters.memory(this.memoryId);
    }
  },
  // watch: {
  //   $route(currentRoute){
  //     this.memoryId = currentRoute.params.id
  //   } 
  // }
}
</script>