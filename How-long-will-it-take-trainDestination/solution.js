function reachDestination(distance, speed) {
  let arrival = Math.round((distance / speed) * 2) / 2;
  return `The train will be there in ${arrival} ${(arrival === 1 ? 'hour.' : 'hours.')}`;
}