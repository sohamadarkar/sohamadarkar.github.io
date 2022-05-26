import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  certificates: any =[];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.certificates = this.profileService.getCertificates()
  }

}
