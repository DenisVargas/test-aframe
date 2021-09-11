
<h1>Correccioncitas</h1>

<ul>
 <li>
 	En ambos scripts APP.js dentro de los botones, tenías la misma funcion rgbToHex(rgb) y componentFromStr(numStr, percent), que era innecesario.
	Las funciones las declaramos una sola vez en el scope global y luego podemos reutilizarlas.
 </li>
 <li>Dentro de las funciones de color la variable button1 está indefinida.</li>
 <li>
	<p>
	Reestructuré las 2 apps, ya que habían 2 proyectos dentro del mismo git, de paso arreglé las referencias a los recursos para que ambos funcionaran. 
	<strong>Nota:</strong> Acordate que las rutas relativas se basan siempre en la "posición" del html. Por ejemplo en la segunda app (renombrada en la carpeta "Proyecto
	Anterior") "app.js" esta dentro del subdirectorio src que está dentro de la misma carpeta que "index.html", por eso en header, dentro de la etiqueta script que le hace referencia, se escribe src="src\app.js". 
	Si reestructuras los archivos internos dentro de la carpeta Proyecto anterior vas a tener que actualizar las referencias.
	</p>
</li>
<li>
	En la segunda APP>HTML. Meter los botones dentro de un div no tiene mucho sentido, ya que al div no le aplicamos ningún estilo, ni lo utilizamos en js.
</li>
<li>
	Nota: src normalmente se utiliza únicamente para scripts, es como una regla no escrita.
</li>
<li>
	Preferencialmente evitá poner los estilos en el html, hace la lectura mas sencilla (por ejemplo en los botones).
</li>
<li>
	PD: Mucho quidado con la indentación, es mas importante de lo que parece. Una forma copada de arreglarlo rápido si estas en VSCode es usar el comando: format.
</li>
<li>
	Otro truquillo muy útil. En VSCode, una vez que sabes el tipo de una variable, puedes usar algo como /** @type {HTMLElement} */ y esto te va a permitir listar mejor el autocompletado.
</li>
<li>
	En js no utilices self como nombre de una variable. Es una palabra clave y de por si es peligrosa utilizarla ya que solo es válida en algunos contextos muy específicos.
</li>
</ul>