import React from 'react'
import styled from "styled-components"
import Section from './Section'

const data = [
    {
        "id": 0,
        "title": "Model S",
        "description": "Order Online for Touchless Delivery",
        "image": "model-s.jpg",
        "range": "390",
        "time": "1.99",
        "topSpeed": "200",
        "peakPower": "1,020"
    },
    {
        "id": 1,
        "title": "Model 3",
        "description": "Order Online for Touchless Delivery",
        "image": "model-3.jpg",
        "range": "400",
        "time": "2.99",
        "topSpeed": "180",
        "peakPower": "900"
    },
    {
        "id": 2,
        "title": "Model X",
        "description": "Order Online for Touchless Delivery",
        "image": "model-x.jpg",
        "range": "350",
        "time": "1.55",
        "topSpeed": "150",
        "peakPower": "1,130"
    },
    {
        "id": 3,
        "title": "Model Y",
        "description": "Order Online for Touchless Delivery",
        "image": "model-y.jpg",
        "range": "410",
        "time": "2.05",
        "topSpeed": "190",
        "peakPower": "1,040"
    }
]

const Home = () => {
  return (
      <Container>
          <Section
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
          title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"/>
          <Section
          title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
          />
          <Section
          title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
              rightBtnText="Existing Inventory"
          />

          <Section
          title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order now"
              rightBtnText="Learn more"
          />

          <Section
          title="Solar For New Roofs"
            description="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order now"
              rightBtnText="Learn more"
          />

          <Section
          title="Accessories"
            description=""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop now"
              rightBtnText=""
          />
         
          

      </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;
`