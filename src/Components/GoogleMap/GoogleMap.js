/**
*
* GoogleMap
*
*/
// @flow
import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import findIndex from 'lodash/findIndex';
import styles from './GoogleMap.style';
import GoogleMapInfoWindow from '../GoogleMapInfoWindow';
import withStyles from '../../../lib/withStyles';
import { STATIC_IMAGE } from '../../../constants';

export class GoogleMap extends Component<Props> {
  state = {
    activeInfoWindow: null,
  };

  componentDidMount() {
    this.initMap();
  }

  onMarkerClick = ({
    isStoreLocator,
    store,
    marker,
    infoWindow,
    map,
  }) => {
    const {
      activeInfoWindow,
    } = this.state;
    if (!isStoreLocator) {
      const storesListTop = document.querySelector('.stores-list').offsetTop;
      const storeToScroll = document.getElementById(`store-${store.storeId}`).offsetTop;
      const toScroll = storeToScroll - storesListTop;
      document.getElementsByClassName('stores-list')[0].scrollTop = toScroll;
    } else {
      if (activeInfoWindow) {
        activeInfoWindow.close();
      }
      this.setState({
        activeInfoWindow: infoWindow,
      });
      infoWindow.open(map, marker);
    }
  };

  onMapClicked = () => {
    const {
      activeInfoWindow,
    } = this.state;
    if (this.state.activeInfoWindow) {
      activeInfoWindow.close();
      this.setState({
        activeInfoWindow: null,
      });
    }
  };

  initMap = () => {
    if (!this.mapRef) return;
    const { google } = window;
    const {
      storeDetails,
      lat,
      lng,
      isStoreLocator,
      stores,
      deviceType,
      activeBrand,
    } = this.props;
    const { allStores } = storeDetails;
    const options = {
      center: lat && lng ? new google.maps.LatLng(lat, lng) : null,
      zoom: 10,
      zoomControl: true,
      mapTypeControl: true,
      mapTypeControlOptions: null, // default defined after including API
      streetViewControl: true,
      streetViewControlOptions: null,
      scaleControl: true,
      panControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    const map = new google.maps.Map(this.mapRef, options);

    map.addListener('click', () => {
      this.onMapClicked();
    });

    const storeList = isStoreLocator ? allStores : stores;
    let counter = 0;
    storeList.forEach((store) => {
      const storeId = !isStoreLocator ? store.storeId : store.id;
      const { yextRoutableLat, yextRoutableLng } = store;
      const storeIndex = findIndex(allStores, o => o && o.id === storeId);
      if (storeIndex < 0) {
        return;
      }
      const storeDetail = isStoreLocator
        ? store
        : allStores[storeIndex];
      counter += 1;
      const storeLat = parseFloat(yextRoutableLat);
      const storeLng = parseFloat(yextRoutableLng);
      const marker = new google.maps.Marker({
        position: { lat: storeLat, lng: storeLng },
        map,
        icon: `${STATIC_IMAGE}/map_markers/${activeBrand}/marker_${counter}.png`,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: ReactDOMServer.renderToString(<GoogleMapInfoWindow
          store={storeDetail}
          storeProperties={storeDetail}
          deviceType={deviceType}
          activeBrand={activeBrand}
          isStoreLocator={isStoreLocator}
        />),
      });
      marker.addListener('click', () => {
        this.onMarkerClick({
          isStoreLocator,
          store,
          marker,
          infoWindow,
          map,
        });
      });
    });
  };

  render() {
    const {
      storeDetails,
    } = this.props;
    const { allStores } = storeDetails;
    if (!allStores) {
      return null;
    }

    const style = {
      minWidth: '100%',
      minHeight: '100%',
    };

    return (
      <div
        ref={(el) => {
          if (!this.mapRef) {
            this.mapRef = el;
            this.initMap();
          }
        }}
        style={style}
      />
    );
  }
}

export default withStyles(GoogleMap, styles);
export { GoogleMap as GoogleMapVanilla };
