<template>
  <div>
    <div class="data-cell">
      <strong>Tempature</strong>
      {{ this.tempature }} ‎℃
    </div>
    <div class="data-cell">
      <strong>Action</strong>
      <Button @click="sendSignal">Reset</Button>
    </div>
  </div>
</template>

<script>
import sharedStore from '../store'

export default {
  data () {
    return {
      sharedStore,
      timer: null
    }
  },
  computed: {
    tempature () {
      return this.sharedStore.state.tempature
    }
  },
  created () {
    this.timer = setInterval(() => {
      this.sharedStore.updateTemp(this.tempature + 1)
    }, 2000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    sendSignal () {
      this.sharedStore.resetTemp()
    }
  }
}
</script>

<style lang="scss" scoped>
.data-cell {
  margin-top: 3px;
  padding: 5px;
  border-bottom: 1px solid #aaa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
</style>
