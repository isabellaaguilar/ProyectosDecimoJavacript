Algoritmo sin_titulo
	salario <- 0
	horast <- 0
	horasx <- 0
	horase <- 0
	Escribir 'inserte sus horas trabajadas'
	Leer horast
	Si horast<=40 Entonces
		salario <- 1000*horast
		Escribir 'su salario es: ',salario
	SiNo
		horasx <- (horast-40)*2000
		horase <- horast-40
		salario <- ((horast-horase)*1000)+horasx
		Escribir 'su salario es: ',salario
	FinSi
FinAlgoritmo
