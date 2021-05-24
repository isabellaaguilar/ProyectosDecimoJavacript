Algoritmo sin_titulo
	nota1 <- 0
	nota2 <- 0
	nota3 <- 0
	Escribir 'digite sus notas'
	Leer nota1,nota2,nota3
	promedio <- (nota1+nota2+nota3)/3
	Escribir 'el promedio es  ',promedio
	Si promedio>=95 Entonces
		Escribir 'excelente'
	SiNo
		Si promedio>=80 Entonces
			Escribir 'muy bien'
		SiNo
			Si promedio>=70 Entonces
				Escribir 'bien'
			SiNo
				Si promedio>=50 Entonces
					Escribir 'aplazado'
				SiNo
					Si promedio<40 Entonces
						Escribir 'reprobado'
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
FinAlgoritmo
