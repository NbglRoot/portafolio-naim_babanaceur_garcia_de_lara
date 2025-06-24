import { Component, OnInit } from '@angular/core';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-proyectos-c',
  imports: [SweetAlert2Module],
  templateUrl: './proyectos-c.component.html',
  styleUrl: './proyectos-c.component.css',
})
export class ProyectosCComponent implements OnInit {
  ngOnInit(): void {
    (
      document.querySelector('#terminal-screen') as HTMLDivElement
    ).addEventListener('click', () => {
      (
        document.querySelector('#terminal-input-text') as HTMLInputElement
      )?.focus();
    });
    const proObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (
            entry.target.querySelector(
              '#terminal-input-text'
            ) as HTMLInputElement
          )?.focus({ preventScroll: true });
          setTimeout(() => {
            (
              entry.target.querySelector('#terminal-output') as HTMLDivElement
            ).innerHTML = `
            <p>Para ver todos los comandos disponibles, escribe "help" en la terminal.</p>
            `;
          }, 1000);
        } else {
          (
            entry.target.querySelector(
              '#terminal-input-text'
            ) as HTMLInputElement
          )?.blur();
        }
      });
    });
    proObs.observe(document.querySelector('#terminal-screen') as HTMLElement);
  }

  commandsInnerHTML = {
    help: `
    <ol class="ms-8 list-disc">
    <li>help - Mostrar todos los comandos disponibles.</li>
    <li>proyectos - Mostrar todos los proyectos.</li>
    <li>whois - Mostrar información sobre el usuario.</li>
    <li>clear - Limpiar la terminal.</li>
    <li>exit - Salir de la terminal.</li>
    </ol>
    `,
    proyectos: `
    <p class="text-center text-2xl font-bold underline underline-offset-4">Proyectos</p>
    <ul class="ms-8 mt-4 list-disc">
        <li>WikiRoot - <a target="_blank" class="text-blue-300 underline hover:text-blue-500 transition-colors duration-200" href="https://github.com/NbglRoot/WikiRoot_WebApp">App basado en Wikipedia, Enciclopedia en Online Gratis.</a></li>
        <li>NimbusRoot - <a target="_blank" class="text-blue-300 underline hover:text-blue-500 transition-colors duration-200" href="https://nbglroot.github.io/nimbusroot/">App de meteorología.</a></li>
        <li>ToDoRoot - <a target="_blank" class="text-blue-300 underline hover:text-blue-500 transition-colors duration-200" href="https://nbglroot.github.io/todoroot_deployed/">App de lista de tareas.</a></li>
        <li>CalcRoot - <a target="_blank" class="text-blue-300 underline hover:text-blue-500 transition-colors duration-200" href="https://nbglroot.github.io/calculator_angularTailwind_deployed/">App de calculadora.</a></li>
        <li class="mt-4 ms-6">Mas en - <a target="_blank" class="text-blue-300 underline hover:text-blue-500 transition-colors duration-200" href="https://github.com/nbglroot">GitHub.</a></li>
    </ul>
    <br>`,
    whois: `
    <p class="my-3 underline underline-offset-2 text-xl font-bold text-center">Información sobre el usuario</p>
    <p>Soy Naim Babanaceur García de Lara, programador web especializado en el Front-end. Me especializo en crear interfaces de usuario atractivas y funcionales.
    <br><br> Mi objetivo es crear aplicaciones web modernas y responsivas. Mi experiencia incluye el uso de HTML, CSS, JavaScript y frameworks como Angular y React.
    <br><br> Tengo experiencia en el uso de Tailwind CSS y Bootstrap para crear interfaces de usuario modernas y responsivas.
    </p>
    <br>`,
    clear: `
    <p>Limpiando terminal...</p>
    `,
    exit: `
    <p>Adios!. Hasta pronto.</p>
    `,
  };

  terminalSubmit(e: Event): void {
    e.preventDefault();

    // terminal output
    const output = document.querySelector('#terminal-output') as HTMLDivElement;

    // clear input
    const input = document.querySelector(
      '#terminal-input-text'
    ) as HTMLInputElement;
    // form input text
    const inputText = input.value.toLowerCase().trim();
    output.innerHTML += ` <br /> <p> > ${inputText}</p>`;

    // Limpiar en input de texto
    input.value = '';
    input.disabled = true;

    // Scroll abajo
    output.scrollTop = output.scrollHeight;

    // switch with all commands
    setTimeout(() => {
      switch (inputText) {
        case 'help':
          output.innerHTML += this.commandsInnerHTML.help;
          break;
        case 'proyectos':
          output.innerHTML += this.commandsInnerHTML.proyectos;
          break;
        case 'whois':
          output.innerHTML += this.commandsInnerHTML.whois;
          break;
        case 'wikiroot':
          window.open('https://github.com/NbglRoot/WikiRoot_WebApp', '_blank');
          break;
        case 'nimbusroot':
          window.open('https://nbglroot.github.io/nimbusroot/', '_blank');
          break;
        case 'todoroot':
          window.open(
            'https://nbglroot.github.io/todoroot_deployed/',
            '_blank'
          );
          break;
        case 'calcroot':
          window.open(
            'https://nbglroot.github.io/calculator_angularTailwind_deployed/',
            '_blank'
          );
          break;
        case 'clear':
          output.innerHTML += this.commandsInnerHTML.clear;
          setTimeout(() => {
            output.innerHTML = '';
          }, 1000);
          break;
        case 'exit':
          output.innerHTML += this.commandsInnerHTML.exit;
          setTimeout(() => {
            output.innerHTML = '';
            if (document.querySelector('#projects-sec') as HTMLElement) {
              (
                document.querySelector('#projects-sec') as HTMLElement
              ).classList.add('hidden');
              Swal.fire({
                icon: 'info',
                title:
                  'Puedes volver a activar el terminal con el botón [Activar].',
                showConfirmButton: true,
                confirmButtonText: 'Activar',
                theme: 'dark',
                toast: true,
                timer: 15000,
                timerProgressBar: true,
                position: 'bottom-start',
                preConfirm: () => {
                  if (document.querySelector('#projects-sec') as HTMLElement) {
                    const projectsSec = document.querySelector(
                      '#projects-sec'
                    ) as HTMLElement;
                    projectsSec.classList.remove('hidden');
                    projectsSec.scrollIntoView();
                  }
                },
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer);
                  toast.addEventListener('mouseleave', Swal.resumeTimer);
                },
              });
            }
          }, 1000);
          break;
        default:
          output.innerHTML += `<p>Comando no encontrado.</p>`;
          break;
      }
      input.disabled = false;
      input.focus();
      output.scrollTop = output.scrollHeight;
    }, 500);
  }
}
