<template>
  <table :style="{width:tableWidth}">
    <tr>
      <th v-for="(item, key) in headings" :style="{ width: dotWidth[key] }">
        {{ item }}
      </th>      
    </tr>

    <tr v-for="trData,key in tableData">
        <td :style="{background: key %2 === 0 ? 'white' : '#ddd' }"  v-for="tdData in trData" v-html='tdData' ></td>
    </tr>
  </table>
</template>

<script setup>
import { defineProps, reactive, toRefs } from "vue";

const props = defineProps({
  tableWidth: String,
  dotWidth: [],
  title: String,
  headings: [],
  tableData: []
});

</script>

<style scoped>
table {
  background: white;
  padding: 1vw;
  border-collapse: collapse;

}

th {
  border: 0.1vw solid #d1d1d1;
  padding: 1vw;
}
td{
    padding: 1vw;

}
</style>
