import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.scss'],
})
export class PopComponent implements OnInit {

  constructor(private popoverController: PopoverController) { }
  close() {
		this.popoverController.dismiss()
	}
  ngOnInit() {}

}
