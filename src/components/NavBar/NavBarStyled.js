import styled from 'styled-components';
export const Nav = styled.div`
height: 60px;
width: 100%;
display: flex;
align-items: center;
position: relative;
padding: 0.5rem 0rem;
background-color: #fff;
color: black;
box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
.navigation-menu {
  margin-left: auto;
}
`;
export const Logo = styled.div`
flex-basis: 23%;
display: flex;

`;
export const Img = styled.img`
width: 96px;
height: 50px;
margin-left: 16px;
margin-top: 15px;

`;
export const Head = styled.h2`

width: 50%;
margin-top: 27px;
font-size: 20px;
color:#000;
@media screen and (max-width:1166px) {
  Head{
    font-size:18px;
  }
}
`;
export const Links = styled.div`
display: flex;
flex-basis: 35%;
cursor: pointer;
@media screen and (max-width: 768px) {
    Links Ul {
      display: none;
    }
  }

`;
export const Ul = styled.ul`
display: flex;
padding: 0;
cursor: pointer;

`;
export const Li = styled.li`
list-style-type: none;
margin: 0 1rem;
color:#000;

`;



export const Hamburger= styled.button`
border: 0;
height: 40px;
width: 40px;
padding: 0.5rem;
border-radius: 50%;
background-color: #283b8b;
cursor: pointer;
transition: background-color 0.2s ease-in-out;
position: absolute;
top: 50%;
right: 25px;
transform: translateY(-50%);
display: none;
@media screen and (max-width: 768px) {
  Hamburger {
    display: block;
  }
}
@media screen and (max-width: 768px) {
  Ul {
    display: none;
  }
}
`;

// export const Create = styled.li`
// color: #4375FF;
// border: 1px solid #4375FF;
// padding: 10px;
// width: 60px;
// margin-left: 50px;
// color: var(--clr-grey-1);
// font-size: 1.2rem;
// text-transform: capitalize;
// letter-spacing: var(--spacing);
// padding: 0.5rem;
// border-radius: 25px;
// `;
