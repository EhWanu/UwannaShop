import styled from "styled-components"
import Navbar from "../Components/Navbar"
import Announcement from "../Components/Announcement"


const Container = styled.div``
const Title = styled.h1``
const FilterContainer = styled.div``
const Filter = styled.div`` 
 
const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>filter1</Filter>
                <Filter>filter2</Filter>
            </FilterContainer>
        </Container>
    )
}

export default ProductList
