<template>
  <div>
    <h1>Repository Simple Details</h1>
    <p><strong>Name:</strong> {{ item.name }}</p>
    <p><strong>Description:</strong> {{ item.description }}</p>
    <p><strong>Stars:</strong> {{ item.stargazers_count }}</p>
    <div class="back-btn" @click.stop=backClick>Back to Search</div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { ISearchResultItem } from '@/types/search-api';
import { ref, Ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const item = ref({}) as Ref<ISearchResultItem>

// 利用空判断+类型守卫安全访问route.query.item    
if (route.query.item && typeof route.query.item === 'string') {
  const itemValue = route.query.item;
   try {
      item.value = JSON.parse(itemValue);
   } catch (e) {
      console.error("Error parsing the item:", e);
   }
}
const backClick = () => {
   router.back()
}

</script>

<style scoped>
.back-btn {
  cursor: pointer;
  color: #0366d6;
  text-decoration: underline; 
  text-decoration-color: #0366d6; 
  text-decoration-style: solid; 
  text-decoration-thickness: 2px; 
}
</style>

