//1
function hasTwoCubeSums(n) {
    let max = n**(1/3) | 0,
        qty = 0,
        i, j;

    for (i = 1; i <= max; i++) {
        for (j = i; j <= max; j++) {
            if (i**3 + j**3 === n) {
              if(++qty > 1) return true;
            }
        }
    }
    return false;
}

//3

function whatCentury(year)
{
  let century = Math.ceil(year/100); 
  let suffix = 'th';
  if(century < 11 || century > 13){
    switch(century % 10){
        case 1:
          suffix = 'st';
          break;
        case 2:
          suffix = 'nd';
          break;
        case 3:
          suffix = 'rd';
          break;
    }
  }
  return century + suffix;
}

//6
function toWeirdCase(string){
  return string.split(' ').map((word) => [...word].map((char, i) => i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('')).join(' ');
}



//7

function wave(str){
  let result = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] != ' '){
      let temp = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(temp);
    }
  }
  return result;
}

//9

function solution(str){
  if(str.length % 2 != 0){
    str += '_';
  }
  let res = [], iter = 0;
  for(let i = 0; i < str.length; i+=2){
    res[iter++] = str[i] + str[i+1];
  }
  return res;
}

//11
function domainName(url){
  return url.replace(/^https?:\/\//, '').split("\/")[0].replace(/^www\./, '').split(".")[0];
}