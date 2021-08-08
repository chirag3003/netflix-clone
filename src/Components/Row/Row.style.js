import styled from 'styled-components';

export default styled.div`
  margin-bottom:20px;
  width:100%;
  //overflow-x: auto;
  .row_movies{
    padding:20px 10px;
    display:flex;
    width:100%;
    overflow-y: auto;
    
      img{
        transition: transform 0.4s;
        object-fit:contain;
        margin:5px 5px;
        max-height:220px;
        :hover{
          transform:scale(1.08);
          z-index:10;
        }
      }
      .poster{
        max-height:350px;
        :hover{
          transform:scale(1.1);
        }
      }
      
    
    ::-webkit-scrollbar{
      width: 5px;
      height: 2px;
    }
    ::-webkit-scrollbar-thumb{
      background: #444;
      border-radius: 30px;
    }
    ::-webkit-scrollbar-track{
      background: #F0F0F0;
      border-radius: 30px;
      //box-shadow: inset 0px 0px 0px 0px #F0F0F0;
    }
  }
  
`