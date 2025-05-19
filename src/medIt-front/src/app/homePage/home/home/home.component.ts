import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../../footer/footer.component";
import { HeaderComponent } from "../../../header/header.component";
import { LeftBarComponent } from "../../../left-bar/left-bar.component";
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-home',
  imports: [RouterModule, LeftBarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    initFlowbite();
  }

}
