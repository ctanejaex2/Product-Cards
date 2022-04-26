import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  imageResult: any;
  constructor(private http: HttpClient) { }
  imageCountPayload = { "sizeRange": { "lower": 500, "upper": 10000 }, "priceRange": { "lower": 10000, "upper": 10000000 }, "location": { "latitude": "30.266898", "longitude": "-97.742798", "name": "Austin, TX Area", "type": "Market", "marketId": 269, "marketName": "Austin", "city": "", "state": "TX", "stateName": null, "category": "", "categoryId": 0, "categoryIds": [], "ipAddress": null, "builder": null, "isNPSrp": false }, "searchFacet": { "bed": 0, "bath": 0, "story": 0, "radius": 0 }, "isNational": true, "topMatchesOnly": false, "features": [], "isMatchingRequired": true, "preferences": { "marketId": 142, "bedroomMin": 1, "bedroomMax": 10, "priceMin": 300000, "priceMax": 8600000, "priceType": null, "bathMin": 2, "bathMax": 10, "storiesMax": 0, "sqftMin": 0, "startDate": null, "endDate": null, "roomPreference": null, "marketLocation": { "latitude": "39.290298", "longitude": "-76.612503", "name": "Baltimore, MD Area" }, "garage": null, "hasPool": null }, "isSearchHome": false, "boardId": 270067 };
  imageResultsPayload = { "sizeRange": { "lower": 500, "upper": 10000 }, "priceRange": { "lower": 10000, "upper": 10000000 }, "location": { "latitude": "30.266898", "longitude": "-97.742798", "name": "Austin, TX Area", "type": "Market", "marketId": 269, "marketName": "Austin", "city": "", "state": "TX", "stateName": null, "category": "", "categoryId": 0, "categoryIds": [], "ipAddress": null, "builder": null, "isNPSrp": false }, "searchFacet": { "bed": 0, "bath": 0, "story": 0, "radius": 0 }, "paging": { "pageSize": 10, "page": 1 }, "isNational": true, "topMatchesOnly": false, "features": [], "isMatchingRequired": true, "preferences": { "marketId": 142, "bedroomMin": 1, "bedroomMax": 10, "priceMin": 300000, "priceMax": 8600000, "priceType": null, "bathMin": 2, "bathMax": 10, "storiesMax": 0, "sqftMin": 0, "startDate": null, "endDate": null, "roomPreference": null, "marketLocation": { "latitude": "39.290298", "longitude": "-76.612503", "name": "Baltimore, MD Area" }, "garage": null, "hasPool": null }, "isSearchHome": false, "boardId": 270067 };

  setPayloadForImages(numOfBeds: number, numOfBath: number, numOfStory: number, priceLow: number, priceHigh: number, pageNum: number) {
    this.imageResultsPayload.paging.page = pageNum;
    this.imageResultsPayload.priceRange.lower = priceLow;
    this.imageResultsPayload.priceRange.upper = priceHigh;
    this.imageResultsPayload.searchFacet.bed = numOfBeds;
    this.imageResultsPayload.searchFacet.story = numOfStory;
    this.imageResultsPayload.searchFacet.bath = numOfBath;


  }
  
  setPayloadPage(pageNum: number) {

    this.imageResultsPayload.paging.page = pageNum;
  }

  getImagesByPage() {
    return this.http.post('https://sprint-api.homluv.com/api/v3search/results?userId=%7Bec92dc5e-9e21-4511-a691-01aa3aa2d0b2%7D&ctr=8', this.imageResultsPayload);
  }

  getImageSearchCount() {
    return this.http.post('https://sprint-api.homluv.com/api/v3search/resultcounts', this.imageCountPayload)
  }


  setPayloadFilters(numOfBeds: number, numOfBath: number, numOfStory: number, priceLow: number, priceHigh: number) {

    this.imageCountPayload.priceRange.lower = priceLow;
    this.imageCountPayload.priceRange.upper = priceHigh;
    this.imageCountPayload.searchFacet.bath = numOfBath;
    this.imageCountPayload.searchFacet.bed = numOfBeds;
    this.imageCountPayload.searchFacet.story = numOfStory;

  }

}
