import { Button } from '../components/Button/text';
import { MainContainer } from '../components/Container/Main';
import { Header } from '../components/Header';
import { BigTitle } from '../components/Typography/BigTitle';
import { SubTitle } from '../components/Typography/SubTitle';

export default function NotFound() {
    return (
        <div className="flex flex-col align-center">
            <Header />
            <MainContainer>
                <BigTitle>Sorry, this page does not exists!</BigTitle>
                <SubTitle>
                    <Button
                        to="/"
                        className="bg-textBody rounded-lg"
                    >
                        Go back home
                    </Button>
                </SubTitle>
                <br />
            </MainContainer>
        </div>
    );
}
