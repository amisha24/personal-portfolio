import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <- IMPORTANT


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent {}