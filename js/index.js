const game = new Quiz()
//Manipular DOM

    
    const answerOptions = document.getElementById("answerbutton");
    const answerOne = document.getElementById("op1");
    const answerTwo = document.getElementById("op2");
    const answerThree= document.getElementById("op3");
    const answerFour = document.getElementById("op4");
    const btns = document.querySelectorAll('.btn');
    const nextbts = document.getElementById("nextbtn");
    const score = document.getElementById("dinheirobtn");
    const questionContainers = document.getElementById("questioncontainer");
    const backimg = document.querySelector("#backgroundimagem")

game.startGame()

/* game.showQuestion() */

/* answerOptions.classList.add("hide"); */
/* nextbts.classList.add("hide"); */
/* score.classList.add("hide"); */
/* questionContainers.classList.add("hide"); */
/* backimg.classList.add("hide"); */

//inteirando pelo botões btns, que seria a div pai das (op1,2,3,4)
//btn innertext para aparecerr o texto dos botões
//função btns, chamando o metodo checkAnswer, e o metodo recebe um parametro (cliquedousuario).
//Embaixo, toda vez que o usuário clicar, vai mandar para o metodo checkAnswer, qual opção de resposta o usuario escolheu
//E então, vai rodar o método usando a escolha do usuário.
btns.forEach((btn) => {

    btn.addEventListener("click", () => {
        let respostadousuario = btn.innerText
      /*   console.log(btn)
        console.log(respostadousuario) */
        game.checkAnswer(respostadousuario);

    });

});



nextbts.addEventListener("click", () => {
    game.nextQuestion();

});



//checkAnswer é o metodo, aqui no index esse metodo é executado. 


