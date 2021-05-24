Algoritmo sin_titulo
	n1 = 0
	n2 = 0
	i = 0
	Escribir 'digite un numero'
	Leer n1
	Para i<-1 Hasta n1-1 Hacer
		Si n1 mod i==0 Entonces
			n2 = n2+i
		FinSi
	FinPara
	Si n2==n1 Entonces
		Escribir 'es perfecto'
	SiNo
		Escribir 'no es perfecto'
	FinSi
FinAlgoritmo
