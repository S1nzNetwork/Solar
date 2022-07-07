document.querySelector('#initiate').addEventListener('click', () => {
  initiate()
})

document.querySelector('#url-input').addEventListener('keyup', (e) => {
  if (e.keyCode==13 || e.key == "Enter") {
    initiate()
  }
})

const initiate = (url) => {
  var url = document.getElementById("url-input").value;
  if (!url == "") {
    var value = document.getElementById('url-input').value
    location.href = "/KaNCER/gateway?url=" + value
  } else {
    urlerror()
  }
}

function urlerror() {
  document.getElementById("error-disc").style.display = "inherit";
}


























function minecraft(){
   var urlObj = new window.URL(window.location.href);
    var url = "https://solar-confiig.n2john1.repl.co/games/mine.html";

    if (url) {
        var win;


                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = url;
                win.document.body.appendChild(iframe);
            }
}




function roblox(){
   var urlObj = new window.URL(window.location.href);
    var url = "https://solar-confiig.n2john1.repl.co/games/roblox.html";

    if (url) {
        var win;


                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = url;
                win.document.body.appendChild(iframe);
            }
}





function krunker(){
   var urlObj = new window.URL(window.location.href);
    var url = "https://solar-confiig.n2john1.repl.co/games/krunker.html";

    if (url) {
        var win;


                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = url;
                win.document.body.appendChild(iframe);
            }
}




function TFE(){
   var urlObj = new window.URL(window.location.href);
    var url = "https://solar-confiig.n2john1.repl.co/games/2048.html";

    if (url) {
        var win;


                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = url;
                win.document.body.appendChild(iframe);
            }
}




function retro(){
   var urlObj = new window.URL(window.location.href);
    var url = "https://solar-confiig.n2john1.repl.co/games/retro.html";

    if (url) {
        var win;


                win = window.open();
                win.document.body.style.margin = '0';
                win.document.body.style.height = '100vh';
                var iframe = win.document.createElement('iframe');
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.margin = '0';
                iframe.src = url;
                win.document.body.appendChild(iframe);
            }
}
