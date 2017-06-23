import React from 'react';
import Paper from 'material-ui/Paper';
import numerology from '../calculate/calculate';

const style = {
  height: 100,
  width: 130,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
}

export default function SummitChallenge(props) {
  const number = new numerology(props.birthday)
  const summit = number.getSummit()
  const challenge = number.getChallenge()
  const lifePathString = number.lifePathNumberString()
  const num = ['一','二','三','四']

  return(
    <div>
      <p>生命數字：{lifePathString}</p>
      {num.map((num, i)=>
        <Paper key={i} style={style} zDepth={2}>
          <p>第{num}高峰:{summit[i]}</p>
          <p>第{num}挑戰:{challenge[i]}</p>
        </Paper>
      )}
    </div>
  )
}