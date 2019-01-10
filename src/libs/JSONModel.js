import BaseModel from './BaseModel'

class JSONModel extends BaseModel {
  type = 'JSON'

  log (dir, content) {
    super.log(dir, JSON.stringify(content))
  }
}

export default JSONModel
