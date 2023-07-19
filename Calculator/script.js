window.addEventListener('DOMContentLoaded' , init);

//all keys
const opts = [ '/','*','-', '+', 
 '7','8','9', '', '4','5','6', '','1','2','3','','0','.',];

 // special function keys
const spec = ['*', '/', '+', '-']; 


function init(){ 
    document.title = "JavaScript Calculator";
    console.log('ready');   

    let dec = false;
    let eva = false;

    const container = document.createElement('div');
        container.classList.add('container');
        container.style.maxWidth = '400px';
        container.style.margin = '15px';
        container.style.padding = '10px';
        container.style.background = '#00C8FF'
        container.style.border= '#FF8200 6px ridge'
        container.style.borderRadius= '15px'
    document.body.appendChild(container);

    const output = document.createElement('input');
        output.setAttribute('type', 'text');
        output.classList.add('output');
        output.style.width = '98%';
        output.style.lineHeigh = '40px';
        output.style.fontSize = '50px';
        output.style.textAlign = 'right';
        output.style.border= '#0073FF 5px groove';
        output.style.borderRadius= '10px';
    container.appendChild(output);

    const main = document.createElement('div');
        main.classList.add('main');
        main.style.width = '100%';
    container.appendChild(main);  
    
    opts.forEach(function (val) {
       // console.log(val);
        btnMaker(val,addOutput);
    })

    
    btnMaker('=', evalOutput);
    btnMaker('CE', clrOutput);

    function cOutput(v) {
        output.style.border = v + '4px solid';
        output.style.color = v;
    }
    
    function evalOutput() {
        cOutput('black');
        console.log('=');
        if(output.value === ""){
            cOutput('red');
        } 
        else if(eva){
            cOutput('red');
        }
        else{
            output.value = eval(output.value);
        }
        dec = output.value.includes('.');
    }
    
    function clrOutput() {
        cOutput('black');
        
        output.value = '';
        dec = output.value.includes('.');
    }

    
    function btnMaker(txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.style.width= '23%';
        btn.style.lineHeight= '50px';
        btn.style.fontSize= '28px';
        btn.style.fontWeight= 'bold';
        btn.style.margin= '1%';
        btn.style.color= 'black';
        btn.style.border= 'black 3px outset';
        btn.style.borderRadius= '15px';
        btn.style.background= '#FFD200'
        
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);

        main.appendChild(btn);
    }


    function addOutput(e) {
        console.log(dec);
       // console.log(e.target.val);
       cOutput('black');

        let char = e.target.val;

        if (char == '.') {
            if(dec){
                char = '';
                cOutput('red');
            
            } else {
                dec = true;  
            } 
        }

        eva= spec.includes(char);
        if (eva) {
            dec = false;
        }

        output.value += char;
    }
    

}