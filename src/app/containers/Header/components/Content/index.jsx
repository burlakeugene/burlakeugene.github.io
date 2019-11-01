import React, { Component } from 'react';
import Blob from 'components/Blob';
import './styles/styles.scss';
export default class Content extends Component {
  constructor(props) {
    super(props);
  }
  mapInit() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
      { map } = this.refs;
    if (map) {
      var mapData = {};
      mapData.x = 44.60569;
      mapData.y = 33.522039;
      mapData.title = 'Title';
      mapData.content = 'Content';
      mapData.pinUrl = require('./images/pin.svg');
      mapData.pinWidth = 10;
      mapData.pinHeight = 10;
      mapData.zoom = 10;
      var infowindow = new google.maps.InfoWindow();
      var myMap = new google.maps.Map(map, {
        center: { lat: mapData.x, lng: mapData.y },
        zoom: mapData.zoom || 8,
        mapTypeControl: false,
        zoomControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#212121'
              }
            ]
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#212121'
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#bdbdbd'
              }
            ]
          },
          {
            featureType: 'administrative.neighborhood',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#181818'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#1b1b1b'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#2c2c2c'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#8a8a8a'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#373737'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#3c3c3c'
              }
            ]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [
              {
                color: '#4e4e4e'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#000000'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#3d3d3d'
              }
            ]
          }
        ]
      });
      var marker = new google.maps.Marker({
        position: { lat: mapData.x, lng: mapData.y },
        map: myMap,
        icon: {
          url: mapData.pinUrl,
          scaledSize: new google.maps.Size(20, 20),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(10, 10)
        }
      });
      //   google.maps.event.addListener(marker, 'click', function() {
      //     infowindow.setContent("<p>Some HTML content</p>");
      //     infowindow.open(myMap,marker);
      //  });
    }
  }
  componentDidMount() {
    if (window.google) {
      this.mapInit();
    } else {
      setTimeout(() => {
        this.componentDidMount();
      }, 0);
    }
  }
  render() {
    return (
      <div className="app-header-content">
        <div className="app-header-content-scroller">
          <div>Comming soon</div>
          <Blob styles={{
            width: '40%',
            height: '40%',
            margin: '5px',
            boxShadow: '0 0 0 2px #fff'
          }}>
            <div className="map" ref="map"></div>
          </Blob>
        </div>
      </div>
    );
  }
}
