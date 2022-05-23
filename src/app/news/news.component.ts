import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/ArticleModel';
import { NewsService } from '../services/news.service';
import {formatDate} from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  Articles:Article[]=[];
  searchQuery:string='';
  found:boolean= true;

  constructor( private http: HttpClient,private blogService:NewsService) { }

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

    this.getArticles()
  }

  getArticles():void {
    this.blogService.getAllArticles()
    .subscribe((res)=>{
      res.forEach(el=>{
        if (this.Articles.length < 4) {
          this.Articles.push({
            "title":el.title,
            "content":el.content,
            "concerning":el.concerning,
            'id':el.id,
            "created_at":formatDate(el.created_at,'dd/MM/yyyy',"en")
          })
        }
       
      })
      
    })
  }
  search(value: string):void {
    this.searchQuery=value 
    if (this.searchQuery !== '') {
      this.Articles=[]
      this.blogService.getAllArticles().subscribe((response)=>{
        response.map(el=>{
          if (el.title.includes(this.searchQuery) == true || 
              el.content.includes(this.searchQuery) == true || 
              el.concerning.includes(this.searchQuery) == true ) {
            this.found = true
            console.log('trouvé')
            console.debug(el)
            if (this.Articles.length < 4 ) {
              this.Articles.push({
                "title":el.title,
                "content":el.content,
                "concerning":el.concerning,
                'id':el.id,
                "created_at":formatDate(el.created_at,'dd/MM/yyyy',"en")
              })
            }
            
          } else {
            this.found = false
            console.log('pas trouvé')
          }
        })
      })
      
    }
  }

}
