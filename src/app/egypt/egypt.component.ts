import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-egypt",
  templateUrl: "./egypt.component.html",
  styleUrls: ["./egypt.component.css"],
})
export class EgyptComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  egypt: any;
  ngOnInit(): void {
    this.http
      .get(
        "https://newsapi.org/v2/top-headlines?country=eg&apiKey=0a971d99ad6f4b428c081a6957de8645"
      )
      .subscribe((data: any) => {
        console.log(data.articles);
        this.egypt = data.articles.splice(4);
        for (var i = 0; i < this.egypt.length; i++) {
          if (this.egypt[i].description) {
            if (this.egypt[i].description.length > 180) {
              this.egypt[i].description =
                this.egypt[i].description.slice(0, 180) + "...";
            }
          }
        }
      });
  }

  goTo() {
    this.router.navigateByUrl("/usa");
  }
}
