import React, { FunctionComponent, PropsWithChildren, useContext } from "react";
import { AuthContext } from "../model/context/authContext";
import { signOutCustom } from "../utils/signService";
import {
  Box,
  Header,
  Page,
  Footer,
  Button,
  Menu,
  Anchor,
  Avatar,
  Text,
  Grommet,
  PageContent,
  Nav,
  dark,
} from "grommet";

import { LinkCustom } from "../utils/link-custom";

import * as Icons from "grommet-icons";

import avatar from "../img/sassy-sexy-girl.jpg";

export const Template: FunctionComponent<PropsWithChildren> = (props) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <Grommet theme={dark}>
      <Header
        sticky="scrollup"
        height="xsmall"
        pad="medium"
        background={{ color: "#000", opacity: "medium" }}
      >
        <Box direction="row" gap="small" align="center">
          <Avatar src={avatar} size="medium" />
          <LinkCustom size="large" label="Olga Swan" href="/" />
        </Box>
        <Nav direction="row">
          <LinkCustom label="About" href="/about" />
          <LinkCustom label="Uses" href="/uses" />
          {isAuth ? (
            <LinkCustom
              label="Sign out"
              href="/login"
              onClick={() => signOutCustom(setIsAuth)}
            />
          ) : (
            <LinkCustom label="Sign in" href="/login" />
          )}
        </Nav>
      </Header>
      <Box pad="medium">
        <Page kind="narrow">
          <PageContent>{props.children}</PageContent>
        </Page>

        <Footer pad="small">
          <Text>Copyright</Text>
          <Box direction="row" gap="small" justify="center">
            <LinkCustom
              target="_blank"
              href="https://www.instagram.com/olyasswan/"
              icon={<Icons.Instagram />}
            />
            <LinkCustom
              target="_blank"
              href="https://www.behance.net/olyasswan"
              icon={<Icons.Paint />}
            />
            <LinkCustom
              target="_blank"
              href="https://rus.bongacams.com/"
              icon={<Icons.Webcam />}
            />
          </Box>
        </Footer>
      </Box>
    </Grommet>
  );
};
