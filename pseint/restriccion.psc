Algoritmo sin_titulo
	placa = 0
	Escribir 'inserte su ultimo digito de placa'
	Leer placa
	Si placa==1 o placa==2 Entonces
		Escribir 'tiene restriccion el lunes'
	SiNo
		Si placa==4 o placa==3 Entonces
			Escribir 'tiene restriccion el martes'
		SiNo
			Si placa==6 o placa==5 Entonces
				Escribir 'tiene restricciom el miercoles'
			SiNo
				Si placa==8 o placa==7 Entonces
					Escribir 'tiene restriccion el jueves'
				SiNo
					Si placa==0 o placa==9 Entonces
						Escribir 'tiene restriccion el viernes'
					SiNo
						Escribir 'digite un numero correcto'
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
