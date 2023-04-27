<template>
  <HeaderPage/>
<div>
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id" @mouseover="hoveredItemId = item.id" @mouseleave="hoveredItemId = null">
      <td>{{ item.name }}</td>
      <td>{{ item.description }}</td>
      <td>
        <div>
          <input type="checkbox" v-model="item.isChecked" v-if="hoveredItemId === item.id || item.isChecked" @click.stop="onCheckboxClick(item.id)">
        </div>
      </td>
    </tr>
  </tbody>
</table>
<button @click="save">Save</button>
</div>
</template>

<script>
import HeaderPage from './HeaderPage.vue'
export default {
name:'ItemPage',
components: {
    HeaderPage
},
data() {
return {
  items: [
    { id: 1, name: 'Item 1', description: 'Description 1', isChecked: false },
    { id: 2, name: 'Item 2', description: 'Description 2', isChecked: false },
    { id: 3, name: 'Item 3', description: 'Description 3', isChecked: false }
  ],
  hoveredItemId: null
}
},
methods: {
onCheckboxClick(clickedItemId) {
  this.items.forEach((item) => {
    if (item.id !== clickedItemId) {
      item.isChecked = false
    }
  })
},
save() {
  const selectedItems = this.items.filter(item => item.isChecked)
  console.log(selectedItems)
}
}
}
</script>

<style>
input[type=checkbox] {
cursor: pointer;
}
table, td, th {
border: 1px solid black;
}

table {
border-collapse: collapse;
width: 50%;
margin: auto;
margin-top: 1%;
}

td, th {
height: 40px;
vertical-align: center;
}
button{
margin-top: 3%;
cursor: pointer;
}
</style>