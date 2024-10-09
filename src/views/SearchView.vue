<template>
  <div class="container">
    <h1>GitHub Repository Search</h1>
    <input class="input-field" v-model="searchQuery" placeholder="Enter repository name" @keyup.enter="searchRepos"/>
    <button class="btn" @click="searchRepos">Search</button>
    <table v-if="searchItems.length > 0">
      <thead>
        <tr>
          <th>Name</th>
          <th>Owner</th>
          <th># Stars</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repo in searchItems" :key="repo.id">
          <div class="repo-name" @click.stop="pushDetail(repo)">{{ repo.name }}</div>  
          <td>{{ repo.owner?.login }}</td>
          <td>{{ repo.stargazers_count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { useGithubSearchStore } from '@/store/github-search';
import { ISearchResultItem } from '@/types/search-api';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useGithubSearchStore()
const { searchItems } = storeToRefs(store)
const searchQuery = ref('')
const searchRepos = async () => {
  // 前置判断
  if (!searchQuery.value) {
    alert('Please enter a repository name');
    return;
  }
  await store.querySearchData(searchQuery.value)
};

// 考虑到search接口有detail数据,直接传递json字符串
const pushDetail = (item: ISearchResultItem) => {
  router.push({
   path: "/repo-detail",
   query: {
    item: JSON.stringify(item)
   }
  });
}

</script>

<style scoped>
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.input-field{
  width: 200px;
  height: 20px  
}

.btn{
  margin: 10px 0;
  width: 100px;
  height: 30px;
}

.repo-name {
  cursor: pointer;
  color: #0366d6;
  text-decoration: underline; 
  text-decoration-color: #0366d6; 
  text-decoration-style: solid; 
  text-decoration-thickness: 2px; 
}
</style>


