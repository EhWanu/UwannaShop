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
    padding: 0px 50px;
 `

 const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
 `
 const InfoContainer = styled.span`
 flex: 1;
 
`

 const Title = styled.h1`
    font-weight: 200;
 `

 const Description = styled.p`
    margin: 20px 0px;
 `

 const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
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
