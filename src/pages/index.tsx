import { StaticImage } from 'gatsby-plugin-image';
import { ChevronRight, LockDesktop, LockShield, Megaphone, Sparkles } from 'gthibaud-icons-react';
import { Toaster } from 'react-hot-toast';
import { ButtonUnstyled } from '../components/Button/unstyled';
import { Columns } from '../components/Container/Columns';
import { MainContainer } from '../components/Container/Main';
import { TiltingContainer } from '../components/Container/Titling';
import { EmailForm } from '../components/EmailForm';
import { FAQ } from '../components/FAQ';
import { Feature } from '../components/Feature';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Plan } from '../components/Plan';
import { Problem } from '../components/Problem';
import { CardSection } from '../components/Section/CardSection';
import { PlanSection } from '../components/Section/PlanSection';
import { BigTitle } from '../components/Typography/BigTitle';
import { Body } from '../components/Typography/Body';
import { SectionTitle } from '../components/Typography/SectionTitle';
import { SubTitle } from '../components/Typography/SubTitle';

const BACKGROUND_DEFAULT = '#FFFFFF';

const Main = () => {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Making your Airtable data safe</BigTitle>
                <SubTitle>
                    <span>
                        We backup your Airtable workspaces
                        <br />
                        to secure things that matter
                        <Sparkles className="fill-palettePurple" />
                    </span>
                </SubTitle>
                <div className="flex justify-center px-4 mt-8">
                    <TiltingContainer>
                        <StaticImage
                            className="max-w-screen-lg"
                            src="../../static/images/desktop.png"
                            alt="Desktop Airtable interface."
                        />
                    </TiltingContainer>
                </div>
                <SectionTitle>
                    <span>
                        Secure things that matter
                        <LockShield className="fill-paletteRed" />
                    </span>
                </SectionTitle>
                <SubTitle>
                    Would you be able to keep your business running if you lost access to Airtable
                    tomorrow morning?
                </SubTitle>
                <CardSection>
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/bulb.jpg"
                                alt="Bulb image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Crucial data"
                        description="Your most important data are stored in Airtable: customers, activity, strategy, etc."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/coffee.jpg"
                                alt="Coffee image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Critical risk"
                        description="Mistakes can happen: deleting an access, forgetting to renew a license: 0 risk don’t exists."
                    />
                    <Problem
                        image={
                            <StaticImage
                                src="../../static/images/error.jpg"
                                alt="Error image"
                                height={100}
                                placeholder="none"
                                backgroundColor={BACKGROUND_DEFAULT}
                            />
                        }
                        title="Don’t depend on Airtable"
                        description="Don't let your business, your studies or your life depend on Airtable, mitigate the risk."
                    />
                </CardSection>
                <SectionTitle>
                    <span>
                        We backup every piece of data in a secure vault
                        <LockDesktop className="fill-paletteBlue" />
                    </span>
                </SectionTitle>
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/clock.jpg"
                            alt="Clock image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Automated backups, simple as that"
                    description={
                        <>
                            Connect your workspaces to Airtable Time Machine and that's it! We'll
                            take care of backing up all your data at regular intervals, and alert
                            you if an error occurs.
                        </>
                    }
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/files.jpg"
                            alt="Files image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="High-level safety and resilience "
                    description="Airtable Time Machine encrypts all backups and exchanges between Airtable APIs and our system. We offer AES-256 encryption for all backups, making it impossible for us to decrypt them, even by us."
                    inversedDirection
                />
                <Feature
                    image={
                        <StaticImage
                            src="../../static/images/computer.jpg"
                            alt="Computer image"
                            height={120}
                            placeholder="none"
                            backgroundColor={BACKGROUND_DEFAULT}
                            layout="fixed"
                        />
                    }
                    title="Manage backups, restore data anytime"
                    description="Thanks to the administration portal, you can define your backup and data retention strategies. In the blink of an eye, you can view your backups, go back in time and restore older versions."
                />
                <SectionTitle>Our plans</SectionTitle>
                <SubTitle>
                    No commitments or hidden costs,
                    <br /> we have plans for everyone!
                </SubTitle>
                <br />
                <PlanSection>
                    <Plan
                        to="/#download"
                        title="Monthly backup"
                        image={
                            <StaticImage
                                src="../../static/images/monthly.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Ideal for individuals, students, or families that want to stay zen"
                        price="from 5$ / month"
                    />
                    <Plan
                        to="/#download"
                        title="Weekly backup"
                        image={
                            <StaticImage
                                src="../../static/images/weekly.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Ideal for startups who take care of their data on a limited budget"
                        price="from 8$ / month"
                    />
                    <Plan
                        to="/#download"
                        title="Daily backup"
                        image={
                            <StaticImage
                                src="../../static/images/daily.png"
                                alt="Backup image"
                                height={140}
                                placeholder="none"
                            />
                        }
                        description="Ideal for SME that must guarantee high levels of service"
                        price="from 20$ / month"
                    />
                </PlanSection>
                <ButtonUnstyled
                    to="/#download"
                    ariaLabel="Student program"
                    className="flex justify-center"
                >
                    <span className="text-paletteBlue fill-paletteBlue">
                        Are you a student? Register with your university email address to get free
                        access to monthly plan
                        <ChevronRight />
                    </span>
                </ButtonUnstyled>
                <SectionTitle>
                    <span id="download">
                        Join Airtable Time Machine beta!
                        <Sparkles className="fill-palettePurple" />
                    </span>
                </SectionTitle>
                <div>
                    <Columns columnsNumber={2}>
                        <div className="flex flex-col flex-1 gap-4">
                            <Body>
                                Be the first to benefit from access to Airtable Time Machine by
                                joining the waiting list.
                            </Body>
                            <EmailForm />
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
                <SectionTitle>
                    <span>
                        FAQ
                        <Megaphone className="fill-paletteBlue" />
                    </span>
                </SectionTitle>
                <FAQ
                    question="Can I save the backups on my own storage?"
                    answer="Backup to your own storage will be available in autumn 2023. We plan to make it possible to export data to Google Drive. In the meantime, you should know that Airtable Time Machine hosts your data in a fully encrypted (AES 256) manner, making all your data unreadable, even by us."
                />
                <FAQ
                    question="Where are backups hosted?"
                    answer="Backups are hosted at AWS on S3 spaces, fully encrypted using the AES 256 algorithm."
                />
                <FAQ
                    question="Is there any limit on the number of backups?"
                    answer="No, Airtable Time Machine does not limit the number of backups. You can keep as many backups as you want, for as long as you want. We will soon offer the possibility to define a retention policy to automatically delete backups after a certain period of time."
                />
                <FAQ
                    question="Who's behind the project?"
                    answer={
                        <>
                            Airtable Time Machine is developed by Creastel Labs, a project led by
                            Grégoire Thibaud and Jean Haberer. Don't hesitate to{' '}
                            <u>
                                <a href="mailto:gregoire@creastel.com">contact</a>
                            </u>{' '}
                            us.
                        </>
                    }
                />
            </MainContainer>
            <Footer />
            <Toaster position="bottom-right" />
        </div>
    );
};

export default Main;

// Head is automatically injected in the page by Gatsby
export const Head = () => (
    <>
        <html lang="en" />
        <title>Airtable Time Machine – Making your Airtable data safe</title>
        <meta
            name="description"
            content="Airtable time Machine backup your Airtable workspaces automatically to secure things that matter."
        />
        <meta charSet="utf-8" />
    </>
);
