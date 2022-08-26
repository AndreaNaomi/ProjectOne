
class Quiz {

constructor () {
    this.round = 0;
    this.money = 0;
    this.life = 3;
    this.confirmacaoDeGanho = 0;
    //Criando uma array de objeto 
    this.question = [ 
        {
            question: "Qual dos sete anões usa óculos?",
            answer: ["Dunga", "Zangado", "Dengoso", "Mestre"],
            correctAnswer: "Mestre",
            dinheiro: 10000
        },
        {
            question: "Qual é a maior ilha da Europa?",
            answer: ["Grã-Bretanha", "Irlanda", "Islândia", "Sicília"],
            correctAnswer: "Grã-Bretanha",
            dinheiro:50000
        },
        {
            question: "Qual é a capital da Austrália?",
            answer: ["Sydney", "Melbourne", "Camberra", "Brisbane"],
            correctAnswer: "Camberra",
            dinheiro:100000     
        },
        {
            question: "A Ironhack é uma escola de tecnologia que contém unidades em:",
            answer: ["Barcelona, Miami, Lisboa, São Paulo, Madrid, Londres, Paris e Berlim.", "Amsterdã, Madrid, Barcelona, Berlim, Paris, Miami, São Paulo e Cidade do México.", "Barcelona, Berlim, Paris, Madrid, Miami, Cidade do México, Lisboa e São Paulo.", "São Paulo, Miami, Madrid, Lisboa, Barcelona, Cidade do México, Londres e Amsterdã."],
            correctAnswer: "Barcelona, Berlim, Paris, Madrid, Miami, Cidade do México, Lisboa e São Paulo.",
            dinheiro:500000
        },
        {
            question: "O macarrão instantâneo foi inventado nos anos 1950, no Japão, por:",
            answer: ["Shuji Nakamura", "Yoshiro Nakamatsu", "Fujio Masuoka", "Momofuku Ando"],
            correctAnswer: "Momofuku Ando",
            dinheiro: 1000000
        },
    ];
    };
   
    startGame() {
        const startButton = document.getElementById("startbtn");
        const questionContainers = document.getElementById("questioncontainer");
        /* const nextbts = document.getElementById("nextbtn"); */
        const score = document.getElementById("dinheirobtn");
        const answerOptions = document.getElementById("answerbutton");
        const audioJogoVaiComecar = new Audio("./assets/audio/src_assets_audios_vai-comecar.wav")
       

        startButton.addEventListener("click", ()=>{
          /*   console.log("Start"); */
            startButton.classList.add("hide");
            answerOptions.classList.remove('hide');
        /*     nextbts.classList.remove('hide'); */
            score.classList.remove('hide');
            questionContainers.classList.remove('hide');
           
            audioJogoVaiComecar.play()

            this.showQuestion()

        });
    };

    showQuestion() {
        const answerOne = document.getElementById("op1");
        const answerTwo = document.getElementById("op2");
        const answerThree= document.getElementById("op3");
        const answerFour = document.getElementById("op4");
        const questionContainers = document.getElementById("questioncontainer");
      

        questionContainers.innerText = this.question[this.round].question;

        answerOne.innerText = this.question[this.round].answer[0];
        answerTwo.innerText = this.question[this.round].answer[1];
        answerThree.innerText = this.question[this.round].answer[2];
        answerFour.innerText = this.question[this.round].answer[3];

        const inicio = document.querySelector("#begin")
        const lost = document.querySelector("#loose")
        
        
        inicio.style.display = "none"
       /*  lost.style.display = "none" */


        };
    
    checkAnswer(cliquedousuario){
        //if(aqui a condicao){aqui oque fazer caso aceite a condicao}
        if (this.round === 4 && "Momofuku Ando" === cliquedousuario){

            console.log('ele ganhoouuu')

            this.confirmacaoDeGanho++
            console.log(this.confirmacaoDeGanho)

            const milhao = new Audio("./assets/audio/src_assets_audios_ganhou-1-milhao.wav")
            milhao.play()

        const inicio = document.querySelector("#begin")
        const board = document.querySelector(".container");
        const winn = document.querySelector("#win");
        const lost = document.querySelector("#loose")
       

        inicio.style.display = "none"
        board.style.display = "none"
        winn.classList.remove("hide")
        /* winn.style.display = "block"
        lost.style.display = "block" */

        return
        }
     
        /* se acertar this.money += this.question[this.round].dinheiro */
        /* const startButton = document.getElementById("startbtn");
        startButton.addEventListener("click", (answer)=>{  */
        const score = document.getElementById("dinheirobtn");
        if(this.question[this.round].correctAnswer === cliquedousuario){

            console.log("Acertou")
            const audioAcertou = new Audio("./assets/audio/src_assets_certa-resposta.wav")
            audioAcertou.play()

            this.money += Number(this.question[this.round].dinheiro)


            score.innerText = `R$ ${this.money}`
            console.log(this.money)
           
            this.checkStatus()
            this.nextQuestion()
        } else {
            console.log("errou")
            const audioErrou = new Audio("../assets/audio/src_assets_audios_que-pena.wav")
            audioErrou.play()
            console.log(this.life)
            this.life--
           
            
            this.checkStatus()
            this.nextQuestion()
        };
    
};

    checkStatus(){
        
        //perdeu por vida
        if (this.life === 0) { 
            console.log("NÃO FOI DESSA VEZ!");
        
        const inicio = document.querySelector("#begin")
        const board = document.querySelector(".container");
        const gameover = document.querySelector("#loose");
        
        inicio.style.display = "none"
        board.style.display = "none"
        gameover.classList.remove("hide")
        /* gameover.style.display = "block" */

        };

        //ganhar o jogo
/*         console.log(this.round+'<<<==== console do checkstatus') */
       /*  if (this.round === 4) {
            console.log("voce ganhou o jogo, nao tem mais perguntas");

        const inicio = document.querySelector("#begin")
        const board = document.querySelector(".container");
        const winn = document.querySelector("#win");


        inicio.style.display = "none"
        board.style.display = "none"
        winn.style.display = "block"

        
            if (this.round === 4){
                if (this.question[this.round].correctAnswer !== answer) {
                    console.log("você perdeu")
                }
                
            }
        

        }; */
/*         if (this.round === 4 && this.question[this.round].correctAnswer === answer){
          console.log('ummilhaox')  
        }; */

    };

    nextQuestion(){
        if (this.round === 4){
            return
        }

        this.round++;
        this.showQuestion();

    };


};

/* console.log(`R$ ${this.money}  `) */
