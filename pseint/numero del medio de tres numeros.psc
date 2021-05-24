Algoritmo sin_titulo
	n1 = 0
	n2 = 0
	n3 = 0
	Escribir 'digite 3 numeros'
	Leer n1,n2,n3
	Si n1>n2 y n1<n3 o n1<n2 y n1>n3 Entonces
		Escribir 'el numero del medio es ',n1
	SiNo
		Si n2>n1 y n2<n3 o n2<n1 y n2>n3 Entonces
			Escribir 'el numero del medio es  ',n2
		SiNo
			Escribir 'el numero del medio es',n3
		FinSi
	FinSi
FinAlgoritmo
