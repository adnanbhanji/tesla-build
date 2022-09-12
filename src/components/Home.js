import React from 'react'
import styled from 'styled-components'
import Section from "./Section"

const Home = () => {
  return (
    <Container>
        <Section 
        title="Model S" 
        description="Order Online for Touchless Delivery"
        image = "model-s.jpg"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        />
        <Section 
        title="Model Y" 
        description="Order Online for Touchless Delivery"
        image = "model-y.jpg"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        />
        <Section 
        title="Model 3" 
        description="Order Online for Touchless Delivery"
        image = "model-3.jpg"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        />
        <Section 
        title="Model X" 
        description="Order Online for Touchless Delivery"
        image = "model-x.jpg"
        leftBtn = "Custom Order"
        rightBtn = "Existing Inventory"
        />
        <Section 
        title="Lowest Cost Solar Panels in America" 
        description="Money-back guarantee"
        image = "solar-panel.jpg"
        leftBtn = "Order now"
        rightBtn = "Learn More"
        />
        <Section 
        title="Solar for New Roofs" 
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        image = "solar-roof.jpg"
        leftBtn = "Order now"
        rightBtn = "Learn More"
        />
        <Section 
        title="Accessories" 
        description=""
        image = "accessories.jpg"
        leftBtn = "Shop now"
        rightBtn = ""
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`