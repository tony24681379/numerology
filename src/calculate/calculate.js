export default class numerology {
  constructor(birthday, name) {
    this.name = this.nameArray(name)
    this.year = birthday.getFullYear()
    this.month = birthday.getMonth() + 1
    this.date = birthday.getDate()
    this.lifePathNumber = this.singleNumber(this.birthdayToNumber(this.year) + this.birthdayToNumber(this.month) + this.birthdayToNumber(this.date))
  }

  getNameTest() {
    return this.name.map((char) => nameMap[char]).reduce((a,b) => a + " " + b)
  }

  getExpressionNumber() {
    let j = 0
    let temp = 0
    let expressionNumber = []
    for(let index = 0; index < this.name.length; index++) {
      let char = this.name[index]
      if(char !== 0)
        temp = temp + nameMap[char]
      if(char === 0 || index === this.name.length - 1) {
        expressionNumber[j] = this.singleNumber(temp)
        temp = 0
        j++
      }
    }
    return this.numToPrintString(expressionNumber.reduce((a,b) => a + b))
  }

  getSoulUrge() {
    let j = 0
    let temp = 0
    let soulUrge = []
    for(let index = 0; index < this.name.length; index++) {
      let char = this.name[index]
      if(char !== 0)
        if(char === 1 || char === 5 || char === 9 || char === 15 || char === 21)
          temp = temp + nameMap[char]
      if(char === 0 || index === this.name.length - 1) {
        soulUrge[j] = this.singleNumber(temp)
        temp = 0
        j++
      }
    }
    return this.numToPrintString(soulUrge.reduce((a,b) => a + b))
  }

  getPersonalityNumber() {
    let j = 0
    let temp = 0
    let personalityNumber = []
    for(let index = 0; index < this.name.length; index++) {
      let char = this.name[index]
      if(char !== 0) {
        if(char !== 1 && char !== 5 && char !== 9 && char !== 15 && char !== 21) {
          temp = temp + nameMap[char]
        }
      }
      if(char === 0 || index === this.name.length - 1) {
        personalityNumber[j] = this.singleNumber(temp)
        temp = 0
        j++
      }
    }
    return this.numToPrintString(personalityNumber.reduce((a,b) => a + b))
  }

  nameArray(name) {
    return name.trim().toUpperCase().split("").map((char) => {
      if(char.charCodeAt() >= 65 && char.charCodeAt() <= 90)
        return char.charCodeAt() - 64
      else
       return 0
    })
  }

  lifePathNumberString() {
    return this.numToPrintString(this.birthdayToNumber(this.year) + this.birthdayToNumber(this.month) + this.birthdayToNumber(this.date))
  }

  lifePathNumber() {
    return this.lifePathNumber
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

  getPersonalYear() {
    return this.singleNumber(this.birthdayToNumber((new Date()).getFullYear()) + this.birthdayToNumber(this.month) + this.birthdayToNumber(this.date))
  }

  getCycles() {
    const cycle = this.cycle()
    return [
      `0 ~ ${cycle[1].toString()}`,
      `${(cycle[1]+1).toString()} ~ ${(cycle[2]).toString()}`,
      `${(cycle[2]+1).toString()} ~ ${(cycle[3]).toString()}`,
      `${(cycle[3]+1).toString()} ~ `
    ]
  }

  cycle() {
    return [
      0,
      36 - this.lifePathNumber,
      36 - this.lifePathNumber + 9,
      36 - this.lifePathNumber + 18
    ]
  }

  getPinnacles() {
    let array = [
      this.mergeNumber(this.mergeNumber(this.birthdayToNumber(this.month)) + this.mergeNumber(this.birthdayToNumber(this.date))),
      this.mergeNumber(this.mergeNumber(this.birthdayToNumber(this.year)) + this.mergeNumber(this.birthdayToNumber(this.date))),
      0,
      this.mergeNumber(this.mergeNumber(this.birthdayToNumber(this.year)) + this.mergeNumber(this.birthdayToNumber(this.month))),
    ]
    array[2] = array[0] + array[1]
    return array
  }

  getChallenges() {
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

let nameMap = [0,1,2,3,4,5,6,7,8,9,
               1,2,3,4,5,6,7,8,9,
               1,2,3,4,5,6,7,8 ]