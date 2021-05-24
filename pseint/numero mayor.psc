Algoritmo sin_titulo
	i <- 0
	n <- 0
	may <- 0
	Para i<-1 Hasta 10 Hacer
		Escribir 'digite numeros ',i
		Leer n
		Si i==1 Entonces
			may <- n
		FinSi
		Si n>may Entonces
			may <- n
		FinSi
	FinPara
	Escribir 'el numero mayor es ',may
FinAlgoritmo
