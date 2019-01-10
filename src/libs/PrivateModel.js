import BaseModel from './BaseModel'

class MsgPackModel extends BaseModel {
  type = 'Private'

  log (dir, content) {
    const t = new Array([0x2a])
    for (let tag in content) {
      const val = content[tag]
      t.push(tag.charCodeAt(0))
      t.push(0x3a)
      t.push(val)
    }
    t.push(0x23)
    const func = char => {
      const tc = char.toString(16).toUpperCase()
      return tc.length === 1 ? ('0' + tc) : tc
    }
    super.log(dir, Array.from(new Uint8Array(t)).map(func).join(' '))
  }
}

export default MsgPackModel
