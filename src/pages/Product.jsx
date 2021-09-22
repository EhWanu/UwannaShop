import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"

 const Container = styled.div``
 const Wrapper = styled.div`
    padding: 50px;
    display: flex;
 `
 const ImageContainer = styled.div`
    flex: 1;
 `

 const Image = styled.img`
    width: 100%;
 `
 const Title = styled.div``
 const Description = styled.h1``
 const Price = styled.p``

 const InfoContainer = styled.span`
    flex: 1;
    
 `

const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error a laudantium minus. Repellat consectetur natus commodi quae aspernatur quam enim illo aperiam eaque mollitia. Quod sapiente exercitationem totam animi dolores!</Description>
                    <Price>$ 20</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
