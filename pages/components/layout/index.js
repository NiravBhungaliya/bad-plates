import { Fragment } from "react";
import { MainContent } from "./styles";
import Header from "../header";
import SubHeader from "../subheader";
import Footer from "../footer";

function BaseLayout(pageProps){
    return <Fragment>
        <Header />
        <SubHeader />
        <MainContent id="content" role="main">
            {pageProps.children}
        </MainContent>
        <Footer />
    </Fragment>;
}

export default BaseLayout;