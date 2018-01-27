import { Component, OnInit } from '@angular/core';
import { CourService } from 'app/services/cour.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cour-detail',
  templateUrl: './cour-detail.component.html',
  styleUrls: ['./cour-detail.component.css']
})
export class CourDetailComponent implements OnInit {

  currentUrl;
  messageClass;
  message;
  cour = [] ;
  categories = [];
  comments = [];
  constructor(private courService: CourService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getbyid();
  }

  // get cours by id
  getbyid() {
    this.currentUrl = this.route.snapshot.params;

    this.courService.getCoursById(this.currentUrl.id).subscribe(
      data => {

        this.cour = data; // Save blog object for use in HTML
        this.categories = data.categories;
        this.comments = data.comments;
        console.log( this.categories);
      }
    );
  }

  /*// get cours by id
  getbyid() {
    this.currentUrl = this.route.snapshot.params;
    this.courService.getCoursById(this.currentUrl.id).subscribe(
      data => {
        // Check if GET request was success or not
        if (!data.success) {
          this.messageClass = 'alert alert-danger'; // Set bootstrap error class
          this.message = data.message; // Set error message
        } else {
          this.cours = data; // Save blog object for use in HTML

        }
      }
    );
  }*/

}
