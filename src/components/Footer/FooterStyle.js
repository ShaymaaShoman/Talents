import styled from 'styled-components';

export const Container = styled.div`
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-18)/var(--unnamed-line-spacing-24) var(--unnamed-font-family-segoe-ui);
padding: 20px 10px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin-left:50px;
    margin-top:-290px;
    top: 1016px;
    opacity: 1;
    `;
    export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
  
  `;
  export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(100px, 1fr));
  grid-gap: 10px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;    
export const Heading = styled.p`
font-size: 14px;
color: #000000;
cursor: pointer;
`;

// export const PrivecyFooter= styled.div`
// display: flex;
// position: fixed;
// left: 0;
// bottom: 0;
// width: 100%;
// color: white;
// font-size: 14px;
// `;
// export const  Service= styled.li`
// margin-left: 50px;
// color: var(--clr-grey-1);
// font-size: 1.2rem;
// text-transform: capitalize;
// letter-spacing: var(--spacing);
// padding: 0.5rem;

// `;
// export const  unorderlink= styled.ul`
// display: flex;
// list-style: none;


// cursor: pointer;
// color: #262727;
// margin-left: 70px;
// padding: -15px;