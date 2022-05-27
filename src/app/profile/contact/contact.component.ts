import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model: any = {};

  constructor( private profile: ProfileService) { }

  ngOnInit() {
  }

  getData(f: any) {
    // console.log(f.form.value);
    // this.profile.PostMessage(f.form.value)
    //   .subscribe(response => {
    //     location.href = 'https://mailthis.to/confirm'
    //     console.log(response)
    //   }, error => {
    //     console.warn(error.responseText)
    //     console.log({ error })
    //   })
  }


}
