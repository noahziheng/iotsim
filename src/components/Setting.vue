<template>
  <div class="setting-container">
    <Select v-model="protocol">
      <Option v-for="item in protocolMap" :value="item" :key="item">{{ item }}</Option>
    </Select>
  </div>
</template>

<script>
import sharedStore from '../store'

const protocolMap = Object.keys(sharedStore.state.modelsMap)

export default {
  data () {
    return {
      protocolMap,
      sharedStore
    }
  },
  computed: {
    protocol: {
      get () {
        return this.sharedStore.state.msgModel && sharedStore.state.msgModel.type
      },
      set (val) {
        this.sharedStore.updateModel(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.setting-container {
  width: 100%;
  text-align: center;
  padding: 0 5px;
}
</style>
