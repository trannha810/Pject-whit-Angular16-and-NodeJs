// bai3.component.ts
import { Component } from '@angular/core';
import { Products } from './products';

import { ProductsService } from './products.service';
import { PaginationInstance } from 'ngx-pagination';

@Component({
    selector: 'ProductLoveComponent',
    template: `
    <section class="home" id="home">
    <div class="homeContent">
        <h2>Delicious Cake for Everyone </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum excepturi doloribus, fuga quod deserunt
            recusandae?</p>
        <div class="home-btn">
            <a href="#"><button>see more</button></a>
        </div>
    </div>

  </section>
  <section class="blogs" id="blogs">
  <div class=" swiper blogs-row">
      <div class="swiper-wrapper">
          <div class=" swiper-slide box">
              <div class="img">
                  <img src="/assets/images/blog-img3.png" alt="">
              </div>
              <div class="content">
                  <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
                      corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
                      laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
                      eaque at.</p>
                  <a href="#blogs" class="btn">learn more</a>
              </div>
          </div>
          <div class=" swiper-slide box">
              <div class="img">
                  <img src="/assets/images/blog-img2.png" alt="">
              </div>
              <div class="content">
                  <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
                      corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
                      laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
                      eaque at.</p>
                  <a href="#blogs" class="btn">learn more</a>
              </div>
          </div>
          <div class=" swiper-slide box">
              <div class="img">
                  <img src="/assets/images/blog-img2.png" alt="">
              </div>
              <div class="content">
                  <h3>Caramel Bourbon Vanilla Cupcakes </h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum voluptatum
                      corporis accusamus aperiam fugiat tempora blanditiis labore dolor aliquid maxime nobis
                      laborum sed soluta voluptatibus aspernatur natus, dicta quisquam.</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ab ullam reiciendis sint
                      eaque at.</p>
                  <a href="#blogs" class="btn">learn more</a>
              </div>
          </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>


  </div>
</section>
     
  
  
  
  <!--danhmuc-->
  
  
  <!-- blogs section start here  -->

  <div class="container ">
  <div class="row maunen1">
      <ul class="nav nav-tabs " style="padding:10px 10px 0px 10px;font-size: 30px; color:black;">
          <p style="padding:10px 10px 0px 10px;font-size: 30px;">DANH MỤC</p>
          <li class="nav-item dropdown">
          </li>
          <li class="nav-item ">
              <a href="#noibat" [routerLink]="['']"  class="nav-link active" data-toggle="tab">Sản Phẩm Bán Chạy</a>
          </li>
  
          <li class="nav-item">
              <a href="#" [routerLink]="['/sanphamyeuthich']"  class="nav-link" data-toggle="tab">Sản phẩm được yêu thích</a>
          </li>
          <li class="nav-item">
              <a href="#khuyenmai"  [routerLink]="['/khuyenmai']" class="nav-link " data-toggle="tab">Khuyến Mãi</a>
          </li>
          <li>
          <input
          type="text"
          size="50"
          [(ngModel)]="searching"
          (ngModelChange)="filterResults()"
          name="searching"
          id=""
          class="input form-control"
          placeholder="Tìm sản phẩm"
          mall
          >
          </li>
      </ul>
  </div>
  </div>
  <!--sanpham-->
  <section class="product" id="product">
    <div class="heading">
      <h2>Our Exclusive Products</h2>
    </div>
      <div class="swiper product-row">
      <ng-container *ngFor="let item of displayedProductList | paginate: {itemsPerPage:8,currentPage:p}">
        <div class="swiper-wrapper"  >
          <div class="swiper-slide box" style="background-color: rgb(213, 213, 209)">
            <div class="img">
              <img [src]="item.imageUrl" alt="{{ item.productName }}">
            </div>
            <div class="product-content">
              <h3><a [routerLink]="['/product-details', item.id]">{{ item.productName }}</a></h3>
              <p></p>
              <p>{{ item.price | currency:'USD':true }}</p>
              <div class="orderNow">
                <button [routerLink]="['/product-details', item.id]">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        </ng-container>
      </div>
  
    <div class="swiper-pagination"></div>
    <div class="swiper product-row">
    <ng-container *ngFor="let item of filterProductList.slice(10,13)">
      <div class="swiper-wrapper">
        <div class="swiper-slide box" style="background-color: rgb(213, 213, 209)">
          <div class="img">
            <img [src]="item.imageUrl" alt="{{ item.productName }}">
          </div>
          <div class="product-content">
            <h3><a [routerLink]="['/product-details', item.id]">{{ item.productName }}</a></h3>
            <p></p>
            <p>{{ item.price | currency:'USD':true }}</p>
            <div class="orderNow">
              <button [routerLink]="['/product-details', item.id]">Order Now</button>
            </div>
          </div>
        </div>
  
      </div>
      </ng-container>
      <div class="swiper-pagination"></div>
    </div>
  </section>
  <pagination-controls (pageChange)="p = $event"></pagination-controls>
    `,
    styles: [`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');

    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24
    }
    
    :root{
        --black: #1B1722;
        --white : #F0F0F0;
        --box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    *{
        font-family: 'Quicksand', sans-serif;
        margin: 0; padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        text-decoration: none;
        text-transform: capitalize;
        transition: .2s linear;
    }
    html{
        font-size: 62.5%;   
        overflow-x: hidden;
        scroll-padding-top: 7rem;
        scroll-behavior: smooth;
    }
    html::-webkit-scrollbar{
        width: .8rem;
    }
    html::-webkit-scrollbar-track{
        background: transparent;
    }
    html::-webkit-scrollbar-thumb{
        background-color: var(--white);
        border-radius: 5rem;
    }
    a {
      text-decoration: none; /* Loại bỏ gạch chân */
      color: black; /* Màu chữ đen */
    }
    a:hover {
      text-decoration: underline; /* Gạch chân */
      olor: black; /* Màu chữ đen */
    }
      .home {
        min-height: 100vh;
        display: flex;
        align-items: center;
        background: url(/assets/images/back1.jpg) no-repeat;
        background-size: cover;
        background-position: center center;
    }
    .home .homeContent{
        width: 50%;
        float: left;
        text-align: center;
        padding: 4rem;
    }
    .home .homeContent h2{
        font-size: 7rem;
        font-weight: bolder;
        margin-bottom: 2rem;
        line-height: 7rem;
        color: black;
        text-shadow: var(--box-shadow);
    }
    .home .homeContent p{
        font-size: 1.8rem;
        line-height: 2;
        margin-bottom: 2rem;
    }
    .home .homeContent .home-btn{
        height: 3rem;
    }
    .home .homeContent .home-btn button{
        font-size: 1.8rem;
        background-color:black ;
        color: white;
        border-radius: .7rem;
        padding: .7rem 2.4rem;
        cursor: pointer;
    }
    .home .homeContent .home-btn button:hover{
        font-size: 2rem;
    }
    section{
        padding: 2rem 7%;
    }
    .blogs{
      background: url(/assets/images/backGround.png) no-repeat;
      background-size: cover;
      background-position: center center;
    }
    .blogs  .blogs-row .box {
      display: flex;
      align-items: center;
      background-color: var(--white);
      flex-wrap: wrap;
    }
    .blogs .blogs-row .b    ox .img{
      flex: 1 1 45rem;
    }
    .blogs .blogs-row .box .img img{
      width: 100%;
      padding: 5rem;
    }
    .blogs .blogs-row .box .content{
      flex: 1 1 45rem;
      padding: 2rem;
    }
    .blogs .blogs-row .box .content h3{
      font-size: 3.5rem;
      color: black;
      text-shadow: var(--box-shadow);
    
    }
    .blogs .blogs-row .box .content p{
      font-size: 1.6rem;
      color: black;
      padding: 1rem 0;
      line-height: 1.8;
      
    }
    .blogs .blogs-row .box .content a{
      font-size: 2rem;
      cursor: pointer;
    }
    .blogs .blogs-row .box .content a:hover{
      color: black;
      text-shadow: var(--box-shadow);
    }
    .product .product-row{
      margin-bottom: 5rem;
      display: flex;
      align-items: center;
    }
    .product .product-row .box{
      display: flex;
      flex-direction: column;
      width: 50rem;
      background-color: white;
      align-items: center;
      text-align: center;
      padding: 2rem;
      gap: 1.5rem;
      border-radius: 3rem;
      margin-right: 3rem;
    }
    .product .product-row .img img{
      height: 100%;
      width: 100%;
    }
    .product .product-row .img img:hover{
      transform: scale(1.1);
    }
    .product .product-row .content {
      margin-bottom: 4rem;
    }
    .product .product-row .product-content h3{
      font-size: 4rem;
      color: black;
    }
    .product .product-row .product-content p{
      font-size: 1.5rem;
      line-height: 1.6;
      color: black;
    }
    .product .product-row .product-content .orderNow{
      height: 3rem;
      margin-top: 2rem;
      margin-bottom: 3rem;
    }
    .product .product-row .product-content .orderNow button{
      font-size: 1.8rem;
      background-color:black ;
      color: white;
      border-radius: .7rem;
      padding: .7rem 2rem;
      cursor: pointer;
    }
    .product .product-row .product-content .orderNow button:hover{
      font-size: 2rem;
    } 
    .swiper-pagination-bullet{
      background-color: black;
    }
    .swiper-button-next{
      color: black;
    }
    .swiper-button-prev{
      color: black;
    }   
    @media (max-width:991px){
      html{
          font-size: 55%;
      }
      .header{
          padding: 1.3rem 3rem;
      }
      .home .homeContent{
          margin-left: 0;
          width: 80%;
      }
    }
    
    @media (max-width:768px) {
      #menu-bar{
          display: inline-block;
      }
      .header .navbar{
          position: absolute;
          top: 100%;
          right: -100%;
          width: 25rem;
          background-color: var(--white);
          height: 80vh;
      }
      .header .navbar.active{
          right: 0;
      }
      .header .navbar a{
          display: block;
          font-size: 2rem;
          color: black;
          margin: 1.5rem;
      }
    
      .home .homeContent{
          margin-left: 0;
          width: 90%;
      }
    }
    
    @media (max-width:600px){
      html{
          font-size: 50%;
      }
    }
     
   ` ],
})
export class ProductLoveComponent {

  filterProductList: Products[] = [];
  searching: string = '';
  key: string = '';
  reverse: boolean = false;
  p: number = 1;
  displayedProductList: Products[] = [];
  itemsPerPage: number = 12;
  constructor(private productService: ProductsService) { }
  config: PaginationInstance = {
    id: 'pagination',
    itemsPerPage: 10,
    currentPage: 1};
  ngOnInit(): void {
    this.loadProducts();}
  loadProducts() {
    this.productService.getAllProductList().subscribe(
      (products: Products[]) => {
        this.filterProductList = products;
        this.updateDisplayedProductList();},
      (error) => {
        console.error('Error fetching products:', error);});}
  updateDisplayedProductList() {
    const startIndex = (this.p - 1) * this.itemsPerPage;
    this.displayedProductList = this.filterProductList.slice(startIndex, startIndex + this.itemsPerPage);}
  onPageChange(pageNumber: number) {
    this.p = pageNumber;
    this.updateDisplayedProductList();}
  filterResults() {
    if (!this.searching) {
        this.loadProducts();
    } else {
        this.productService.getAllProductList().subscribe(
            (products: Products[]) => {
                this.filterProductList = products.filter(
                    (product) => product.productName.toLowerCase().includes(this.searching.toLowerCase()));
                this.p = 1; // Reset current page to 1
                this.updateDisplayedProductList();},
            (error) => {console.error('Error fetching products:', error);});}}}