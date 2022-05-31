import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/ArticleModel';
import { NewsService } from '../services.services/news.service';
declare var $: any;

@Component({
  selector: 'app-one-new',
  templateUrl: './one-new.component.html',
  styleUrls: ['./one-new.component.scss']
})
export class OneNewComponent implements OnInit {

  article: any={}
  constructor( private activatedRoute: ActivatedRoute,private blogService:NewsService) { }

  ngOnInit(): void {
    //NAVAR SERVICE ITEM DROPDOWN CODE
    $(".services-drop").on('mouseover', function() {
        $('.services-dropdown').fadeIn();
        $('.services-dropdown').css("display","block");
    });
    $(".services-dropdown").on('mouseover', function() {
        $(".services-drop").css({
          background: '$principal-orange-hexa'
        });
    });
    $(".services-drop").on('mouseleave', function() {
        $('.services-dropdown').fadeOut();
        $('.services-dropdown').css("display","none");
    });

    //MOBILE MENU CODE
    $(".menu-icon").on('click', function() {
        $('.mobile-menu-bloc').fadeIn();
        $('.menu-icon').css("display","none");
        $('.menu-icon-close').css("display","block");
    });
    $(".services-mobile").on('click', function() {
        $('.hide-mobile-dropdown').fadeIn();
        $('.mobile-drop').css("display","none");
        $('.mobile-dropdown').fadeIn();
    });
    $(".hide-mobile-dropdown").on('click', function() {
        $('.hide-mobile-dropdown').fadeOut();
        $('.mobile-dropdown').css("display","none");
        $('.mobile-drop').fadeIn();
    });
    $(".menu-icon-close").on('click', function() {
        $('.mobile-menu-bloc').fadeOut();
        $('.menu-icon').css("display","block");
        $('.menu-icon-close').css("display","none");
    });

    // get one article
    this.activatedRoute.params.subscribe(params => {
      let id:number = params['id'];
      if (id > 0 ) {
        this.blogService.getArticle(id)
          .subscribe({
            next: (response)=>{
              this.article = {
                "title": response.title,
                "content": response.content,
                "concerning": response.concerning,
                "created_at":response.created_at
              } 
            },
            error: (error)=>{
              console.log("error : ", error);
              
            }
          })
      } 
      
    })

  }

}
