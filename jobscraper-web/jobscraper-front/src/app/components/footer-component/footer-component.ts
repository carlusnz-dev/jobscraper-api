import { RouterLink, RouterLinkActive, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherInstagram, featherLinkedin, featherGithub, featherHome, featherInfo, featherPhone } from '@ng-icons/feather-icons'

@Component({
  selector: 'app-footer-component',
  imports: [NgIcon, RouterLink, RouterLinkActive],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.css',
  viewProviders: [provideIcons({
    featherInstagram,
    featherGithub,
    featherLinkedin,
    featherHome,
    featherInfo,
    featherPhone
  })]
})
export class FooterComponent {
  navLinks = [
    { name: 'Home', icon: 'featherHome' },
    { name: 'About', icon: 'featherInfo' },
    { name: 'Contact', icon: 'featherPhone' },
  ]
}
