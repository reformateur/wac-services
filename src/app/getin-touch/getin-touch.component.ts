import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
declare var $: any;

import { MailModel } from "../models/MailModel";
import { GetinTouchService } from '../services.services/getin-touch.service';

@Component({
  selector: 'app-getin-touch',
  templateUrl: './getin-touch.component.html',
  styleUrls: ['./getin-touch.component.scss']
})
export class GetinTouchComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  sended= false

  constructor(private router: Router,public fb: FormBuilder,private ContactService:GetinTouchService,private http:HttpClient) { 
    this.form = this.fb.group({
      fullname: ['',[Validators.required,Validators.minLength(5) ]],
      comapny:['',Validators.required],
      description:['',[Validators.required,Validators.maxLength(100)]],
      email:['',[Validators.required,Validators.email]],
      files:[""]
    });

    // if the url change
    router.events.subscribe((event: Event) => {
      
      if (event instanceof NavigationEnd) {
          // Hide notif indicator
          this.sended= false
      }
      
    });
  }

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

  }
    /*uploadFile(event:any) {
      const file = event.target
      this.form.patchValue({
        files: file.name,
      }); 
      console.log(file);
    }*/
  get f(): { [key: string]: AbstractControl } {    
    return this.form.controls;
  }
  // get in touch function , handle email sending
  submitForm() {
    this.submitted = true;
    this.ContactService.sendMail(this.form.value)
      .subscribe({
        next: (response) => {
          this.sended = true
          
        },
        error: (error) => {
          console.error("error",error)
          this.sended = false
        }
      });
  }
}
