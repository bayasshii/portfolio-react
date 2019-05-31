import React, { Component } from 'react'
import Swiper from 'react-id-swiper'
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm'
import './swiper.css'

export default class FortanaSwiper extends Component {
     render() {
       const params = {
         modules: [Pagination, Navigation],
         spaceBetween: 50,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
       return(
           <Swiper {...params}>
             <div>
               <img alt="foltana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana1.svg" />
             </div>
             <div>
               <img alt="foltana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana2.svg" />
             </div>
             <div>
               <img alt="foltana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana4.svg" />
             </div>
             <div>
               <img alt="foltana" src="https://s3-ap-northeast-1.amazonaws.com/treeethreee/fortana3.svg" />
             </div>
           </Swiper>
       )
     }
   }
