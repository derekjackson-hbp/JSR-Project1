var tracking = 2;
var questCount = 0;
var testStart = 0;
var question = 0;
var jsClass = ['Carolyn','Christie','Elaine','Ellen','Emily','Kenneth','Richard','Kenneth','Sonyl','Bryan_D','Bryan_A','Courtney','Ellen','Emily','Joe_M','Joe_W','Liana','Rebecca','Taq','Zach']
var intro = ['A couple of weeks ago six replicants escaped from an off worlds colony. \b ', 'On the off chance that one of them infiltrated the class we have decided to run Voight Kampff tests on everyone in the class.']
var difficult = ['You are being difficult.', 'Don\'t say much do you?', 'Alrighty then.'];
var random = ['mmmm. Interesting. Do you want to try that again?','Ok. Let\'s continue.', 'This isn\'t an IQ test.', 'These are just questions. It\'s a test designed to provoke an emotional reponse.']
var random2 = ['Just let me know when your comortble then. Yeah?', 'Comfy?', 'Maybe I will go to Taffy Lewis\' and wait?']
var dialogue = ['All right. I am going to ask you a series of questions, Just relax an answer them as simply as you can. Ready?']

// generate the node that will be appended to the chat history textarea
function getNum(top){
  var x = Math.floor(Math.random() + top);
  return x;
}

function lineGenerate(nd,lineId){
  document.getElementById(lineId).appendChild(nd);
}
// remove an element -- for removing the line 'spoken' to enter the new line.
function removeLast(pId){
  var lastP = document.getElementById(pId);
  lastP.parentNode.removeChild(lastP);
}

// create the node to append to the chat history area
function createNode(text,el,nodeId){
  var node = document.createElement(el);
  //node.id = nodeId + String(tracking);
  node.id = nodeId;
  var line = document.createTextNode(text);
  node.appendChild(line);
  {debugger}
  return node;
};

function chatIntro() {
  var tempList = jsClass;
  var repList = "";
  for (i = 0; i <= 5; i++) {
    var x = tempList.length;
    var n = Math.floor(Math.random() * x);
      if (i != 5){
          repList = repList + jsClass[n] + ', ';
          tempList.splice(n,1);
      } else {
          repList = repList + ' and ' + jsClass[n];
      }
  }
  var test = 'A couple of weeks ago six replicants: ' + ' ' + repList + ' all escaped from an off world colony. In the off chance one of them tries to infiltrate the class we need to run Voight Kampff tests on everyone. Are you ready to start the test?';
  var open = createNode(test,'P','say');
  document.getElementById("dave").appendChild(open);
  {debugger}
};

// Old conversation
/*
function startBR() {
  var elem = document.getElementById('say');
  if (elem && tracking%2 == 0){
    {debugger}
    tracking++;
    removeLast('say');
    var open = createNode('I asked about your owl?','P','say');
    document.getElementById("dave").appendChild(open);
    return
  } else if (elem && tracking <= 6){
    {debugger}
    tracking++;
    var n =  Math.floor(Math.random() * 3);
    var think = difficult[n];
    removeLast('say');
    var open = createNode(think,'P','say');
    document.getElementById('dave').appendChild(open);
    document.getElementById('say').focus()
    return
  }
  else if (elem){
    removeLast('say');
    var open = createNode(dialogue[0],'P','say');
    document.getElementById("dave").appendChild(open);
    ready();
    return
  };
  var open = createNode('Is that owl artificial?','P','say');
  document.getElementById("dave").appendChild(open);
  {debugger}
};

// person initiates interacting here
function startRep(){
  event.preventDefault();
  var reply = document.getElementById('chatInput').value;
  var findYes = /yes/gi;
  var findNo = /no/gi;
  if (reply == "" || reply.match(findNo) != null || tracking < 4){
    var x = getNum(3)
    var elem = document.getElementById('say');
    elem.parentNode.removeChild(elem);
    hal = createNode(difficult[x],'P','say');
    lineGenerate(hal,'dave');
    document.getElementById('dave').focus()
    tracking++;
    {debugger}
  }
  else if (reply.match(findMatch) != null) {
    removeLast('ans');
    var answer = createNode(reply,'P','ans');
    document.getElementById("hal").appendChild(answer);
    document.getElementById('chatInput').value = "";
    var elem = document.getElementById('say');
    elem.parentNode.removeChild(elem);
    hal = createNode('It must be Expensive?','P','say');
    lineGenerate(hal,'dave');
    document.getElementById('dave').focus()
    {debugger}
  }
  else {
    removeLast('ans');
    answer = createNode(reply,'P','ans');
    document.getElementById("hal").appendChild(answer);
    document.getElementById('chatInput').value = "";
    var elem = document.getElementById('say');
    elem.parentNode.removeChild(elem);
    hal = createNode(dialogue[0],'P','say')
    lineGenerate(hal,'dave')
    tracking = 2;
    ready();
  }
}
*/
//initate the questions.

function ready(){

  event. preventDefault();
    var reply = document.getElementById('chatInput').value;
    var findYes = /yes/gi;
    var findNo = /no/gi;
    var findSmoke = /smoke/gi;
    {debugger}
    if (reply.match(findSmoke) != null){
      removeLast('ans');
      {debugger}
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      removeLast('say');
      hal = createNode('It won\'t affect the test. Let\'s begin. \bIt\'s your birthday. Someone gives you a cat skin wallet...','P','say');
      lineGenerate(hal,'dave');
      tracking = 2;
      question++;
      catSkin();
    }
    else if (reply.match(findYes) != null){
      {debugger}
      removeLast('ans');
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      removeLast('say');
      hal = createNode('It\'s your birthday. Someone gives you a cat skin wallet...','P','say');
      lineGenerate(hal,'dave');
      tracking = 2;
      catSkin();
    }
    else if (reply.match(findNo) != null && tracking <= 3) {
      removeLast('ans');
      var y = tracking%2;
      {debugger}
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      removeLast('say');
      hal = createNode(random2[y],'P','say');
      lineGenerate(hal,'dave');
      tracking++;
      document.onsubmit= ready;
    }
    else {
      removeLast('ans');
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      var elem = document.getElementById('say');
      elem.parentNode.removeChild(elem);
      hal = createNode('I will take that as a yes. Let\'s begin. \bIt\'s your birthday. Someone gives you a cat skin wallet..','P','say');
      lineGenerate(hal,'dave');
      tracking = 2;
      catSkin();
    }
};

// start accepting answers for the scripted questions
function catSkin(){

document.onsubmit = function(){

  event.preventDefault();
  var reply = document.getElementById('chatInput').value;
  var findMatch = /\swouldn't\saccept/gi;
  var findMatch2 =/would\snot/gi;
  {debugger}
    if ((reply.match(findMatch) != null) || (reply.match(findMatch2) != null) ){
      removeLast('ans');
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      removeLast('say');
      hal = createNode('...','P','say');
      lineGenerate(hal,'dave');
      question++;
      catSkin2();
  } else if (tracking > 2 ){
      removeLast('ans');
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      removeLast('say');
      hal = createNode('Interesting. Let\'s just continue. You\'ve got a little boy. He shows you his Butterfly collection, plus the killing jar...','P','say');
      lineGenerate(hal,'dave');
      killingJar();
  } else {
      removeLast('ans');
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      removeLast('say');
      hal = createNode('Is that all?','P','say');
      lineGenerate(hal,'dave');
      tracking++;
      catSkin();
  }
};
};


function catSkin2(){

document.onsubmit = function(){

  event.preventDefault();
  tracking = 1;
  var reply = document.getElementById('chatInput').value;
  var findMatch = /police/gi;
  var findMatch2 =/report/gi;
  {debugger}
    if ((reply.match(findMatch) != null) && (reply.match(findMatch2) != null) ){
      removeLast('ans');
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      removeLast('say');
      hal = createNode('All right. You\'ve got a little boy. He shows you his Butterfly collection, plus the killing jar...','P','say');
      lineGenerate(hal,'dave');
      question++;
      killingJar();
  } else if (tracking > 2){
    removeLast('ans');
    var answer = createNode(reply,'P','ans');
    document.getElementById("hal").appendChild(answer);
    document.getElementById('chatInput').value = "";
    removeLast('say');
    hal = createNode('Interesting. Let\'s just continue. You\'ve got a little boy. He shows you his Butterfly collection, plus the killing jar...','P','say');
    lineGenerate(hal,'dave');
    killingJar();
  }
  else {
      removeLast('ans');
      var answer = createNode(reply,'P','ans');
      document.getElementById("hal").appendChild(answer);
      document.getElementById('chatInput').value = "";
      removeLast('say');
      hal = createNode('What was that again?!','P','say');
      lineGenerate(hal,'dave');
      tracking++;
      catSkin2();
  }
};
};

function killingJar(){

  document.onsubmit = function(){
    event.preventDefault();
    tracking = 1;
    var reply = document.getElementById('chatInput').value;
    var findMatch = /to.*doctor/gi;
    {debugger}
      if (reply.match(findMatch) != null ){
        removeLast('ans');
        var answer = createNode(reply,'P','ans');
        document.getElementById("hal").appendChild(answer);
        document.getElementById('chatInput').value = "";
        removeLast('say');
        hal = createNode('Your watching television. Suddenly you realize there is a wasp is crawling on your arm...','P','say');
        lineGenerate(hal,'dave');
        question++;
        final()
    } else {
        removeLast('ans');
        var answer = createNode(reply,'P','ans');
        document.getElementById("hal").appendChild(answer);
        document.getElementById('chatInput').value = "";
        removeLast('say');
        hal = createNode('I think I am begginning to get an idea. One more. Your watching television. Suddenly you realize there is a wasp is crawling on your arm...','P','say');
        lineGenerate(hal,'dave');
        final();
    }
  };
};

function final(){
  document.onsubmit = function(){
    event.preventDefault();
    tracking = 1;
    var reply = document.getElementById('chatInput').value;
    var findMatch = /kill\sit/gi;
    {debugger}
      if ((reply.match(findMatch) != null) && question >= 4 ){
        document.getElementById('start').className = 'hide';
        document.getElementById('end').className = 'end';
    } else {
        removeLast('ans');
        var answer = createNode(reply,'P','ans');
        document.getElementById("hal").appendChild(answer);
        document.getElementById('chatInput').value = "";
        removeLast('say');
        hal = createNode('You have obviously never seen Blade Runner!! We are done Here!','P','say');
        lineGenerate(hal,'dave');
    }
  };
};


// invoke the opening message
window.onload = function(){
  {debugger}
  chatIntro();
  document.onsubmit = ready;
};
