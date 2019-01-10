import sharedStore from '../store'

class BaseModel {
  type = 'UNKNOWN'

  log (dir, content) {
    sharedStore.pushMsgStr(dir, content, this.type)
  }
}

export default BaseModel
