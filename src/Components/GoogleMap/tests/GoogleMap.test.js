import { fromJS } from 'immutable';
import { shallow, mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { GoogleMapVanilla } from '../GoogleMap';
import { DESKTOP, OUTLET_LOFT } from '../../../../constants';

/* eslint-disable */
const location = fromJS({
  results: [
    {
      address_components: [
        {
          long_name: '10020',
          short_name: '10020',
          types: [
            'postal_code',
          ],
        },
      ],
      formatted_address: 'New York, NY 10020, USA',
      geometry: {
        bounds: {
          northeast: {
            lat: 40.76171890000001,
            lng: -73.97720079999999,
          },
          southwest: {
            lat: 40.757284,
            lng: -73.984174,
          },
        },
        location: {
          lat: 40.7605505,
          lng: -73.98226830000002,
        },
        location_type: 'APPROXIMATE',
        viewport: {
          northeast: {
            lat: 40.76171890000001,
            lng: -73.97720079999999,
          },
          southwest: {
            lat: 40.757284,
            lng: -73.984174,
          },
        },
      },
      place_id: 'ChIJgbqqxP5YwokRfAdWTsd-vEg',
      types: [
        'postal_code',
      ],
    },
  ],
  status: 'OK',
});

const stores = fromJS([
  {
    storeId: '805',
    inventory: '0',
    stockStatus: 'Out of Stock',
    type: '',
    message: '',
    showPickupInStore: 'false',
    storeSelected: 'false',
  },
]);

const storeDetails = {
  allStores: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          -73.9783318,
          40.7576495,
        ],
      },
      properties: {
        Store_Zip: '10020',
        Sat_Open: '09:00',
        Country_Id: 'US',
        Sun_Close: '19:00',
        Mon_Close: '21:00',
        Tue_Open: '09:00',
        Shoes: '1',
        Thu_Open: '09:00',
        Store_City: 'New York',
        Store_Name: 'Between 48th & 49th',
        LoftPlus: 'N',
        Fri_Open: '09:00',
        Wed_Close: '21:00',
        Store_Phone: '(212) 922-3621',
        Store_Hours: 'Sunday 10:00 a.m. - 07:00 p.m.<br/>Monday 09:00 a.m. - 09:00 p.m.<br/>Tuesday 09:00 a.m. - 09:00 p.m.<br/>Wednesday 09:00 a.m. - 09:00 p.m.<br/>Thursday 09:00 a.m. - 09:00 p.m.<br/>Friday 09:00 a.m. - 09:00 p.m.<br/>Saturday 09:00 a.m. - 09:00 p.m.',
        Wed_Open: '09:00',
        Store_State: 'NY',
        distance: '462.5844240238359',
        Fri_Close: '21:00',
        Petites: '1',
        Store_Id: '805',
        Thu_Close: '21:00',
        Store_Address1: '600 5th Avenue',
        Company: 'ATS',
        Sun_Open: '10:00',
        Tue_Close: '21:00',
        Mon_Open: '09:00',
        Time_Zone: 'EST',
        Sat_Close: '21:00',
      },
    },
  ],
};

window.google = {
  maps: {
    InfoWindow: class {},
    LatLng: jest.fn(),
    MapTypeId: {},
    Map: (a, b) => ({ addListener: jest.fn() }),
    Marker: () => ({ addListener: jest.fn() }),
  },
};

describe('<GoogleMapVanilla />', () => {
  let GoogleMapComponent = '';
  beforeEach(() => {
    GoogleMapComponent = shallow(<GoogleMapVanilla
      google
      stores={stores}
      storeDetails={storeDetails}
      lat={location.getIn(['geometry', 'location', 'lat'])}
      lng={location.getIn(['geometry', 'location', 'lng'])}
    />);
  });

  test('should render correctly', () => {
    expect(GoogleMapComponent).toMatchSnapshot();
  });

  test('should not render when no allStores', () => {
    GoogleMapComponent = shallow(<GoogleMapVanilla
      google
      stores={stores}
      storeDetails={{}}
      lat={location.getIn(['geometry', 'location', 'lat'])}
      lng={location.getIn(['geometry', 'location', 'lng'])}
    />);
    expect(GoogleMapComponent).toMatchSnapshot();
  });

  test('should create ref when the component is mounted', () => {
    GoogleMapComponent = mount(<GoogleMapVanilla
      stores={stores}
      storeDetails={storeDetails}
      lat={location.getIn(['geometry', 'location', 'lat'])}
      lng={location.getIn(['geometry', 'location', 'lng'])}
      deviceType={DESKTOP}
      activeBrand={OUTLET_LOFT}
      isStoreLocator
    />);
    expect(GoogleMapComponent).toMatchSnapshot();
  });

  test('should close active info window when map clicked', () => {
    const infoWindow = { close: jest.fn() };
    GoogleMapComponent.setState({ activeInfoWindow: infoWindow });
    const onMapClicked = jest.spyOn(GoogleMapComponent.instance(), 'onMapClicked');
    onMapClicked();
    expect(GoogleMapComponent.state().activeInfoWindow).toEqual(null);
  });

  test('should call onMarkerClick', () => {
    const infoWindow = { open: jest.fn() };
    const onMarkerClick = jest.spyOn(GoogleMapComponent.instance(), 'onMarkerClick');
    onMarkerClick({
      isStoreLocator: true,
      store: storeDetails,
      map: {},
      marker: {},
      infoWindow,
    });
    expect(GoogleMapComponent.state().activeInfoWindow).toEqual(infoWindow);
  });
});
/* eslint-enable */
