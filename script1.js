
      const score = JSON.parse(localStorage.getItem('score')) || {
              wins: 0,
              loses: 0,
              ties: 0
      };
/*
        if(!score){
          score = {
                wins: 0,
                loses: 0,
                ties: 0
        };
        }
*/
        function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
            document.querySelector('.your-move')
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if(result === 'You win.')
        {
                score.wins +=1;
        }
        else if(result === 'You lose.'){
            score.loses +=1;
        }
        else if(result === 'Tie.'){
            score.ties +=1;
        }

        localStorage.setItem('score', JSON.stringify(score));
        scoreUpdate();
        // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\nWins: ${score.wins}, Loses: ${score.loses}, Ties : ${score.ties}`);
      }
    function scoreUpdate(){
        document.querySelector('.score-update').innerHTML = `${score.wins} ${score.loses} ${score.ties}`;
    }
    function pickComputerMove(){
        let computerMove = '';
    const randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber <1/3){
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    return computerMove;
}
function changeImage(fileName){
    let abc = document.querySelector("#your-move");
    abc.setAttribute("src",fileName);
}