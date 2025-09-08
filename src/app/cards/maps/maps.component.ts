import { MapCacheService } from '../../services/map-cache-service.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  mapUrl: SafeResourceUrl | null = null;

  constructor(private mapCacheService: MapCacheService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadMapUrl();
    })
  }

  loadMapUrl(): void {
    const cachedUrl = this.mapCacheService.getMapDetails();

    if (cachedUrl) {
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(cachedUrl);
    } else {
      // The URL you want to cache and use
      const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.1486045289672!2d72.49886300592046!3d23.1046067071009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9d6a2d465f93%3A0x556aa695584a0df6!2sShypram%20Parisar!5e1!3m2!1sen!2sin!4v1754377314428!5m2!1sen!2sin';

this.mapCacheService.setMapDetails(url);
this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

    }
  }
}

