// Diccionario de frases predefinidas con dos respuestas correctas
const frases = {
  "Mañana iremos al parque para hacer un picnic.": ["Tomorrow we'll go to the park to have a picnic.",
                                                    "Tomorrow we will go to the park to have a picnic."],
  "A veces ella escucha música mientras estudia.": ["She sometimes listens to music while studying."],
  "Si no vienes temprano, perderás el tren.": ["If you don't come early, you'll miss the train.",
                                               "If you do not come early, you will miss the train."],
  "Estamos planeando un viaje a la playa para el próximo mes." : ["We are planning a trip to the beach for next month.",
                                                                  "We're planning a trip to the beach for next month."],
  "Cuando llegué, ya habían empezado la reunión.": ["When I arrived, they had already started the meeting."],
  "Este restaurante siempre tiene mucha gente los viernes por la noche.": ["This restaurant is always crowded on Friday nights."],
  "Nos encanta pasear por el parque los fines de semana.": ["We love to stroll in the park on the weekends."],
  "Él estaba cocinando cuando sonó el teléfono.": ["I was cooking when the phone rang."],
  "El avión aterrizará en una hora.": ["The plane will land in an hour."],
  "Mi hermana no ha visto esa película aún.": ["My sister has not watched that movie yet.",
                                               "My sister hasn't watched that movie yet."],
  "Siempre terminamos nuestras tareas antes de la cena.": ["We always finish our tasks before dinner."],
  "El tren sale de la estación a las 8 en punto todos los días.": ["The train leaves the station at 8 o'clock every day."],
  "Me encontré con un viejo amigo en el supermercado ayer.": ["I came across an old friend at the supermarket yesterday."],
  "Ellos han vivido en esta ciudad durante muchos años.": ["They have lived in this city for many years.",
                                                           "They've lived in this city for many years."],
  "¿Estás listo para salir o necesitas más tiempo?": ["Are you ready to go out or do you need more time?."],
  "A veces me olvido de apagar las luces antes de salir.": ["Sometimes I forget to turn off the lights before going out."],
  "Siempre visitamos a nuestros abuelos en las vacaciones de verano.": ["We always visit our grandparents during summer vacation."],
  "El próximo año estudiaré en el extranjero por un semestre.": ["Next year I will study abroad for a semester.",
                                                                 "Nex year I'll study abroad for a semester."],
  "Ella siempre olvida dónde deja sus llaves.": ["She always forgets where she leaves her keys."],
  "A veces me quedo despierto hasta tarde viendo películas.": ["Sometimes I stay up late watching movies."],
  "Los niños están jugando en el jardín mientras el sol brilla.": ["The kids are playing in the garden while the sun is shining."],
  "Deberíamos comprar los boletos antes de que suban de precio.": ["We should buy the tickets before they go up in price."],
  "No he tenido tiempo para hacer mi tarea esta semana.": ["I have not had time to do my homework this week.",
                                                           "I haven't had time to do my homework this week."],
  "Vamos a visitar a nuestros amigos el próximo fin de semana.": ["Let's visit our friends next weekend.",
                                                                  "Let us visit our friends next weekend."],
  "¿Sabes a qué hora cierra la tienda?": ["Do you know what time the store closes?."],
  "¿Cuánto tiempo has estado estudiando inglés?": ["How long have you been studying English?."],
  "Mi familia y yo solemos cenar juntos los domingos.": ["My family and I usually have dinner together every Sunday."],
  "Mis amigos van a celebrar su cumpleaños este fin de semana.": ["My friends are going to celebrate their birthdays this weekend."],
  "Estoy aprendiendo a nadar en la piscina de mi escuela.": ["I am learning how to swim in my school pool.",
                                                             "I'm learning how to swim in the school pool."],
  "Anoche vi una estrella fugaz en el cielo.": ["Last night I saw a shooting star in the sky."]
};
  
  let frasesTraducidas = [];
  let fraseActual = '';
  
  function mostrarNuevaFrase() {
    const frasesNoTraducidas = Object.keys(frases).filter(frase => !frasesTraducidas.includes(frase));
    if (frasesNoTraducidas.length > 0) {
      fraseActual = frasesNoTraducidas[Math.floor(Math.random() * frasesNoTraducidas.length)];
      document.getElementById('frase-esp').innerText = fraseActual;
      document.getElementById('traduccion-input').value = ''; 
      document.getElementById('resultado').innerText = ''; 
    } else {
      alert('¡Felicidades! Has traducido todas las frases.');
      frasesTraducidas = []; 
      mostrarNuevaFrase();
    }
  }
  
  function verificarTraduccion() {
    const respuesta = document.getElementById('traduccion-input').value.trim().toLowerCase();
    const respuestasCorrectas = frases[fraseActual].map(res => res.toLowerCase());
  
    if (respuestasCorrectas.includes(respuesta)) {
      frasesTraducidas.push(fraseActual);
      document.getElementById('resultado').innerText = '¡Correcto!';
      mostrarNuevaFrase();
    } else {
      document.getElementById('resultado').innerText = 'Incorrecto. Inténtalo de nuevo.';
    }
  }
  
  document.getElementById('verificar-btn').addEventListener('click', verificarTraduccion);
  
  document.getElementById('traduccion-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      verificarTraduccion();
    }
  });
  
  mostrarNuevaFrase();
