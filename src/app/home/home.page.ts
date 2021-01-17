import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Stock } from '../stock';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  stockList = [];
  stockData: Stock;
  stockForm: FormGroup;
  sDefaultEmail   :  string;

  userEmail: string;

  constructor(private authService: AuthService, private router: Router,
    private alertCtrl: AlertController,
    private firebaseService: FirebaseService,
    public fb: FormBuilder) { 

      this.stockData = {} as Stock;
      this.sDefaultEmail = this.userEmail;

    }




  ngOnInit() {

    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
       
      }
    }, err => {
      console.log('err', err);
    })

  


    this.stockForm = this.fb.group({
      Name: ['', [Validators.required]],
      StokKodu: ['', [Validators.required]],
      Adet: ['', [Validators.required]],
      Alis: ['', [Validators.required]],
      Satis: ['', [Validators.required]],
      Email: ['', [Validators.required]]
    })

    this.firebaseService.read_stock().subscribe(data => {

      this.stockList = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          StokKodu: e.payload.doc.data()['StokKodu'],
          Adet: e.payload.doc.data()['Adet'],
          Alis: e.payload.doc.data()['Alis'],
          Satis: e.payload.doc.data()['Satis'],
          Email: e.payload.doc.data()['Email'],
        };
      })
      console.log(this.stockList);

    });
  }

  CreateRecord() {
    console.log(this.stockForm.value);
    this.firebaseService.create_stock(this.stockForm.value).then(resp => {
      this.stockForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_stock(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditStokKodu = record.StokKodu;
    record.EditAdet = record.Adet;
    record.EditAlis = record.Alis;
    record.EditSatis = record.Satis;

  }

  UpdateRecord(recordRow) {
    let record = {};
    
    record['Name'] = recordRow.EditName;
    record['StokKodu'] = recordRow.EditStokKodu;
    record['Adet'] = recordRow.EditAdet;
    record['Alis'] = recordRow.EditAlis;
    record['Satis'] = recordRow.EditSatis;




    this.firebaseService.update_stock(recordRow.id, record);
    recordRow.isEdit = false;
  }



  async logOut(form):Promise<void>{
    this.authService.logOutUser().
    then(
      ()=>{
        this.router.navigateByUrl('login');
      },
      async error => {
        const alert = await this.alertCtrl.create({
          message:error.message,
          buttons:[{text:'ok', role:'cancel'}]
        });
        await alert.present();
      }
    );
  }

}
