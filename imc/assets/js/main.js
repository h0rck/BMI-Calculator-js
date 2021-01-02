  // Body Mass Index
  document.querySelector(`#formulario`).addEventListener('keyup', e=>{
    query()
  });

  function query(){
    const kg = document.querySelector(`#peso`).value;
    const cm = document.querySelector(`#altura`).value;
    const resultado = document.querySelector(`#resultado`);

    if(!kg || !cm) return resultado.innerHTML = '';
    if(!Number(kg)) return setResultado('Peso inválido', false);
    if(!Number(cm)) return setResultado('Altura inválida', false);

    const imc = (kg / (cm / 100) ** 2).toFixed(2);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    resultado.innerHTML = '';
    setResultado(msg, true);
  }

  function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
      'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
  }

  function setResultado (msg, isValid) {
    const p = document.createElement('p');

    if (isValid) {
      p.classList.add('paragrafo-resultado');
    } else {
      p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
  }
