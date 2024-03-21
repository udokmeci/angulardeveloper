import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'op-container',
  styleUrls: ['./container.component.scss'],
  template: `

  <!-- Navigation-->
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Angular Developer</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a pageScroll class="nav-link py-3 px-0 px-lg-3 rounded" href="/app/home#portfolio">Portfolio</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a pageScroll class="nav-link py-3 px-0 px-lg-3 rounded" href="/app/home#about">About</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a pageScroll class="nav-link py-3 px-0 px-lg-3 rounded" href="/app/home#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
  
  <router-outlet></router-outlet>
  `
})
export class ContainerComponent {
  public menuOpen: boolean = false

  constructor (private readonly router: Router) {}

  public toggleMenu (open: boolean): void {
    this.menuOpen = !open
  }

  public goToHome (): void {
    this.menuOpen = false
    this.router.navigate([])
  }

  public goToExample1 ($event): void {
    $event.preventDefault();
    this.menuOpen = false
    this.router.navigate([], { fragment: 'Example2' })
  }

  public goToExample2 (): void {
    this.menuOpen = false
    this.router.navigate([], { fragment: 'Example2' })
  }
}
