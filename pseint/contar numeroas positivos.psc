Algoritmo sin_titulo
	i <- 0
	n <- 0
	sum = 0
	sumn = 0
	sumx = 0
	Para i<-1 Hasta 10 Hacer
		Escribir 'digite 10 numeros'
		Leer n
		Si n>0 Entonces
			sum = sum + 1
		SiNo
			Si n<0 Entonces
				sumn = sumn + 1
			SiNo
				sumx = sumx + 1
			FinSi
		FinSi
	FinPara
	Escribir 'los numeros positivos son ',sum
	Escribir 'los numeros negativos son ',sumn
	Escribir 'los numeros neutros son ',sumx
FinAlgoritmo
