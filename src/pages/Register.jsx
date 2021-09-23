import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
`
const Wrapper = styled.div``
const Form = styled.form``
const Title = styled.h1``
const Input = styled.input``
const Agreement = styled.span``
const Button = styled.button``




const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE ACCOUNT</Title>
                <Form>
                    <Input placeholder='Name' />
                    <Input placeholder='Last Name' />
                    <Input placeholder='Username' />
                    <Input placeholder='Email' />
                    <Input placeholder='Password' />
                    <Input placeholder='Confirm Password' />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
