import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { ToastService } from '../../core/services/toast-service';
import { themes } from '../theme';
import { BusyService } from '../../core/services/busy-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav implements OnInit {
  protected busyService = inject(BusyService);
  protected accountService = inject(AccountService);
  private toastService = inject(ToastService)
  private router = inject(Router);
  protected creds: any = {};
  protected selectedTheme = signal<string>(localStorage.getItem('theme') || 'light');
  protected themes = themes;

   ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', this.selectedTheme());
  }

  handleSelectedTheme(theme:string) {
    this.selectedTheme.set(theme);
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', this.selectedTheme());
  }

  login(){
    this.accountService.login(this.creds).subscribe({
      next: result => {
        this.router.navigateByUrl("members");
        this.creds = {};
        this.toastService.success("Login successfully");
      },
      error: error => this.toastService.error(error.error)
    })
  }

  logout()
  {
    this.accountService.logout();
    this.router.navigateByUrl("/");
    this.toastService.info("User logged out successfully");
  }
}
