window.onload = function(){
  Calculadora.init()
};
var Calculadora ={
	init: function(){
		this.botonClick()
		this.cargarEstilos()
		this.pantalla = document.getElementById('display')
		this.acumulador = 0;
		this.ultimoValor = null;
		this.ultimoOperador = null;
		this.secuenciaActivo = false;
	},
	 botonClick: function(){
		//var pantalla1 = document.getElementsByClassName('pantalla')
		var buttons = document.querySelectorAll('.tecla');
		var self = this;
		var punto = por = dividido = mas = menos = false;
		
		// a cada uno le asignamos el manejador del evento.
		for(var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function() {
					
					//self.cambiarEstilo(this);
					var digito = this.id
					switch(digito){
						case "por":{
									if(!por){
										self.addDigito("*")
										por=true
										}
									punto=false
									break;
								}
						case "mas":{
									if(!mas){
										self.addDigito("+")
										mas=true
										}
						
									punto=false
									break;
							}
						case "menos":{
									 if(!menos){
										self.addDigito("-")
										menos=true
									 }
									punto=false
									break
							}
						case "dividido":{if(!dividido){
											self.addDigito("/")
											dividido=true
										}
										punto=false
										break
							}
						case "punto":{if(!punto){self.addDigito(".");punto=true}
							break;}
						case "on":{	self.borrarPantalla();
									self.addDigito(0)
									punto = self.secuenciaActivo = false;
									self.acumulador = 0;
							break;}
						case "sign":{
									self.cambiarSigno();
									break;
									}
						case "raiz":{
							break;}
						case "igual":{
									
									self.Calcular()
									self.secuenciaActivo = true
									break;
									}
						default: {self.addDigito(digito)
									por = mas = menos = dividido = false
						}
					}
				});    

		}

	},
	addDigito: function(digito){

	// para mostrar en pantalla y acumulador
		if(isNaN(digito)){
			this.acumulador += digito
			if(digito==".")
				this.pantalla.innerHTML += digito
			else{ 
			    this.borrarPantalla()
				this.ultimoOperador = digito
			}
		}
		else if((this.acumulador!=0)||(this.acumulador.toString().substr(-1)==".")){
			if (this.pantalla.innerHTML.length <=7){
				this.pantalla.innerHTML += digito
				this.acumulador += digito
				}
			}
			 else{
				this.pantalla.innerHTML = digito
				this.acumulador = digito
			 }
		this.ultimoValor = this.pantalla.innerHTML
	},	
	
	cambiarSigno: function(){
		var numero = this.pantalla.innerHTML
		this.acumulador = this.acumulador.substr(0,(this.acumulador.length-numero.length))
		this.borrarPantalla()
		this.addDigito(parseFloat(numero)*(-1))
	},	
	
	borrarPantalla: function(){
		this.pantalla.innerHTML=null
	},

	Calcular: function(){
		var numero = this.pantalla.innerHTML
		
		if (this.secuenciaActivo)
			this.acumulador = this.actualizaResultado()
		
		var resultado = eval(this.acumulador)
		if(resultado.toString().length>=8)
			this.pantalla.innerHTML=resultado.toString().substr(0,8);
		else this.pantalla.innerHTML=resultado
	},
	actualizaResultado: function(){
		return eval(this.acumulador)+this.ultimoOperador+this.ultimoValor
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

