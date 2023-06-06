import { StaticImage } from 'gatsby-plugin-image';
import { Sparkles } from 'gthibaud-icons-react';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { Header } from '../components/Header';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FFFFFF';

const Subscribe = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Thank you!</BigTitle>
                <SubTitle>
                    <span>
                        You have been successfully added to the waiting list
                        <Sparkles className="fill-paletteGreen" />
                    </span>
                </SubTitle>
                <div>
                    <Columns columnsNumber={2}>
                        <div className="flex flex-col flex-1 gap-4">
                            <Body>
                                You will be notified as soon by our team to access Airtable Time
                                Machine.
                                <br />
                                See you soon!
                            </Body>
                        </div>
                        <div className="flex-1">
                            <TiltingContainer>
                                <StaticImage
                                    src="../../static/images/relax.png"
                                    alt="Zen image"
                                    width={460}
                                    placeholder="none"
                                    backgroundColor={BACKGROUND_DEFAULT}
                                />
                            </TiltingContainer>
                        </div>
                    </Columns>
                </div>
            </MainContainer>
        </div>
    );
};

export default Subscribe;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="en" />
        <title>Airtable Time Machine – See you soon</title>
        <meta
            name="description"
            content="Airtable time Machine backup your Airtable workspaces automatically to secure things that matter."
        />
        <meta charSet="utf-8" />
    </>
);
