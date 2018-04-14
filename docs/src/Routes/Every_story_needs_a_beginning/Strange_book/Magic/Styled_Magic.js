import React from 'react'
import styled from 'styled-components'

export const Styled_Magic = styled.div`
    width:100%;
    height:100%;
    background-image: -webkit-radial-gradient(circle, rgba(0,0,5,0.6), rgba(0,0,0,0.75));
    
    * {
      box-sizing:border-box;
      margin:0;
      padding:0;
    }
     
    .space{
      position:absolute;
      overflow:hidden;
      top:0;
      left:0;
      background-image:
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 10px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 10px),
        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 10px),
        radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 10px);
      background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px; 
      background-position: 0 0, 40px 30px, 130px 270px, 70px 100px;
      animation:spin 25s linear infinite;
      margin:-100% 0 0 -50%;
      opacity:.6;
    }
    
    .container{
      display: inline-block;
      width: 100%;
      height: 100%;
      vertical-align: middle;
      text-align: center;
    }
    
    .container:before{
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-right: -0.25em;
      
    }
    
    .wrapper{
      position: relative;
      display: inline-block;
      height: auto;
      vertical-align: middle;
      margin: 0 auto;
      text-align: center;
    }
    
    .blackhole{
      position:relative;
      z-index: 1000;
      display:inline-block;
      width:100px;
      height:100px;
      margin:0 auto;
      border:4px solid rgba(0,0,0,1);
      border-radius:50%;
      animation:spin 3s infinite linear;
      background:#000;
      box-shadow:0 0 50px 50px rgba(0,0,0,1);
    }
    
    .debris {
      position:absolute;
      top:160%;
      left:100%;
      width:10px;
      height:10px;
      margin:-5px 0 0 -5px;
      background: darkgreen;
      border-radius:50%;
      animation:drain 5s infinite ease-in;
    }
    
    .debris + .debris{
      left:100%;
      animation-delay:1200ms;
      transform:scale(.7);
      animation-speed:7s;
      background: darkgoldenrod;
    }
    
    .debris + .debris + .debris{
      top:0%;
      left:185%;
      animation-delay:500ms;
      transform:scale(.8);
      animation-speed:4s;
      background: darkgreen;
    }
    
    .debris + .debris + .debris + .debris{
      top:200%;
      left:250%;
      animation-delay:700ms;
      transform:scale(.4);
      animation-speed:2s;
      background: darkslategrey;
    }
    
    .debris + .debris + .debris + .debris + .debris {  
      top:150%;
      left:330%;
      animation-delay:200ms;
      transform:scale(.5);
      background: darkcyan;
    }
    .debris + .debris + .debris + .debris + .debris + .debris {
      animation-delay:2000ms;
      transform:scale(.7);
      animation-speed:6s;
      background: darkred;
    }
    
    .debris + .debris + .debris + .debris + .debris + .debris + .debris {
      top:300%;
      left:200%;
      animation-delay:3000ms;
      transform:scale(.3);
      background: darkmagenta;
    }
    
    .debris + .debris + .debris + .debris + .debris + .debris + .debris + .debris {
      top:320%;
      left:180%;
      animation-delay:400ms;
      transform:scale(1.2);
      background: darkolivegreen;
    }
    
    @keyframes drain{
      95%{
        opacity:1;
      }
      to{
        top:50%;
        left:50%;  
      opacity:0;
      }
    }
    
    @keyframes spin{
      to{
         transform:rotate(360deg);
      }
    }
`