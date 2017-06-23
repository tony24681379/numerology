export default class numerology {
  constructor(birthday) {
    this.year = birthday.getFullYear()
    this.month = birthday.getMonth() + 1
    this.date = birthday.getDate()
  }

  lifePathNumberString() {
    return this.numToPrintString(this.birthdayToNumber(this.year) + this.birthdayToNumber(this.month) + this.birthdayToNumber(this.date))
  }

  lifePathNumber() {
    return this.singleNumber(this.birthdayToNumber(this.year) + this.birthdayToNumber(this.month) + this.birthdayToNumber(this.date))
  }

  birthdayToNumber(value) {
    let val = Number.parseInt(value, 10)
    let result = 0
    while (val > 0) {
        result += val % 10
        val = Math.trunc(val / 10)
    }
    return result
  }

  mergeNumber(value) {
    return value % 10 + Math.trunc(value / 10)
  }

  singleNumber(value) {
    if (value >= 10) {
      let ten = Math.trunc(value / 10)
      let single = value % 10
      return this.singleNumber(ten + single)
    } else {
      return value
    }
  }

  numToPrintString(value) {
    if (value >= 10) {
      let ten = Math.trunc(value / 10)
      let single = value % 10
      return value.toString() + ' / ' + this.numToPrintString(ten + single)
    } else {
      return value.toString()
    }
  }

  getSummit() {
    let array = [
      this.mergeNumber(this.mergeNumber(this.birthdayToNumber(this.month)) + this.mergeNumber(this.birthdayToNumber(this.date))),
      this.mergeNumber(this.mergeNumber(this.birthdayToNumber(this.year)) + this.mergeNumber(this.birthdayToNumber(this.date))),
      0,
      this.mergeNumber(this.mergeNumber(this.birthdayToNumber(this.year)) + this.mergeNumber(this.birthdayToNumber(this.month))),
    ]
    array[2] = array[0] + array[1]
    return array
  }

  getChallenge() {
    let array = [
      this.mergeNumber(Math.abs(this.mergeNumber(this.birthdayToNumber(this.month)) - this.mergeNumber(this.birthdayToNumber(this.date)))),
      this.mergeNumber(Math.abs(this.mergeNumber(this.birthdayToNumber(this.year)) - this.mergeNumber(this.birthdayToNumber(this.date)))),
      0,
      this.mergeNumber(Math.abs(this.mergeNumber(this.birthdayToNumber(this.year)) - this.mergeNumber(this.birthdayToNumber(this.month)))),
    ]
    array[2] = Math.abs(array[0] - array[1])
    return array
  }
}