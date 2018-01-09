require('./helper')
const Helper = require('hubot-test-helper')
const helper = new Helper('./../scripts/example.js')
const co = require('co')

describe('Bot', () => {
  beforeEach(() => {
    this.room = helper.createRoom()
  })

  afterEach(() => {
    this.room.destroy()
  })

  context('user says `運動しました` to hubot', () => {
    beforeEach(() => {
      return co(function * () {
        yield this.room.user.say('alice', '運動しました')
      }.bind(this))
    })

    it('should reply to user', () => {
      expect(this.room.messages).to.eql([
        ['alice', '運動しました'],
        ['hubot', 'えらい']
      ])
    })
  })
})
