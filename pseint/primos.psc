Algoritmo sin_titulo
	i = 0
	n = 0
	Escribir 'digite un numero'
	Leer n
	Para i<-1 Hasta n Hacer
		Si n mod i==0 Entonces
			p = p+1
		FinSi
	FinPara
	Si p==2 Entonces
		Escribir 'el numero es primo'
	SiNo
		Escribir 'el numero no es primo'
	FinSi
FinAlgoritmo
