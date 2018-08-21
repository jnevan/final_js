window.onload = function(){
  Calculadora.init()
};
var Calculadora ={
	init: function(){
		this.botonClick()
		this.cargarEstilos()
		//this.Calcular()
	
	},
	 botonClick: function(){
		//var caja1 = document.getElementsByClassName('pantalla')
		var buttons = document.querySelectorAll('.tecla');
		var self = this;
		var caja = document.getElementById('display')
		// a cada uno le asignamos el manejador del evento.
		for(var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function() {
					
					//self.cambiarEstilo(this);
					var digito = this.id
					switch(digito){
						case "por":{digito="*";
							break;}
						case "mas":{digito="+";
							break;}
						case "menos":{digito="-";
							break;}
						case "dividido":{digito="/";
							break;}
						case "punto":{digito=".";
							break;}
						case "on":{caja.innerHTML=null;
									digito="0";
							break;}
						case "sign":{caja.innerHTML="-"+caja.innerHTML;
									digito="";
							break;}
					}
					if(caja.innerHTML==0)
						caja.innerHTML=null

					if (digito == "igual")
						caja.innerHTML = self.Calcular(caja.innerHTML)
					else  caja.innerHTML += digito
				});    

		}
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
	
		
	Calcular: function(cadena){
		return eval(cadena)
	}
}

