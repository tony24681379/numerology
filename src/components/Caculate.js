import React from 'react';
import Paper from 'material-ui/Paper';
import numerology from '../calculate/calculate';

const style = {
  height: 130,
  width: 130,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

export default function Result(props) {
  const number = new numerology(props.birthday, props.name)
  const pinnacles = number.getPinnacles()
  const challenges = number.getChallenges()
  const cycles = number.getCycles()
  const lifePathString = number.lifePathNumberString()
  const personalYear = number.getPersonalYear()
  const num = ['一','二','三','四']

  return(
    <div>
      <p>生命數字：{lifePathString}</p>
      <p>個人年份：{personalYear}</p>
      <p>{number.getExpressionNumber()}</p>
      <p>{number.getSoulUrge()}</p>
      <p>{number.getPersonalityNumber()}</p>

      {num.map((num, i)=>
        <Paper key={i} style={style} zDepth={2}>
          <fieldset>
          <legend>{cycles[i]}</legend>
          <p>第{num}高峰:{pinnacles[i]}</p>
          <p>第{num}挑戰:{challenges[i]}</p>
          </fieldset>
        </Paper>
      )}
    </div>
  )
}