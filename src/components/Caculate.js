import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 130,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export function birthdayToNumber(value) {let val = Number.parseInt(value, 10);
  let result = 0;
  while (val > 0) {
    result += val % 10;
    val = Math.trunc(val / 10);
  }
  return result;
}

function singleNumber(value) {
  return value % 10 + Math.trunc(value / 10);
}

function getSummit (year, month, date) {
  let array = [
    singleNumber(singleNumber(birthdayToNumber(month)) + singleNumber(birthdayToNumber(date))),
    singleNumber(singleNumber(birthdayToNumber(year)) + singleNumber(birthdayToNumber(date))),
    0,
    singleNumber(singleNumber(birthdayToNumber(year)) + singleNumber(birthdayToNumber(month))),
  ];
  array[2] = array[0] + array[1];
  return array;
}

function getChallenge(year, month, date) {
  let array = [
    singleNumber(Math.abs(singleNumber(birthdayToNumber(month)) - singleNumber(birthdayToNumber(date)))),
    singleNumber(Math.abs(singleNumber(birthdayToNumber(year)) - singleNumber(birthdayToNumber(date)))),
    0,
    singleNumber(Math.abs(singleNumber(birthdayToNumber(year)) - singleNumber(birthdayToNumber(month)))),
  ];
  array[2] = Math.abs(array[0] - array[1]);
  return array;
}

export default function SummitChallenge(props) {
  const year = props.birthday.getFullYear();
  const month = props.birthday.getMonth() + 1;
  const date = props.birthday.getDate();
  const summit = getSummit(year, month, date);
  const challenge = getChallenge(year, month, date);
  const num = ['一','二','三','四'];

  return(
    <div>
      {num.map((num, i)=>
        <Paper key={i} style={style} zDepth={2}>
          <p>第{num}高峰:{summit[i]}</p>
          <p>第{num}挑戰:{challenge[i]}</p>
        </Paper>
      )}
    </div>
  )
};