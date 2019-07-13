var x = 350;
        var y = 60;
        var car1_x = 255;
        var car2_x = 255;
        var check_car1 = 0;
        var check_car2 = 0;
        var coin_array = [1, 1, 1, 1, 1];
        var counter = 0;
        var pontuacao = 0;
        var check_moeda = false;
        var audio = document.getElementById("audio");


           
        /*Posicionamento dos carros
         *
         * car1_x = Posição do primeiro carro 1
         * car1_x - 200 = Posição do segundo carro 1
         * car1_x - 300 = Posição do terceiro carro 1
         * car1_x - 400 = Posição do quarto carro 1
         * car1_x - 600 = Posição do quinto carro 1
         * car1_x - 700 = Posição do sexto carro 1
         * car1_x - 900 = Posição do sétimo carro 1
         *
         * A posição dos carros é baseada no primeiro carro, logo:
         *    car1_x - 200 = Posição do carro 1 - 200px em left ou
         *    quando o carro 1 tiver na posição 200px (left), aparecerá o segundo
         *    carro no limite left da tela.
         *    car1_x - 300 = Posição do carro 1 - 300 ou Posição do carro 2 - 100, *    ou seja, quando o carro 2 tiver na posição 100px (left), aparecerá o
         *    segundo carro no limite left da tela.
         */
        
        function teste(){  //Teste de caso para batida nos carros, coleta e depósito de moedas
           if((x < (car1_x+25) & x > (car1_x - 50) & y > 110 & y < 171) | (x < ((car1_x - 200)+25) & x > ((car1_x - 200) - 50) & y > 110 & y < 171) | (x < ((car1_x - 300)+25) & x > ((car1_x - 300) - 50) & y > 110 & y < 171) | (x < ((car1_x - 400)+25) & x > ((car1_x - 400) - 50) & y > 110 & y < 171) | (x < ((car1_x - 600)+25) & x > ((car1_x - 600) - 50) & y > 110 & y < 171) | (x < ((car1_x - 700)+25) & x > ((car1_x - 700) - 50) & y > 110 & y < 171) | (x < ((car1_x - 900)+25) & x > ((car1_x - 900) - 50) & y > 110 & y < 171)){
    		  document.getElementById("barata").style.display = "none";
    		  document.getElementById("baratamoeda").style.display = "none";
    		  document.getElementById("endgame").style.display = "block";
    		  document.getElementById("baratamorta").style.display = "block";
    		  document.getElementById("gameover").style.display = "block";
    		  document.getElementById("gamewin").style.display = "none";
    		  document.getElementById("baratamoedawin").style.display = "none";
    		  document.getElementById("next").style.display = "none";
    		  document.getElementById("a").style.display = "none";
    		  document.getElementById("s").style.display = "none";
    		  document.getElementById("w").style.display = "none";
    		  document.getElementById("d").style.display = "none";
    		  document.getElementById("a1").style.display = "block";
    		  document.getElementById("s1").style.display = "block";
    		  document.getElementById("w1").style.display = "block";
    		  document.getElementById("d1").style.display = "block";
    	    }

    	    if((x < (car2_x+20) & x > (car2_x - 30) & y > 300 & y < 350) | (x < ((car2_x - 200)+20) & x > ((car2_x - 200) - 30) & y > 300 & y < 350) | (x < ((car2_x - 300)+20) & x > ((car2_x - 300) - 30) & y > 300 & y < 350) | (x < ((car2_x - 400)+20) & x > ((car2_x - 400) - 30) & y > 300 & y < 350) | (x < ((car2_x - 600)+20) & x > ((car2_x - 600) - 30) & y > 300 & y < 350) | (x < ((car2_x - 700)+20) & x > ((car2_x - 700) - 30) & y > 300 & y < 350) | (x < ((car2_x - 900)+20) & x > ((car2_x - 900) - 30) & y > 300 & y < 350)){

            document.getElementById("barata").style.display = "none";
            document.getElementById("baratamoeda").style.display = "none";
            document.getElementById("endgame").style.display = "block";
    		    document.getElementById("baratamorta").style.display = "block";
    		    document.getElementById("gameover").style.display = "block";
    		    document.getElementById("gamewin").style.display = "none";
    		    document.getElementById("baratamoedawin").style.display = "none";
    		    document.getElementById("next").style.display = "none";
    		    document.getElementById("a").style.display = "none";
    		    document.getElementById("s").style.display = "none";
    		    document.getElementById("w").style.display = "none";
    		    document.getElementById("d").style.display = "none";
    		    document.getElementById("a1").style.display = "block";
    		    document.getElementById("s1").style.display = "block";
    		    document.getElementById("w1").style.display = "block";
    		    document.getElementById("d1").style.display = "block";
    		    pauseAudio();
    	    }
             
            //Coletando moedas
             
    	    if((y > 370 & y < 450) & (x > 309 & x < 370) & check_moeda == false & coin_array[0] == 1){
    	     document.getElementById("coin").style.display = "none";
    	     document.getElementById("barata").style.display = "none";
    	     document.getElementById("baratamoeda").style.display = "block";
    	     check_moeda = true;
    	     coin_array[0] = 0;
            }

            if((y > 370 & y < 455) & (x > 250 & x < 310) & check_moeda == false & coin_array[4] == 1){
             document.getElementById("coin5").style.display = "none";
             document.getElementById("barata").style.display = "none";
             document.getElementById("baratamoeda").style.display = "block";
             check_moeda = true;
             coin_array[4] = 0;
            }

            if((y > 370 & y < 455) & (x > 440 & x < 500) & check_moeda == false & coin_array[3] == 1){
             document.getElementById("coin4").style.display = "none";
             document.getElementById("baratamoeda").style.display = "block";
             check_moeda = true;
             coin_array[3] = 0;
            }

            if((y > 370 & y < 455) & (x > 490 & x < 550) & check_moeda == false & coin_array[2] == 1){
             document.getElementById("coin3").style.display = "none";
             document.getElementById("baratamoeda").style.display = "block";
             check_moeda = true;
             coin_array[2] = 0;
            }

            if((y > 370 & y < 455) & (x > 575 & x < 635) & check_moeda == false & coin_array[1] == 1){
             document.getElementById("coin2").style.display = "none";
             document.getElementById("baratamoeda").style.display = "block";
             check_moeda = true;
             coin_array[1] = 0;
            }

            //Depositando as moedas no banco

            if((y > 30 & y < 150) & (x > 500 & x < 600) & check_moeda == true){
             document.getElementById("barata").style.display = "block";
             document.getElementById("baratamoeda").style.display = "none";
             check_moeda = false;
             pontuacao = pontuacao + 10;
             document.getElementById("valor").innerHTML = pontuacao;
            }
                
                
             if(counter == 50){
                document.getElementById("endgame").style.display = "block";
    		        document.getElementById("baratamoedawin").style.display = "block";
    		        document.getElementById("gamewin").style.display = "block";
    		        document.getElementById("baratamorta").style.display = "none";
    		        document.getElementById("gameover").style.display = "none";
              }


            

        }
        
        setInterval(teste, 500);
        setInterval(mov_car1, 500);
        setInterval(mov_car2, 500);

        function pauseAudio(){
        	audio.pause();
        }



    	function esquerda(){
    		if(x > 230){
                document.getElementById("barata").style.left = x+"px";
                document.getElementById("baratamoeda").style.left = x+"px";
    		    x = x - 10;
    		}
    	}

    	function direita(){
    		if(x < 690){
    			document.getElementById("barata").style.left = x+"px";
    			document.getElementById("baratamoeda").style.left = x+"px";
    		    x = x + 10;   
    		}

    	}

    	function cima(){
            if(y > 50){
                document.getElementById("barata").style.top = y+"px";
                document.getElementById("baratamoeda").style.top = y+"px";
    		    y = y - 10;
    		}	
    	}

    	function baixo(){
    		if(y < 460){
                document.getElementById("barata").style.top = y+"px";
                document.getElementById("baratamoeda").style.top = y+"px";
    		    y = y + 10;
    		}

    	}

    	function mov_car1(){
    		car1_x = car1_x + 10;
    		document.getElementById("car1").style.display = "block";
    		if(car1_x < 690){
               document.getElementById("car1").style.left = car1_x+"px";
               //car1_x = car1_x + 10;
               if(car1_x == 455){
               	  check_car1++;
               }
    		} else {
               document.getElementById("car1").style.display = "none";
    		}

    		if(check_car1 >= 1){
    			document.getElementById("car1a").style.display = "block";
    			document.getElementById("car1a").style.left = (car1_x - 200)+"px";
    			if((car1_x - 200) == 355){
    				check_car1++;
    			}
    			if((car1_x - 200) > 690){
    				document.getElementById("car1a").style.display = "none";
    			}
    		}

    		if(check_car1 >= 2){
    			document.getElementById("car1b").style.display = "block";
    			document.getElementById("car1b").style.left = (car1_x - 300)+"px";

    			if((car1_x - 300) == 355){
    				check_car1++;
    			}
    			if((car1_x - 300) > 690){
    				document.getElementById("car1b").style.display = "none";
    			}
    		}

    		if(check_car1 >= 3){
    			document.getElementById("car1c").style.display = "block";
    			document.getElementById("car1c").style.left = (car1_x - 400)+"px";

    			if((car1_x - 400) == 455){
    				check_car1++;
    			}
    			if((car1_x - 400) > 690){
    				document.getElementById("car1c").style.display = "none";
    			}
    		}

    		if(check_car1 >= 4){
    			document.getElementById("car1d").style.display = "block";
    			document.getElementById("car1d").style.left = (car1_x - 600)+"px";

    			if((car1_x - 600) == 355){
    				check_car1++;
    			}
    			if((car1_x - 600) > 690){
    				document.getElementById("car1d").style.display = "none";
    			}
    		}

    		if(check_car1 >= 5){
    			document.getElementById("car1e").style.display = "block";
    			document.getElementById("car1e").style.left = (car1_x - 700)+"px";

    			if((car1_x - 700) == 455){
    				check_car1++;
    			}
    			if((car1_x - 700) > 690){
    				document.getElementById("car1e").style.display = "none";
    			}
    		}

    		if(check_car1 >= 6){
    			document.getElementById("car1f").style.display = "block";
    			document.getElementById("car1f").style.left = (car1_x - 900)+"px";

    			if((car1_x - 900) > 690){
    				document.getElementById("car1f").style.display = "none";
    				check_car1++;
    			}
    		}

    		if(check_car1 == 7){
    			check_car1 = 0;
    			car1_x = 255;
    		}
    	}

    	function mov_car2(){
    		car2_x = car2_x + 20;
    		document.getElementById("car2").style.display = "block";
            if(car2_x < 690){
               document.getElementById("car2").style.left = car2_x+"px";
                if(car2_x == 455){
               	  check_car2++;
                }
    		} else {
               document.getElementById("car2").style.display = "none";
    		}

    		if(check_car2 >= 1){
    			document.getElementById("car2a").style.display = "block";
    			document.getElementById("car2a").style.left = (car2_x - 200)+"px";
    			if((car2_x - 200) == 455){
    				check_car2++;
    			}
    			if((car2_x - 200) > 690){
    				document.getElementById("car2a").style.display = "none";
    			}
    		}

    		if(check_car2 >= 2){
    			document.getElementById("car2b").style.display = "block";
    			document.getElementById("car2b").style.left = (car2_x - 400)+"px";

    			if((car2_x - 400) == 455){
    				check_car2++;
    			}
    			if((car2_x - 400) > 690){
    				document.getElementById("car2b").style.display = "none";
    			}
    		}

    		if(check_car2 >= 3){
    			document.getElementById("car2c").style.display = "block";
    			document.getElementById("car2c").style.left = (car2_x - 600)+"px";

    			if((car2_x - 600) == 355){
    				check_car2++;
    			}
    			if((car2_x - 600) > 690){
    				document.getElementById("car2c").style.display = "none";
    			}
    		}

    		if(check_car2 >= 4){
    			document.getElementById("car2d").style.display = "block";
    			document.getElementById("car2d").style.left = (car2_x - 700)+"px";

    			if((car2_x - 700) == 455){
    				check_car2++;
    			}
    			if((car2_x - 700) > 690){
    				document.getElementById("car2d").style.display = "none";
    			}
    		}

    		if(check_car2 >= 5){
    			document.getElementById("car2e").style.display = "block";
    			document.getElementById("car2e").style.left = (car2_x - 900)+"px";

    			if((car2_x - 900) == 355){
    				check_car2++;
    			}
    			if((car2_x - 900) > 690){
    				document.getElementById("car2e").style.display = "none";
    			}
    		}

    		if(check_car2 >= 6){
    			document.getElementById("car2f").style.display = "block";
    			document.getElementById("car2f").style.left = (car2_x - 1000)+"px";

    			if((car2_x - 1000) > 690){
    				document.getElementById("car2f").style.display = "none";
    				check_car2++;
    			}
    		}

    		if(check_car2 == 7){
    			check_car2 = 0;
    			car2_x = 255;
    		}
    	}
