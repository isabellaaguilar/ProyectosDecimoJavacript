Algoritmo sin_titulo
	l1 <- 0
	l2 <- 0
	l3 <- 0
	Escribir 'digite los tres lados de un tri�ngulo'
	Leer l1,l2,l3
	Si l1==l2 Y l2==l3 Entonces
		Escribir 'el tri�ngulo es equilatero'
	SiNo
		Si l1==l2 O l1==l3 O l2==l3 Entonces
			Escribir 'el tri�ngulo es is�celes'
		SiNo
			Escribir 'el tri�ngulo es escaleno'
		FinSi
	FinSi
FinAlgoritmo
