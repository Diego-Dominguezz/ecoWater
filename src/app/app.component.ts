import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnChanges {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  logged: boolean = false;
  constructor(
    private auth: AuthService
  ) {
    this.logged = this.auth.isLogged;
    interval(1000).subscribe(x=>{
      console.warn('interval in app component', this.auth.isLogged);
      this.logged = this.auth.isLogged
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log('changes?', this.auth.isLogged);
  }

  
}
