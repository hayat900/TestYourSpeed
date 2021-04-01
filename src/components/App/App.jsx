import React from 'react';
import "./App.css";
import Nav from "../Nav/Nav.jsx"
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';

import Challenge from '../Challenge/Challenge';

const totaltime=60;
const url="https://baconipsum.com/api/?type=all-meat&paras=3&start-with-lorem=1&format=text";
class App extends React.Component {
    state={
        selectedparagraph:"Hello World! disha",
        timerstarted:false,
        timeremaining:totaltime,
        words:0,
        characters:0,
        wpm:0,
        testinfo:[],
    }
    componentDidMount(){
         fetch(url).
         then((response)=>response.text()).
         then((data)=>{
         console.log(data);
                 const selectedparagrapharray=data.split("");
                 const testinfo=selectedparagrapharray.map((selectedletter)=>{
            return{
                 testletter:selectedletter,
                 status:"NotAttempted",
             };
         });
         this.setState({testinfo:testinfo});
                 this.setState({selectedparagraph:data});
            });
        
        
    }
    startTimer=()=>{
        this.setState({timerstarted:true});
        const timer=setInterval(()=>{
            if(this.state.timeremaining>0)
            {
                const timespent=totaltime-this.state.timeremaining;
                const wpm=timespent>0?(this.state.words/timespent)*totaltime:0;
                this.setState({
                    timeremaining:this.state.timeremaining-1,
                    wpm:parseInt(wpm),
                });
            }
            else{
                clearInterval(timer);
            }
        },1000);
    }
    handleuserinput=(inputvalue)=>{
        console.log(inputvalue);
        if(!this.state.timerstarted)
        {
            this.startTimer();
        }

        const characters=inputvalue.length;
        const words=inputvalue.split(" ").length;
        const index=characters-1;
        if(index<0)
        {
            this.setState({
                testinfo:[
                    {
                        testletter:this.state.testinfo[0].testletter,
                        status:"NotAttempted",
                    },
                    ...this.state.testinfo.slice(1),
                ],
                characters,words,

            });
            return;
        }
        if(index>=this.state.selectedparagraph.length){
            this.setState({characters,words});
            
            return;
        }
const testinfo=this.state.testinfo;
if(!(index===this.state.selectedparagraph.length-1))
{
    //not at first are not attempted
    testinfo[index+1].status="NotAttempted";
    //compare entered and given value
    const iscorrect=inputvalue[index]===testinfo[index].testletter;
    //update testinfo
    testinfo[index].status=iscorrect? "correct":"incorrect";
    //update state
    this.setState({testinfo,words,characters});

};
if(index==this.state.selectedparagraph.length-1)
{
    const iscorrect=inputvalue[index]===testinfo[index].testletter;
    //update testinfo
    testinfo[index].status=iscorrect? "correct":"incorrect";
    //update state
    this.setState({testinfo,words,characters});
}
    };
    render() {
        // console.log(this.state.testinfo);
        console.log("call");
        // console.log(this.state.testinfo);
        // fetch(url).then((response)=>response.text()).then((data)=>{
        //     console.log(data);
        // }  );
        return (
            // this 

            <div className="app">
                <Nav />
                <Landing />
                <Footer />
                
                 <Challenge selectedparagraph={this.state.selectedparagraph}
                 words={this.state.words}
                 characters={this.state.characters}
                 wpm={this.state.wpm}
                 timeremaining={this.state.timeremaining}
                 timerstarted={this.state.timerstarted}
                 testinfo={this.state.testinfo}
                 input={this.handleuserinput}
                 /> 
            </div>
        );
    }
}
export default App;