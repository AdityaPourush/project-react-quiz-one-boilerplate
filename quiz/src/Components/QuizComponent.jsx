import React from "react";

class Quiz extends React.Component{
    constructor(){
        super();
    }

    render() {
        return(
            <div className="quizpage">
                <div id="quiz">
                    <h2>Question</h2>
                    <p id="q_no">1 of 15</p>
                    <p id="question">Which is the only mammal that cannot jump?</p>
                    <div className="options">
                        <button>Dog</button>
                        <button>Elephant</button>
                        <button>Goat</button>
                        <button>Lion</button>
                    </div>
                    <div id="what">
                        <button id="prev_button">Previous</button>
                        <button id="nxt_button">Next</button>
                        <button id="quit_button">Quit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Quiz;