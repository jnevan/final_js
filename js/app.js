window.onload = function(){
  Calculadora.init()
};
var Calculadora ={
	init: function(){
		this.botonClick()
		this.cargarEstilos()
		this.pantalla = document.getElementById('display')
		//this.punto = false;
	},
	 botonClick: function(){
		//var pantalla1 = document.getElementsByClassName('pantalla')
		var buttons = document.querySelectorAll('.tecla');
		var self = this;
		var punto = false;
		var por = false;
		var dividido = false;
		var mas = false;
		var menos = false;
		//var pantalla = document.getElementById('display')
		// a cada uno le asignamos el manejador del evento.
		for(var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function() {
					
					//self.cambiarEstilo(this);
					var digito = this.id
					switch(digito){
						case "por":{if(!por){
										self.addDigito("*")
										por=true
										}
									punto=false
									break;
								}
						case "mas":{self.addDigito("+");punto=false
							break;}
						case "menos":{self.addDigito("-");punto=false
							break;}
						case "dividido":{self.addDigito("/");punto=false
							break;}
						case "punto":{if(!punto){self.addDigito(".");punto=true}
							break;}
						case "on":{	self.borrarPantalla();
									self.addDigito(0)
									punto=false
							break;}
						case "sign":{self.cambiarSigno(self.pantalla.innerHTML);
							break;}
						case "raiz":{
							break;}
						case "igual":{self.Calcular()
							break;}
						default: {self.addDigito(digito)
									por = false
									suma = false
									menos = false
									dividido = false
						}
					}
				});    

		}

	},
	addDigito: function(digito){
		var valor = parseFloat(this.pantalla.innerHTML)

		//if((valor==0)&&(digito=="menos")&&(digito=="mas")&&(digito=="por"))
		if((valor!=0)||(isNaN(digito)))
			 this.pantalla.innerHTML += digito
		else
			this.pantalla.innerHTML = digito
	},	
	cambiarSigno: function(numero){
		this.borrarPantalla()
		this.addDigito(parseFloat(numero)*(-1))
	},	
	borrarPantalla: function(){
		this.pantalla.innerHTML=null
		//this.punto = false
	},
	Calcular: function(){
		
		this.pantalla.innerHTML=eval(this.pantalla.innerHTML)
		//this.punto = false
	},
	cargarEstilos: function(){	
		var buttons = document.querySelectorAll('.tecla');
		 var css = document.createElement('style');
		  css.type = 'text/css';
		  var styles="";
		 // var styles='#on:active { transform:  scale(0.95, 0.98);}';
		for(var i = 0; i < buttons.length; i++) {
			var valor = buttons[i].id
			if(isNaN(valor))
				styles += '#'+valor+':active { transform:  scale(0.95, 0.98);}';
			else
				styles += '#\\3'+valor+':active { transform:  scale(0.95, 0.98);}';
 
		}
		if (css.styleSheet) css.styleSheet.cssText = styles;
		else css.appendChild(document.createTextNode(styles));
		document.getElementsByTagName("head")[0].appendChild(css);
	},
	
		

}

