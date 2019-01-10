import BaseModel from './BaseModel'
import msgpack from 'msgpack-lite'

class MsgPackModel extends BaseModel {
  type = 'MsgPack'

  log (dir, content) {
    const t = msgpack.encode(content)
    const func = char => {
      const tc = char.toString(16).toUpperCase()
      return tc.length === 1 ? ('0' + tc) : tc
    }
    super.log(dir, Array.from(t).map(func).join(' '))
  }
}

export default MsgPackModel
