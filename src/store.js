// Shared simple store
import JSONModel from './libs/JSONModel'

const modelsMap = {
  json: new JSONModel()
}

export default {
  state: {
    msgModel: null,
    msgStrList: []
  },
  updateModel (type) {
    this.state.msgModel = modelsMap[type]
  },
  pushMsgStr (dir = 'UP', str = null, type = null) {
    this.state.msgStrList.push({
      dir,
      str,
      type
    })
  },
  clearMsgStrList () {
    this.state.msgStrList = []
  }
}
