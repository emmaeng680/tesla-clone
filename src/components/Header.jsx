import React, {useState} from 'react'
import styled from "styled-components"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { selectCars } from "../features/car/carSlice"
import { useSelector } from'react-redux'

const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars  = useSelector(selectCars)


  return (
      <Container>
          <a href="#">
              <img src="/images/logo.svg" alt="logo" />
          </a>
          <Menu>
              {cars && cars.map((car, index) => ( 
                  <a key={index} href='#'>{car}</a>
                  
              ))}
                  
          </Menu>

          <RightMenu>
                  <a href="#">Shop</a>
                  <a href="#">Tesla Account</a>
                  <CustomMenu onClick={() => setBurgerStatus(true)} />
          </RightMenu>
          
          <BurgerNav show={burgerStatus}>
              <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)}/>
              </CloseWrapper>
            {cars && cars.map((car, index) => ( 
                 <li key={index}><a href='#'>{car}</a></li> 
                  
              ))}


              <li><a href="#">Existing Inventory</a></li>
              <li><a href="#">Used Inventory</a></li>
              <li><a href="#">Trade-In</a></li>
              <li><a href="#">Cybertruck</a></li>
              <li><a href="#">Roadaster</a></li>
        
          </BurgerNav>
      </Container>
  )
}

export default Header

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
z-index: 1;

`
const Menu = styled.div`
display: flex;
align-items: center;
flex: 1;
justify-content: center;
a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
@media screen and (max-width: 768px) {
    display: none;
}
`

const RightMenu = styled.div`
display: flex;
align-items: center;

a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
}
`
const CustomMenu = styled(MenuOutlinedIcon)`
cursor: pointer;
`

const BurgerNav = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
width: 300px;
background-color: white;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
text-align: start;
flex-direction: column;
transition: transform 0.2s ;
transform: ${props => props.show? 'translateX(0)' : 'translateX(100%)'};
li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a{
        font-weight: 600;
    }
}


// display: none;
// @media screen and (max-width: 768px) {
// display: block;
`

const CustomClose = styled(CloseOutlinedIcon)`
cursor: pointer;

`
const CloseWrapper = styled.div`
display: flex;
justify-content: flex-end;
`
