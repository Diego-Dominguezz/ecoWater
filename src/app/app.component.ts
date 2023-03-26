import { AuthService } from './services/auth.service';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonRouterOutlet, MenuController } from '@ionic/angular';
import { MenuElement } from './models/menu.model';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChildren('templateList', { read: ElementRef }) templateListRef: QueryList<ElementRef> | undefined;
  public templates: MenuElement[] = [{ name: 'Agua', icon: 'leaf-outline', router: 'agua' }, { name: 'Riego', icon: 'water-outline', router: 'riego' }, { name: 'Configuración', icon: 'settings-outline', router: 'config' }, { name: 'Cerrar sesión', icon: 'exit-outline', router: 'login' }]
  constructor(
    private router: Router,
    public auth: AuthService,
    private animationCtrl: AnimationController,
    private menuCtrl: MenuController,
  ) {
    console.log('main app');
    // this.routerOutlet.swipeGesture = false;
  }
  onSplitPaneVisible(e: any) {
    console.log(e);
  }
  ngAfterViewInit(): void {
    this.router.navigate(['login']);
    this.router.events.subscribe(x=>{
      // console.log(x)
    })
    // this.auth.toggleSideMenu(true);
    // this.router.navigate(['ecoinicio']);

  }
  openedMenu() {
    this.initListAnimation();
  }
  clickedMenu(element: MenuElement) {
    console.log('clicked')
    if (element.name == 'Cerrar sesión') this.auth.logout();
    this.router.navigate([element.router]).then(()=>{
      this.menuCtrl.close();
    });
  }
  closingMenu(){
    this.menuCtrl.get().then(x=>{
      x?.blur();
      document.body.focus();
    })
  }
  initListAnimation() {
    const itemRefArray = this.templateListRef!.toArray();
    for (let i = 0; i < itemRefArray.length; i++) {
      const element = itemRefArray[i].nativeElement;

      this.animationCtrl
        .create()
        .addElement(element)
        .duration(1000)
        .delay(i * (1000 / 3))
        .easing('cubic-bezier(0.4, 0.0, 0.2, 1.0)')
        .fromTo('transform', 'translateY(50px)', 'translateY(0px)')
        .fromTo('opacity', '0', '1')
        .play();
    }
  }


}
