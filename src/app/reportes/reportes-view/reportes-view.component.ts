import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciasService } from 'src/app/services/asistencias.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-reportes-view',
  templateUrl: './reportes-view.component.html',
  styleUrls: ['./reportes-view.component.css']
})
export class ReportesViewComponent implements OnInit {

  asistencias: any[] = [];


  constructor(
    private router: Router,
    private asistenciasService: AsistenciasService
  ) { }

  ngOnInit(): void {
    this.findAsistencias();
  }

  findAsistencias() {
    this.asistenciasService.getAsistencias().subscribe((responce) => {
      this.asistencias = responce;
      console.log('asistencias ', this.asistencias);

    });
  }

  imprimir() {
    const doc = new jsPDF({
      orientation: 'landscape', // Set the orientation to landscape
    });

    // Get the <div> element with the class 'card'
    const cardElement = document.querySelector('div.card') as HTMLElement;

    if (cardElement) {
      // Convert the <div> element to a canvas
      html2canvas(cardElement).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');

        // Create an HTMLImageElement from the canvas data
        const img = new Image();
        img.src = imgData;

        // Add the image to the PDF
        doc.addImage(img, 'PNG', 10, 10, img.width, img.height);

        // Save the PDF
        doc.save('report.pdf');
      });
    } else {
      console.log('Card element not found');
    }
  }
}


