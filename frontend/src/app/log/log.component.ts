import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HomeService } from '../home/home.service';
import { Lookup } from '../shared/models/lookup';
import { Transaction } from '../shared/models/transaction';
import { LookupService } from '../shared/services/lookup.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  form: FormGroup;
  l: string;
  lookupName ='';
  showNewLookupDialog = false;
  lookups: {
    accounts: { name: string, code: number }[],
    bys: { name: string, code: number }[],
    fors: { name: string, code: number }[];
    transactionTypes: { name: string, code: number }[],
    planneds: { name: string, code: number }[],
    ratings: { name: string, code: number }[],
    category1s: { name: string, code: number }[],
    category2s: { name: string, code: number }[],
    category3s: { name: string, code: number }[],
  };
  cities = [
    {name: 'New York', code: 'NY', inactive: false},
    {name: 'Rome', code: 'RM', inactive: true},
    {name: 'London', code: 'LDN', inactive: false},
    {name: 'Istanbul', code: 'IST', inactive: true},
    {name: 'Paris', code: 'PRS', inactive: false}
];
  constructor(
    private lookupService: LookupService,
    private homeService: HomeService,
    private messageService: MessageService,
  ) { }

  public static buildForm(model: Transaction) {
    return new FormBuilder().group({
      account: new FormControl(model.account, Validators.required),
      created: new FormControl(model.created, Validators.required),
      by: new FormControl(model.by),
      for: new FormControl(model.for),
      transactionType: new FormControl(model.transactionType),
      category1: new FormControl(model.category1),
      category2: new FormControl(model.category2),
      category3: new FormControl(model.category3),
      ammount: new FormControl(model.ammount, Validators.required),
      review: new FormControl(model.review),
      planned: new FormControl(model.planned),
      rating: new FormControl(model.rating)
    });
  }

  public static buildModel(form: FormGroup, model: Transaction): Transaction {
    const value = Object.assign({}, form.value);
    model.account = value.account;
    model.created = value.created;
    model.by = value.by;
    model.for = value.for;
    model.transactionType = value.transactionType;
    model.category1 = value.category1;
    model.category2 = value.category2;
    model.category3 = value.category3;
    model.ammount = value.ammount;
    model.review = value.review;
    model.planned = value.planned
    model.rating = value.rating;
    return model;
  }

  async ngOnInit() {
    await this.lookupService.populateLookupData();
    this.lookups =    {
      accounts: this.lookupService.getAccounts(),
      bys: this.lookupService.getBys(),
      fors: this.lookupService.getFors(),
      transactionTypes: this.lookupService.getTransactionTypes(),
      planneds: this.lookupService.getPlanneds(),
      ratings: this.lookupService.getRatings(),
      category1s: this.lookupService.getCategory1s(),
      category2s: this.lookupService.getCategory2s(),
      category3s: this.lookupService.getCategory3s()
    };
    console.log(this.lookups);
        this.form = LogComponent.buildForm({
          account: this.lookups.accounts[0]?.code,
          created: new Date,
          by: this.lookups.bys[0]?.code,
          for: this.lookups.fors[0]?.code,
          transactionType: this.lookups.transactionTypes[0]?.code,
          category1: this.lookups.category1s[0]?.code,
          category2: this.lookups.category2s[0]?.code,
          category3: this.lookups.category3s[0]?.code,
          ammount: 0,
          review: '',
          planned: this.lookups.planneds[0]?.code,
          rating: this.lookups.ratings[0]?.code,
        });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.homeService.postTransaction(LogComponent.buildModel(this.form, {} as any)).subscribe (
      result => {
        // Handle result
        console.log(result)
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `log successfull${result}`,
        });
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: JSON.stringify(error),
        });
      },
      () => {
        // No errors, route to new page
      }
    );
  }

  addLookup(l: string) {
    this.l = l;
    this.showNewLookupDialog = true;

  }

  addLookupSubmit() {
    this.homeService.addLookup(this.l, this.lookupName).subscribe (
      result => {
        // Handle result
        console.log(result)
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: `lookup added`,
        });
        this.showNewLookupDialog = false;
        this.lookupService.lookups = result;
        this.lookups =    {
          accounts: this.lookupService.getAccounts(),
          bys: this.lookupService.getBys(),
          fors: this.lookupService.getFors(),
          transactionTypes: this.lookupService.getTransactionTypes(),
          planneds: this.lookupService.getPlanneds(),
          ratings: this.lookupService.getRatings(),
          category1s: this.lookupService.getCategory1s(),
          category2s: this.lookupService.getCategory2s(),
          category3s: this.lookupService.getCategory3s()
        };
      },
      error => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: JSON.stringify(error),
        });
      },
      () => {
        // No errors, route to new page
      }
    );


  }

}
