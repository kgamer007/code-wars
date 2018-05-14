function reachDestination(distance, speed) {
  let arrival = Math.round((distance/speed)*2/2);
 return `The train will be there in ${arrival} ${(arrival === 1 ? 'hour.' : 'hours.')}`;
 
 // let arrival2 = distance/speed;
 // if (arrival2 <= .5) {
 // return `The train will be there in ${arrival2} hours.`;
 // }
 }