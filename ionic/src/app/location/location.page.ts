import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import { Platform} from '@ionic/angular';
import { ViewChild,ElementRef,NgZone } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {
  @ViewChild('Map') mapElement: ElementRef;
  map: any;
  mapOptions: any;
  location = {lat: null, lng: null};
  markerOptions: any = {position: null, map: null, title: null};
  marker: any;
  apiKey: any = 'AIzaSyAFAjGVnQuC7jnXFjGVC1EFI2yPOkz3R9s';

constructor( public geolocation: Geolocation,private zone:NgZone) {
  /*load google map script dynamically */
    const script = document.createElement('script');
    script.id = 'googleMap';
    if (this.apiKey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAFAjGVnQuC7jnXFjGVC1EFI2yPOkz3R9s' + this.apiKey;
    } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAFAjGVnQuC7jnXFjGVC1EFI2yPOkz3R9s';
    }
    document.head.appendChild(script);
    /Get Current location/
    this.geolocation.getCurrentPosition().then((position) =>  {
        this.location.lat = position.coords.latitude;
        this.location.lng = position.coords.longitude;
    });
    /Map options/
    this.mapOptions = {
        center: this.location,
        zoom: 21,
        mapTypeControl: false
    };
    setTimeout(() => {
        this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
        /Marker Options/
        this.markerOptions.position = this.location;
        this.markerOptions.map = this.map;
        this.markerOptions.title = 'My Location';
        this.marker = new google.maps.Marker(this.markerOptions);
    }, 3000);
  }

  

  ngOnInit() {
    
}
}