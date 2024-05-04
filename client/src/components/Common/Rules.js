import React from 'react';
import { jsPDF } from 'jspdf';
import "../Style/Rules.css";



class CompetitionRules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Rules: [
                "Sample rules and regulations text..."
            ],
            importantRules: [
                "Participants must be at least 18 years old.",
                "All participants must sign a liability waiver.",
                "Props and costumes should be safe and not obstructive to other participants.",
            ]
        };
    }
    

  downloadRulesPdf = () => {
    const doc = new jsPDF();
    const topic = "Competition Rules and Regulations";
    const importantRules = this.state.importantRules.map(rule => `• ${rule}`).join('\n'); 
    const allRules = `${topic}\n\nImportant Rules:\n\n${importantRules}`;

    doc.text(allRules, 10, 10);
    doc.save('competition_rules.pdf');

    // const doc = new jsPDF();
    // const title = "Competition Rules and Regulations";
    // const allRules = [...this.state.importantRules, this.state.rules].join('\n');

    // doc.text(title, 10, 10);
    // doc.text(allRules, 10, 30);
    // doc.save('competition_rules.pdf');
  };




  render() {
    const { Rules, importantRules } = this.state;

    // const rulesArray = this.state.rules.split('\n'); 

    return (
      <div className='all_rules'>
        <div className='Rules_topic'>
            <h1 id='Rt'>
                Competition Rules and Regulations
            </h1>
            
        </div>

        <div className='Rules_box'>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={this.downloadRulesPdf} className='btn2'>
                    Download PDF
                </button>
            </div>
            <h2 id='rules'>Important Rules:</h2>

            <ul id='rules_list'>
                {importantRules.map((rule, index) => (
                <li key={index}>{rule}</li>
                ))}
            </ul>

            <ul id='rules_list'>
            {Rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>

            {/* <h2 id='rules'>All Rules:</h2> */}

            {/* <p id='rules'>{rules}</p> */}

        </div>

        

        
      </div>
    );
  }
}

export default CompetitionRules;
