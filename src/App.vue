<template>
  <div id="app">
    <div class="demo-split">
        <Split v-model="split1">
            <div slot="left" class="demo-split-pane">
                <Setting></Setting>
                <DataTable></DataTable>
            </div>
            <div slot="right" class="demo-split-pane demo-split-terminal-pane">
                <p
                  v-for="(msg, index) in msgStrList"
                  :key="index">
                  <span class="msg-type">{{ msg.type }}</span>
                  <span class="msg-dir">{{ msg.dir }}</span>
                  {{ msg.str }}
                </p>
            </div>
        </Split>
    </div>
    <div class="page-footer">
      © 2019 <a href="https://noahgao.net">Noah Gao</a> of <a href="https://www.tust.edu.cn">TUST</a>.
    </div>
  </div>
</template>

<script>
import Setting from './components/Setting'
import DataTable from './components/DataTable'
import sharedStore from './store'

export default {
  name: 'app',
  data () {
    return {
      split1: 0.3,
      sharedStore
    }
  },
  components: {
    Setting,
    DataTable
  },
  computed: {
    msgStrList () {
      return this.sharedStore.state.msgStrList.slice(0).reverse()
    }
  },
  created () {
    this.sharedStore.updateModel('Private')
  }
}
</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
.demo-split{
    height: 100%;
    border: 1px solid #dcdee2;
}
.demo-split-pane{
    padding: 10px;
    height: 100%;
}
.demo-split-terminal-pane {
  background-color: #000;
  color: #fff;
  font-size: 16px;
  overflow: auto;
  .msg-dir {
    color:#2893f9;
    margin: 0 6px;
  }
  .msg-type {
    color:#ff9400;
    margin-right: 6px;
  }
}
.page-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  background-color: #fff;
  z-index: 999;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
