const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")
const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','@','-','_','.','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','í','á','é','ú','ó']
const cript = ['F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','@','-','_','.','1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','í','á','é','ú','ó','A','B','C','D','E']


btn.addEventListener('click',()=>{
    let texti = document.getElementById("texto").value;
    const textito = texti;
    let temp = '';
    let encript = '';
    for(let i = 0; i<textito.length;i++){
        temp = textito.at(i);
        for(let j = 0; j<abc.length;j++){
            if(temp===abc[j]){
                encript+=cript[j];
                break;
            }
            if(temp === " "){
                encript+=" ";
            }
        }
    }

    document.getElementById("texto1").innerHTML = encript;
})


btn2.addEventListener('click',()=>{
    const textito = document.getElementById("texto2").value;
    let temp = '';
    let encript = '';
    for(let i = 0; i<textito.length;i++){
        temp = textito.at(i);
        for(let j = 0; j<cript.length;j++){
            if(temp===cript[j]){
                encript+=abc[j];
                break;
            }
            if(temp === " "){
                encript+=" ";
            }
        }
    }

    document.getElementById("texto1").innerHTML = encript;
})