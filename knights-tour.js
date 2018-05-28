// get initial position
// x - column position
// y - row position
// z - direction taken to get into this square

//   z direction

// x x 3 x 2 x x x
// x 4 x x x 1 x x
// x x x k x x x x
// x 5 x x x 8 x x
// x x 6 x 7 x x x

let k = {
  x: 0, y: 0, z: 1
}
console.log(`\ninitial location is: (${k.x},${k.y})`)

const board = []

let isNotValid = function(x,y){

  if(x < 0 || x > 7 || y < 0 || y > 7){
    board[board.length-1].z++
    return  true
  }

  for(i=board.length; i>0; i--){
    if((x == board[board.length-1].x) && (y == board[board.length-1].y)){
      board[board.length-1].z++
      return  true
    }
  }

  return false
}

let getNext = function (q){

  let tempX = q.x
  let tempY = q.y
  let z = q.z

  do{
  tempX = board[board.length-1].x 
  tempY = board[board.length-1].y
  z = board[board.length-1].z
  switch(z){
    case 1: tempX+=2; tempY+=1; break
    case 2: tempX+=1; tempY+=2; break
    case 3: tempX-=1; tempY+=2; break
    case 4: tempX-=2; tempY+=1; break
    case 5: tempX-=2; tempY-=1; break
    case 6: tempX-=1; tempY-=2; break
    case 7: tempX+=1; tempY-=2; break
    case 8: tempX+=2; tempY-=1; break
    default: {
      // board.pop()
    }
  }
}while(isNotValid(tempX, tempY))



  let r = {x:0, y:0, z:0}
  r.x = tempX; r.y = tempY; r.z = z
  return r
}

while(board.length<64){
  board.push(k)
  k = getNext(k)
  console.log(k)
}

console.log(`final array size = ${board.length}`)

