import React, { Component } from 'react';
import { range } from './tools';
import { instructions } from './instructions';
import './App.css';

const katakana = [
  {symbol: "ア", value: "a", row: 1, column: 1},
  {symbol: "イ", value: "i", row: 1, column: 2},
  {symbol: "ウ", value: "u", row: 1, column: 3},
  {symbol: "エ", value: "e", row: 1, column: 4},
  {symbol: "オ", value: "o", row: 1, column: 5},
  {symbol: "カ", value: "ka", row: 2, column: 1},
  {symbol: "キ", value: "ki", row: 2, column: 2},
  {symbol: "ク", value: "ku", row: 2, column: 3},
  {symbol: "ケ", value: "ke", row: 2, column: 4},
  {symbol: "コ", value: "ko", row: 2, column: 5},
  {symbol: "サ", value: "sa", row: 3, column: 1},
  {symbol: "シ", value: "shi", row: 3, column: 2},
  {symbol: "ス", value: "su", row: 3, column: 3},
  {symbol: "セ", value: "se", row: 3, column: 4},
  {symbol: "ソ", value: "so", row: 3, column: 5},
  {symbol: "タ", value: "ta", row: 4, column: 1},
  {symbol: "チ", value: "chi", row: 4, column: 2},
  {symbol: "ツ", value: "tsu", row: 4, column: 3},
  {symbol: "テ", value: "te", row: 4, column: 4},
  {symbol: "ト", value: "to", row: 4, column: 5},
  {symbol: "ナ", value: "na", row: 5, column: 1},
  {symbol: "ニ", value: "ni", row: 5, column: 2},
  {symbol: "ヌ", value: "nu", row: 5, column: 3},
  {symbol: "ネ", value: "ne", row: 5, column: 4},
  {symbol: "ノ", value: "no", row: 5, column: 5},
  {symbol: "ハ", value: "ha", row: 6, column: 1},
  {symbol: "ヒ", value: "hi", row: 6, column: 2},
  {symbol: "フ", value: "fu", row: 6, column: 3},
  {symbol: "ヘ", value: "he", row: 6, column: 4},
  {symbol: "ホ", value: "ho", row: 6, column: 5},
  {symbol: "マ", value: "ma", row: 7, column: 1},
  {symbol: "ミ", value: "mi", row: 7, column: 2},
  {symbol: "ム", value: "mu", row: 7, column: 3},
  {symbol: "メ", value: "me", row: 7, column: 4},
  {symbol: "モ", value: "mo", row: 7, column: 5},
  {symbol: "ヤ", value: "ya", row: 8, column: 1},
  {symbol: "ユ", value: "yu", row: 8, column: 3},
  {symbol: "ヨ", value: "yo", row: 8, column: 5},
  {symbol: "ラ", value: "ra", row: 9, column: 1},
  {symbol: "リ", value: "ri", row: 9, column: 2},
  {symbol: "ル", value: "ru", row: 9, column: 3},
  {symbol: "レ", value: "re", row: 9, column: 4},
  {symbol: "ロ", value: "ro", row: 9, column: 5},
  {symbol: "ワ", value: "wa", row: 10, column: 1},
  {symbol: "ヲ", value: "wo", row: 10, column: 5},
  {symbol: "ン", value: "n", row: 11, column: 1},
  {symbol: "ガ", value: "ga", row: 12, column: 1},
  {symbol: "ギ", value: "gi", row: 12, column: 2},
  {symbol: "グ", value: "gu", row: 12, column: 3},
  {symbol: "ゲ", value: "ge", row: 12, column: 4},
  {symbol: "ゴ", value: "go", row: 12, column: 5},
  {symbol: "ザ", value: "za", row: 13, column: 1},
  {symbol: "ジ", value: "ji", row: 13, column: 2},
  {symbol: "ズ", value: "zu", row: 13, column: 3},
  {symbol: "ゼ", value: "ze", row: 13, column: 4},
  {symbol: "ゾ", value: "zo", row: 13, column: 5},
  {symbol: "ダ", value: "da", row: 14, column: 1},
  {symbol: "ヂ", value: "ji", row: 14, column: 2},
  {symbol: "ヅ", value: "zu", row: 14, column: 3},
  {symbol: "デ", value: "de", row: 14, column: 4},
  {symbol: "ド", value: "do", row: 14, column: 5},
  {symbol: "バ", value: "ba", row: 15, column: 1},
  {symbol: "ビ", value: "bi", row: 15, column: 2},
  {symbol: "ブ", value: "bu", row: 15, column: 3},
  {symbol: "ベ", value: "be", row: 15, column: 4},
  {symbol: "ボ", value: "bo", row: 15, column: 5},
  {symbol: "パ", value: "pa", row: 16, column: 1},
  {symbol: "ピ", value: "pi", row: 16, column: 2},
  {symbol: "プ", value: "pu", row: 16, column: 3},
  {symbol: "ペ", value: "pe", row: 16, column: 4},
  {symbol: "ポ", value: "po", row: 16, column: 5},
];

const hiragana = [
  {symbol: "あ", value: "a", row: 1, column: 1},
  {symbol: "い", value: "i", row: 1, column: 2},
  {symbol: "う", value: "u", row: 1, column: 3},
  {symbol: "え", value: "e", row: 1, column: 4},
  {symbol: "お", value: "o", row: 1, column: 5},
  {symbol: "か", value: "ka", row: 2, column: 1},
  {symbol: "き", value: "ki", row: 2, column: 2},
  {symbol: "く", value: "ku", row: 2, column: 3},
  {symbol: "け", value: "ke", row: 2, column: 4},
  {symbol: "こ", value: "ko", row: 2, column: 5},
  {symbol: "さ", value: "sa", row: 3, column: 1},
  {symbol: "し", value: "shi", row: 3, column: 2},
  {symbol: "す", value: "su", row: 3, column: 3},
  {symbol: "せ", value: "se", row: 3, column: 4},
  {symbol: "そ", value: "so", row: 3, column: 5},
  {symbol: "た", value: "ta", row: 4, column: 1},
  {symbol: "ち", value: "chi", row: 4, column: 2},
  {symbol: "つ", value: "tsu", row: 4, column: 3},
  {symbol: "て", value: "te", row: 4, column: 4},
  {symbol: "と", value: "to", row: 4, column: 5},
  {symbol: "な", value: "na", row: 5, column: 1},
  {symbol: "に", value: "ni", row: 5, column: 2},
  {symbol: "ぬ", value: "nu", row: 5, column: 3},
  {symbol: "ね", value: "ne", row: 5, column: 4},
  {symbol: "の", value: "no", row: 5, column: 5},
  {symbol: "は", value: "ha", row: 6, column: 1},
  {symbol: "ひ", value: "hi", row: 6, column: 2},
  {symbol: "ふ", value: "fu", row: 6, column: 3},
  {symbol: "へ", value: "he", row: 6, column: 4},
  {symbol: "ほ", value: "ho", row: 6, column: 5},
  {symbol: "ま", value: "ma", row: 7, column: 1},
  {symbol: "み", value: "mi", row: 7, column: 2},
  {symbol: "む", value: "mu", row: 7, column: 3},
  {symbol: "め", value: "me", row: 7, column: 4},
  {symbol: "も", value: "mo", row: 7, column: 5},
  {symbol: "や", value: "ya", row: 8, column: 1},
  {symbol: "ゆ", value: "yu", row: 8, column: 3},
  {symbol: "よ", value: "yo", row: 8, column: 5},
  {symbol: "ら", value: "ra", row: 9, column: 1},
  {symbol: "り", value: "ri", row: 9, column: 2},
  {symbol: "る", value: "ru", row: 9, column: 3},
  {symbol: "れ", value: "re", row: 9, column: 4},
  {symbol: "ろ", value: "ro", row: 9, column: 5},
  {symbol: "わ", value: "wa", row: 10, column: 1},
  {symbol: "を", value: "wo", row: 10, column: 5},
  {symbol: "ん", value: "n", row: 11, column: 1},
  {symbol: "が", value: "ga", row: 12, column: 1},
  {symbol: "ぎ", value: "gi", row: 12, column: 2},
  {symbol: "ぐ", value: "gu", row: 12, column: 3},
  {symbol: "げ", value: "ge", row: 12, column: 4},
  {symbol: "ご", value: "go", row: 12, column: 5},
  {symbol: "ざ", value: "za", row: 13, column: 1},
  {symbol: "じ", value: "ji", row: 13, column: 2},
  {symbol: "ず", value: "zu", row: 13, column: 3},
  {symbol: "ぜ", value: "ze", row: 13, column: 4},
  {symbol: "ぞ", value: "zo", row: 13, column: 5},
  {symbol: "だ", value: "da", row: 14, column: 1},
  {symbol: "ぢ", value: "ji", row: 14, column: 2},
  {symbol: "づ", value: "zu", row: 14, column: 3},
  {symbol: "で", value: "de", row: 14, column: 4},
  {symbol: "ど", value: "do", row: 14, column: 5},
  {symbol: "ば", value: "ba", row: 15, column: 1},
  {symbol: "び", value: "bi", row: 15, column: 2},
  {symbol: "ぶ", value: "bu", row: 15, column: 3},
  {symbol: "べ", value: "be", row: 15, column: 4},
  {symbol: "ぼ", value: "bo", row: 15, column: 5},
  {symbol: "ぱ", value: "pa", row: 16, column: 1},
  {symbol: "ぴ", value: "pi", row: 16, column: 2},
  {symbol: "ぷ", value: "pu", row: 16, column: 3},
  {symbol: "ぺ", value: "pe", row: 16, column: 4},
  {symbol: "ぽ", value: "po", row: 16, column: 5},
];

/* hardcoded, but the number of kana is unlikely to change soon ;-) */
const MAX_ROWS = 16;
const MAX_COLUMNS = 5;

// both kana tables merged
const allKana = [].concat(katakana, hiragana);

function symbols(showWhat) {
  return showWhat === 'both' ? allKana :
        (showWhat === 'katakana' ? katakana : hiragana);
}

// save the scores and options here so we don't lose them when we click on
// another tab
let savedState = undefined;

// main component
class KanaLearning extends Component {
  constructor(props) {
    super(props);

    // bind skulduggery
    this.pickSymbol = this.pickSymbol.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.nextRound = this.nextRound.bind(this);
    this.setOption = this.setOption.bind(this);

    this.state = savedState || {
      currentKana: katakana[0],
      answerCorrect: undefined,
      numCorrect: 0,
      numWrong: 0,
      showWhat: "both",
    }
  }

  componentDidMount() {
    this.pickSymbol();
  }

  // pick a random kana symbol that isn't the same as the previous one.
  pickSymbol() {
    let allKanaShown = symbols(this.state.showWhat);
    let oldKana = this.state.currentKana;
    let randomKana = oldKana;
    while (randomKana == this.state.currentKana) {
      randomKana = allKanaShown[Math.floor(Math.random() * allKanaShown.length)];
    }
    this.setState({currentKana: randomKana});
  }

  /* Callback function */
  checkAnswer(answer) {
    //let syms = symbols(this.state.showWhat);
    //let realAnswer = syms[this.state.symbol];
    if (answer === this.state.currentKana.value) {
      this.setState({answerCorrect: true, numCorrect: this.state.numCorrect+1});
    } else {
      this.setState({answerCorrect: false, numWrong: this.state.numWrong+1});
    }
    this.nextRound();
  }

  nextRound() {
    setTimeout(() => {
      this.pickSymbol();
      this.setState({answerCorrect: undefined});
      savedState = this.state;
    }, 1000);
  }

  setOption(showWhat) {
    this.setState({showWhat: showWhat});
    // show this option properly even if we move to a different tab and back
    savedState = this.state; // apparently does not have the new showWhat value?
    savedState.showWhat = showWhat; // for some reason this is necessary
  }

  render() {
    return (
      <div className="KanaLearning">
        <div className="KanaLearningLeft">
          <KanaInputArea kana={this.state.currentKana} 
                         onCheckAnswer={this.checkAnswer} 
                         answerCorrect={this.state.answerCorrect}
          />
        </div>
        <div className="KanaLearningRight">
          <table className="KanaLearningRight-results">
            <tbody>
              <tr>
                <td colspan="2">Results</td>
              </tr>
              <tr>
                <td>Number of kana tried:</td>
                <td>{this.state.numCorrect + this.state.numWrong}</td>
              </tr>
              <tr>
                <td>Correct answers:</td>
                <td>{this.state.numCorrect}</td>
              </tr>
              <tr>
                <td>Wrong answers:</td>
                <td>{this.state.numWrong}</td>
              </tr>
            </tbody>
          </table>
          <div className="KanaLearningRight-options">
            <div><input type="radio" name="show-what" value="katakana" 
                        checked={this.state.showWhat === "katakana"} 
                        onClick={() => this.setOption("katakana")} /> 
                        &nbsp;only show katakana</div>
            <div><input type="radio" name="show-what" value="hiragana" 
                        checked={this.state.showWhat === "hiragana"} 
                        onClick={() => this.setOption("hiragana")} /> 
                        &nbsp;only show hiragana</div>
            <div><input type="radio" name="show-what" value="both" 
                        checked={this.state.showWhat === "both"} 
                        onClick={() => this.setOption("both")} /> 
                        &nbsp;show both</div>
          </div>
        </div>
      </div>
    )
  }
}

/* props:
 * kana: the kana symbol to be displayed
 * onCheckAnswer(answer): callback to check the answer when we press Enter
 * answerCorrect: true/false/undefined
   (The idea is that KanaLearning knows whether the answer is wrong or 
   not, but KanaInputArea does/should not!)
 */
class KanaInputArea extends Component {

  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.answerMessage = this.answerMessage.bind(this);

    this.inputBox = React.createRef();
  }

  handleEnter(event) {  
    if (event.keyCode === 13) {
      // use a callback method via props to check the answer
      this.props.onCheckAnswer(event.target.value.toLowerCase().trim());
    }
  }

  answerMessage(correct) {
    if (correct === undefined) return "";
    return correct ? "CORRECT" : "WRONG";
  }

  render() {
    // this is a bit of a hack... if we currently don't have an answer (i.e. it's
    // undefined), which should only happen when we first start the app or when a
    // previous answer is cleared, then clear the input text box.
    // XXX think of a better way to do this.
    if (this.props.answerCorrect === undefined) {
      if (this.inputBox.current) this.inputBox.current.value = "";
    }

    // used to determine the name of the CSS class for the answer
    let answerstr = this.props.answerCorrect === undefined ? "empty" : (this.props.answerCorrect ? "correct" : "wrong");

    return (
      <div className="KanaInputArea">
        <div className="KanaDisplay">
          <div className="KanaDisplay-symbol">{this.props.kana.symbol}</div>
        </div>
        <input ref={this.inputBox} type="text" name="kana" maxlength="4" 
               className="KanaLearningLeft-input-text"
               onKeyUp={this.handleEnter}
        />
        <div className={"KanaInputArea-answer KanaInputArea-answer-"+answerstr}>
          {this.answerMessage(this.props.answerCorrect)}
          {this.props.answerCorrect === false ? 
            <div className="KanaInputArea-correct-answer">
              right answer: <strong>{this.props.kana.value}</strong>
            </div> 
            : ""}
        </div>
      </div>
    )
  }
}

class Instructions extends Component {
  render() {
    return instructions;
  }
}

function findKana(kanaList, row, column) {
  let found = kanaList.filter(kana => kana.row === row && kana.column === column);
  return found.length > 0 ? found[0] : null;
}

/* Displays a katakana or hiragana table.
   Props:
   kana: either the katakana or hiragana array
*/
class KanaTable extends Component {
  render() {
    const ROWS = range(MAX_ROWS);
    const COLUMNS = range(MAX_COLUMNS);
    return (
      <div className="KanaTable">
        <table>
          <tbody>
            {ROWS.map(row => 
              <tr>
                {COLUMNS.map(column => {
                  // kinda inefficient but it doesn't really matter for such
                  // a small table...
                  let kana = findKana(this.props.kana, row, column);
                  if (kana) {
                    return <td><KanaSymbol kana={kana} /></td>
                  } else return <td>&nbsp;</td>
                })}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

class KatakanaTable extends Component {
  render() {
    return <KanaTable kana={katakana} />
  }
}

class HiraganaTable extends Component {
  render() {
    return <KanaTable kana={hiragana} />
  }
}

/* Display a kana symbol in the table.
   Props:
   kana: the kana object to be displayed (with keys "symbol" and "value")
*/
class KanaSymbol extends Component {
  render() {
    return (
      <div className="KanaSymbol">
        <div className="KanaSymbol-symbol">{this.props.kana.symbol}</div>
        <div className="KanaSymbol-value">{this.props.kana.value}</div>
      </div>
    )
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.setTab = this.setTab.bind(this);

    this.state = {
      component: KanaLearning,
    };
  }

  setTab(component) {
    this.setState({component: component});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Learn Kana! <span className="smiley">ツ</span></h1>
        </header>
        <div className="LearnKana-Tabs">
          <span onClick={() => this.setTab(KanaLearning)}>Training</span>
          <span onClick={() => this.setTab(KatakanaTable)}>Katakana Table</span>
          <span onClick={() => this.setTab(HiraganaTable)}>Hiragana Table</span>
          <span onClick={() => this.setTab(Instructions)}>Instructions</span>
        </div>
        <div className="LearnKana-main">
          <this.state.component />
        </div>
      </div>
    );
  }
}

export default App;
