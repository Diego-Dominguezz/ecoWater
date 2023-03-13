import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit, AfterViewInit, OnChanges {


  public folder!: string;
  public appPages = [
    { title: 'Riego', url: '/folder/Riego', icon: 'mail' },
    { title: 'Agua', url: 'Agua', icon: 'heart' },
  ];
  public labels = ['Family'];
  logged: boolean = false;
  enableMenu : boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private auth: AuthService
    ) {
    this.logged = this.auth.isLogged;
   }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
  ngAfterViewInit() {
    interval(1000).subscribe(x => {
      console.warn('interval in app component', this.auth.isLogged);
      this.logged = this.auth.isLogged;
    });
    this.enableMenu = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes?', this.auth.isLogged);
  }

}
