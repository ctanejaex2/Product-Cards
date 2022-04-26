import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-imagefilter',
  templateUrl: './imagefilter.component.html',
  styleUrls: ['./imagefilter.component.css']
})
export class ImagefilterComponent implements OnInit {
  imageResult: string[] = [];

  constructor(private imageService: ImagesService, private router: Router, private route: ActivatedRoute) { }


  filteredImagesCount: any;
  filteredImagesResult: any;
  ngOnInit(): void {

    const queryParams = this.route.snapshot.queryParams;
    if (Object.keys(queryParams).length > 0) {
      this.imageService.setPayloadFilters(queryParams['bed'], queryParams['bath'], queryParams['story'], queryParams['lower'], queryParams['upper'])
      this.filteredImagesCount = this.imageService.getImageSearchCount();
      this.imageService.setPayloadForImages(queryParams['bed'], queryParams['bath'], queryParams['story'], queryParams['lower'], queryParams['upper'], queryParams['page'])
      this.imageService.getImagesByPage().subscribe((response: any) => {
        response['searchResultModels'].forEach((element: any) => {
          this.imageResult.push(element['imageInfo'].path);
        });
      });

    } else {
      this.imageService.getImagesByPage().subscribe((response: any) => {
        response['searchResultModels'].forEach((element: any) => {
          this.imageResult.push(element['imageInfo'].path);
        });
      });

      this.filteredImagesCount = this.imageService.getImageSearchCount();
    }
  }
  onSubmitFilters(numOfBeds: string, numOfBath: string, numOfStory: string, priceLow: string, priceHigh: string) {

    this.router.navigate(['images'], { queryParams: { bed: numOfBeds, bath: numOfBath, story: numOfStory, lower: priceLow, upper: priceHigh } })
    this.imageResult = [];
    this.createPayloadWithFilters(numOfBeds, numOfBath, numOfStory, priceLow, priceHigh);
    this.filteredImagesCount = this.imageService.getImageSearchCount();

    this.imageService.setPayloadForImages(parseInt(numOfBeds), parseInt(numOfBath), parseInt(numOfStory), parseInt(priceLow), parseInt(priceHigh), 1);

    this.imageService.getImagesByPage().subscribe((response: any) => {
      response['searchResultModels'].forEach((element: any) => {
        this.imageResult.push(element['imageInfo'].path);
      });
    })
  }

  onPageSelected(pageNum: number) {
    this.imageService.setPayloadPage(pageNum);
    this.router.navigate(['images'], { queryParams: { page: pageNum }, queryParamsHandling: 'merge' })
    this.imageService.getImagesByPage().subscribe((response: any) => {
      this.imageResult = [];
      response['searchResultModels'].forEach((element: any) => {
        this.imageResult.push(element['imageInfo'].path);

      });
    });
  }

  createPayloadWithFilters(numOfBeds: string, numOfBath: string, numOfStory: string, priceLow: string, priceHigh: string) {
    this.imageService.setPayloadFilters(parseInt(numOfBeds), parseInt(numOfBath), parseInt(numOfStory), parseInt(priceLow), parseInt(priceHigh));
  }

}
