import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Row,
} from '@react-email/components';



const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

type ContactEmailProps={
    name:string,
    email:string,
    phoneNumber:string,
    stream:string
}
    
export const CarrerNavigatorContactEmail = ({name,email,phoneNumber,stream}:ContactEmailProps) => {
    console.log({name,email,phoneNumber,stream})
    return (
        <Html>
            <Head />
            <Preview>Institute Insider Contact Us</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={logo}>
                        <Img width={146} src={`${baseUrl}/static/stack-overflow-logo.png`} />
                    </Section>
                    <Row style={header}>
                        <Column style={headerContent}>
                            <Heading style={headerContentTitle}>
                                Institute Insider
                            </Heading>
                            <Text style={headerContentSubtitle}>
                                New Admission Apply Request
                            </Text>
                        </Column>
                        <Column style={headerImageContainer}>
                            <Img
                                width={340}
                                src={`${baseUrl}/static/stack-overflow-header.png`} />
                        </Column>
                    </Row>
                    <Section style={content}>
                        <Heading as="h2" style={title}>
                            Name
                        </Heading>
                        <Text style={paragraph}>
                            {name.toUpperCase()}
                        </Text>
                        <Hr style={divider} />
                        <Heading as="h2" style={title}>
                            Email
                        </Heading>
                        <Text style={paragraph}>
                            {email.toLowerCase()}
                        </Text>
                        <Heading as="h2" style={title}>
                            Phone Number
                        </Heading>
                        <Text style={paragraph}>
                            +91 {phoneNumber}
                        </Text>
                        <Heading as="h2" style={title}>
                            Stream
                        </Heading>
                        <Text style={paragraph}>
                            {stream.toUpperCase()}
                        </Text>
                        <Hr style={divider} />
                    </Section>
                </Container>

                <Section style={footer}>
                    <Text style={footerText}>
                        You &apos; re receiving this email because your Institute Insider activity
                        triggered this tip or reminder.
                    </Text>

                    <Link href="https://careernavigator.vercel.app/" style={footerLink}>
                        Go Home Page
                    </Link>
                    <Link href="https://careernavigator.vercel.app/contact" style={footerLink}>
                        Contact us
                    </Link>
                    <Link href="https://careernavigator.vercel.app/privacy" style={footerLink}>
                        Privacy
                    </Link>
                    <Hr style={footerDivider} />
                    <Img width={111} src={`${baseUrl}/static/stack-overflow-logo-sm.png`} />
                    <Text style={footerAddress}>
                        <strong>Institute Insider</strong>, Choudwar, Cuttack, Odisha
                    </Text>
                </Section>
            </Body>
        </Html>
    );
};

export default CarrerNavigatorContactEmail;

const main = {
    backgroundColor: '#f3f3f5',
    fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
};

const headerContent = { padding: '20px 30px 15px' };

const headerContentTitle = {
    color: '#fff',
    fontSize: '27px',
    fontWeight: 'bold',
    lineHeight: '27px',
};

const headerContentSubtitle = {
    color: '#fff',
    fontSize: '17px',
};

const headerImageContainer = {
    padding: '30px 10px',
};

const title = {
    margin: '0 0 15px',
    fontWeight: 'bold',
    fontSize: '21px',
    lineHeight: '21px',
    color: '#0c0d0e',
};

const paragraph = {
    fontSize: '15px',
    lineHeight: '21px',
    color: '#3c3f44',
};

const divider = {
    margin: '30px 0',
};

const container = {
    maxWidth: '680px',
    width: '100%',
    margin: '0 auto',
    backgroundColor: '#ffffff',
};

const footer = {
    width: '680px',
    margin: '32px auto 0 auto',
    padding: '0 30px',
};

const content = {
    padding: '30px 30px 40px 30px',
};

const logo = {
    display: 'flex',
    background: '#f3f3f5',
    padding: '20px 30px',
};

const header = {
    borderRadius: '5px 5px 0 0',
    display: 'flex',
    flexDireciont: 'column',
    backgroundColor: '#2b2d6e',
};

const buttonContainer = {
    marginTop: '24px',
    display: 'block',
};

const button = {
    backgroundColor: '#0095ff',
    border: '1px solid #0077cc',
    fontSize: '17px',
    lineHeight: '17px',
    padding: '13px 17px',
    borderRadius: '4px',
    maxWidth: '120px',
    color: '#fff',
};

const footerDivider = {
    ...divider,
    borderColor: '#d6d8db',
};

const footerText = {
    fontSize: '12px',
    lineHeight: '15px',
    color: '#9199a1',
    margin: '0',
};

const footerLink = {
    display: 'inline-block',
    color: '#9199a1',
    textDecoration: 'underline',
    fontSize: '12px',
    marginRight: '10px',
    marginBottom: '0',
    marginTop: '8px',
};

const footerAddress = {
    margin: '4px 0',
    fontSize: '12px',
    lineHeight: '15px',
    color: '#9199a1',
};

const footerHeart = {
    borderRadius: '1px',
    border: '1px solid #d6d9dc',
    padding: '4px 6px 3px 6px',
    fontSize: '11px',
    lineHeight: '11px',
    fontFamily: 'Consolas,monospace',
    color: '#e06c77',
    maxWidth: 'min-content',
    margin: '0 0 32px 0',
};
