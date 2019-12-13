import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.css']
})
export class GraciasComponent implements OnInit {

  // esta url no se puede tomar del componente que conecta a firebase?
  // mismo en index.html, donde estan los datos de la OG para compartir por facebook

  url = "https://evoc-67321.web.app";
  constructor() { }

  ngOnInit() {
  }

}

