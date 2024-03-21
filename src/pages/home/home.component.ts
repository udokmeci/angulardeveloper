import { Component, Inject, OnDestroy } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { ReplaySubject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import { PageScrollService } from 'ngx-page-scroll-core'

@Component({
  selector: 'op-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: 'home.component.html'
})
export class HomePageComponent implements OnDestroy {
  public pageTop: string = 'pageTop'

  private readonly unsubscribe$ = new ReplaySubject<boolean>(1)

  constructor (
    private readonly route: ActivatedRoute,
    private readonly pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private readonly document: any
  ) {
    this.route.fragment
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((fragment: string) => { this.scrollTo(fragment) })
  }

goToLink(url: string){
    window.open(url, "_blank");
}
  ngOnDestroy (): void {
    this.unsubscribe$.next(true)
    this.unsubscribe$.complete()
  }

  private scrollTo (fragment: string = this.pageTop): void {
    try {
      console.info( `#${fragment}`, this.document, this.pageScrollService)
      this.pageScrollService.scroll({
        document: this.document,
        scrollTarget: `#${fragment}`
      })
    } catch (e) {
       console.error('Error during scroll: ', e); 
    }
  }
}
