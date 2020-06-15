<template>
          <tr>
              <td  class="task-name" @click="$emit('alert', item.id)">{{item.category.name}}
            </td>
            <td>{{item.description}}</td>
            <td>{{item.platform.title}}</td>
            <td>{{item.price}}</td>
            <td>{{item.title}}</td>
          </tr>

</template>
<script>
export default {
  name:"listItem",
    props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .task-name{
    cursor: pointer;
  }
</style>