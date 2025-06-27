import {Component, AfterViewInit, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  standalone: true,
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit{

  private map!: L.Map;

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Initialize the map and set view
    this.map = L.map('map').setView([35.76637, 51.47807], 16);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(this.map);

    // Define your custom icon
    const customIcon = L.icon({
      iconUrl: '../assets/images/marker.png',  // your marker image path
      iconSize: [70, 70],                    // size of the icon
      iconAnchor: [16, 32],                  // point of the icon which will correspond to marker's location
      popupAnchor: [0, -32],                 // point from which the popup should open relative to the iconAnchor
    });

    // Add marker with custom icon
    L.marker([35.76637, 51.47807], { icon: customIcon }).addTo(this.map)
      .bindPopup('آدرس فروشگاه')
      .openPopup();
  }
}
