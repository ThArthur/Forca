var aleatório;
var palavra_atual;
var vida = 0;
var imagem;


function letra_a(){
    escolha_da_letra_jogador = 'a';
    verificar();
}
function letra_b(){
    escolha_da_letra_jogador = 'b';
    verificar();
}
function letra_c(){
    escolha_da_letra_jogador = 'c';
    verificar();
}
function letra_d(){
    escolha_da_letra_jogador = 'd';
    verificar();
}
function letra_e(){
    escolha_da_letra_jogador = 'e';
    verificar();
}
function letra_f(){
    escolha_da_letra_jogador = 'f';
    verificar();
}
function letra_g(){
    escolha_da_letra_jogador = 'g';
    verificar();
}
function letra_h(){
    escolha_da_letra_jogador = 'h';
    verificar();
}
function letra_i(){
    escolha_da_letra_jogador = 'i';
    verificar();
}
function letra_j(){
    escolha_da_letra_jogador = 'j';
    verificar();
}
function letra_k(){
    escolha_da_letra_jogador = 'k';
    verificar();
}
function letra_l(){
    escolha_da_letra_jogador = 'l';
    verificar();
}
function letra_m(){
    escolha_da_letra_jogador = 'm';
    verificar();
}
function letra_n(){
    escolha_da_letra_jogador = 'n';
    verificar();
}
function letra_o(){
    escolha_da_letra_jogador = 'o';
    verificar();
}
function letra_p(){
    escolha_da_letra_jogador = 'p';
    verificar();
}
function letra_q(){
    escolha_da_letra_jogador = 'q';
    verificar();
}
function letra_r(){
    escolha_da_letra_jogador = 'r';
    verificar();
}
function letra_s(){
    escolha_da_letra_jogador = 's';
    verificar();
}
function letra_t(){
    escolha_da_letra_jogador = 't';
    verificar();
}
function letra_u(){
    escolha_da_letra_jogador = 'u';
    verificar();
}
function letra_v(){
    escolha_da_letra_jogador = 'v';
    verificar();
}
function letra_w(){
    escolha_da_letra_jogador = 'w';
    verificar();
}
function letra_x(){
    escolha_da_letra_jogador = 'x';
    verificar();
}
function letra_y(){
    escolha_da_letra_jogador = 'y';
    verificar();
}
function letra_z(){
    escolha_da_letra_jogador = 'z';
    verificar();
}

function verificar(){
    if(aleatório == 1){
        if(escolha_da_letra_jogador == 'c'){
            document.getElementById('l1').src = "imagens/c.jpg"

        }else if(escolha_da_letra_jogador == 'o'){
            document.getElementById('l2').src = "imagens/o.jpg"
            document.getElementById('l9').src = "imagens/o.jpg"

        }else  if(escolha_da_letra_jogador == 'm'){
            document.getElementById('l3').src = "imagens/m.jpg"

        }else if(escolha_da_letra_jogador == 'p'){
            document.getElementById('l4').src = "imagens/p.jpg"

        }else if(escolha_da_letra_jogador == 'u'){
            document.getElementById('l5').src = "imagens/u.jpg"

        }else if(escolha_da_letra_jogador == 't'){
            document.getElementById('l6').src = "imagens/t.jpg"

        }else if(escolha_da_letra_jogador == 'a'){
            document.getElementById('l7').src = "imagens/a.jpg"

        }else if(escolha_da_letra_jogador == 'd'){
            document.getElementById('l8').src = "imagens/d.jpg"

        }else if(escolha_da_letra_jogador == 'r'){
            document.getElementById('l10').src = "imagens/r.jpg"

        }else if(escolha_da_letra_jogador != 'c' && 
            escolha_da_letra_jogador != 'o' && 
            escolha_da_letra_jogador != 'm' && 
            escolha_da_letra_jogador != 'p' && 
            escolha_da_letra_jogador != 'u' && 
            escolha_da_letra_jogador != 't' && 
            escolha_da_letra_jogador != 'a' && 
            escolha_da_letra_jogador != 'd' && 
            escolha_da_letra_jogador != 'r'){
                
                vida = vida + 1;

                if(vida == 1){
                document.getElementById('imagem-forca').src = "imagens/forca-cabeca.jpg";
                document.getElementById('lu1').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";

                }else if(vida == 2){
                    document.getElementById('imagem-forca').src = "imagens/forca-tronco.jpg";
                    document.getElementById('lu2').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
    
                }else if(vida == 3){
                    document.getElementById('imagem-forca').src = "imagens/forca-braco.jpg";
                    document.getElementById('lu3').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
        
                }else if(vida == 4){
                    document.getElementById('imagem-forca').src = "imagens/forca-perna.jpg";
                    document.getElementById('lu4').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";

                }else if(vida == 5){
                    document.getElementById('imagem-forca').src = "imagens/forca-final.jpg";
                    document.getElementById('lu5').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
    
                 }else if(vida == 6){
                    alert("Voce Morreu!");
                    começargame();
                }
            }

        }else if(aleatório == 2){
            if(escolha_da_letra_jogador == 'p'){
                document.getElementById('l1').src = "imagens/p.jpg"
    
            }else if(escolha_da_letra_jogador == 'r'){
                document.getElementById('l2').src = "imagens/r.jpg"
                document.getElementById('l9').src = "imagens/r.jpg"
    
            }else  if(escolha_da_letra_jogador == 'o'){
                document.getElementById('l3').src = "imagens/o.jpg"
    
            }else if(escolha_da_letra_jogador == 'g'){
                document.getElementById('l4').src = "imagens/g.jpg"
    
            }else if(escolha_da_letra_jogador == 'r'){
                document.getElementById('l5').src = "imagens/r.jpg"
    
            }else if(escolha_da_letra_jogador == 'a'){
                document.getElementById('l6').src = "imagens/a.jpg"
                document.getElementById('l8').src = "imagens/a.jpg"
    
            }else if(escolha_da_letra_jogador == 'm'){
                document.getElementById('l7').src = "imagens/m.jpg"
    
            }else if(escolha_da_letra_jogador != 'p' && 
                     escolha_da_letra_jogador != 'r' && 
                    escolha_da_letra_jogador != 'o' && 
                    escolha_da_letra_jogador != 'g' && 
                    escolha_da_letra_jogador != 'a' && 
                    escolha_da_letra_jogador != 'm' && 
                    escolha_da_letra_jogador != 'r'){
                
                vida = vida + 1;
                if(vida == 1){
                document.getElementById('imagem-forca').src = "imagens/forca-cabeca.jpg";
                document.getElementById('lu1').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
                }else if(vida == 2){
                    document.getElementById('imagem-forca').src = "imagens/forca-tronco.jpg";
                    document.getElementById('lu2').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
    
                }else if(vida == 3){
                    document.getElementById('imagem-forca').src = "imagens/forca-braco.jpg";
                    document.getElementById('lu3').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
        
                }else if(vida == 4){
                    document.getElementById('imagem-forca').src = "imagens/forca-perna.jpg";
                    document.getElementById('lu4').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
                }else if(vida == 5){
                    document.getElementById('imagem-forca').src = "imagens/forca-final.jpg";
                    document.getElementById('lu5').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
    
                 }else if(vida == 6){
                    alert("Voce Morreu!");
                    começargame();
                }
            }
        }
        else if(aleatório == 3){
            if(escolha_da_letra_jogador == 'r'){
                document.getElementById('l1').src = "imagens/r.jpg"
    
            }else if(escolha_da_letra_jogador == 'a'){
                document.getElementById('l2').src = "imagens/a.jpg"
    
            }else  if(escolha_da_letra_jogador == 't'){
                document.getElementById('l3').src = "imagens/t.jpg"
    
            }else if(escolha_da_letra_jogador == 'o'){
                document.getElementById('l4').src = "imagens/o.jpg"
    
            }else if(escolha_da_letra_jogador != 'r' && 
                     escolha_da_letra_jogador != 'a' && 
                     escolha_da_letra_jogador != 't' && 
                     escolha_da_letra_jogador != 'o'){
       
       vida = vida + 1;
       if(vida == 1){
       document.getElementById('imagem-forca').src = "imagens/forca-cabeca.jpg";
       document.getElementById('lu1').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
       }else if(vida == 2){
           document.getElementById('imagem-forca').src = "imagens/forca-tronco.jpg";
           document.getElementById('lu2').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
       }else if(vida == 3){
           document.getElementById('imagem-forca').src = "imagens/forca-braco.jpg";
           document.getElementById('lu3').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
       }else if(vida == 4){
           document.getElementById('imagem-forca').src = "imagens/forca-perna.jpg";
           document.getElementById('lu4').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
       }else if(vida == 5){
           document.getElementById('imagem-forca').src = "imagens/forca-final.jpg";
           document.getElementById('lu5').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
        }else if(vida == 6){
           alert("Voce Morreu!");
           começargame();
             }
        }
    }else if(aleatório == 4){
        if(escolha_da_letra_jogador == 'h'){
            document.getElementById('l1').src = "imagens/h.jpg"

        }else if(escolha_da_letra_jogador == 't'){
            document.getElementById('l2').src = "imagens/t.jpg"

        }else  if(escolha_da_letra_jogador == 'm'){
            document.getElementById('l3').src = "imagens/m.jpg"

        }else if(escolha_da_letra_jogador == 'l'){
            document.getElementById('l4').src = "imagens/l.jpg"

        }else if(escolha_da_letra_jogador != 'h' && 
                 escolha_da_letra_jogador != 't' && 
                 escolha_da_letra_jogador != 'm' && 
                 escolha_da_letra_jogador != 'l'){
   
   vida = vida + 1;
   if(vida == 1){
   document.getElementById('imagem-forca').src = "imagens/forca-cabeca.jpg";
   document.getElementById('lu1').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
   }else if(vida == 2){
       document.getElementById('imagem-forca').src = "imagens/forca-tronco.jpg";
       document.getElementById('lu2').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
   }else if(vida == 3){
       document.getElementById('imagem-forca').src = "imagens/forca-braco.jpg";
       document.getElementById('lu3').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
   }else if(vida == 4){
       document.getElementById('imagem-forca').src = "imagens/forca-perna.jpg";
       document.getElementById('lu4').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
   }else if(vida == 5){
       document.getElementById('imagem-forca').src = "imagens/forca-final.jpg";
       document.getElementById('lu5').src = "imagens/"+ escolha_da_letra_jogador + ".jpg";
    }else if(vida == 6){
       alert("Voce Morreu!");
       começargame();
         }
    }
}
           
}
 
function começargame(){
    document.getElementById('l1').src = "imagens/branco.jpg";
    document.getElementById('l2').src = "imagens/branco.jpg";
    document.getElementById('l3').src = "imagens/branco.jpg";
    document.getElementById('l4').src = "imagens/branco.jpg";
    document.getElementById('l5').src = "imagens/branco.jpg";
    document.getElementById('l6').src = "imagens/branco.jpg";
    document.getElementById('l7').src = "imagens/branco.jpg";
    document.getElementById('l8').src = "imagens/branco.jpg";
    document.getElementById('l9').src = "imagens/branco.jpg";
    document.getElementById('l10').src = "imagens/branco.jpg";
    document.getElementById('l11').src = "imagens/branco.jpg";
    document.getElementById('l12').src = "imagens/branco.jpg";
    document.getElementById('l13').src = "imagens/branco.jpg";
    document.getElementById('lu1').src = "imagens/branco.jpg";
    document.getElementById('lu2').src = "imagens/branco.jpg";
    document.getElementById('lu3').src = "imagens/branco.jpg";
    document.getElementById('lu4').src = "imagens/branco.jpg";
    document.getElementById('lu5').src = "imagens/branco.jpg";
    document.getElementById('imagem-forca').src= "imagens/forca-inicial.jpg";
    vida = 0;
    aleatório = Math.floor((Math.random() * 4) + 1);
if(aleatório == 1){
    palavra_atual = 'Computador';
    document.getElementById('l1').src = "imagens/traco.jpg";
    document.getElementById('l2').src = "imagens/traco.jpg";
    document.getElementById('l3').src = "imagens/traco.jpg";
    document.getElementById('l4').src = "imagens/traco.jpg";
    document.getElementById('l5').src = "imagens/traco.jpg";
    document.getElementById('l6').src = "imagens/traco.jpg";
    document.getElementById('l7').src = "imagens/traco.jpg";
    document.getElementById('l8').src = "imagens/traco.jpg";
    document.getElementById('l9').src = "imagens/traco.jpg";
    document.getElementById('l10').src = "imagens/traco.jpg";
    document.getElementById('l11').src = "imagens/branco.jpg";
    document.getElementById('l12').src = "imagens/branco.jpg";
    document.getElementById('l13').src = "imagens/branco.jpg";
}
else if(aleatório == 2){
    palavra_atual = 'Programar';
    document.getElementById('l1').src = "imagens/traco.jpg";
    document.getElementById('l2').src = "imagens/traco.jpg";
    document.getElementById('l3').src = "imagens/traco.jpg";
    document.getElementById('l4').src = "imagens/traco.jpg";
    document.getElementById('l5').src = "imagens/traco.jpg";
    document.getElementById('l6').src = "imagens/traco.jpg";
    document.getElementById('l7').src = "imagens/traco.jpg";
    document.getElementById('l8').src = "imagens/traco.jpg";
    document.getElementById('l9').src = "imagens/traco.jpg";
    document.getElementById('l10').src = "imagens/branco.jpg";
    document.getElementById('l11').src = "imagens/branco.jpg";
    document.getElementById('l12').src = "imagens/branco.jpg";
    document.getElementById('l13').src = "imagens/branco.jpg";
}
else if(aleatório == 3){
    palavra_atual = 'Rato';
    document.getElementById('l1').src = "imagens/traco.jpg";
    document.getElementById('l2').src = "imagens/traco.jpg";
    document.getElementById('l3').src = "imagens/traco.jpg";
    document.getElementById('l4').src = "imagens/traco.jpg";
    document.getElementById('l5').src = "imagens/branco.jpg";
    document.getElementById('l6').src = "imagens/branco.jpg";
    document.getElementById('l7').src = "imagens/branco.jpg";
    document.getElementById('l8').src = "imagens/branco.jpg";
    document.getElementById('l9').src = "imagens/branco.jpg";
    document.getElementById('l10').src = "imagens/branco.jpg";
    document.getElementById('l11').src = "imagens/branco.jpg";
    document.getElementById('l12').src = "imagens/branco.jpg";
    document.getElementById('l13').src = "imagens/branco.jpg";
}
else if(aleatório == 4){
    palavra_atual = 'HTML';
    document.getElementById('l1').src = "imagens/traco.jpg";
    document.getElementById('l2').src = "imagens/traco.jpg";
    document.getElementById('l3').src = "imagens/traco.jpg";
    document.getElementById('l4').src = "imagens/traco.jpg";
    document.getElementById('l5').src = "imagens/branco.jpg";
    document.getElementById('l6').src = "imagens/branco.jpg";
    document.getElementById('l7').src = "imagens/branco.jpg";
    document.getElementById('l8').src = "imagens/branco.jpg";
    document.getElementById('l9').src = "imagens/branco.jpg";
    document.getElementById('l10').src = "imagens/branco.jpg";
    document.getElementById('l11').src = "imagens/branco.jpg";
    document.getElementById('l12').src = "imagens/branco.jpg";
    document.getElementById('l13').src = "imagens/branco.jpg";
}
}