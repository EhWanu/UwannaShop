import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container =  styled.div`
    display: flex;
`
const Left =  styled.div`
    flex: 1;   
    display: flex;
    flex-direction: column;
    padding: 20px; 
`
const Logo = styled.h1``

const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right : 20px;
    
`

const Center =  styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
`
    
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right =  styled.div`
    flex: 1;
    padding: 20px;

`
    

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>UWANNA.</Logo>
                <Description>
                    There are many variations of lorem ipsum available,
                    but the majority have suffered alteration in some form,
                    by injected humour, or randomized words which don't even contain
                    look remotely believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color ="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color ="E44054">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color ="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color ="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room /> 123 Fake Street
                </ContactItem>
                <ContactItem>
                    <Phone /> +1 555 555 5555
                </ContactItem>
                <ContactItem>
                   <MailOutline /> contact@uwanna.null
                </ContactItem>
                <Payment src='https://i.bb.co/Qfvn4z6/payment.png' />
            </Right>
        </Container>
    )
}

export default Footer
