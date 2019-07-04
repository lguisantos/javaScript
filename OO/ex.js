function almostIncreasingSequence(sequence) {
    var cont_false = 0
    console.log(sequence)
    sequence.sort(function(a, b){
          return a - b
    })
    console.log(sequence)
    for (let i = 0; i <= (sequence.length - 1); i++) {
        if (sequence[i] < sequence[i + 1]) {
            
        } else {
            cont_false++;
            if (cont_false >= 2) {
                return false
            }
            sequence.splice(i, 1)
        }
    }
    return true
}

almostIncreasingSequence([1,3,23,65,23,6,7,3,2,4,3]) 