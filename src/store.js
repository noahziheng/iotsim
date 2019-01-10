// Shared simple store
import PrivateModel from './libs/PrivateModel'
import JSONModel from './libs/JSONModel'
import MsgPackModel from './libs/MsgPackModel'

const modelsMap = {
  Private: new PrivateModel(),
  JSON: new JSONModel(),
  MsgPack: new MsgPackModel()
}

export default {
  state: {
    tempature: 1,
    msgModel: null,
    msgStrList: [],
    modelsMap
  },
  updateModel (type) {
    this.state.msgModel = modelsMap[type]
  },
  updateTemp (val) {
    this.state.tempature = val
    this.state.msgModel.log('UP', {
      T: val
    })
  },
  resetTemp () {
    this.state.msgModel.log('DOWN', {
      A: 1
    })
    this.updateTemp(1)
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
