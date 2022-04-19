import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-latest-work',
  templateUrl: './latest-work.component.html',
  styleUrls: ['./latest-work.component.scss']
})
export class LatestWorkComponent implements OnInit {

  constructor() { }

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

    //CERTIFICATE CODE
    $(".certificat-div-one").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.mozambique').css( "display", "block");
    });
    $(".certificat-div-two").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.botswana').css( "display", "block");
    });
    $(".certificat-div-three").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.djibouti').css( "display", "block");
    });
    $(".certificat-div-four").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.gabon').css( "display", "block");
    });
    $(".certificat-div-five").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.mali').css( "display", "block");
    });
    $(".certificat-div-six").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.togo').css( "display", "block");
    });
    $(".certificat-div-seven").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.guinea-bissau').css( "display", "block");
    });
    $(".certificat-div-eight").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.nigeria').css( "display", "block");
    });
    $(".certificat-div-nine").on('click', function() {
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
        $('.certificate').css( "display", "none");
        $('.seychelles').css( "display", "block");
    });
    $(".couverture-page").on('click', function() {
        $('.couverture-page').fadeOut(1000);
        $(".couverture-page").css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        });
    });
  }

}
