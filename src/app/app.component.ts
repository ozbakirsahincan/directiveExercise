import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage: number = 0;
  images: any[] = [
    {
      title: "Dağlar Dağlar",
      url: "https://images.unsplash.com/photo-1637710527019-b43708c651df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
    },
    {
      title: "Deniz Kum Güneş",
      url: "https://images.unsplash.com/photo-1625973385769-b9113cf6c2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Kıyılar Kıyılar",
      url: "https://images.unsplash.com/photo-1644496566550-55d6b18045e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    },
    {
      title: "Çiçekler",
      url: "https://images.unsplash.com/photo-1644748865694-2db1be00e13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2304&q=80"
    },
    {
      title: "Dağlar Dağlar",
      url: "https://images.unsplash.com/photo-1637710527019-b43708c651df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
    },
    {
      title: "Deniz Kum Güneş",
      url: "https://images.unsplash.com/photo-1625973385769-b9113cf6c2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Kıyılar Kıyılar",
      url: "https://images.unsplash.com/photo-1644496566550-55d6b18045e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    },
    {
      title: "Çiçekler",
      url: "https://images.unsplash.com/photo-1644748865694-2db1be00e13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2304&q=80"
    },
    {
      title: "Dağlar Dağlar",
      url: "https://images.unsplash.com/photo-1637710527019-b43708c651df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
    },
    {
      title: "Deniz Kum Güneş",
      url: "https://images.unsplash.com/photo-1625973385769-b9113cf6c2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Kıyılar Kıyılar",
      url: "https://images.unsplash.com/photo-1644496566550-55d6b18045e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    },
    {
      title: "Çiçekler",
      url: "https://images.unsplash.com/photo-1644748865694-2db1be00e13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2304&q=80"
    },
    {
      title: "Dağlar Dağlar",
      url: "https://images.unsplash.com/photo-1637710527019-b43708c651df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
    },
    {
      title: "Deniz Kum Güneş",
      url: "https://images.unsplash.com/photo-1625973385769-b9113cf6c2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Kıyılar Kıyılar",
      url: "https://images.unsplash.com/photo-1644496566550-55d6b18045e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    },
    {
      title: "Çiçekler",
      url: "https://images.unsplash.com/photo-1644748865694-2db1be00e13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2304&q=80"
    },
    {
      title: "Dağlar Dağlar",
      url: "https://images.unsplash.com/photo-1637710527019-b43708c651df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
    },
    {
      title: "Deniz Kum Güneş",
      url: "https://images.unsplash.com/photo-1625973385769-b9113cf6c2cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      title: "Kıyılar Kıyılar",
      url: "https://images.unsplash.com/photo-1644496566550-55d6b18045e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
    },
    {
      title: "Çiçekler",
      url: "https://images.unsplash.com/photo-1644748865694-2db1be00e13a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2304&q=80"
    },
  ]

  pageIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  // changePage(pageNumber: number) {
  //   this.currentPage = pageNumber;
  //   console.log(pageNumber);

  // }

}
