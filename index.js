// 1. Smaller Angle 
var Minimal_Angle = (h, m) => 
{
    if( h===12){
            h = 0;
          }   
          if(m===60){
            m = 0;
            h+=1;
            if(h>12){
              h = h-12;
            }
          }
          var hAngle = 0.5*(h*60+m);
          var mAngle = 6*m;
          var result = Math.abs(hAngle-mAngle)
          result = Math.min((360-result),result)
          return result;   
};
        console.log(Minimal_Angle(5,30));



 //2. Leap Year or Not
var Check_Leap = (year) => 
{
 if ((year % 4 == 0) && (year % 100 !==0))
      return "Leap Year";
  else 
  return "Non Leap Year"
  

};
 
console.log(Check_Leap(1990));



// 3. Perfect number or not
var Perfect_Check = (N) => 
{
     var per = 0;
  for (let i = 1; i <= N / 2; i++) {
    if (N % i === 0) {
      per = per + i;
    }
  }
  if (per === N && per !== 0) {
    return "YES";
  } else {
    return "NO";
  }
};
console.log(Perfect_Check(98));


// 4. Reverse a Number
var Reverse_Number = (N) => 
{
  let reverse=0;
  while(N!==0){
    const rem=(N%10);
    reverse=reverse*10+rem;
    N=Math.floor(N/10);
  }
  return reverse;

};

console.log(Reverse_Number(1991));


// 5. Substring Check.

var Substring_Check = (S1, S2) => 
{
   if (S1.includes(S2)){
     return "YES"
   }
   else
   return "NO"
};

console.log(Substring_Check("Rakesh Gowda"));