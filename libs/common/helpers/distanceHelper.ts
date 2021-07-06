import { PostalCodeDto } from '@libs/common/models';

export class DistanceHelper {
  // https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula/27943#27943
  public static getDistanceFromLatLonInKm(
    userLocation: PostalCodeDto,
    providerLongitude: number,
    providerLatitude: number
  ) {
    try {
      if (
        providerLongitude && providerLatitude &&
        userLocation
      ) {
        const lat1 = userLocation.latitude;
        const lon1 = userLocation.longitude;
        const lat2 = providerLatitude;
        const lon2 = providerLongitude;
          var R = 6371; // Radius of the earth in km
          var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
          var dLon = this.deg2rad(lon2 - lon1);
          var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.deg2rad(lat1)) *
              Math.cos(this.deg2rad(lat2)) *
              Math.sin(dLon / 2) *
              Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km
          return Math.round(d * 100) / 100
          //return d;
      }
      return -1;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  private static deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
}
