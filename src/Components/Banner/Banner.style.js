import styled from 'styled-components';

export default styled.header`
  position:relative;
  width:100%;
  background-size: cover;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-position:center center;
  color:white;
  height:448px;
  margin-bottom:20px;
  .contents{
    margin-left:30px;
    padding-top:120px;
    height:190px;
    
  }
  .title{
    font-size:3rem;
    font-weight:800;
    margin:0.3rem 0;
  }
  .description{
    width:360px;
    height:80px;
    line-height:1.3;
    margin-top:1rem;
    font-size:0.9rem;
  }
  .buttons{
    button{
      cursor:pointer;
      color: #fff;
      outline: none;
      border:none;
      font-weight:bold;
      border-radius: 8px;
      padding:0.5rem 2rem;
      margin-right:1rem;
      background-color:rgba(51,51,51,0.5)
    }
  }
  .fade{
    height: 7rem;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37,37,37,0.61),
      #111
    );
    width:100%;
    position:absolute;
    bottom:0;
  }
  
`