import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-usa",
  templateUrl: "./usa.component.html",
  styleUrls: ["./usa.component.css"],
})
export class UsaComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  usa: any;

  ngOnInit(): void {
    this.http
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0a971d99ad6f4b428c081a6957de8645"
      )
      .subscribe((data: any) => {
        console.log(data.articles);
        this.usa = data.articles.splice(4);
        for (var i = 0; i < this.usa.length; i++) {
          if (this.usa[i].description) {
            if (this.usa[i].description.length > 180) {
              this.usa[i].description =
                this.usa[i].description.slice(0, 180) + "...";
            }
          }
        }
      });
  }

  goTo() {
    this.router.navigateByUrl("/");
  }
}
