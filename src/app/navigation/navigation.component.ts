import { Component, OnInit, Input } from '@angular/core';
import { ThemePalette } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() color: ThemePalette;
  constructor() {}

  ngOnInit() {}
}
