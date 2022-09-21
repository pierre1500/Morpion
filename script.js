const x = 'X';
const o = 'O';
let case1 = document.getElementById('case-1');
let case2 = document.getElementById('case-2');
let case3 = document.getElementById('case-3');
let case4 = document.getElementById('case-4');
let case5 = document.getElementById('case-5');
let case6 = document.getElementById('case-6');
let case7 = document.getElementById('case-7');
let case8 = document.getElementById('case-8');
let case9 = document.getElementById('case-9');
let compteur = 0
let joueur = document.getElementById('joueur')
let victoire = document.getElementById('victoire')
let finPartie = false
let resultatNul = document.getElementById('resultatNul')
let rejouer = document.getElementById('rejouer')
case1.addEventListener('click', choix);
case2.addEventListener('click', choix);
case3.addEventListener('click', choix);
case4.addEventListener('click', choix);
case5.addEventListener('click', choix);
case6.addEventListener('click', choix);
case7.addEventListener('click', choix);
case8.addEventListener('click', choix);
case9.addEventListener('click', choix);
rejouer.addEventListener('click', rejouerPartie);
choix()
affJoueur()
victoirejoueur()
partieNul()
function compte() 
{
       compteur++;
}
//Fonction Affichage de X ET O
function choix(e) 
{
       if (compteur % 2 == 0)
       {
              if (e.target.textContent != x && e.target.textContent != o && finPartie == false )
              {
              e.target.textContent = x;
              compte()
              affJoueur()
              victoirejoueur(x);
              if (finPartie) {
                     victoire.textContent = 'Le joueur 1 a gagné';
              }
              partieNul()
              }
       }
       else
       {
              if (e.target.textContent != x && e.target.textContent != o && finPartie == false )
              {
              e.target.textContent = o;
              compte()
              affJoueur()
              victoirejoueur(o);
              if (finPartie) {
                     victoire.textContent = 'Le joueur 2 a gagné';
              }
              partieNul()
              }
       }
}
function affJoueur()
{
       if (compteur % 2 == 0)
       {
              joueur.textContent = 'Joueur 1';
       }
       else 
       {
              joueur.textContent = 'Joueur 2';
       }
}
function victoirejoueur(player)
{
       //joueur 1
       if (case1.textContent == player && case2.textContent == player && case3.textContent == player)
       {
              finPartie = true;
       }
       else if (case4.textContent == player && case5.textContent == player && case6.textContent == player)
       {
              finPartie = true;
       }
       else if (case7.textContent == player && case8.textContent == player && case9.textContent == player)
       {
              finPartie = true;
       }
       else if (case1.textContent == player && case4.textContent == player && case7.textContent == player)
       {
              finPartie = true;
       }
       else if (case2.textContent == player && case5.textContent == player && case8.textContent == player)
       {
              finPartie = true;
       }
       else if (case3.textContent == player && case6.textContent == player && case9.textContent == player)
       {
              finPartie = true;
       }
       else if (case1.textContent == player && case5.textContent == player && case9.textContent == player)
       {
              finPartie = true;
       }
       else if (case3.textContent == player && case5.textContent == player && case7.textContent == player)
       {
              finPartie = true;
       }
}

function partieNul()
{
       if (compteur == 9)
      {
              resultatNul.textContent = 'Match NUL';
              finPartie = true;
      }
}
function rejouerPartie()
{
       window.location.reload();
}


