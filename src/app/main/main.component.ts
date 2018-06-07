import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: [
      'main.component.css'
  ]
})
export class MainComponent implements OnInit {

  principalAmount: number;
  donatedAmount: number;
  donors: number;
  inputAmount: number;

  constructor() { }

  ngOnInit() {
    this.principalAmount = 1000;
    this.donatedAmount = 0;
    this.donors = 0;
    this.inputAmount = null;
  }
  donate() {
    if (this.inputAmount){
        if (this.principalAmount > 0) {
            if ((this.principalAmount - this.inputAmount) >= 0) {
                this.donors++;
                this.donatedAmount += <number>this.inputAmount;
                this.principalAmount -= this.inputAmount;
                this.inputAmount = null;
            } else {
                Swal('Sorry !', 'Amount exceeded for this Project. Please try with lower amount !', 'warning');
            }

        } else {
            Swal('Sorry !', 'Project has been fully funded !', 'warning');
        }
    } else {
        Swal('Sorry !', 'Please enter the donation amount !', 'warning');
    }

  }
  saveForLater() {
      Swal('Saved !', 'Successfully saved for later!', 'success');
  }
    tellFriends() {
        Swal('Yay, I donated!');
    }

}
