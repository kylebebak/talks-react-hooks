## React Hooks - cómo usarlos y escribirlos (incluso para class components!)

### Sumario

[Hooks](https://reactjs.org/docs/hooks-intro.html) "let you use state and other React features without writing a class."

Hacen que function components tengan básicamente la misma funcionalidad que class components, pero con menos boilerplate. También dan una gran facilidad de compartir código complejo entre componentes.

Después de usar hooks durante un año, function components con hooks se han vuelto igual de intuitivos como class components, y mucho más fáciles de escribir.

Me gustaría enseñarles cómo usar los hooks que vienen con React, y cómo combinarlos para crear tus propios hooks reutilizables.

### Outline

- resumen de hooks
  + hooks básicos: `useState`, `useEffect`, `useRef`, `useCallback`
- cómo combinar hooks básicos para crear tus propios hooks
  + ejemplos de custom hooks, y para qué usarlos
- cómo usar ciertos hooks en class components
  + cuáles son los requisitos para usarlos así?

### Beneficios

- Usar todos los features de class components en tus function components
- Controlar los efectos de `componentDidMount`, `componentDidUpdate`, y `componentWillUnmount` en sólo lugar
- Empaquetar funcionalidad compleja para que se pueda reutilizar en varios componentes

```yaml
name: Kyle Bebak
url: https://github.com/kylebebak
pic: https://dronfelipe.com/images/img/face.png
bio: Ciclista kamikaze
```

### We're Hiring

I work at Elementary Robotics as lead web architect. <>.

Our team has worked / studied at places like NASA, Stanford, Qualcomm, Caltech, etc. We have a very strong engineering culture, with electrical, mechanical, firmware, hardware, machine learning, computer vision, and web engineering all in-house.

<>

Elementary is based in Los Angeles, but the web team (both front and backend) is based on Mexico City, and we're now hiring front and backend web engineers at our Mexico City office... If this sounds interesting, check out our job postings and apply!

<https://www.elementaryrobotics.com/careers>
